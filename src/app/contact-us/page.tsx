import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact United Associates Barristers & Solicitors – Get in Touch",
  description:
    "Contact United Associates Barristers & Solicitors today for expert legal assistance. Get in touch via phone, email, or our easy-to-use contact form.",
};

const iconCls = "mx-auto h-8 w-8 text-brand";

export default function ContactPage() {
  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Connect with our team"
        crumbs={[{ label: "Contact Us" }]}
        image="/images/brand/hero-wavy-red.jpg"
        aside="From our office in the Melbourne CBD, we support our clients wherever they need us."
      />

      <div className="bg-section">
        {/* Location */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
            Location
          </h2>
          <span className="mt-4 block h-0.5 w-12 bg-brand" />

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <ul className="grid gap-10 sm:grid-cols-2">
              <li className="text-center">
                <svg
                  className={iconCls}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
                </svg>
                <a href={tel} className="mt-4 block text-sm hover:text-brand">
                  {site.phone}
                </a>
              </li>

              <li className="text-center">
                <svg
                  className={iconCls}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 6.5 8.5 6 8.5-6" />
                </svg>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block break-all text-sm hover:text-brand"
                >
                  {site.email}
                </a>
              </li>

              <li className="text-center sm:col-span-2">
                <svg
                  className={iconCls}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <address className="mt-4 text-sm not-italic leading-relaxed text-ink">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  Australia
                </address>
              </li>
            </ul>

            <div className="relative aspect-4/3 overflow-hidden rounded-md">
              <Image
                src="/images/brand/office.jpg"
                alt="The UA Lawyers office in the Melbourne CBD"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-md border border-hairline">
            <iframe
              title="Map showing the UA Lawyers office at Level 12, 350 Collins Street, Melbourne"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full border-0"
            />
          </div>
        </section>

        {/* Enquiry form */}
        <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
          <div className="border-t border-hairline pt-16 sm:pt-20">
            <h2 className="text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
              General Enquiries
            </h2>
            <span className="mt-4 block h-0.5 w-12 bg-brand" />
            <div className="mt-10 max-w-3xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
