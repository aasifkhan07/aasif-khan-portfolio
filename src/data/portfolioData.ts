export interface MetricItem {
  value: string;
  number: number;
  suffix: string;
  label: string;
  subtext: string;
  spectrum: 'warm' | 'cool' | 'dual';
  badge: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: string[];
  spectrum: 'cool' | 'warm' | 'dual';
  featured?: boolean;
  differentiator?: string;
}

export interface PipelineStep {
  stepNumber: string;
  title: string;
  badge: string;
  spectrum: 'cool' | 'warm' | 'dual';
  description: string;
  tools: string[];
  output: string;
  metrics: string;
  latency: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: string;
  highlights: string[];
  metrics: { label: string; value: string; spectrum?: 'warm' | 'cool' }[];
  tags: string[];
  spectrum: 'cool' | 'warm' | 'dual';
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  timeline: string;
  category: string;
  iconType: 'camera' | 'clinic' | 'door' | 'growth';
  headlineMetric: string;
  headlineLabel: string;
  description: string;
  results: { label: string; value: string }[];
  technologies: string[];
  spectrum: 'cool' | 'warm' | 'dual';
  industryTheme: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  validity: string;
  badgeColor: string;
  status: string;
  spectrum: 'cool' | 'warm';
  credentialUrl?: string;
  certificateId?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export const PERSONAL_INFO = {
  name: 'Aasif Khan',
  initials: 'AK',
  role: 'Digital Marketing Specialist',
  subRoles: 'SEO & AI Search (GEO/AEO) | Performance & Growth Marketing | Marketing Automation & CRM',
  location: 'Gurugram, Haryana, India',
  email: 'aasifkhan73207@gmail.com',
  phone: '+91 9817573207',
  phoneClean: '+919817573207',
  whatsappUrl: 'https://wa.me/919817573207?text=Hi%20Aasif,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect.',
  linkedInUrl: 'https://linkedin.com/in/aasifkhann',
  linkedInDisplay: 'linkedin.com/in/aasifkhann',
  statusBadge: 'Immediate Joiner',
  photoUrl: '/images/aasif-khan.jpg',
  tagline: 'Turning Search, Ads & AI Automation into Measurable Growth',
  secondaryTagline: 'Digital Marketing Specialist building AI-powered growth systems',
  heroBio: 'Two distinct strengths in one growth engineer: data-driven human performance marketing (Google/Meta Ads, CRM, WhatsApp leads) merged with autonomous AI pipelines (n8n, Antigravity, GEO/AEO search).',
  aboutSummary: 'Close to two years of hands-on experience (Aug 2024 – Jun 2026) across FinTech, IT, and service-sector verticals. Expertise across On-Page/Off-Page/Technical/Local SEO and AI Search Optimization (GEO/AEO), full-funnel Google Ads + Meta Ads performance marketing, multi-location GMB management, and CRM automation (HubSpot, Salesforce, Zoho, Pipedrive). Uses n8n, Antigravity, Zapier, and Make to build AI-assisted marketing workflows. GA4 (GAIQ) and Google Ads AI-Powered Performance Ads certified.',
  openForRoles: 'Open to Digital Marketing, SEO, Growth/Performance Marketing, Marketing Automation, CRM, Product Marketing & Analytics roles — Immediate Joiner.',
};

export const HEADLINE_METRICS: MetricItem[] = [
  {
    value: '300%',
    number: 300,
    suffix: '%',
    label: 'GMB Visibility Growth',
    subtext: 'High-ticket manufacturing offline-to-online scale',
    spectrum: 'warm',
    badge: 'Local SEO Scale',
  },
  {
    value: '25%',
    number: 25,
    suffix: '%',
    label: 'PPC ROI Improvement',
    subtext: 'Full-funnel Google & Meta Ads performance optimization',
    spectrum: 'cool',
    badge: 'Paid Acquisition',
  },
  {
    value: '45%',
    number: 45,
    suffix: '%',
    label: 'Surge in WhatsApp Leads',
    subtext: 'Autonomous n8n lead ingestion & instant dispatch routing',
    spectrum: 'warm',
    badge: 'Lead Automation',
  },
  {
    value: 'Top 3-10',
    number: 3,
    suffix: '–10',
    label: 'Organic Search Rankings',
    subtext: 'Dominated competitive keywords across international & local verticals',
    spectrum: 'cool',
    badge: 'GEO / AEO Search',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'seo-aeo',
    title: 'SEO & AI Search (GEO/AEO)',
    iconName: 'Search',
    spectrum: 'cool',
    featured: true,
    differentiator: 'Primary Core Differentiator',
    description: 'Next-generation search optimization architected for both traditional Google algorithms and Generative AI answer models (ChatGPT, Perplexity, Google AI Overviews).',
    skills: [
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'Technical SEO Audits & Core Web Vitals',
      'On-Page & Semantic Architecture',
      'Off-Page & High-Authority Link Building',
      'Local SEO & GMB Local Pack',
      'Keyword Intent Mapping',
      'JSON-LD Schema Markup',
      'Google Search Console Audits',
      'Surfer SEO Semantic Tuning',
    ],
  },
  {
    id: 'ai-workflows',
    title: 'Marketing Automation & AI Pipelines',
    iconName: 'Cpu',
    spectrum: 'dual',
    featured: true,
    differentiator: 'Workflow Engineering Edge',
    description: 'Autonomous AI pipelines bridging ad triggers, lead scoring prompts, CRM pipelines, and instantaneous WhatsApp sales notifications.',
    skills: [
      'n8n Workflow Automation',
      'Antigravity Workflow Systems',
      'Make (Integromat) Integrations',
      'Zapier Multi-Step Zaps',
      'Prompt Engineering for Content Ops',
      'AI Lead Qualification & Scoring',
      'Webhook & API Data Ingestion',
      'Instant WhatsApp Lead Routing',
      'Closed-Loop Attribution Webhooks',
    ],
  },
  {
    id: 'paid-growth',
    title: 'Performance & Paid Marketing',
    iconName: 'TrendingUp',
    spectrum: 'cool',
    description: 'High-intent paid media acquisition focused on reducing CPL and scaling ROAS across full-funnel paid architectures.',
    skills: [
      'Google Ads (Search & Display)',
      'Google Remarketing Campaigns',
      'Meta Ads (Facebook & Instagram)',
      'A/B Creative & Copy Testing',
      'Conversion Rate Optimization (CRO)',
      'Landing Page Funnel Audits',
      'CPL Reduction Strategies',
      'Audience Segmentation',
    ],
  },
  {
    id: 'crm-automation',
    title: 'CRM & Lead Management',
    iconName: 'Users',
    spectrum: 'warm',
    description: 'Zero lead leakage: high-velocity capture, qualification algorithms, and automated multi-touch deal stages.',
    skills: [
      'HubSpot CRM',
      'Salesforce CRM',
      'Zoho CRM',
      'Pipedrive',
      'Lead Scoring & Stage Hygiene',
      'Automated Nurture Sequences',
      'WhatsApp Cloud API Dispatch',
    ],
  },
  {
    id: 'gmb-local',
    title: 'GMB & Local Marketing',
    iconName: 'MapPin',
    spectrum: 'warm',
    description: 'Hyperlocal domination: ranking multi-location businesses in Google Local 3-Packs and driving verified calls.',
    skills: [
      'Multi-Location GMB Setup',
      'Local Pack Rank Acceleration',
      'Hyperlocal Ad Targeting',
      'NAP & Citation Consistency',
      'Review Velocity Architecture',
      'Call & Direction Tracking',
    ],
  },
  {
    id: 'analytics-dashboards',
    title: 'Analytics & Reporting Tools',
    iconName: 'BarChart3',
    spectrum: 'cool',
    description: 'Executive revenue dashboards and multi-touch attribution transforming click streams into executive ROI insights.',
    skills: [
      'Google Analytics 4 (GA4)',
      'Looker Studio Dashboards',
      'UTM Parameter Taxonomy',
      'Google Tag Manager (GTM)',
      'Ahrefs & SEMrush',
      'Meta Business Suite',
      'Canva & Creative Tools',
    ],
  },
];

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    stepNumber: '01',
    title: 'Multi-Channel Intent Ingestion',
    badge: 'Intent Trigger',
    spectrum: 'cool',
    description: 'Captures incoming intent across Google Ads, Meta Ads, Organic Search, GMB direct calls, and high-intent landing page forms.',
    tools: ['Google Ads', 'Meta Ads', 'Search Console', 'GMB'],
    output: 'Real-time Webhook Payload (UTMs, Search Intent, User Profile)',
    metrics: '0s Ingestion Delay',
    latency: '< 100ms',
  },
  {
    stepNumber: '02',
    title: 'n8n & Antigravity AI Engine',
    badge: 'AI Qualification',
    spectrum: 'cool',
    description: 'Parses raw lead payload, runs sentiment & intent qualification prompt sequences, and enriches firmographic buyer profiles.',
    tools: ['n8n', 'Antigravity', 'Make', 'AI Prompts'],
    output: 'Enriched & Scored High-Intent Lead Profile',
    metrics: '+20% Efficiency Gain',
    latency: '350ms',
  },
  {
    stepNumber: '03',
    title: 'CRM Lead Scoring & Ingestion',
    badge: 'Pipeline Sync',
    spectrum: 'dual',
    description: 'Synchronizes deal record into HubSpot/Salesforce, assigns deal priority tier, and tags acquisition channel taxonomy.',
    tools: ['HubSpot CRM', 'Salesforce', 'Zoho CRM', 'Pipedrive'],
    output: 'Deal Stage Auto-Created with Attribution Tags',
    metrics: 'Zero Lead Leakage',
    latency: '200ms',
  },
  {
    stepNumber: '04',
    title: 'Instant WhatsApp Sales Dispatch',
    badge: 'Conversion Trigger',
    spectrum: 'warm',
    description: 'Dispatches personalized interactive WhatsApp template to the lead while simultaneously alerting the sales rep via push notification.',
    tools: ['WhatsApp Cloud API', 'Twilio', 'CRM Webhooks'],
    output: '<5s Direct Sales Engagement on Lead Device',
    metrics: '+45% Lead Conversion Surge',
    latency: '< 5 Seconds',
  },
  {
    stepNumber: '05',
    title: 'Closed-Loop GA4 Attribution',
    badge: 'Optimization Loop',
    spectrum: 'cool',
    description: 'Feeds offline deal value back to GA4 and ad bidding algorithms to continuously train smart bidding toward high-converting buyer cohorts.',
    tools: ['GA4', 'Looker Studio', 'Offline Conversion API'],
    output: 'Live ROAS Attribution & Smart Bid Retargeting',
    metrics: '8+ Hours/Week Saved',
    latency: 'Real-time Sync',
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Digital Marketing Executive',
    company: 'Sparrowbytes Fintech Solution',
    location: 'Gurugram, Haryana',
    period: 'Oct 2025 – Jun 2026',
    current: false,
    type: 'Full-time',
    spectrum: 'dual',
    highlights: [
      'Spearheaded FinTech-focused Geo SEO and technical architecture optimizations, driving +30% organic traffic growth within 8 months.',
      'Optimized full-funnel Google Ads and Meta Ads campaigns, achieving a 25% PPC ROI improvement and significant CPL reduction.',
      'Architected custom n8n and Zapier AI automation pipelines connecting ad leads to CRM, saving 8+ hours/week with a 20% operational efficiency gain.',
      'Developed real-time executive dashboards in GA4 and Looker Studio for multi-touch revenue attribution.',
    ],
    metrics: [
      { label: 'Organic Traffic Growth', value: '+30%', spectrum: 'cool' },
      { label: 'PPC ROI Improvement', value: '+25%', spectrum: 'cool' },
      { label: 'Weekly Time Saved', value: '8+ hrs/wk', spectrum: 'warm' },
      { label: 'Operational Efficiency', value: '+20%', spectrum: 'warm' },
    ],
    tags: ['FinTech SEO', 'Google Ads', 'Meta Ads', 'n8n Automation', 'GA4', 'Looker Studio', 'Zapier'],
  },
  {
    role: 'Digital Marketing Executive',
    company: 'Ainosof Technology',
    location: 'Bhiwadi, Rajasthan',
    period: 'Feb 2025 – Sep 2025',
    current: false,
    type: 'Full-time',
    spectrum: 'warm',
    highlights: [
      'Boosted lead quality and conversion rate by 25% through high-intent landing page CRO and lead scoring models.',
      'Elevated social media brand presence and engagement by 40% across key digital platforms via targeted SMO strategies.',
      'Drove a 30% organic traffic surge through in-depth technical audits, semantic keyword mapping, and backlink initiatives.',
      'Configured Make (Integromat) multi-step automation workflows for automated lead qualification and team alerts.',
    ],
    metrics: [
      { label: 'Lead Quality & CRO', value: '+25%', spectrum: 'warm' },
      { label: 'SMO Engagement', value: '+40%', spectrum: 'warm' },
      { label: 'Organic Traffic', value: '+30%', spectrum: 'cool' },
    ],
    tags: ['Technical SEO', 'Lead Scoring', 'Make (Integromat)', 'CRO', 'SMO', 'Analytics Audits'],
  },
  {
    role: 'Digital Marketing Intern',
    company: 'IIADM | Indian Institute of Advanced Digital Marketing',
    location: 'Delhi NCR, India',
    period: 'Aug 2024 – Jan 2025',
    current: false,
    type: 'Internship & Certification',
    spectrum: 'cool',
    highlights: [
      'Executed live Google PPC campaigns delivering a 25% increase in verified lead volume while maintaining tight target CPA.',
      'Implemented foundational AI-assisted SEO workflows and automated routines using n8n and Antigravity.',
      'Achieved 15% organic traffic expansion across client web properties through on-page optimization and schema integration.',
      'Graduated with Advanced Digital Marketing Certification in January 2025.',
    ],
    metrics: [
      { label: 'PPC Lead Volume', value: '+25%', spectrum: 'cool' },
      { label: 'Organic Traffic', value: '+15%', spectrum: 'cool' },
      { label: 'Certification', value: 'Top Honors', spectrum: 'warm' },
    ],
    tags: ['Google PPC', 'AI SEO', 'n8n', 'Antigravity', 'On-Page SEO', 'Schema Markup'],
  },
];

