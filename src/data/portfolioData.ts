import { Project, Service, SkillCategory, Testimonial, FaqItem, ExperienceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Techyora",
  title: "Enterprise Technology Solutions Company | Dedicated Engineering Team",
  brandName: "TECHYORA",
  Mobile: "+91 9524227511",
  experience: "Enterprise Software & Solutions Collective",
  availability: "Accepting Enterprise & Growth Projects",
  email: "connect.techyora@gmail.com",
  tagline: "We Architect. We Engineer. We Automate. We Support 24/7.",
  bioHeading: "One Company. One Dedicated Team. Complete Enterprise Digital Solutions.",
  bioText1: "Techyora is a full-service technology company delivering enterprise-grade software engineering, ERPNext implementations, custom business systems, 3D web portals, agentic AI automation, high-impact branding, and 24/7 AMC support.",
  bioText2: "Our dedicated in-house team unites enterprise ERP architects, custom software engineers, AI developers, creative brand designers, and cloud DevOps specialists to provide scalable, secure, and commercially transformative solutions without agency overhead.",
  stats: [
    { label: "Enterprise Deployments", value: 50, suffix: "+" },
    { label: "Service Disciplines", value: 6, suffix: "" },
    { label: "Uptime SLA Commitment", value: 99.9, suffix: "%" },
    { label: "Quality & Satisfaction", value: 100, suffix: "%" },
  ],
  socials: {
    linkedin: "https://linkedin.com/in/techyora",
    whatsapp: "https://web.whatsapp.com/send?phone=919524227511",
  },
  whatIBring: [
    "ERP, CRM & HCM Enterprise Architecture",
    "Custom Software (Billing, Fleet, Logistics, Inventory)",
    "3D Interactive Web & E-Commerce Engineering",
    "Agentic AI, Conversational Chatbots & Automation",
    "Graphic Design, Flex, Pamphlets & Digital Branding",
    "24/7 AMC, Cloud DevOps & SLA Support Services"
  ]
};

