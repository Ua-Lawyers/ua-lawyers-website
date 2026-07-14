import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/data/services";
import { people } from "@/data/people";
import { posts } from "@/data/posts";
import { stats } from "@/data/site";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <div className="bg-section">
        {/* Expert Legal Services + stat counters */}
        <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div className="rounded-md bg-white p-8 sm:p-12">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Expert Legal Services
              </h2>
              <span className="mt-5 block h-0.5 w-12 bg-brand" />
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">
                We offer a full spectrum of legal services across multiple practice areas in
                Australia. Our team of highly skilled professionals provides strategic,
                efficient, and tailored legal solutions to businesses, individuals, and
                families.
              </p>

              <ul className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="group flex items-center gap-3 text-sm text-ink transition-colors hover:text-brand"
                    >
                      <ServiceIcon slug={s.slug} className="h-6 w-6 shrink-0 text-brand" />
                      <span className="leading-snug">{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/our-services"
                className="mt-10 inline-block rounded-sm border border-brand px-7 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Learn more
              </Link>
            </div>

            <dl className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:content-center lg:gap-0">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center ${
                    i > 0 ? "lg:mt-10 lg:border-t lg:border-brand/30 lg:pt-10" : ""
                  }`}
                >
                  <dd className="text-5xl font-semibold tracking-tight text-brand">
                    {s.value}
                  </dd>
                  <dt className="mt-3 text-sm font-semibold text-ink">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Latest insights */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="group relative flex aspect-4/3 flex-col justify-end overflow-hidden rounded-md bg-ink p-6"
                >
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="relative">
                    <p className="text-xs text-white/80">{formatDate(p.date)}</p>
                    <h3 className="mt-2 text-xl font-medium leading-snug text-white">
                      {p.heading}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Team */}
        <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
          <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-12">
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Meet Our Experienced Legal Team
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                Meet the people who are focused on helping you achieve your goal.
              </p>
              <Link
                href="/our-people"
                className="mt-7 inline-block rounded-sm bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Meet our lawyers
              </Link>
            </div>

            {/* Swipeable on phones, a full row on wide screens. */}
            <ul className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 lg:mx-0 lg:px-0">
              {people.map((person) => (
                <li
                  key={person.slug}
                  className="flex w-40 shrink-0 snap-start sm:w-48 lg:w-auto lg:flex-1"
                >
                  <Link
                    href={`/portfolio-item/${person.slug}`}
                    className="group flex w-full flex-col"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-t-md bg-white">
                      <Image
                        src={person.photo}
                        alt={person.name}
                        fill
                        sizes="(min-width: 1024px) 15vw, 45vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center rounded-b-md bg-white px-3 py-3 text-center">
                      <p className="text-sm font-semibold transition-colors group-hover:text-brand">
                        {person.name}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-muted">{person.role}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Get in Touch with Us
              </h2>
              <span className="mt-5 block h-0.5 w-12 bg-brand" />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">
                UA Lawyers is committed to providing expert legal support. Whether you need
                advice or have questions about our services, contact us today to see how we
                can assist you.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-block rounded-sm border border-brand px-7 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Contact us
              </Link>
            </div>

            <figure className="rounded-md bg-brand p-9 sm:p-12">
              <blockquote className="text-lg italic leading-relaxed text-white sm:text-xl">
                &ldquo;We are dedicated to delivering expert legal guidance with unwavering
                commitment, ensuring our clients feel supported, empowered, and confident in
                every step forward.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/85">
                &mdash; UA Lawyers Team
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
