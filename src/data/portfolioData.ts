import { Project, Service, SkillCategory, Testimonial, FaqItem, ExperienceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Techyora",
  title: "Freelance Digital Solutions Team | Software, Design, AI & Automation",
  brandName: "TECHYORA",
  location: "India",
  experience: "Experienced Freelance Professionals",
  availability: "Open for Freelance Projects",
  email: "techyora@gmail.com",
  tagline: "We Build. We Design. We Automate. We Deliver.",
  bioHeading: "One Team. Multiple Skills. Complete Digital Solutions.",
  bioText1: "Techyora is a freelance collective of developers, designers, technology specialists, data professionals, and content creators helping startups, entrepreneurs, small businesses, growing companies, and organizations turn ideas and business requirements into practical digital solutions.",
  bioText2: "From custom software and web development to ERP, CRM, AI automation, UI/UX design, graphic design, data entry, data management, and copywriting, we bring diverse skills together to deliver reliable, flexible, and quality-focused freelance solutions.",
  stats: [
    { label: "Digital Solutions", value: 9, suffix: "+" },
    { label: "Service Categories", value: 50, suffix: "+" },
    { label: "Skills & Expertise", value: 30, suffix: "+" },
    { label: "Focus on Quality", value: 100, suffix: "%" },
  ],
  socials: {
    linkedin: "https://linkedin.com/in/sasikumar-a",
    github: "https://github.com/sasikumar-a",
    whatsapp: "https://wa.me/919524227511",
  },
  whatIBring: [
    "Business & Requirement Understanding",
    "Custom Software & Web Solutions",
    "ERP & CRM Solutions",
    "AI & Workflow Automation",
    "UI/UX & Creative Design",
    "Accurate Data Management",
    "Professional Copywriting & Content",
    "Reliable Project Delivery"
  ]
};