export const SERVICES: Service[] = [
  {
    id: "erp",
    title: "ERP, CRM, HCM & Business Solutions",
    description: "Enterprise ERP, CRM & HCM solutions engineered on ERPNext and custom Frappe architecture. Streamline multi-branch operations, automated payroll, employee self-service, sales pipelines, inventory tracking, financial accounting, and business process automation.",
    iconName: "Database",
    features: [
      "ERPNext Implementation, Customization & Migration",
      "Custom CRM Systems with Lead & Sales Pipeline Automation",
      "Custom HCM & HRMS (Payroll, Attendance, Appraisals & Compliance)",
      "Multi-Branch Accounting, GST Invoicing & General Ledger",
      "Warehouse, Supply Chain & Inventory Management",
      "Frappe Custom DocTypes, Server Scripts & REST API Integrations"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    description: "Tailor-made software applications engineered for unique commercial models. From GST billing and inventory control to specialized industry platforms such as fleet management, logistics tracking, and warehouse automation.",
    iconName: "Code",
    features: [
      "Custom Billing & Invoicing Software (GST, POS & Thermal Printing)",
      "Inventory & Multi-Warehouse Management Software",
      "Fleet Management Software (Vehicle Tracking, Fuel & Dispatch)",
      "Logistics & Warehouse Management Software (Dispatch, Consignments & Barcode Audits)",
      "Custom Business Operations & Enterprise Portal Development",
      "Scalable Relational Database Architecture (PostgreSQL, MariaDB, MySQL)"
    ]
  },
  {
    id: "web",
    title: "Web Development & Design",
    description: "High-performance, modern, and SEO-optimized web experiences. Specializing in interactive 3D WebGL websites, full-scale e-commerce stores, dynamic enterprise web applications, and high-converting landing pages.",
    iconName: "Globe",
    features: [
      "Interactive 3D WebGL Websites & Immersive Digital Experiences",
      "E-Commerce Platforms & Online Store Development",
      "Static & Dynamic Corporate Web Applications (React / Next.js)",
      "High-Converting SEO Landing Pages with 99+ Core Web Vitals",
      "Client Portals, SaaS Dashboards & Multi-Tenant Web Apps",
      "Mobile-First Responsive UI/UX Design & Search Engine Optimization"
    ]
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Autonomous agentic AI, enterprise software integrations, intelligent conversational chatbots, and automated robotic process workflows designed to eliminate manual bottlenecks.",
    iconName: "Cpu",
    features: [
      "Agentic AI Systems & Multi-Agent Autonomous Workflows",
      "Enterprise API & Software Integrations (ERP, CRM, Webhooks, n8n)",
      "Conversational AI & Customer Support Chatbots (WhatsApp & Web)",
      "Intelligent Document Processing (IDP) with Automated OCR",
      "Custom LLM Fine-Tuning & Retrieval-Augmented Generation (RAG)",
      "Robotic Process Automation (RPA) for Repetitive Business Tasks"
    ]
  },
  {
    id: "branding",
    title: "Graphic Design & Branding",
    description: "End-to-end creative branding, visual identity systems, promotional print collateral, and digital marketing creatives that establish market authority and elevate customer trust.",
    iconName: "PenTool",
    features: [
      "Professional Logo Design & Complete Brand Identity Guidelines",
      "Pamphlets, Flyers & Corporate Brochure Design",
      "Flex Design, Large-Format Banners, Hoardings & Event Signage",
      "Digital Marketing Creatives & Social Media Campaign Ads",
      "Business Stationery (Visiting Cards, Letterheads & Envelopes)",
      "Product Label, Packaging & Marketing Collateral Design"
    ]
  },
  {
    id: "amc-support",
    title: "AMC & Support Services",
    description: "Comprehensive Annual Maintenance Contracts (AMC) and ongoing technical support ensuring 99.9% uptime, rapid bug fixes, cloud infrastructure management, and continuous optimization.",
    iconName: "ShieldCheck",
    features: [
      "ERP Support Services (ERPNext / Frappe Ongoing Maintenance)",
      "Software Support & Continuous Enhancement (24/7 SLA Backed)",
      "Cloud Infrastructure Support (AWS, GCP, DigitalOcean & Docker)",
      "Proactive Bug Fixing, Code Audits & Performance Optimization",
      "Security Patching, SSL, Firewall & Vulnerability Resolution",
      "Automated Daily Backups, Disaster Recovery & Database Tuning"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "ERP, CRM & HCM Solutions",
    skills: [
      { name: "ERPNext Implementation", tag: "Complete Enterprise ERP System" },
      { name: "Frappe Framework", tag: "Custom Business Modules & Scripts" },
      { name: "Custom CRM Software", tag: "Lead Tracking & Pipeline Automation" },
      { name: "Custom HCM & Payroll", tag: "Attendance, Salary & Compliance" },
      { name: "Accounting & GST Invoicing", tag: "General Ledger & Tax Reporting" },
      { name: "Inventory & Warehouses", tag: "Stock Valuation & Supply Chain" },
      { name: "Workflow Approvals", tag: "Automated Multi-Stage Logic" },
      { name: "REST APIs & Webhooks", tag: "Third-Party ERP Integrations" }
    ]
  },
  {
    title: "Custom Software Solutions",
    skills: [
      { name: "Custom Billing Software", tag: "GST Invoicing, POS & Thermal Print" },
      { name: "Inventory Management Software", tag: "Barcoding, Batch Tracking & Stock" },
      { name: "Fleet Management Software", tag: "Vehicle GPS, Fuel & Dispatch" },
      { name: "Logistics & Consignment Software", tag: "Consignments, Barcode Audits & Dispatch" },
      { name: "Custom Enterprise Portals", tag: "Role-Based Business Dashboards" },
      { name: "Database Engineering", tag: "PostgreSQL, MariaDB & MySQL" },
      { name: "Scalable Microservices", tag: "Node.js, Python & High Concurrency" },
      { name: "System Modernization", tag: "Legacy Code Migration & Upgrades" }
    ]
  },
  {
    title: "Web Development & 3D Design",
    skills: [
      { name: "3D Interactive Websites", tag: "WebGL, Three.js & Engaging UI" },
      { name: "E-Commerce Platforms", tag: "Custom Stores, Payment & Cart Systems" },
      { name: "React & Next.js", tag: "Modern SSR & Jamstack Architecture" },
      { name: "Static & Dynamic Websites", tag: "Corporate Portals & Web Apps" },
      { name: "SEO-Optimized Landing Pages", tag: "High-Converting & 99+ Core Web Vitals" },
      { name: "Responsive UI/UX Design", tag: "Tailwind CSS & Mobile-First Layouts" },
      { name: "API & Headless Integration", tag: "CMS, CRM & Gateway Bridges" },
      { name: "Full Search Engine Optimization", tag: "Schema Markup & Technical SEO" }
    ]
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "Agentic AI Systems", tag: "Multi-Agent Autonomous Orchestration" },
      { name: "Enterprise API Integrations", tag: "Zapier, Make, n8n & Custom Webhooks" },
      { name: "Conversational Chatbots", tag: "WhatsApp & Web Customer Support" },
      { name: "Intelligent Document OCR", tag: "Automated Invoice & Receipt Parsing" },
      { name: "Generative AI & LLMs", tag: "RAG Systems & Private Knowledge Bases" },
      { name: "Robotic Process Automation", tag: "Eliminating Repetitive Tasks" },
      { name: "Automated Business Analytics", tag: "Intelligent Executive Reporting" },
      { name: "Workflow Optimization", tag: "Zero-Latency Operational Pipelines" }
    ]
  },
  {
    title: "Graphic Design & Branding",
    skills: [
      { name: "Professional Logo Design", tag: "Brand Identity & Vector Assets" },
      { name: "Pamphlets & Flyers", tag: "Sales Brochures & Marketing Collateral" },
      { name: "Flex Design & Signage", tag: "Large Format Banners & Event Hoardings" },
      { name: "Digital Marketing Creatives", tag: "Social Media Ads & Campaign Assets" },
      { name: "Business Stationery", tag: "Visiting Cards, Letterheads & Envelopes" },
      { name: "Product Packaging & Labels", tag: "Commercial Packaging Artwork" },
      { name: "Brand Style Guides", tag: "Typography, Palette & Guidelines" },
      { name: "Figma & Creative Suite", tag: "Vector & Print-Ready Production" }
    ]
  },
  {
    title: "AMC & Support Services",
    skills: [
      { name: "ERP Support Services", tag: "ERPNext Maintenance & DocType Patches" },
      { name: "Software Support & Maintenance", tag: "24/7 SLA Bug Fixing & Enhancements" },
      { name: "Cloud Infrastructure Support", tag: "AWS, GCP, DigitalOcean & Linux" },
      { name: "Proactive Bug Resolution", tag: "Error Monitoring & Continuous Patching" },
      { name: "Security & SSL Maintenance", tag: "Firewall, Vulnerability & Audit Fixes" },
      { name: "Database Tuning & Backups", tag: "Automated Snapshots & Recovery Plans" },
      { name: "Performance Optimization", tag: "Query Tuning & Latency Minimization" },
      { name: "Dedicated Helpdesk Support", tag: "Direct Technical Access & Rapid SLA" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-01",
    title: "Enterprise ERP, CRM & HCM Suite",
    category: "ERP",
    description: "Unified enterprise platform engineered on ERPNext and Frappe Framework covering multi-branch accounting, custom CRM, HCM payroll, and supply chain.",
    longDescription: "A comprehensive enterprise resource planning platform engineered on top of ERPNext and Frappe Framework for a growing enterprise. Replaced fragmented legacy spreadsheets with a unified system managing multi-branch financial accounting, automated GST billing, lead-to-order CRM pipelines, attendance-linked HCM payroll, and real-time inventory control.",
    technologies: ["ERPNext", "Frappe Framework", "Python", "MariaDB", "REST APIs", "Custom HCM"],
    features: [
      "Custom CRM Pipeline with Automated Lead Routing & Deal Tracking",
      "Full HCM Suite: Biometric Attendance, Payroll Processing & Tax Compliance",
      "Real-Time Multi-Warehouse Inventory & Reorder Level Alerts",
      "Automated Sales-to-Invoice Workflows with GST & E-Way Bill Integration"
    ],
    architectureSummary: "Built on Frappe Framework with custom DocTypes, background queue hooks (Celery/Redis), MariaDB database tuning, and custom Vue/JS web components for interactive operational boards.",
    businessImpact: "Reduced month-end financial reconciliation time by 65% and automated monthly payroll for 250+ employees without errors.",
    clientType: "Mid-Market Enterprise / Distribution Business",
    imagePlaceholderText: "ENTERPRISE ERP & HCM SUITE",
    gradientFrom: "from-emerald-950/80 to-zinc-950"
  },
  {
    id: "proj-02",
    title: "Custom Fleet & Logistics Software",
    category: "Custom Software",
    description: "Customized fleet management and dispatch software featuring live vehicle tracking, fuel monitoring, route optimization, and driver settlement.",
    longDescription: "A bespoke logistics management platform engineered specifically for transport and logistics operators. The application integrates real-time GPS telemetry, automated dispatch scheduling, driver trip logs, fuel consumption auditing, and maintenance reminders to cut vehicle operating costs.",
    technologies: ["Node.js", "React", "PostgreSQL", "GPS Telemetry", "Mapbox", "REST APIs"],
    features: [
      "Real-Time Vehicle Tracking & Geo-Fencing Dispatch Alerts",
      "Automated Fuel Consumption & Mileage Reconciliation",
      "Driver Trip Settlements, Advances & Digital Proof of Delivery",
      "Scheduled Vehicle Preventive Maintenance & Compliance Tracking"
    ],
    architectureSummary: "Event-driven architecture with WebSocket GPS stream processing, optimized spatial queries in PostgreSQL/PostGIS, and responsive mobile-first React dispatch dashboard.",
    businessImpact: "Lowered fleet fuel waste by 18% and slashed daily dispatch planning time from 3 hours to under 20 minutes.",
    clientType: "Commercial Fleet & Logistics Operator",
    imagePlaceholderText: "FLEET & DISPATCH SOFTWARE",
    gradientFrom: "from-green-950/80 to-zinc-950"
  },
  {
    id: "proj-03",
    title: "Custom Warehouse & Inventory Operations Platform",
    category: "Custom Software",
    description: "Specialized warehouse management and barcode inventory software managing dispatch orders, batch auditing, stock valuation, and supplier logistics.",
    longDescription: "A secure, high-concurrency warehouse and inventory management software engineered to replace manual stock entries and spreadsheet tracking. The platform provides automated barcode scanning, multi-warehouse stock replenishment, batch and serial tracking, pick-and-pack fulfillment, and live accounting synchronization.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Barcode Scanner", "Thermal Print Engine"],
    features: [
      "Multi-Warehouse Inventory Tracking & Live Bin Locations",
      "Automated Barcode Generation, Batch & Serial Expiry Audits",
      "Pick, Pack & Ship Dispatch Orders with Bluetooth Thermal Printing",
      "Real-time Stock Valuation, Reorder Alerts & GST Accounting Sync"
    ],
    architectureSummary: "FastAPI REST backend with high-throughput inventory ledger logic in PostgreSQL, offline-first barcode scanning PWA, and direct POS thermal printer integrations.",
    businessImpact: "Reduced warehouse inventory discrepancies by 98%, cut order picking time by 60%, and automated supplier reorder workflows.",
    clientType: "Wholesale Distribution & Supply Chain Enterprise",
    imagePlaceholderText: "WAREHOUSE INVENTORY SOFTWARE",
    gradientFrom: "from-teal-950/80 to-zinc-950"
  },
  {
    id: "proj-04",
    title: "Interactive 3D E-Commerce Web Portal",
    category: "Web",
    description: "Next-generation 3D interactive web portal and e-commerce experience built with WebGL, sub-second Next.js architecture, and seamless checkout.",
    longDescription: "A cutting-edge interactive 3D web platform built for high-end consumer products. Featuring real-time 3D product customization using Three.js / WebGL, instant mobile responsiveness, integrated secure payment gateways, and sub-second page rendering for maximum SEO discoverability.",
    technologies: ["React", "Next.js", "Three.js", "WebGL", "Tailwind CSS", "Stripe Gateway"],
    features: [
      "Interactive Real-Time 3D Product Configurator & Material Viewer",
      "Lightning-Fast Sub-Second Jamstack Architecture with 99+ Lighthouse Scores",
      "Multi-Currency E-Commerce Checkout with Instant Order Tracking",
      "Comprehensive On-Page Technical SEO & Schema Markup"
    ],
    architectureSummary: "Next.js dynamic rendering coupled with optimized GLTF 3D assets, GPU-accelerated shaders, and serverless edge functions for instant global asset distribution.",
    businessImpact: "Boosted product conversion rates by 125% and reduced bounce rate by 42% compared to standard static storefronts.",
    clientType: "E-Commerce Brand & Global Product Retailer",
    imagePlaceholderText: "3D WEB & E-COMMERCE PORTAL",
    gradientFrom: "from-lime-950/80 to-zinc-950"
  },
  {
    id: "proj-05",
    title: "Agentic AI & Enterprise WhatsApp Bot Engine",
    category: "AI",
    description: "Autonomous agentic AI workflow engine with multi-agent orchestration, intelligent document OCR parsing, and conversational WhatsApp business bot.",
    longDescription: "An enterprise AI automation system that orchestrates multi-agent tasks across business software. It reads incoming vendor invoices and receipts via OCR, automatically updates accounting records, and responds intelligently to customer inquiries on WhatsApp with real-time database lookups.",
    technologies: ["Python", "LangChain", "OpenAI / Claude APIs", "FastAPI", "WhatsApp Cloud API", "OCR Engine"],
    features: [
      "Multi-Agent Orchestration for Complex Business Task Execution",
      "WhatsApp Business API Bot with Real-Time Customer Order & Service Lookups",
      "Intelligent Document Processing (IDP) with 98%+ OCR Invoice Extraction",
      "Automated Bi-Directional Synchronization with ERP & CRM Databases"
    ],
    architectureSummary: "FastAPI microservices pipeline combining vector embeddings for RAG document retrieval, asynchronous webhooks for WhatsApp Cloud API, and automated ERP doc insertion.",
    businessImpact: "Cut customer support response time from 45 minutes to instant automated resolution while eliminating 80+ hours of monthly manual invoice entry.",
    clientType: "Enterprise Supply Chain & Customer Support Teams",
    imagePlaceholderText: "AGENTIC AI & BOT ENGINE",
    gradientFrom: "from-emerald-900/60 to-zinc-950"
  },
  {
    id: "proj-06",
    title: "Corporate Brand Identity & Digital Marketing Suite",
    category: "Design",
    description: "Full-scale corporate brand identity system, custom logo design, flex hoardings, brochures, pamphlets, and high-impact digital marketing assets.",
    longDescription: "An end-to-end visual rebranding and marketing collateral campaign for a growing enterprise. The project encompassed primary vector logo creation, full corporate visual guidelines, large-format flex designs for retail outlets and hoardings, sales pamphlets, and high-converting social media marketing creatives.",
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Print Vector Systems", "Digital Marketing"],
    features: [
      "Vector Corporate Logo Design with Color Palette & Typography Standards",
      "Large-Format Flex Banners, Signboards & Hoarding Artwork",
      "Bespoke Product Pamphlets, Trifold Brochures & Marketing Fliers",
      "Digital Marketing Ad Creatives for Meta, Google & LinkedIn Campaigns"
    ],
    architectureSummary: "Complete multi-format design library delivered with CMYK print-ready vector files (PDF/EPS) and RGB digital assets optimized for social platforms and web performance.",
    businessImpact: "Standardized visual branding across 12 branch locations, elevating brand trust and driving a 60% increase in marketing campaign engagement.",
    clientType: "Commercial Business / Retail & Enterprise Brand",
    imagePlaceholderText: "BRANDING, FLEX & PRINT DESIGN",
    gradientFrom: "from-teal-950/80 to-zinc-950"
  }
];

export const WHY_WORK_WITH_ME = [
  {
    number: "01",
    title: "Business & Strategy First",
    description: "Our engineering team takes time to deeply understand your commercial goals, operational challenges, and growth model before architecting software solutions."
  },
  {
    number: "02",
    title: "Cross-Functional In-House Team",
    description: "From ERP architects and backend engineers to 3D designers, AI researchers, and cloud DevOps specialists, we deliver all capabilities seamlessly under one roof."
  },
  {
    number: "03",
    title: "Scalable Enterprise Standards",
    description: "We engineer production-grade systems on battle-tested frameworks (ERPNext, React, Next.js, Python, PostgreSQL) designed for high concurrency and zero downtime."
  },
  {
    number: "04",
    title: "24/7 AMC & Ongoing Support",
    description: "We don't disappear after deployment. Our proactive Annual Maintenance Contracts (AMC) guarantee continuous uptime, rapid bug fixes, and cloud optimization."
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Discovery & Scoping",
    description: "We conduct an in-depth analysis of your business processes, existing infrastructure, software requirements, and key performance indicators."
  },
  {
    step: "02",
    title: "System Architecture",
    description: "Our technical architects design data schemas, API contracts, UI wireframes, security protocols, and a clear phased milestone roadmap."
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Our engineering team writes clean, modular, production-tested code with weekly sprint reviews and interactive staging demos."
  },
  {
    step: "04",
    title: "Rigorous QA & Security",
    description: "Every solution undergoes thorough automated testing, load testing, vulnerability scanning, and edge-case validation."
  },
  {
    step: "05",
    title: "Deployment & Training",
    description: "We execute seamless production deployment on secure cloud servers, complete database migrations, and train your operational team."
  },
  {
    step: "06",
    title: "24/7 AMC & Optimization",
    description: "Our dedicated support team provides proactive server monitoring, routine backups, bug fixing, and continuous feature enhancements."
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: "2020 - Present",
    role: "Techyora Technologies — Enterprise Solutions & Engineering Company",
    focus: "Full-Lifecycle Enterprise Software, ERPNext, Custom Solutions & Cloud AMC",
    highlights: [
      "Engineered and deployed scalable digital systems for 50+ businesses across manufacturing, logistics, retail, fintech, and services.",
      "Delivered complete ERPNext, CRM & HCM implementations unifying multi-branch operations, inventory, and payroll.",
      "Developed specialized custom software solutions including GST billing, fleet tracking, and warehouse logistics management platforms.",
      "Provided 24/7 SLA-backed AMC maintenance, ensuring 99.9% uptime for business-critical client platforms."
    ]
  },
  {
    period: "2017 - 2020",
    role: "Core Technology Solutions & Systems Architecture",
    focus: "ERP Engineering, Web Architecture & Custom Software Delivery",
    highlights: [
      "Built bespoke enterprise web portals, financial reporting engines, and business process automation pipelines.",
      "Helped growing companies transition from manual paper and spreadsheets to streamlined database software.",
      "Integrated payment gateways, thermal receipt engines, and real-time operational analytics dashboards."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Techyora's team deployed our complete ERPNext, CRM, and HCM solution seamlessly across 5 branches. Their technical depth in Frappe and payroll automation saved us hundreds of operational hours monthly.",
    author: "Managing Director",
    role: "ERP, CRM & HCM Implementation",
    companyType: "Manufacturing & Distribution Enterprise",
    isSample: false
  },
  {
    id: "test-2",
    quote: "The custom fleet management and inventory software Techyora built gave us total visibility over vehicle dispatch, fuel usage, and warehouse stock. Their team is responsive, highly skilled, and delivers on time.",
    author: "Operations Head",
    role: "Custom Software Solutions",
    companyType: "Logistics & Transport Company",
    isSample: false
  },
  {
    id: "test-3",
    quote: "Techyora delivered our 3D interactive web portal, integrated an autonomous WhatsApp AI bot, and now manages our cloud servers under their AMC plan. Having one dedicated team handle everything has been invaluable.",
    author: "Founder & CEO",
    role: "3D Web, AI & AMC Support",
    companyType: "Fintech & Financial Services",
    isSample: false
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What core services does Techyora provide as a technology company?",
    answer: "Techyora provides 6 core enterprise services: (1) ERP, CRM, HCM & Business Solutions (ERPNext & Frappe), (2) Custom Software Solutions (Billing, Inventory, Fleet Management, Logistics Software), (3) Web Development & Design (Interactive 3D Websites, E-Commerce, Portals, Landing Pages), (4) AI & Automation (Agentic AI, Workflow Integrations, Chatbots, Document OCR), (5) Graphic Design & Branding (Logo Design, Pamphlets, Flex Signage, Digital Marketing), and (6) AMC & Support Services (ERP Maintenance, Software & Cloud Support, Bug Fixing, 24/7 SLA)."
  },
  {
    question: "Can your team implement, customize, and migrate our systems to ERPNext?",
    answer: "Yes, absolutely. Our dedicated ERP architects specialize in end-to-end ERPNext and Frappe framework deployments. We configure custom DocTypes, automate approval hierarchies, build custom CRM pipelines, implement biometric-linked HCM payroll, set up multi-branch accounting, and integrate third-party APIs with full data migration."
  },
  {
    question: "Do you build custom software like billing, fleet management, or logistics software?",
    answer: "Yes. We engineer bespoke business software tailored to your exact operational workflows. Examples include GST-compliant POS and billing software with thermal printing, multi-warehouse inventory systems, fleet management platforms with live GPS tracking and dispatch, and warehouse logistics software with automated barcode dispatch and inventory ledgers."
  },
  {
    question: "What types of websites and web applications do you build?",
    answer: "We engineer all types of modern web solutions: interactive 3D WebGL websites that create stunning first impressions, full-featured e-commerce platforms with payment gateway integrations, static and dynamic corporate web applications built on React and Next.js, and high-converting landing pages optimized for search engines (SEO) and 99+ Core Web Vitals."
  },
  {
    question: "How does Techyora implement Agentic AI and chatbot automation?",
    answer: "Our AI engineering team builds autonomous multi-agent AI systems, conversational WhatsApp and web customer service chatbots connected directly to your business databases, and Intelligent Document Processing (IDP) pipelines with OCR to automatically parse invoices, receipts, and contracts into structured database records."
  },
  {
    question: "What is included in Techyora's AMC and Support Services?",
    answer: "Our Annual Maintenance Contracts (AMC) provide 24/7 SLA-backed peace of mind: proactive ERPNext support, continuous software bug fixes and feature enhancements, cloud infrastructure monitoring (AWS, GCP, DigitalOcean), Linux and database performance tuning, automated daily backups, security patching, and disaster recovery planning."
  }
];
