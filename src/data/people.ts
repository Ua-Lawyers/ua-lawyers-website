import { services } from "./services";

export type PersonSlug =
  | "shen-li"
  | "louis-xu"
  | "james-xi"
  | "qinyi-li"
  | "jingjing-luan"
  | "wilson-zhang"
  | "leo-lee";

export type Person = {
  slug: PersonSlug;
  /** Display name, as shown in the team grid on the live site. */
  name: string;
  role: string;
  photo: string;
  title: string;
  metaDesc: string;
  phone?: string;
  email?: string;
  /** Long-form "About" copy. */
  about: string[];
  qualifications: string[];
  education: string[];
  /**
   * Optional one-line summary for the short "Work with" profile format. When set, it
   * replaces the auto-generated sentence built from the derived practice areas.
   */
  summary?: string;
  /** Optional one-line intro shown under the "Professional Experience" heading. */
  experienceSummary?: string;
  /** Optional career highlights shown under the "Professional Experience" heading. */
  experience?: string[];
  /**
   * Optional custom Expertise tags shown on the profile sidebar. When set, these plain
   * (non-linked) tags replace the practice areas otherwise derived from the services list.
   */
  expertise?: string[];
  /** Extra plain Expertise tags appended after the derived/custom practice-area tags. */
  extraExpertise?: string[];
  /**
   * `needs-content` means the live WordPress portfolio item for this slug still holds a
   * former staff member's bio (e.g. /portfolio-item/james-xi/ renders "Wuhao Wang"), so the
   * About/qualifications/contact fields below are intentionally empty rather than wrong.
   * The name, role and photo ARE correct — they come from the team listings.
   * Fill these in and flip to `complete`; no layout changes needed.
   */
  bioStatus: "complete" | "needs-content";
};

