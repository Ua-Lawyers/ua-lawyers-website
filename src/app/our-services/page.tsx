import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title:
    "Legal Services at United Associates at United Associates Barristers & Solicitors",
  description:
    "Explore the range of expert legal services provided by United Associates, including commercial litigation, family law, and migration law. Learn more about our experienced team of barristers and solicitors.",
};

export default function OurServicesPage() {
  return (
    <>
      <PageHero
        title="Expert Legal Services"
        subtitle="Tailored Legal Solutions, Proven Results."
        crumbs={[{ label: "Our Services" }]}
        image="/images/heroes/services.jpg"
        className="pb-24 sm:pb-32"
      />

      {/* The cards ride up over the bottom of the hero, as they do on the live site. */}
      <section className="bg-section pb-20 sm:pb-24">
        <div className="relative z-10 mx-auto -mt-20 max-w-6xl px-6 sm:-mt-28">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="flex">
                <div className="flex w-full flex-col rounded-md bg-white p-8 text-center">
                  <h2 className="text-xl font-semibold">
                    <Link
                      href={`/${s.slug}`}
                      className="transition-colors hover:text-brand"
                    >
                      {s.name}
                    </Link>
                  </h2>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-muted">
                    {s.summary}
                  </p>
                  <Link
                    href={`/${s.slug}`}
                    className="mx-auto mt-7 inline-block rounded-sm border border-brand px-6 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    Learn more
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
