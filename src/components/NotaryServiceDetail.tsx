import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { type Service } from "@/data/services";
import { personBySlug } from "@/data/people";

/**
 * Bespoke layout for the Notary Public service: the responsible lawyer's photo on the
 * left, with a short bio and the notary scope of work on the right. Other service pages
 * keep using the shared ServiceDetail component.
 */
export default function NotaryServiceDetail({ service }: { service: Service }) {
  const person = service.contacts.map(personBySlug).find((p) => p !== undefined);
  const shortBio = person?.about[0] ?? person?.summary;

  return (
    <>
      <PageHero
        title={service.name}
        crumbs={[{ label: service.name }]}
        image={`/images/services/${service.slug}.jpg`}
        align="center"
      />

      <div className="bg-section">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[20rem_1fr] lg:gap-16">
            {/* Left: lawyer photo */}
            {person && (
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Link
                  href={`/portfolio-item/${person.slug}`}
                  className="group block overflow-hidden rounded-md bg-white shadow-sm"
                >
                  <div className="relative aspect-square bg-section">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      priority
                      sizes="(min-width: 1024px) 20rem, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-4 py-4 text-center">
                    <h2 className="font-semibold transition-colors group-hover:text-brand">
                      {person.name}
                    </h2>
                    <p className="mt-1 text-sm text-ink-muted">{person.role}</p>
                  </div>
                </Link>
              </div>
            )}

            {/* Right: short bio + notary scope of work */}
            <div>
              {person && shortBio && (
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    About {person.name.split(" ")[0]}
                  </h2>
                  <span className="mt-4 block h-0.5 w-12 bg-brand" />
                  <p className="mt-6 leading-relaxed text-ink-muted">{shortBio}</p>
                  <Link
                    href={`/portfolio-item/${person.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-brand"
                  >
                    View full profile →
                  </Link>
                </div>
              )}

              <div className={person && shortBio ? "mt-12" : ""}>
                <h2 className="text-2xl font-semibold tracking-tight">Scope of Work</h2>
                <span className="mt-4 block h-0.5 w-12 bg-brand" />
                <p className="mt-6 leading-relaxed text-ink-muted">{service.overview}</p>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {service.subServices.map((sub) => (
                    <li
                      key={sub}
                      className="rounded-md border border-hairline bg-white px-5 py-4 text-sm font-semibold"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact-us"
                  className="mt-10 inline-block rounded-sm bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