export const people: Person[] = [
  {
    slug: "shen-li",
    name: "Shen Li",
    role: "Principal / Director of Legal",
    photo: "/images/people/shen-li.jpg",
    title: "Shen Li – Dedicated Lawyer at United Associates Barristers & Solicitors",
    metaDesc:
      "Discover Shen Li, a skilled lawyer at United Associates Barristers & Solicitors. Learn about his expertise and commitment to providing exceptional legal services.",
    phone: "(03) 8840 6564",
    email: "shen.li@ualawyers.com.au",
    about: [
      "Li is the Principal Lawyer at UA Lawyers, with extensive practical experience in commercial litigation, international arbitration, dispute resolution, and cross-border enforcement. He is highly skilled in handling complex commercial disputes and specialises in providing precise legal strategies for both corporate and individual clients. He has successfully handled numerous high-risk litigation and cross-border disputes.",
      "As a dual-qualified lawyer in China and Australia, Li possesses in-depth knowledge of the legal systems, judicial procedures, and business environments of both countries. He provides efficient and compliant legal solutions to cross-border businesses and individuals. His expertise includes cross-border investments, international trade, commercial contract disputes, and cases before international arbitration institutions. He helps clients safeguard their legal rights in complex legal landscapes and ensures the smooth execution of business transactions.",
      "Li also has extensive experience in cross-border enforcement, with a deep understanding of the recognition and enforcement of foreign judgments and arbitral awards. He provides strong legal support to clients, ensuring the effective enforcement of domestic and international judgments.",
      "Known for his rigorous legal reasoning and exceptional litigation skills, Li is highly regarded by his clients. He adheres to a client-first approach, dedicated to delivering high-quality, efficient, and professional legal services. His goal is to provide practical and effective solutions to complex legal challenges for both domestic and international clients.",
    ],
    qualifications: [
      "Solicitor of the Supreme Court of Victoria",
      "Solicitor of the High Court of Australia",
      "Practising Lawyer in China",
    ],
    education: [
      "Juris Doctor (JD) – Australian National University",
      "Bachelor of Commerce (Finance and Accounting) – University of Melbourne",
    ],
    extraExpertise: ["Chinese Law", "Data Security"],
    bioStatus: "complete",
  },
  {
    slug: "louis-xu",
    name: "Louis Xu",
    role: "Patent Examiner / Director of Non-Legal",
    photo: "/images/people/louis-xu.jpg",
    title: "Louis Xu – Expert Lawyer at United Associates Barristers & Solicitors",
    metaDesc:
      "Meet Louis Xu, a skilled lawyer at United Associates Barristers & Solicitors. Learn about his qualifications and dedication to providing exceptional legal services.",
    phone: "(03) 8840 6566",
    email: "yifei.xu@ualawyers.com.au",
    about: [
      "Louis is an intellectual property specialist with over eight years of experience in patent examination, patent applications, infringement analysis and technology commercialisation, with a particular focus on biopharmaceutical and chemical technologies. As a former Australian Patent Examiner, he developed extensive experience in assessing the novelty, inventive step and technical scope of complex biomedical and chemical inventions. This background gives him a strong understanding of patent examination, portfolio development and the protection of emerging technologies.",
      "He has supported the commercialisation of advanced biotechnology, including protein sequencing and spatial transcriptomics, helping align research outcomes with intellectual property and commercial strategies. His technical expertise also extends across biotechnology, chemical engineering, agriculture and zoology.",
      "Since 2022, Louis has held senior management positions within a law firm, gaining substantial experience in organisational leadership, client management and strategic development.",
    ],
    qualifications: [],
    education: [],
    bioStatus: "complete",
  },
  {
    slug: "james-xi",
    name: "James Xi",
    role: "Lawyer",
    photo: "/images/people/james-xi.png",
    title: "James Xi – United Associates Barristers & Solicitors",
    metaDesc:
      "Meet James Xi, a lawyer at United Associates Barristers & Solicitors, practising in commercial litigation and corporate & commercial law.",
    about: [],
    qualifications: [],
    education: [],
    bioStatus: "needs-content",
  },
  {
    slug: "qinyi-li",
    name: "Ada Yin",
    role: "Paralegal",
    photo: "/images/people/qinyi-li.png",
    title: "Ada Yin – United Associates Barristers & Solicitors",
    metaDesc:
      "Meet Ada Yin, a paralegal at United Associates Barristers & Solicitors, practising in family law and commercial law.",
    about: [],
    qualifications: [],
    education: [],
    summary: "",
    bioStatus: "needs-content",
  },
  {
    slug: "jingjing-luan",
    name: "Jingjing Luan",
    role: "Chinese Law Specialist | Registered Foreign Lawyer (PRC Law)",
    photo: "/images/people/jingjing-luan.png",
    title: "Jingjing Luan – United Associates Barristers & Solicitors",
    metaDesc:
      "Jingjing Luan is a Chinese Law Specialist and Registered Foreign Lawyer in Victoria with over 20 years of experience in the Chinese judicial system, advising on PRC law and cross-border disputes.",
    about: [
      "Jingjing Luan is a PRC-qualified legal professional and Registered Foreign Lawyer in Victoria with over 20 years of experience in the Chinese judicial system.",
      "Prior to joining United Associates, Jingjing served in various judicial roles at the Shenyang Intermediate People’s Court, including as a Judge and Deputy Director of the Case Management Office. Her experience spans civil and commercial litigation, enforcement proceedings, judicial review and retrial matters, as well as legal research and analysis.",
      "Jingjing has particular experience in the enforcement of civil and commercial judgments in China. At United Associates, she works closely with our Australian-qualified lawyers on cross-border disputes, particularly matters involving the recognition and enforcement of Chinese court judgments in Australia. She also advises on PRC law in relation to corporate governance, regulatory compliance, cross-border transactions and other China-related legal matters.",
      "Jingjing is registered with the Victorian Legal Services Board and Commissioner as a Foreign Lawyer, enabling her to practise PRC law in Victoria. She provides an important bridge between the Chinese and Australian legal systems and assists clients in navigating complex legal issues involving both jurisdictions.",
    ],
    qualifications: [],
    education: [],
    expertise: [
      "PRC Law",
      "Cross-Border Disputes",
      "Enforcement of Chinese Judgments",
      "Corporate Governance & Compliance",
      "Cross-Border Transactions",
    ],
    bioStatus: "complete",
  },
  {
    slug: "wilson-zhang",
    name: "Wilson Zhang",
    role: "Lawyer",
    photo: "/images/people/wilson-zhang.png",
    title: "Wilson Zhang – United Associates Barristers & Solicitors",
    metaDesc:
      "Meet Wilson Zhang, a lawyer at United Associates Barristers & Solicitors, practising in family law, property law and criminal defence.",
    about: [],
    qualifications: [],
    education: [],
    bioStatus: "needs-content",
  },
  {
    slug: "leo-lee",
    name: "Leo Lee",
    role: "Lawyer",
    photo: "/images/people/leo-lee.png",
    title: "Leo Lee – United Associates Barristers & Solicitors",
    metaDesc:
      "Meet Leo Lee, a lawyer and qualified notary public at United Associates Barristers & Solicitors, with over 16 years of experience and a fellow of the Society of Notaries of Victoria.",
    about: [
      "Mr Lee has been practising law since 2009, amassing 16 years of extensive experience. He has established a solid foundation for the public notary practice with his profound expertise. He is a qualified notary public and a fellow of the Society of Notaries of Victoria.",
    ],
    qualifications: [],
    education: [],
    bioStatus: "complete",
  },
];

export const personBySlug = (slug: string) => people.find((p) => p.slug === slug);

/**
 * Practice areas are derived from each service's `contacts` list rather than duplicated
 * here, so a person and the services that list them can never drift apart.
 */
export const practiceAreasFor = (slug: PersonSlug) =>
  services.filter((s) => s.contacts.includes(slug)).map((s) => s.name);

/** Filter tabs on /our-people — only areas that actually have someone behind them. */
export const practiceAreaFilters = () => {
  const used = services.filter((s) => s.contacts.length > 0).map((s) => s.name);
  return ["All", ...Array.from(new Set(used))];
};
