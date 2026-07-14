import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PeopleGrid from "@/components/PeopleGrid";
import { people, practiceAreaFilters, practiceAreasFor } from "@/data/people";

export const metadata: Metadata = {
  title:
    "Meet Our Legal Team – Experienced Barristers & Solicitors at United Associates",
  description:
    "Learn more about the experienced barristers and solicitors at United Associates. Our team is dedicated to providing expert legal services across various practice areas.",
};

export default function OurPeoplePage() {
  const entries = people.map((p) => ({
    slug: p.slug,
    name: p.name,
    role: p.role,
    photo: p.photo,
    areas: practiceAreasFor(p.slug),
  }));

  return (
    <>
      <PageHero
        title="Our People"
        subtitle="Your Trusted Legal Partners"
        crumbs={[{ label: "Our People" }]}
        image="/images/brand/hero-red-stairs.jpg"
      />

      <section className="bg-section py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Trusted. Tenacious.
              <br />
              On Your Side.
            </h2>
            <span className="mt-5 block h-0.5 w-12 bg-brand" />
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              UA Lawyers consists of four partners, eight practicing lawyers, and several
              legal assistants, all alumni of top Australian universities. With diverse
              industry backgrounds, our team provides multidisciplinary legal solutions and
              excels in complex transactions and landmark cases.
            </p>
          </div>

          <div className="mt-12">
            <PeopleGrid entries={entries} filters={practiceAreaFilters()} />
          </div>
        </div>
      </section>
    </>
  );
}