export const KEY_PROJECTS: ProjectItem[] = [
  {
    id: 'studio-baron',
    title: 'Studio Baron Photography',
    client: 'Studio Baron Photography (Canada)',
    location: 'Canada (International)',
    timeline: 'Oct 2025',
    category: 'International Geo SEO',
    spectrum: 'cool',
    industryTheme: 'from-blue-500/15 via-cyan-500/5 to-transparent',
    iconType: 'camera',
    headlineMetric: 'Top 4–6',
    headlineLabel: 'Rankings in 60 Days',
    description: 'Devised and deployed an international Geo SEO strategy for a Canadian luxury photography brand, dominating regional search queries for high-ticket bookings.',
    results: [
      { label: 'Keyword Rankings', value: 'Top 4–6 (60 Days)' },
      { label: 'Domain Authority', value: '+25%' },
      { label: 'Organic Impressions', value: '+40%' },
    ],
    technologies: ['International Geo SEO', 'Surfer SEO', 'Schema Markup', 'Ahrefs', 'Technical Audit'],
  },
  {
    id: 'primus-clinic',
    title: 'Primus Skin & Hair Clinic',
    client: 'Primus Skin & Hair Clinic',
    location: 'Gurgaon, Haryana',
    timeline: 'Oct 2025',
    category: 'Local SEO + GMB + WhatsApp Automation',
    spectrum: 'warm',
    industryTheme: 'from-rose-500/15 via-orange-500/5 to-transparent',
    iconType: 'clinic',
    headlineMetric: '+45%',
    headlineLabel: 'WhatsApp & Call Leads Surge',
    description: 'Engineered a hyperlocal GMB growth system paired with an autonomous n8n WhatsApp workflow to capture, qualify, and book consultation leads instantaneously.',
    results: [
      { label: 'WhatsApp / Call Leads', value: '+45%' },
      { label: 'Local Visibility', value: '+60% – 75%' },
      { label: 'Target Keywords', value: 'Top 3–10 (8-12 terms)' },
    ],
    technologies: ['GMB Optimization', 'n8n Automation', 'WhatsApp API', 'Local Pack Strategy', 'Review Velocity'],
  },
  {
    id: 'modern-steel',
    title: 'Modern Steel Doors & Windows',
    client: 'Modern Steel Doors & Windows',
    location: 'India',
    timeline: 'Apr 2025 – Sep 2025',
    category: 'GMB + Meta Ads + AI Pipeline',
    spectrum: 'warm',
    industryTheme: 'from-amber-500/15 via-orange-500/5 to-transparent',
    iconType: 'door',
    headlineMetric: '+300%',
    headlineLabel: 'Local Visibility Growth',
    description: 'Executed an end-to-end offline-to-online digital transformation combining hyperlocal GMB rankings, high-converting Meta Ads, and automated CRM pipelines.',
    results: [
      { label: 'Local Visibility', value: '+300%' },
      { label: 'Qualified Leads', value: '40–60 / Month' },
      { label: 'Inbound Inquiries', value: '+50%' },
    ],
    technologies: ['Meta Ads', 'Hyperlocal GMB', 'HubSpot CRM', 'Lead Scoring', 'Landing Page CRO'],
  },
  {
    id: 'bhagya-achievers',
    title: 'Bhagya Achievers',
    client: 'Bhagya Achievers',
    location: 'India',
    timeline: 'Feb 2025 – Jun 2025',
    category: 'SEO Ranking Acceleration',
    spectrum: 'cool',
    industryTheme: 'from-cyan-500/15 via-indigo-500/5 to-transparent',
    iconType: 'growth',
    headlineMetric: '+50%',
    headlineLabel: 'Keyword Rankings in 23 Days',
    description: 'Executed rapid technical restructuring, high-velocity semantic content optimization, and targeted backlink acquisition to catapult search rankings in record time.',
    results: [
      { label: 'Ranking Speed', value: '+50% in 23 Days' },
      { label: 'Organic Reach', value: '+40%' },
      { label: 'Domain Authority', value: '+35%' },
    ],
    technologies: ['Technical SEO', 'SEMrush', 'Content Clustering', 'Backlink Outreach', 'Search Console'],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Google Ads AI-Powered Performance Ads Certification',
    issuer: 'Google',
    validity: 'Apr 2026 – Apr 2027',
    badgeColor: 'cool',
    spectrum: 'cool',
    status: 'Active Credential',
    certificateId: '180882567',
    credentialUrl: 'https://skillshop.credential.net/ca36d9d5-68bc-450b-9055-3943d60b2be7',
  },
  {
    title: 'Google Analytics Individual Qualification (GAIQ)',
    issuer: 'Google Skillshop',
    validity: 'Nov 2025 – Nov 2026',
    badgeColor: 'cool',
    spectrum: 'cool',
    status: 'Active Credential',
    credentialUrl: 'https://skillshop.credential.net/b93fad15-7ef3-4513-be71-dc23158dc823',
  },
  {
    title: 'Advanced Digital Marketing Certification',
    issuer: 'IIADM | Indian Institute of Advanced Digital Marketing',
    validity: 'Issued Jan 2025',
    badgeColor: 'warm',
    spectrum: 'warm',
    status: 'Certified Graduate',
  },
  {
    title: 'Advanced Course in Computer Application (ADCA)',
    issuer: 'Computer Academy',
    validity: 'Issued May 2023',
    badgeColor: 'warm',
    spectrum: 'warm',
    status: 'Certified',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Amity University Online, Noida',
    period: '2025 – Present',
    details: 'Focusing on Software Systems, Web Technologies, Database Management, and Data Analytics.',
  },
  {
    degree: '12th Standard',
    institution: 'MSD Senior Secondary School, Tauru, Haryana',
    period: '2024 – 2025',
    details: 'Senior Secondary Education with strong foundation in analytical thinking and sciences.',
  },
];
