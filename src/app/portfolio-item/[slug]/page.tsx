import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { people, personBySlug, practiceAreasFor } from "@/data/people";
import { services } from "@/data/services";
import { site } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = personBySlug(slug);
  if (!person) return {};
  return { title: person.title, description: person.metaDesc };
}

export default async function PersonPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const person = personBySlug(slug);
  if (!person) notFound();

  const areas = practiceAreasFor(person.slug);
  const phone = person.phone ?? site.phone;
  const email = person.email ?? site.email;
  const hasExperience = person.qualifications.length > 0 || person.education.length > 0;

  return (
    <>
      <PageHero
        title={person.name}
        crumbs={[{ label: "Our People", href: "/our-people" }, { label: person.name }]}
        image="/images/heroes/person.png"
        tone="light"
      >
        <p className="mt-3 text-lg text-ink-muted">{person.role}</p>
        <dl className="mt-8 space-y-2 text-sm">
          <div className="flex items-center gap-3">
            <dt className="sr-only">Phone</dt>
            <dd>
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="text-ink-muted hover:text-brand"
              >
                {phone}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="sr-only">Email</dt>
            <dd>
              <a
                href={`mailto:${email}`}
                className="break-all text-ink-muted hover:text-brand"
              >
                {email}
              </a>
            </dd>
          </div>
        </dl>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_16rem] lg:gap-16">
          {/* Body */}
          <div>
            {person.about.length > 0 ? (
              <>
                <h2 className="text-2xl font-semibold">About</h2>
                <span className="mt-4 block h-0.5 w-12 bg-brand" />
                <div className="mt-8 space-y-5">
                  {person.about.map((para) => (
                    <p key={para.slice(0, 40)} className="leading-relaxed text-ink-muted">
                      {para}
                    </p>
                  ))}
                </div>
              </>
            ) : (
              /*
                `needs-content` people have no verified About copy yet — the WordPress source
                still holds a former staff member's bio for these slugs. Show what they cover
                and a way to reach them rather than inventing a biography. Fill in
                about/qualifications/education in people.ts and the real sections appear.
              */
              <div className="rounded-md bg-section p-8">
                <h2 className="text-xl font-semibold">
                  Work with {person.name.split(" ")[0]}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {person.name} advises clients of {site.shortName}
                  {areas.length > 0 ? ` on ${areas.join(", ").toLowerCase()} matters` : ""}.
                  To arrange a consultation, get in touch with our Melbourne office.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-block rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Contact Us
                </Link>
              </div>
            )}

            {hasExperience && (
              <div className="mt-16">
                <h2 className="text-2xl font-semibold">Professional Experience</h2>
                <span className="mt-4 block h-0.5 w-12 bg-brand" />

                {person.qualifications.length > 0 && (
                  <div className="mt-8 border-t border-hairline pt-6">
                    <h3 className="text-lg font-medium">Qualifications</h3>
                    <ul className="mt-4 space-y-2.5">
                      {person.qualifications.map((q) => (
                        <li key={q} className="flex gap-3 text-ink-muted">
                          <span aria-hidden="true" className="text-brand">
                            •
                          </span>
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {person.education.length > 0 && (
                  <div className="mt-6 border-t border-hairline pt-6">
                    <h3 className="text-lg font-medium">Education</h3>
                    <ul className="mt-4 space-y-2.5">
                      {person.education.map((e) => (
                        <li key={e} className="flex gap-3 text-ink-muted">
                          <span aria-hidden="true" className="text-brand">
                            •
                          </span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:order-last">
            <div className="relative aspect-square overflow-hidden rounded-md bg-section">
              <Image
                src={person.photo}
                alt={person.name}
                fill
                priority
                sizes="(min-width: 1024px) 16rem, 100vw"
                className="object-cover object-top"
              />
            </div>

            {areas.length > 0 && (
              <div className="mt-8 border-t border-hairline pt-6">
                <h2 className="text-lg font-medium">Expertise</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {areas.map((area) => {
                    const target = services.find((s) => s.name === area);
                    return (
                      <li key={area}>
                        <Link
                          href={`/${target?.slug ?? ""}`}
                          className="inline-block rounded-sm bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
                        >
                          {area}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
