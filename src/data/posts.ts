export type Block =
  | { type: "p"; text: string; emphasis?: "italic" | "bold" }
  | { type: "h3"; text: string }
  | { type: "ul"; items: (string | { lead: string; text: string })[] };

export type Post = {
  slug: string;
  /** SEO <title> — carried over from the WordPress site. */
  title: string;
  /** On-page headline; differs from the SEO title on some posts. */
  heading: string;
  metaDesc: string;
  date: string;
  image: string;
  categories: string[];
  tags: string[];
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "hidden-price-of-wholesale-client-status",
    title:
      "The Hidden Price of the “Wholesale Client” Status: What Australian Legal Protections Are You Giving Up?",
    heading:
      "The Hidden Price of the “Wholesale Client” Status: What Australian Legal Protections Are You Giving Up?",
    metaDesc:
      "Becoming a “Wholesale Client” or “Sophisticated Investor” in Australia can unlock exclusive deals, but it strips away key legal protections. Learn what you give up and how to protect your capital.",
    date: "2026-08-20",
    image: "/images/posts/will.jpg",
    categories: ["Commercial Litigation", "Legal Insights"],
    tags: ["investment"],
    body: [
      { type: "p", text: "In the Australian investment landscape, high-net-worth individuals seeking access to premium private equity, unlisted property funds, or high-yield financial products frequently encounter a specific threshold: the offering is restricted to “Wholesale Clients” or “Sophisticated Investors”." },
      { type: "p", text: "To cross this threshold, investors routinely obtain a certificate from their accountant verifying their income or net assets. While many view this certificate as a \"VIP pass\" to exclusive wealth-building opportunities, the brutal legal reality is quite different. By handing over this document, you are voluntarily stripping yourself of fundamental statutory protections under Australian consumer and financial law." },
      { type: "p", text: "As a commercial litigation team handling complex disputes, we frequently see the devastating consequences of this misunderstanding. Here is the hidden price you pay for that “Wholesale” title." },
      { type: "h3", text: "Cost 1: Losing the AFCA Safety Net" },
      { type: "p", text: "For retail investors, the Australian Financial Complaints Authority (AFCA) is a powerful, cost-free shield. If a retail client faces misleading conduct, fraud, or unreasonable delays in redemptions, AFCA provides an accessible dispute resolution mechanism whose decisions are binding on financial institutions." },
      { type: "p", text: "However, AFCA’s jurisdiction generally excludes Wholesale Clients. Once a fund manager presents your Wholesale Certificate during a dispute, AFCA is highly likely to dismiss your complaint for lack of jurisdiction. Consequently, if your $500,000 or $1 million investment is unfairly locked up, your only viable recourse is to initiate commercial litigation in the Supreme Court—a gruelling process where legal fees can quickly exceed $100,000 with no guaranteed outcome." },
      { type: "h3", text: "Cost 2: Surrendering Defenses Against “Draconian” Clauses" },
      { type: "p", text: "Australia has a robust Unfair Contract Terms (UCT) regime designed to void heavily one-sided clauses. Yet, under Australian contract law, Wholesale Clients are legally presumed to be wealthy, experienced, and highly capable of engaging independent legal counsel." },
      { type: "p", text: "Consequently, courts rarely intervene to strike down harsh commercial terms agreed upon by a wholesale investor. Fund managers routinely weaponize this legal presumption by embedding highly restrictive clauses in their Information Memorandums (IM):" },
      { type: "ul", items: [
        { lead: "The Irrevocable Offer:", text: "You may regret your transfer the very next day and demand a refund. However, if the fine print dictates that your application constitutes an \"irrevocable offer,\" your revocation is legally void. The fund can lawfully ignore your withdrawal, accept your offer weeks later, and trap your capital in a mandatory 12-month lock-up period." },
        { lead: "Entire Agreement & No Reliance:", text: "Sales representatives might make grand verbal promises or send translated summaries via WhatsApp guaranteeing liquidity. But if you sign an IM containing a \"No Reliance\" clause, you formally acknowledge that you relied solely on the English IM text. In court, verbal promises evaporate; only the ink on the contract matters." },
        { lead: "The \"Professional Advice\" Shield:", text: "IMs often force you to declare that you have sought independent legal and financial advice. This acts as a perfect liability shield for the fund. You cannot successfully argue in court that the trust structure was \"too complex\" or that your English wasn't proficient enough to understand the risks." },
      ] },
      { type: "h3", text: "Conclusion" },
      { type: "p", text: "Many astute business people blindly sign 80-page English Information Memorandums based on blind trust in their financial brokers. By the time a dispute arises, they discover that top-tier compliance lawyers have flawlessly shifted all commercial risks onto them through binding contracts." },
      { type: "p", text: "Our Advice: Before you commit capital as a Wholesale Client, it is imperative to have an Australian commercial lawyer conduct a meticulous \"mine-sweeping\" review of the IM and subscription agreement. A modest upfront investment in a legal review can clarify lock-up periods, hidden management fees, and redemption restrictions—ultimately saving you hundreds of thousands in future litigation costs. Protect your wealth before the ink dries." },
      { type: "p", emphasis: "italic", text: "Disclaimer: The information provided in this article is for general informational purposes only and does not constitute formal legal advice." },
      { type: "p", emphasis: "bold", text: "If you are currently navigating a complex shareholder dispute or need to formalize a nominee arrangement to protect your assets, contact the experienced litigation team at United Associates Barristers and Solicitors today to safeguard your commercial interests." },
    ],
  },
  {
    slug: "hidden-legal-risks-of-nominee-agreements",
    title:
      "Are Your Shares Safe? The Hidden Legal Risks of ‘Nominee’ Agreements in Australia",
    heading:
      "Are Your Shares Safe? The Hidden Legal Risks of ‘Nominee’ Agreements in Australia",
    metaDesc:
      "Nominee share arrangements are common in Australia, but without a written agreement they can lead to costly disputes. Learn the hidden legal risks and how to protect your investment.",
    date: "2026-08-20",
    image: "/images/posts/property.jpg",
    categories: ["Commercial Litigation", "Legal Insights"],
    tags: ["shares"],
    body: [
      { type: "p", text: "In the vibrant business landscape of Australia, it is not uncommon for entrepreneurs and investors to use ‘nominee’ structures. Whether for privacy, administrative convenience, or managing cross-border investments, a party (the nominee) will often hold shares or assets on behalf of another party (the ultimate beneficiary). While this seems like a straightforward arrangement, what happens when the relationship sours, and there is no clear written agreement?" },
      { type: "p", text: "A handshake or a verbal agreement may seem sufficient among trusted partners, but in the realm of Australian corporate law, relying solely on informal understandings can lead to catastrophic legal and financial consequences." },
      { type: "h3", text: "The Legal Reality: Nominee vs. Beneficiary" },
      { type: "p", text: "Under Australian law, the starting premise of a nominee arrangement is that legal ownership rests with the nominee, while the beneficial (or equitable) ownership remains with the nominator. However, proving this beneficial ownership in the event of a dispute can be an uphill battle." },
      { type: "p", text: "When legal disputes arise regarding share ownership, courts heavily scrutinize the contemporaneous documents. If the formal company register and incorporation documents explicitly list the nominee as the shareholder, and there is no written trust deed or nominee agreement to the contrary, the burden of proof falls entirely on the party claiming beneficial ownership." },
      { type: "p", text: "Attempting to prove beneficial ownership through retrospective verbal accounts or scattered WeChat messages exposes the case to significant risk. Courts must navigate conflicting memories, and the outcome becomes inherently unpredictable." },
      { type: "h3", text: "The Danger of “Breach of Fiduciary Duty”" },
      { type: "p", text: "The risks escalate significantly if the nominee takes an active role in the business or the management of the shares." },
      { type: "p", text: "A common pitfall occurs when a nominee attempts to argue that they were “simply passing on messages” or acting as a mere conduit between the company and the beneficiary. If evidence—such as emails or text messages—reveals that the nominee actively adopted false information, encouraged further financial contributions based on misleading premises, or made unilateral decisions regarding the shares, they are no longer just a passive conduit." },
      { type: "p", text: "In such scenarios, the nominee may face serious allegations of Breach of Fiduciary Duty. A fiduciary is legally obligated to act in the utmost good faith and in the best interests of the beneficiary. Encouraging investments on false pretenses or transferring shares without proper authorization are severe breaches that can result in the nominee being held personally liable for the beneficiary's financial losses, along with potentially carrying the burden of extensive legal costs for all involved parties." },
      { type: "h3", text: "Practical Takeaways: How to Protect Your Investments" },
      { type: "p", text: "To avoid the devastating consequences of undocumented nominee arrangements, consider the following proactive steps:" },
      { type: "ul", items: [
        "Document Everything in Writing: Never rely on verbal agreements or informal chat messages. A formal Nominee Agreement or Declaration of Trust must be drafted by a qualified solicitor before any shares are issued or money changes hands.",
        "Maintain Clear Financial Records: Ensure that the flow of funds clearly traces back to the ultimate beneficiary. If the beneficiary paid for the shares, the bank transfers should reflect this directly, rather than funneling money through ambiguous intermediary accounts.",
        "Understand the Nominee’s Role: If you are acting as a nominee, clearly understand your legal obligations. Avoid taking active management steps or advising the beneficiary without explicit, written instructions.",
      ] },
      { type: "h3", text: "Conclusion" },
      { type: "p", text: "The assumption that “we are friends, we understand the arrangement” holds no weight in a courtroom. Failing to properly document a nominee relationship can turn a profitable investment into a costly legal nightmare, potentially risking hundreds of thousands of dollars in legal fees and lost capital." },
      { type: "p", emphasis: "italic", text: "Disclaimer: The information provided in this article is for general informational purposes only and does not constitute formal legal advice." },
      { type: "p", emphasis: "bold", text: "If you are currently navigating a complex shareholder dispute or need to formalize a nominee arrangement to protect your assets, contact the experienced litigation team at United Associates Barristers and Solicitors today to safeguard your commercial interests." },
    ],
  },
  {
    slug: "gun-control-in-australia",
    title: "Gun Control in Australia – Overview of Gun Laws and Their Impact",
    heading: "Gun Control in Australia",
    metaDesc: "Explore Australia’s gun control laws and their history, focusing on the 1996 reforms and their effectiveness in reducing gun violence.",
    date: "2025-03-21",
    image: "/images/posts/gun-control.jpg",
    categories: ["Criminal Defence", "Legal Insights"],
    tags: ["gun"],
    body: [
      { type: "p", text: "The tragic massacre at the Christchurch mosque in New Zealand on 15 March 2019 sent shockwaves around the world and reignited the debate over gun control in Western countries. For many Chinese Australians, the topic of gun regulation in Australia is both intriguing and important. This blog post aims to shed light on Australia’s gun control laws and their evolution." },
      { type: "h3", text: "The Turning Point: The Port Arthur Massacre" },
      { type: "p", text: "The Port Arthur massacre in 1996 marked a watershed moment in Australia’s approach to gun control. On 28 April 1996, Martin Bryant, an unemployed man, used semi-automatic rifles and shotguns to open fire at the Broad Arrow Café and Seascape Guesthouse in Port Arthur, Tasmania. The attack resulted in the deaths of 35 people and left 23 injured, making it one of the deadliest mass shootings by a single perpetrator in history." },
      { type: "p", text: "Just 12 days after the massacre, the Australian government, led by Prime Minister John Howard, introduced the Firearms Act 1996. This legislation, which received widespread public and media support, imposed strict regulations on gun ownership. It banned the private ownership of semi-automatic rifles, semi-automatic shotguns, and pump-action shotguns. The law also prohibited the import and sale of automatic and semi-automatic firearms and handguns." },
      { type: "p", text: "Under the new law, anyone wishing to own a firearm must apply to the government, providing a valid reason (self-defence is not considered a valid reason). The application process involves multiple layers of scrutiny, and if approved, the individual must adhere to strict requirements, such as a 28-day waiting period and secure storage of firearms in locked containers." },
      { type: "h3", text: "The 2014 Sydney Lindt Café Siege" },
      { type: "p", text: "Another significant event in Australia’s gun control history was the 2014 Sydney Lindt Café siege. On 15-16 December 2014, a gunman held 17 people hostage in the Lindt Café in Sydney’s central business district. Two hostages were killed during the incident." },
      { type: "p", text: "In response, the Australian government initiated a three-month national gun amnesty starting on 1 July 2017. During this period, individuals could surrender unregistered firearms without facing penalties for illegal possession. This was the first nationwide amnesty since the Port Arthur massacre. By October 2017, over 51,000 unregistered firearms had been surrendered." },
      { type: "h3", text: "Australia’s Gun Control in Global Context" },
      { type: "p", text: "Australia’s gun control laws are among the strictest in the developed world. According to the Small Arms Survey 2017, Australia ranks 51st in the world for the ratio of privately owned firearms to population, with approximately 8 people per firearm. In contrast, New Zealand has a ratio of 4:1 (ranking 20th), and the United States has a ratio of 1.2 firearms per person, making it the country with the highest rate of private gun ownership." },
      { type: "p", text: "A 2016 survey revealed that 6% of Australians believe the current gun laws are too strict, 44% think they are just right, and 45% feel they are not strict enough." },
      { type: "h3", text: "Conclusion" },
      { type: "p", text: "Australia’s approach to gun control has evolved significantly since the Port Arthur massacre, with strict regulations and periodic amnesties helping to reduce the number of firearms in circulation. While opinions on the current laws vary, there is no doubt that Australia’s gun control measures have played a crucial role in maintaining public safety." },
    ],
  },
  {
    slug: "why-a-will-is-more-important-than-you-think",
    title: "Why a Will is Essential: Protect Your Family and Assets",
    heading: "Why a Will is More Important Than You Think",
    metaDesc: "Understand why having a will is crucial for protecting your assets and ensuring your wishes are followed. Learn about the benefits of creating a legal will for peace of mind.",
    date: "2025-03-21",
    image: "/images/posts/will.jpg",
    categories: ["Legal Insights", "News", "Will & Probate"],
    tags: ["will"],
    body: [
      { type: "p", text: "Creating a will is often considered a taboo topic, especially among those with more conservative views. However, updating or creating a will whenever there are changes in personal assets is a wise decision. This is particularly important when it comes to the distribution of property. As discussed in previous articles, property can be held as “joint tenancy” or “tenancy in common,” but a will ensures that your assets are distributed according to your true wishes. Therefore, it is highly recommended that individuals who own property in Australia consult a lawyer and draft a will." },
      { type: "h3", text: "Why is a Will So Important?" },
      { type: "p", text: "Let’s take Victoria as an example to understand how personal assets are distributed if someone passes away without a will." },
      { type: "h3", text: "Statutory Inheritance Order in Victoria" },
      { type: "ul", items: [
        "One spouse, no children: The spouse inherits all assets.",
        "One spouse, with children from that spouse: The spouse inherits all assets.",
        "One spouse, with children from another relationship: The spouse inherits personal chattels, the first $451,909 of the estate, and 50% of the remaining assets. The children from another relationship inherit the remaining portion.",
        "No spouse, with children: Assets are divided equally among the children.",
        "No spouse, no children: Assets are divided equally among the parents. If the parents are deceased, the siblings inherit the estate.",
        "More complex situations: There are specific distribution rules for other scenarios.",
      ] },
      { type: "p", text: "In Victoria, the statutory inheritance order primarily benefits the surviving spouse, who in most cases inherits the entire estate. This spouse-centric approach to inheritance may be unfamiliar to many in the Chinese community." },
      { type: "h3", text: "Statutory Inheritance Order in China" },
      { type: "p", text: "In China, the statutory inheritance order is as follows:" },
      { type: "ul", items: [
        "First in line: Spouse, children, and parents.",
        "Second in line: Siblings, grandparents.",
      ] },
      { type: "p", text: "When there are first-line heirs, the estate is divided equally among them. Only if there are no first-line heirs do the second-line heirs inherit the estate." },
      { type: "p", text: "Many newcomers to Australia might mistakenly assume that Australian and Chinese laws regarding marital property are similar, leading them to neglect taking steps to ensure their assets are distributed according to their wishes. However, as the above comparison shows, the distribution of assets without a will can differ significantly between the two countries." },
      { type: "p", text: "Therefore, if you wish to leave your estate to your children or parents, it is essential to draft a valid will in Australia. Moreover, inheriting assets through the statutory order without a will can be a complicated and costly process, often involving expensive legal fees." },
      { type: "p", text: "If you are not in Australia but wish to create a will to distribute your Australian assets, our firm offers professional will-drafting services to help you create a legally valid will that complies with Australian law, even from overseas." },
    ],
  },
  {
    slug: "key-points-to-know-about-divorce-in-australia",
    title: "Key Points to Know About Divorce in Australia – Legal Process and Considerations",
    heading: "Key Points to Know About Divorce in Australia",
    metaDesc: "Learn about the key points of divorce in Australia, including the legal process, property division, and child custody. Get the essential information for navigating your divorce with confidence.",
    date: "2025-03-21",
    image: "/images/posts/divorce.jpg",
    categories: ["Family Law", "Legal Insights"],
    tags: ["divorce"],
    body: [
      { type: "p", text: "Divorce is undoubtedly a challenging and emotional experience for most people. In Australia, many individuals find this process even more prolonged and painful due to a lack of understanding of the local divorce system. This blog post aims to address some common questions Chinese couples may have when getting divorced in Australia, helping you better navigate the complexities of Australian family law." },
      { type: "h3", text: "Divorce = Property Settlement + Child Custody?" },
      { type: "p", text: "Divorce is a separate legal process that simply signifies the end of a marital relationship. It does not automatically include property settlement or child custody arrangements. These matters can be addressed directly after separation, without waiting for the divorce to be finalised." },
      { type: "p", text: "However, it is crucial to consult a lawyer promptly after divorce to discuss property settlement and child custody. This is because the time limit for property-related claims is only 12 months from the date the divorce order takes effect. If this period lapses, the Family Court will generally not hear the case, and the property will remain with the current owner." },
      { type: "h3", text: "How Long Does the Divorce Process Take?" },
      { type: "p", text: "In Australia, either or both parties must apply for a divorce order from the Family Court. Typically, the final divorce order will be granted at least four months after the application is filed. If one party is overseas or opposes the divorce, the process may take longer." },
      { type: "h3", text: "Valid Reasons for Divorce" },
      { type: "p", text: "Australia operates under a “no-fault divorce” system, meaning reasons such as adultery or abandonment are not considered valid grounds for divorce under the Family Law Act 1975." },
      { type: "p", text: "To apply for divorce in Australia, you only need to prove:" },
      { type: "ul", items: [
        "The marriage has broken down irretrievably, and you have been separated for at least 12 months.",
        "The marriage has lasted for at least two years.",
      ] },
      { type: "p", text: "If you reconcile for three months or more during the separation period, the 12-month separation requirement will reset." },
      { type: "h3", text: "What If the Marriage Has Lasted Less Than Two Years?" },
      { type: "p", text: "If your marriage has lasted less than two years, you must attend mediation with a court-certified family mediator before applying for divorce. If you or your spouse cannot attend mediation, you must provide a detailed explanation in your divorce application." },
      { type: "p", text: "Therefore, if your marriage is nearing the two-year mark and there is no urgent need for divorce, we recommend waiting until the two-year period is complete." },
      { type: "h3", text: "How Soon Can You Remarry After Divorce?" },
      { type: "p", text: "Remarrying before the divorce process is finalised is illegal and constitutes bigamy. Generally, you can remarry one month and one day after receiving your divorce certificate." },
      { type: "h3", text: "Can You Divorce in Australia if You Married Overseas?" },
      { type: "p", text: "The Australian Family Court will have jurisdiction over overseas marriages if:" },
      { type: "ul", items: [
        "The applicant is an Australian citizen or permanent resident.",
        "The applicant considers Australia their permanent home.",
      ] },
      { type: "p", text: "If these conditions are met, you can divorce in Australia. You will need to provide your overseas marriage certificate, and if it is not in English, a translated copy must be submitted with your divorce application." },
      { type: "p", text: "If you have further questions or require legal assistance, please feel free to contact United Associates Lawyers for a detailed consultation." },
    ],
  },
  {
    slug: "how-to-handle-a-car-accident-in-australia",
    title: "How to Handle a Car Accident in Australia – Legal Steps and Insurance Claims",
    heading: "How to Handle a Car Accident in Australia",
    metaDesc: "Unexpected car accidents can be overwhelming. Learn the legal steps to take at the scene, the details you must collect, and how to claim compensation through CTP insurance in Australia.",
    date: "2025-03-21",
    image: "/images/posts/car-accident.jpg",
    categories: ["Legal Insights"],
    tags: ["transportation"],
    body: [
      { type: "p", text: "Unexpected car accidents can be overwhelming, but knowing the legal steps to take can help you stay calm and act appropriately. This guide outlines essential legal knowledge to assist you in handling a car accident in Australia effectively." },
      { type: "h3", text: "When Should You Call the Police?" },
      { type: "p", text: "You are required to report the accident to the police in the following situations:" },
      { type: "ul", items: [
        "If someone is injured.",
        "If the accident involves a vehicle that needs towing.",
        "If the other driver flees the scene, refuses to exchange details, or appears to be under the influence of alcohol or drugs.",
        "If you are responsible for the accident and do not have insurance, as a police report will be necessary.",
      ] },
      { type: "p", text: "In other cases, you should exchange information with the other party and report the incident to your insurance company." },
      { type: "h3", text: "Essential Information to Collect" },
      { type: "p", text: "To ensure a smooth claims process, gather the following details:" },
      { type: "ul", items: [
        "The other driver’s licence details (take clear photos of both sides of the licence, including their home address, contact details, and licence validity).",
        "Verify their phone number by calling it on the spot.",
        "Vehicle details, including make, model, year, and licence plate number.",
        "Photos of the accident scene, including skid marks, debris, and any property damage.",
        "Records of the time, location, weather conditions, traffic conditions, and any other relevant factors.",
        "If you are the victim, find a witness and collect their contact details to prevent the other driver from denying responsibility later.",
      ] },
      { type: "h3", text: "Understanding Compulsory Third Party Insurance (CTP)" },
      { type: "p", text: "Compulsory Third Party (CTP) insurance covers personal injury compensation. It is included in vehicle registration and must be purchased by all drivers." },
      { type: "p", text: "If you suffer an injury in a car accident, you may be eligible to claim compensation through CTP insurance. Even minor injuries such as dizziness or mild bruising can be eligible for compensation." },
      { type: "ul", items: [
        "For mild symptoms like headaches, compensation may exceed $1,000.",
        "For moderate pain, such as severe headaches or shoulder strain, compensation can be around $5,000.",
        "For serious injuries, including fractures, compensation can amount to tens of thousands of dollars.",
      ] },
      { type: "h3", text: "How to Apply for CTP Compensation" },
      { type: "p", text: "To claim compensation, you must submit an accident notification form to the relevant CTP insurance company within 28 days of the accident. The insurer will assess your claim and determine whether they will cover your reasonable medical expenses and lost income within 10 days." },
      { type: "p", text: "Navigating the claims process can be complex, and professional legal assistance can significantly increase the chances of a successful claim. Statistics show that engaging a lawyer can raise the success rate from 10% to 80% and substantially increase the compensation amount." },
      { type: "h3", text: "Final Thoughts" },
      { type: "p", text: "Knowing your legal rights and responsibilities after a car accident can help you manage the situation more effectively. If you need professional assistance, legal experts can guide you through the claims process to ensure you receive the compensation you deserve." },
      { type: "p", text: "Need legal assistance? Contact our team for expert legal advice and representation." },
    ],
  },
  {
    slug: "understanding-the-six-month-eviction-ban-in-nsw",
    title: "Understanding the Six-Month Eviction Ban in NSW – Landlord and Tenant Rights",
    heading: "Understanding the Six-Month Eviction Ban in NSW",
    metaDesc: "The NSW Government introduced a six-month eviction ban for tenants affected by COVID-19. Learn who is eligible for protection, what landlords must do, and the land tax relief available.",
    date: "2014-05-09",
    image: "/images/posts/eviction-ban.jpg",
    categories: ["Legal Insights", "News", "Property Law"],
    tags: ["Property"],
    body: [
      { type: "p", text: "The COVID-19 pandemic has caused severe economic damage across Australia, leaving many tenants struggling to pay their rent due to financial hardship. In response, the New South Wales Government amended the law on 25 April 2020 and introduced a series of emergency measures to support both landlords and tenants in navigating these challenging times together." },
      { type: "h3", text: "What Are the New Measures?" },
      { type: "p", text: "The key measure introduced is a six-month eviction ban, which means landlords cannot evict tenants affected by the pandemic due to rental arrears. During this period, landlords are prohibited from issuing a Termination Notice or applying for an Eviction Order through the NSW Civil and Administrative Tribunal (NCAT)." },
      { type: "p", text: "This regulation, known as the Residential Tenancies Amendment (COVID-19) Regulation 2020, took effect on 15 April 2020." },
      { type: "p", text: "Under the new measures, landlords must engage with tenants in good faith to negotiate a solution, which may include rent reductions, payment plans, or other mutually agreed arrangements. If no agreement can be reached and the landlord has reasonable grounds to terminate the tenancy, they must issue a 60-day termination notice before applying to the Tribunal." },
      { type: "p", text: "In other cases, landlords can only issue an eviction notice or apply to the Tribunal after the six-month period, provided they can demonstrate that they have engaged in meaningful negotiations with the affected tenant." },
      { type: "h3", text: "Who Is Eligible for Protection Under the New Measures?" },
      { type: "p", text: "To qualify for eviction protection, a household must provide evidence that they have been affected by COVID-19. This includes:" },
      { type: "ul", items: [
        "Loss of employment or reduced income – if one or more members of the household have lost their job or experienced a drop in income due to the pandemic.",
        "Health-related impacts – if a household member is infected with COVID-19, needs to care for an infected family member, or is required to self-isolate, leading to reduced working hours.",
        "Significant income reduction – if the household’s total weekly income (including government subsidies) has fallen by at least 25% due to the pandemic.",
      ] },
      { type: "p", text: "If tenants engage with their landlords in good faith, they will be protected under the six-month eviction ban." },
      { type: "p", text: "However, if a tenant does not make reasonable efforts to negotiate or fails to comply with agreements, a landlord may serve a 60-day termination notice and pursue legal action after the six-month period." },
      { type: "h3", text: "Support for Landlords" },
      { type: "p", text: "Landlords who reduce rent for affected tenants may be eligible for land tax relief of up to 25%. The conditions for eligibility include proving financial hardship due to rental loss and demonstrating that the tenant qualifies for financial distress protection (i.e., a 25% reduction in household income)." },
      { type: "p", text: "If a tenant is not financially affected by COVID-19 or breaches the tenancy agreement for other reasons, the eviction ban does not apply." },
      { type: "p", text: "These new regulations aim to strike a balance between protecting tenants facing genuine financial difficulties and ensuring landlords receive some level of compensation." },
      { type: "p", text: "For further guidance on your rights and obligations as a landlord or tenant, seeking legal advice is highly recommended." },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

/** Posts other than `slug`, for the "Related posts" strip. */
export const relatedPosts = (slug: string) =>
  posts.filter((p) => p.slug !== slug).slice(0, 2);
