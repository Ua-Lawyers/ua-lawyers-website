import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { type Service } from "@/data/services";
import { personBySlug } from "@/data/people";
import { postBySlug } from "@/data/posts";

export default function ServiceDetail({ service }: { service: Service }) {
  const featured = service.featuredPost ? postBySlug(service.featuredPost) : undefined;
  const contacts = service.contacts.map(personBySlug).filter((p) => p !== undefined);

  return (
    <>
      <PageHero
        title={service.name}
        crumbs={[{ label: service.name }]}
        image={`/images/services/${service.slug}.jpg`}
        align="center"
      />

      <div className="bg-section">
        <div className="mx-auto max-w-6xl px-6">
          {/* Overview */}
          <section className="py-16 sm:py-20">
            <div className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-12">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="leading-relaxed text-ink-muted">{service.overview}</p>
            </div>
          </section>

          {/* The sub-service tiles the live site labels "Related Services". */}
          <section className="border-t border-hairline py-16 sm:py-20">
            <h2 className="text-xl font-semibold">Related Services</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.subServices.map((sub) => (
                <li
                  key={sub}
                  className="flex items-center justify-center rounded-md bg-brand px-6 py-6 text-center text-sm font-semibold text-white"
                >
                  {sub}
                </li>
              ))}
            </ul>
          </section>

          {/* Contacts */}
          {contacts.length > 0 && (
            <section className="border-t border-hairline py-16 sm:py-20">
              <h2 className="text-xl font-semibold">Contacts</h2>
              <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {contacts.map((person) => (
                  <li key={person.slug} className="flex">
                    <Link
                      href={`/portfolio-item/${person.slug}`}
                      className="group flex w-full flex-col"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-t-md bg-white">
                        <Image
                          src={person.photo}
                          alt={person.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, 50vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-center rounded-b-md bg-white px-3 py-3.5 text-center">
                        <h3 className="text-sm font-semibold transition-colors group-hover:text-brand">
                          {person.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-ink-muted">{person.role}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Featured insight */}
          {featured && (
            <section className="border-t border-hairline pb-20 pt-16 sm:pb-24 sm:pt-20">
              <h2 className="text-xl font-semibold">Featured Insights</h2>
              <Link
                href={`/${featured.slug}`}
                className="group mt-8 grid gap-6 overflow-hidden rounded-md bg-white sm:grid-cols-[minmax(0,16rem)_1fr]"
              >
                <div className="relative aspect-4/3 sm:aspect-auto sm:h-full">
                  <Image
                    src={featured.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 16rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:py-8 sm:pr-8 sm:pl-0">
                  <p className="text-xs text-ink-muted">{featured.categories.join(", ")}</p>
                  <h3 className="mt-2 text-xl font-medium transition-colors group-hover:text-brand">
                    {featured.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {featured.metaDesc}
                  </p>
                  <span className="mt-5 inline-block text-sm font-semibold text-brand">
                    Read more →
                  </span>
                </div>
              </Link>
            </section>
          )}

          {!featured && <div className="pb-20 sm:pb-24" />}
        </div>
      </div>
    </>
  );
}
