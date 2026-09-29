import type { PersonSlug } from "./people";

export type Service = {
  slug: string;
  name: string;
  /** SEO <title> — carried over from the WordPress site. */
  title: string;
  /** SEO meta description — carried over from the WordPress site. */
  metaDesc: string;
  /** Short blurb used on the home page and /our-services grid. */
  summary: string;
  /** Long-form copy for the "Overview" block on the detail page. */
  overview: string;
  /** The red sub-service tiles. */
  subServices: string[];
  /** Lawyers listed under "Contacts" on the detail page. */
  contacts: PersonSlug[];
  /** Slug of the post shown under "Featured Insights", if any. */
  featuredPost?: string;
};

export const services: Service[] = [
  {
    slug: "commercial-litigation",
    name: "Commercial Litigation",
    title:
      "Commercial Litigation Lawyers - Business Dispute Resolution in Melbourne",
    metaDesc:
      "Our expert commercial litigation lawyers provide strategic solutions for business disputes, including contract breaches, partnership disagreements, and debt recovery. Contact us for tailored legal advice.",
    summary:
      "Commercial litigation is a core practice at UA Lawyers. Business disputes—arising from contracts, transactions, or competition—can lead to costly litigation. With the right legal strategy, many can be resolved efficiently, saving time and resources.",
    overview:
      "Commercial litigation is one of UA Lawyers' core practice areas. Business disputes are not confined to conflicts between merchants and customers; they can also arise between suppliers, partners, or competitors. In a constantly evolving commercial environment, disagreements over contract performance, transaction execution, or market competition can quickly escalate into legal disputes. If not handled properly, these conflicts may intensify, leading to prolonged, costly, and unpredictable court proceedings.",
    subServices: [
      "Commercial Disputes",
      "Interest Disputes",
      "Debt Recovery and Claims",
      "Construction Disputes",
      "Contract/Lease Disputes",
      "Cross-border Execution",
      "Property Disputes",
      "Franchise Disputes",
    ],
    contacts: ["james-xi", "jingjing-luan"],
  },
  {
    slug: "criminal-defence",
    name: "Criminal Defence",
    title:
      "Criminal Defence Lawyers – Expert Legal Representation for Criminal Charges",
    metaDesc:
      "Our criminal defence lawyers provide expert legal representation for individuals facing criminal charges. Get a strong defence strategy tailored to your case to ensure the best possible outcome.",
    summary:
      "UA Lawyers specializes in Australian criminal law, offering expert legal support and advice for individuals and businesses. We focus on vulnerable groups, ensuring fair treatment and effective defense strategies in criminal cases.",
    overview:
      "Criminal cases directly impact an individual’s freedom and future, necessitating experienced legal representation for a robust defence. UA Lawyers offers comprehensive criminal defence services, including bail applications, not-guilty pleas, sentence negotiations, and appeals. Our expertise covers areas such as domestic violence charges, property offences, drug offences, fraud, traffic offences, and serious criminal matters. We are dedicated to safeguarding our clients' legal rights in every criminal case, ensuring they receive fair and just treatment throughout the legal process.",
    subServices: [
      "Bail Applications",
      "Appeals",
      "Not-guilty Pleas",
      "Defence",
      "Sentence Negotiations",
    ],
    contacts: ["shen-li"],
    featuredPost: "gun-control-in-australia",
  },
  {
    slug: "notary-public",
    name: "Notary Public",
    title:
      "Notary Public Services – Document Certification & Legal Authentication",
    metaDesc:
      "Our notary public services include certifying documents, witnessing signatures, and providing legal authentication. Get reliable and professional notarization for your legal and business needs.",
    summary:
      "UA Lawyers provides efficient international notary and apostille services, ensuring global document recognition. Our experienced team offers tailored solutions with a typical processing time of two weeks, depending on DFAT’s schedule.",
    overview:
      "In today’s globalised world, a notary public plays a crucial role in cross-border legal matters. UA Lawyers provides notarisation, Hague Apostille certification, and document legalisation for a wide range of documents, including but not limited to company registration documents, powers of attorney, marriage and birth certificates, academic qualifications, affidavits, and statutory declarations. Our notarisation services comply with the requirements of Australian and international embassies, courts, and government agencies, ensuring that cross-border legal documents are properly recognised for immigration, business, litigation, and asset transactions.",
    subServices: [
      "Notarisation",
      "Hague Apostille Certification",
      "Document Certification",
      "Witnessing Signatures",
      "Commercial Documents",
      "Property and Inheritance",
      "Consular Legalisation",
    ],
    contacts: ["leo-lee"],
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

/** "Related Services" = every other practice area. */
export const relatedServices = (slug: string) =>
  services.filter((s) => s.slug !== slug);