export const SERVICES: Service[] = [
  {
    id: "erp",
    title: "ERP, CRM & Business Solutions",
    description: "Flexible ERP and CRM solutions for businesses, including ERP implementation, ERPNext and Frappe customization, workflow automation, business process optimization, reporting, and third-party integrations.",
    iconName: "Database",
    features: [
      "ERPNext & Frappe Implementation and Customization",
      "ERP & CRM Workflow Automation",
      "Accounting & Financial Management Setup",
      "Inventory, Purchase & Supply Chain Management",
      "Sales, CRM & Customer Management",
      "HR, Payroll & Employee Management",
      "Custom Reports, Dashboards & Business Analytics",
      "Third-party API, Webhook & System Integrations"
    ]
  },
  {
    id: "web",
    title: "Web Development & Design",
    description: "Modern, responsive, fast, and SEO-friendly websites for businesses, startups, professionals, and organizations, including corporate websites, WordPress websites, Magento stores, e-commerce platforms, and custom web applications.",
    iconName: "Globe",
    features: [
      "Business & Corporate Websites",
      "WordPress Website Development & Customization",
      "Magento E-commerce Development",
      "E-commerce Websites & Online Stores",
      "High-Converting Landing Pages",
      "Responsive Single & Multi-Page Websites",
      "Custom Web Applications & Portals",
      "React, TypeScript & JavaScript Development",
      "SEO & Website Performance Optimization",
      "Website Maintenance & Technical Support"
    ]
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "AI-powered applications, workflow automation, intelligent assistants, document processing, and business automation.",
    iconName: "Cpu",
    features: [
      "Generative AI & LLM Integrations",
      "Autonomous AI Agents & Workflows",
      "Intelligent Document Processing (OCR/NLP)",
      "Automated Business Data Pipelines",
      "Custom AI Assistant Interfaces"
    ]
  },
  {
    id: "crm-hrm",
    title: "CRM & HRM Solutions",
    description: "CRM, HR management, recruitment, employee management, payroll, and customer workflow solutions.",
    iconName: "Users",
    features: [
      "Lead & Sales Pipeline Automation",
      "Employee Lifecycle & Onboarding Systems",
      "Payroll & Attendance Management",
      "Customer Support & Ticketing Hubs",
      "Custom Dashboard & BI Analytics"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Custom software solutions designed around specific business requirements and workflows.",
    iconName: "Code",
    features: [
      "Tailored Enterprise Backends",
      "Microservice & API Architecture",
      "Database Modeling & Optimization",
      "Legacy Codebase Modernization",
      "Cloud & On-Prem Deployment"
    ]
  },
  {
    id: "digital-business",
    title: "Digital",
    description: "Technology consulting and digital solutions that help businesses improve productivity, efficiency, and customer experience.",
    iconName: "TrendingUp",
    features: [
      "Technology & Architecture Consulting",
      "Business Process Audits & Optimization",
      "Digital Transformation Strategy",
      "Tool Selection & Vendor Evaluation",
      "Post-Launch Scaling & Maintenance"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software & Development",
    skills: [
      { name: "Python", tag: "Backend / AI / Automation" },
      { name: "JavaScript / TypeScript", tag: "Core Frontend & Node" },
      { name: "React", tag: "Frontend Apps & Portals" },
      { name: "HTML5 & Modern CSS", tag: "Responsive UI & Layouts" },
      { name: "REST APIs & Webhooks", tag: "System Integrations" },
      { name: "SQL & MariaDB / Postgres", tag: "Database Design" }
    ]
  },
  {
    title: "ERP & Business",
    skills: [
      { name: "ERPNext", tag: "Enterprise ERP System" },
      { name: "Frappe Framework", tag: "Custom Business Modules" },
      { name: "CRM Systems", tag: "Lead & Pipeline Tracking" },
      { name: "HRM & Payroll", tag: "Workforce Operations" },
      { name: "Manufacturing & Supply Chain", tag: "Material & Production" },
      { name: "Inventory & Purchasing", tag: "Stock & Order Workflows" },
      { name: "Accounting & Finance", tag: "Invoicing & General Ledger" },
      { name: "Workflow Automation", tag: "Business Logic Optimization" }
    ]
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "Generative AI", tag: "LLM APIs & Prompt Logic" },
      { name: "AI Agents & Autonomous Workflows", tag: "Task Automation" },
      { name: "Process Automation (RPA)", tag: "Efficiency Boosters" },
      { name: "Document Processing", tag: "OCR & Data Extraction" },
      { name: "AI-Assisted Development", tag: "Accelerated Delivery" },
      { name: "Data Analysis & Reporting", tag: "Business Insights" }
    ]
  },
  {
    title: "Business & Management",
    skills: [
      { name: "Business Development", tag: "Growth & Opportunity Alignment" },
      { name: "Project Management", tag: "Agile Execution & Delivery" },
      { name: "Client Relationship Management", tag: "Stakeholder Trust" },
      { name: "Solution Consulting", tag: "Tech Architecture & Selection" },
      { name: "Requirement Analysis", tag: "Specification & Scoping" },
      { name: "Customer Success", tag: "Adoption & Post-Launch Growth" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-01",
    title: "Business ERP Platform",
    category: "ERP",
    description: "Customized ERP solution designed to streamline sales, purchase, inventory, accounting, HR, CRM, and business operations.",
    longDescription: "A comprehensive enterprise resource planning platform engineered on top of ERPNext and Frappe Framework. Designed for a growing multi-branch business to unify fragmented processes into a single source of truth.",
    technologies: ["ERPNext", "Frappe Framework", "Python", "MariaDB", "REST APIs"],
    features: [
      "Automated Sales-to-Invoice & Stock Reconciliation Workflow",
      "Real-time Inventory Tracking across Multiple Warehouses",
      "Custom Role-Based Access Control & Financial Audit Trail",
      "Executive Financial Dashboards with Automated PDF Reporting"
    ],
    architectureSummary: "Built on Frappe Framework with custom DocTypes, background queue hooks (Celery/Redis), MariaDB database tuning, and custom Vue/JS web components for interactive operational boards.",
    businessImpact: "Reduced month-end financial reconciliation time by 65% and eliminated inventory tracking discrepancies across 4 regional warehouses.",
    clientType: "Mid-Market Enterprise / Distribution Business",
    imagePlaceholderText: "ERP ARCHITECTURE MATRIX",
    gradientFrom: "from-emerald-950/80 to-zinc-950"
  },
  {
    id: "proj-02",
    title: "AI Software Development Agent",
    category: "AI",
    description: "An AI-powered development workflow that converts software ideas into structured development plans and implementation workflows.",
    longDescription: "An intelligent autonomous agent tool designed for tech teams and product managers. It takes high-level business specifications and automatically generates comprehensive architecture diagrams, database schemas, API specs, and actionable code execution plans.",
    technologies: ["Python", "Generative AI", "LangChain/LlamaIndex", "FastAPI", "React"],
    features: [
      "Natural Language to Technical Specification Generator",
      "Automated DB Schema & OpenAPI Definition Synthesis",
      "Code Skeleton Generation & Refactoring Suggestions",
      "Interactive Step-by-Step Execution Verification"
    ],
    architectureSummary: "Python FastAPI backend connected to state-of-the-art LLMs, using structured JSON outputs, vector embeddings for context retrieval, and a dynamic React frontend graph view.",
    businessImpact: "Accelerated technical scoping phase for client projects from 2 weeks to under 48 hours with 90%+ spec accuracy.",
    clientType: "SaaS Startup & Software Consulting Teams",
    imagePlaceholderText: "AI AGENT WORKFLOW ENGINE",
    gradientFrom: "from-green-950/80 to-zinc-950"
  },
  {
    id: "proj-03",
    title: "Corporate Business Website",
    category: "Web",
    description: "Modern responsive corporate website designed to improve brand presence, lead generation, and customer engagement.",
    longDescription: "A ultra-modern, high-speed corporate web portal crafted for a B2B technology services provider. Built with modern Jamstack architecture to deliver sub-second page loads, dynamic lead capture, and stunning visual storytelling.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Serverless Forms"],
    features: [
      "High-Performance Ultra-Responsive Dark UI Design",
      "Interactive Solution Calculator & Custom Inquiry Builder",
      "SEO-Optimized Semantic Markup with 99+ Lighthouse Scores",
      "Integrated Analytics & Automated Lead Routing"
    ],
    architectureSummary: "Vite + React single-page architecture styled with Tailwind CSS, leveraging progressive image loading, static asset caching, and serverless Webhook submission endpoints.",
    businessImpact: "Increased qualified inbound B2B client inquiries by 140% within the first 60 days post-launch.",
    clientType: "Global B2B Technology Provider",
    imagePlaceholderText: "CORPORATE DIGITAL INTERFACE",
    gradientFrom: "from-teal-950/80 to-zinc-950"
  },
  {
    id: "proj-04",
    title: "HR & Recruitment Management System",
    category: "Automation",
    description: "Employee, recruitment, attendance, onboarding, and HR workflow management platform.",
    longDescription: "An end-to-end Human Resource Information System (HRIS) engineered for modern distributed workforces. Simplifies recruitment pipelines, automated onboarding checklists, leave management, and automated monthly payroll processing.",
    technologies: ["ERPNext", "Python", "JavaScript", "REST APIs", "PostgreSQL"],
    features: [
      "Kanban Applicant Tracking System (ATS) with Email Parsing",
      "Automated Attendance & Biometric Device Integration",
      "Self-Service Employee Portal & Leave Management",
      "One-Click Payroll & Local Tax Deduction Calculation"
    ],
    architectureSummary: "Custom Frappe/ERPNext app extension with automated background job triggers, biometric API hardware sync, and responsive mobile-first employee portal view.",
    businessImpact: "Cut HR administrative overhead by 50+ hours per month and automated onboarding for over 200+ employees seamlessly.",
    clientType: "Growth Stage Corporate Enterprise",
    imagePlaceholderText: "HRM & PAYROLL PIPELINE",
    gradientFrom: "from-lime-950/80 to-zinc-950"
  },
  {
    id: "proj-05",
    title: "Document Processing Automation",
    category: "AI",
    description: "Automated document extraction and processing workflow that reduces manual data entry and improves operational efficiency.",
    longDescription: "An AI-powered Intelligent Document Processing pipeline built to process structured and un-structured invoices, purchase orders, contracts, and receipts into verified database records with zero manual typing.",
    technologies: ["Python", "Computer Vision OCR", "AI Parsing", "PDF Processing", "REST API"],
    features: [
      "Multi-Format PDF, TIFF, & Scan Image Parser",
      "Automated Line-Item Extraction & Table Normalization",
      "Confidence Scoring & Exception Flagging Dashboard",
      "Direct Export to ERP & Accounting Systems"
    ],
    architectureSummary: "Python pipeline incorporating OCR pre-processing, layout-aware LLM extraction prompts, data validation logic, and automated ERPNext DocType injection via REST API.",
    businessImpact: "Processed 10,000+ monthly vendor invoices with 98.4% automated extraction accuracy, eliminating data entry backlogs.",
    clientType: "Logistics & Accounting Firms",
    imagePlaceholderText: "DOCUMENT AI OCR ENGINE",
    gradientFrom: "from-emerald-900/60 to-zinc-950"
  },
  {
    id: "proj-06",
    title: "Sales & CRM Automation",
    category: "CRM",
    description: "CRM workflow designed to manage leads, customer interactions, follow-ups, sales pipelines, and business reporting.",
    longDescription: "A custom sales enablement & CRM platform engineered to give sales managers total visibility into lead velocity, deal stages, team productivity, and predictive revenue forecasting.",
    technologies: ["Frappe / CRM", "Python", "REST APIs", "Chart.js", "Webhooks"],
    features: [
      "Visual Drag-and-Drop Deal Pipeline Boards",
      "Automated WhatsApp & Email Lead Follow-up Nudges",
      "Call Log & Interaction Timeline Tracking",
      "Real-time Sales Leaderboard & Revenue Analytics"
    ],
    architectureSummary: "Customized CRM schema built with real-time WebSocket notifications, automated email/SMS integration hooks, and interactive dashboard views.",
    businessImpact: "Improved lead conversion rate by 28% and shortened average deal closing cycle by 14 days.",
    clientType: "B2B Sales & Service Agencies",
    imagePlaceholderText: "CRM SALES AUTOMATION HUB",
    gradientFrom: "from-green-900/60 to-zinc-950"
  }
];

export const WHY_WORK_WITH_ME = [
  {
    number: "01",
    title: "Business First",
    description: "I focus on understanding your core business problem and strategic goals, not simply delivering raw lines of code."
  },
  {
    number: "02",
    title: "End-to-End Execution",
    description: "From requirement gathering and system architecture to development, cloud deployment, and post-launch maintenance."
  },
  {
    number: "03",
    title: "Clear Communication",
    description: "Transparent updates, milestone tracking, and plain-English communication without overwhelming technical jargon."
  },
  {
    number: "04",
    title: "Scalable Solutions",
    description: "Built on battle-tested frameworks designed to adapt, scale, and perform as your business volume grows."
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your business model, existing workflows, challenges, scope, and target outcomes."
  },
  {
    step: "02",
    title: "Strategy",
    description: "Define technical architecture, data structures, framework selection, roadmap, and milestone deliverables."
  },
  {
    step: "03",
    title: "Development",
    description: "Build clean, modular, production-ready code with continuous feedback loops and milestone demos."
  },
  {
    step: "04",
    title: "Testing",
    description: "Rigorously test functionality, security, responsiveness, edge-case data flows, and speed optimization."
  },
  {
    step: "05",
    title: "Deployment",
    description: "Smooth production launch, server configuration, database migration, and user onboarding setup."
  },
  {
    step: "06",
    title: "Support",
    description: "Provide ongoing technical maintenance, feature updates, user training, and proactive monitoring."
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: "2017 - Present",
    role: "Freelance Technology Consultant & Solutions Specialist",
    focus: "Independent Technical Advisory & Enterprise Software Delivery",
    highlights: [
      "Consulted for 30+ SMBs and growing enterprises across India, Middle East, and international markets.",
      "Delivered customized ERPNext / Frappe implementations covering Accounting, HR, CRM, and Supply Chain.",
      "Architected custom web applications, AI automation tools, and document processing backends.",
      "Helped clients automate manual operations, saving hundreds of administrative hours monthly."
    ]
  },
  {
    period: "2015 - 2017",
    role: "Software Implementation & Business Solutions Lead",
    focus: "ERP & Business Process Engineering",
    highlights: [
      "Led end-to-end software deployments, requirement scoping sessions, and client training.",
      "Bridge the gap between executive business goals and technical development teams.",
      "Configured custom business workflows, financial reports, and inventory management systems."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Sasikumar understood our requirements quickly and helped us convert our complex business process into a practical, easy-to-use software solution.",
    author: "Rajesh V.",
    role: "Business Owner & Managing Director",
    companyType: "Manufacturing & Distribution Enterprise",
    isSample: true
  },
  {
    id: "test-2",
    quote: "Excellent communication and strong understanding of both business operations and technical development. He delivered our ERPNext customization right on schedule.",
    author: "Anand M.",
    role: "Project Manager",
    companyType: "Technology Services Firm",
    isSample: true
  },
  {
    id: "test-3",
    quote: "Professional, responsive, and focused on delivering a solution that actually works for the business instead of just writing code. Highly recommended!",
    author: "Sanjay K.",
    role: "Operations Head",
    companyType: "Logistics & Supply Chain Solutions",
    isSample: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What type of freelance projects do you accept?",
    answer: "I accept end-to-end projects including ERPNext/Frappe implementation & customization, custom web application development (React/Node/Python), AI automation integrations, document processing workflows, CRM/HRM systems, and digital technology consulting engagements."
  },
  {
    question: "Can you customize ERPNext for my business?",
    answer: "Yes, absolutely! I specialize in ERPNext and Frappe framework development. I can create custom DocTypes, automate approval workflows, build custom web portals, integrate third-party APIs, and tailor stock/finance/HR modules to your exact business rules."
  },
  {
    question: "Can you build a website from scratch?",
    answer: "Yes. I build modern, lightning-fast corporate websites, SaaS landing pages, portfolio platforms, and dynamic web applications using React, TypeScript, Tailwind CSS, and robust backends."
  },
  {
    question: "Can you integrate AI into an existing business process?",
    answer: "Definitely. I can integrate LLM APIs (OpenAI/Anthropic/Gemini), build autonomous AI agents, automate document extraction from PDFs/images, construct internal AI query interfaces over your private business data, and automate repetitive data entry workflows."
  },
  {
    question: "Do you provide maintenance and ongoing support?",
    answer: "Yes, I offer flexible ongoing maintenance plans for server monitoring, bug fixes, feature enhancements, system updates, and dedicated technical advisory support."
  },
  {
    question: "How do we start a project?",
    answer: "We start with an initial discovery call or inquiry review to understand your requirements, business goals, and timeline. Once agreed on the technical scope and proposal, we proceed immediately into planning and execution."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. I work with business clients across India, North America, Europe, the Middle East, and Asia Pacific. I manage remote collaboration seamlessly via asynchronous updates, video calls, and clear project tracking tools."
  }
];
