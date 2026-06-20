// Centralized site data — used across nav, footer, schema, CTAs
// Spray Foam Insurance Broker — shops multiple carriers for spray foam contractors

export const SITE = {
  name: "Spray Foam Insurance Broker",
  legalName: "Spray Foam Insurance Broker (by Contractors Choice Agency)",
  domain: "sprayfoaminsurancebroker.com",
  url: "https://sprayfoaminsurancebroker.com",
  tagline: "Shop Multiple Carriers for Your Spray Foam Business",
  description:
    "Independent spray foam insurance broker shopping multiple carriers to find the best rates for spray foam contractors — GL, workers' comp, equipment coverage, and specialty programs for high-risk spray foam operations. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Spray Foam",
  brandSub: "Insurance Broker",
  nicheShort: "spray foam contractor",
  nicheShortCap: "Spray Foam Contractor",
  nichePlural: "spray foam contractors",
  nichePluralCap: "Spray Foam Contractors",
  operator: "spray foam operation",
  operatorCap: "Spray Foam Operation",
  industry: "spray foam contracting",
  industryCap: "Spray Foam Contracting",
  audience: "spray foam contractors",
  audienceCap: "Spray Foam Contractors",
  ownerTitle: "spray foam contractor",
  regionPill: "Texas · Florida · National",
  serviceSuffix: "Spray Foam Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "We compare GL rates from multiple carriers",
    description:
      "We shop multiple carriers to find the best GL rate for spray foam contractors — comparing overspray coverage, completed-operations limits, exclusion structures, and pricing across admitted and specialty markets.",
    icon: "ShieldCheck",
    keywords: ["spray foam general liability broker", "compare spray foam GL rates", "spray foam contractor liability insurance", "best GL for spray foam"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Compare WC rates for spray foam crews",
    description:
      "Workers' comp rates for spray foam applicators vary significantly by carrier. We shop multiple markets to find the best rate for your crew size, class codes, and loss history — admitted and state fund where available.",
    icon: "HardHat",
    keywords: ["spray foam workers comp broker", "compare WC rates spray foam", "spray foam applicator workers compensation", "best WC rate spray foam"],
  },
  {
    slug: "inland-marine",
    title: "Inland Marine & Equipment",
    short: "Shop rig and proportioner coverage rates",
    description:
      "Inland marine rates for spray foam rigs vary by carrier, deductible structure, and coverage form. We compare replacement-cost vs. ACV programs, breakdown endorsements, and transit coverage across multiple markets.",
    icon: "Package",
    keywords: ["spray foam equipment insurance broker", "inland marine spray foam compare", "rig insurance broker spray foam", "best proportioner coverage rate"],
  },
  {
    slug: "contractors-pollution-liability",
    title: "Contractors Pollution Liability",
    short: "Compare CPL rates for isocyanate exposure",
    description:
      "CPL rates for spray foam contractors differ significantly across carriers. We compare claims-made vs. occurrence forms, isocyanate coverage structures, and pricing to find the best CPL program for your operation.",
    icon: "Droplets",
    keywords: ["spray foam CPL broker", "isocyanate liability insurance compare", "contractors pollution liability spray foam", "best CPL rate spray foam"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    short: "Compare auto rates for rig trucks and vans",
    description:
      "Commercial auto rates vary by carrier, driver history, and vehicle type. We shop the market to find the best rate for the trucks and vans hauling your spray foam rig — and coordinate with inland marine for the equipment they carry.",
    icon: "Truck",
    keywords: ["spray foam commercial auto broker", "compare auto rates spray foam contractor", "rig truck insurance broker", "spray foam vehicle insurance compare"],
  },
  {
    slug: "high-risk-programs",
    title: "High-Risk & Hard-to-Place Programs",
    short: "E&S markets for declined spray foam risks",
    description:
      "Been declined for GL, CPL, or WC because of chemical exposure, a prior loss run, or high-hazard work? We have E&S markets that write spray foam programs other brokers can't place — and we know how to present your risk.",
    icon: "Award",
    keywords: ["high risk spray foam insurance broker", "E&S spray foam coverage", "declined spray foam insurance", "hard to place spray foam GL"],
  },
  {
    slug: "package-programs",
    title: "Package & BOP Programs",
    short: "Bundled programs for maximum savings",
    description:
      "We compare package (BOP) programs that bundle GL, property, and equipment into one policy — often at better rates than separate policies. We evaluate whether a package or standalone approach saves you more.",
    icon: "FileSearch",
    keywords: ["spray foam BOP insurance broker", "spray foam package policy compare", "bundled contractor insurance spray foam", "spray foam BOP rates"],
  },
  {
    slug: "umbrella-excess",
    title: "Umbrella & Excess Liability",
    short: "Compare excess limits above primary policies",
    description:
      "Umbrella and excess liability rates differ significantly by underlying carrier and coverage structure. We shop excess markets to find the best rate for the limits your jobs and contracts require.",
    icon: "Umbrella",
    keywords: ["spray foam umbrella broker", "excess liability spray foam compare", "spray foam umbrella rates", "high limit contractor insurance spray foam"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", region: "Houston · Dallas · Statewide", blurb: "Texas is one of the largest spray foam markets in the country. We shop multiple carriers for Texas spray foam contractors — comparing rates for the state's large contractor labor pool, high-volume residential and commercial work, and heat-exposed applications." },
  { slug: "florida", name: "Florida", region: "Tampa · Orlando · Statewide", blurb: "Florida spray foam contractors face hurricane exposure and strict licensing requirements. We compare GL, WC, and equipment rates from multiple carriers serving Florida — finding the best program for coastal and inland spray foam operations." },
  { slug: "southeast", name: "Southeast", region: "GA · NC · SC · AL", blurb: "The Southeast spray foam market is growing fast. We shop carriers for Georgia, North Carolina, South Carolina, and Alabama contractors — comparing rates for new-construction residential, commercial retrofits, and agricultural building work." },
  { slug: "midwest", name: "Midwest", region: "OH · IN · MI · IL", blurb: "Cold-climate Midwest demand drives strong spray foam volume. We compare GL, WC, and rig rates for Ohio, Indiana, Michigan, and Illinois contractors — across the range of residential, commercial, and agricultural work they do year-round." },
  { slug: "southwest", name: "Southwest", region: "AZ · NM · NV", blurb: "Desert Southwest spray foam operations face heat and UV chemical exposure. We shop carriers for Arizona, New Mexico, and Nevada contractors — comparing rates for high-temperature applications and commercial retrofit work." },
  { slug: "mountain-west", name: "Mountain West", region: "CO · UT · ID", blurb: "High-altitude spray foam work requires application expertise and the right insurance. We compare carrier rates for Colorado, Utah, and Idaho contractors — finding programs that reflect cold-climate and altitude conditions." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · New England", blurb: "Dense Northeast construction markets create strong spray foam demand. We shop multiple carriers for New York, Pennsylvania, New Jersey, and New England contractors — comparing rates for the region's high labor costs and strict code requirements." },
  { slug: "pacific-west", name: "Pacific West", region: "CA · OR · WA", blurb: "California spray foam contractors face strict isocyanate and environmental regulations. We compare carriers that navigate those requirements — finding compliant GL and CPL programs for West Coast spray foam operations at competitive rates." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Multiple carrier relationships", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 300, suffix: "+", label: "Spray foam contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years brokering specialty contractor coverage", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "My previous broker sent me one quote and called it a market. This broker shopped five carriers, explained the differences in the policy forms, and saved me nearly $3,000 on GL and WC — with better completed-operations coverage than I had before.", name: "Marcus T.", role: "Owner / Applicator", location: "Texas" },
  { quote: "I'd been declined twice for GL because of chemical exposure. They went to E&S markets I didn't even know existed, got three competing quotes, and placed a policy with real CPL included — in less than a week.", name: "Denise R.", role: "Operations Manager", location: "Florida" },
  { quote: "The broker comparison on my inland marine was eye-opening. Three carriers quoted the same rig at replacement cost but with completely different deductibles and breakdown endorsements. They explained each one and let me choose — that's what a broker should do.", name: "Kevin W.", role: "Spray Foam Contractor", location: "Ohio" },
] as const;
