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
    description: "ERP & CRM solutions for businesses, including ERPNext & Frappe customization, workflow automation, accounting, inventory, sales, reporting, business process optimization, and API integrations.",
    iconName: "Database",
    features: [
      "ERPNext & Frappe Customization Services",
      "ERP & CRM Workflow Automation Solutions",
      "Accounting & Financial Management Setup",
      "Inventory & Supply Chain Management",
      "Sales & Customer Relationship Management",
      "API, Webhook & Third-Party Integrations"
    ]
  },
  {
    id: "web",
    title: "Web Development & Design",
    description: "Modern, responsive, fast, and SEO-friendly websites for businesses, startups, professionals, and organizations, including corporate websites, WordPress websites, Magento stores, e-commerce platforms, and custom web applications.",
    iconName: "Globe",
    features: [
      "Business & Corporate Website Development",
      "WordPress Website Development & SEO Services",
      "Magento E-commerce Development Solutions",
      "E-commerce Website & Online Store Solutions",
      "SEO-Friendly Landing Page Design Services",
      "Responsive Website Design & SEO Services"
    ]
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "AI-powered applications, workflow automation, intelligent assistants, document processing, and business automation.",
    iconName: "Cpu",
    features: [
       "Generative AI & LLM Integration Services",
       "Autonomous AI Agents & Workflow Automation",
       "Intelligent Document Processing with OCR",
       "AI-Powered Business Data Automation",
       "Custom AI Assistant Development Solutions",
       "AI-Powered Business Process Automation"
    ]
  },
  {
    id: "crm-hrm",
    title: "CRM & HRM Solutions",
    description: "CRM, HR management, recruitment, employee management, payroll, and customer workflow solutions.",
    iconName: "Users",
    features: [
     "CRM Lead & Sales Pipeline Automation",
     "Employee Onboarding & HR Management Systems",
     "Payroll, Attendance & Employee Management",
     "Customer Support & Ticketing Solutions",
     "Custom Business Dashboards & BI Analytics",
     "Business Workflow & Process Automation"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Custom software solutions designed around specific business requirements and workflows.",
    iconName: "Code",
    features: [
      "Custom Enterprise Software Development",
      "Microservices & API Development Solutions",
      "Database Design & Performance Optimization",
      "Legacy Software Modernization Services",
      "Cloud & On-Premise Software Deployment",
      "Scalable Custom Business Software Solutions"
    ]
  },
  {
    id: "digital-business",
    title: "Graphic Design & Branding",
    description: "Creative graphic design and branding services including logos, visiting cards, labels, posters, brochures, invitations, and marketing materials.",
    iconName: "Palette",
    features: [
       "Professional Logo Design & Branding",
       "Creative Visiting Card Design Services",
       "Custom Brand Label Design Solutions",
       "Poster & Promotional Graphic Design",
       "Brochure & Flyer Design Services",
       "Invitation & Event Card Design Services"
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
  title: "Graphic Design & Branding",
  skills: [
    { name: "Logo Design", tag: "Brand Identity & Visual Design" },
    { name: "Visiting Card Design", tag: "Professional Business Branding" },
    { name: "Brand Label Design", tag: "Product & Packaging Branding" },
    { name: "Poster Design", tag: "Promotional & Marketing Graphics" },
    { name: "Brochure & Flyer Design", tag: "Business Marketing Materials" },
    { name: "Invitation Design", tag: "Event & Digital Invitations" }
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
  title: "Data Entry & Data Management",
  category: "Data",
  description: "Accurate and organized data entry and management solutions for businesses, including spreadsheet processing, data cleaning, document conversion, and database updates.",
  longDescription: "A structured data management project designed to transform large volumes of unorganized business information into accurate, consistent, and easy-to-manage digital records. The workflow included data entry, document processing, spreadsheet management, data validation, formatting, and quality checks.",
  technologies: ["Microsoft Excel", "Google Sheets", "Data Processing", "PDF Conversion", "Data Validation"],
  features: [
    "Accurate Excel & Google Sheets Data Entry",
    "PDF, Image & Document Data Conversion",
    "Data Cleaning, Formatting & Validation",
    "Large-Volume Database Data Processing",
    "Duplicate Data Identification & Removal",
    "Quality Checks & Structured Data Organization"
  ],
  architectureSummary: "Designed a structured data processing workflow using standardized templates, validation rules, data cleaning procedures, spreadsheet automation, and multi-stage quality checks to maintain accuracy and consistency.",
  businessImpact: "Improved data accuracy and organization while reducing repetitive manual work and creating structured digital records that were easier to search, manage, and process.",
  clientType: "Businesses / Professionals / Organizations",
  imagePlaceholderText: "DATA MANAGEMENT & PROCESSING",
  gradientFrom: "from-green-950/80 to-zinc-950" 
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
  title: "Brand Identity & Creative Design",
  category: "Design",
  description: "Creative branding and graphic design solutions including logo design, visiting cards, brand labels, posters, brochures, invitations, and digital marketing materials.",
  longDescription: "A complete visual branding and creative design project developed to give a business a consistent and professional identity across both print and digital platforms. The design system covered core brand identity, business stationery, promotional materials, product labels, event creatives, and social media assets.",
  technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "Creative Design"],
  features: [
    "Professional Logo & Brand Identity Design",
    "Creative Visiting Card & Business Stationery",
    "Custom Product Label & Packaging Designs",
    "Posters, Brochures & Promotional Materials",
    "Invitation & Event Creative Design",
  ],
  architectureSummary: "Developed a consistent visual design system using defined typography, layout principles, brand elements, reusable templates, and digital-ready assets for multiple business and marketing requirements.",
  businessImpact: "Created a consistent and professional brand presence across print and digital channels, helping improve visual communication, brand recognition, and marketing consistency.",
  clientType: "Small Business / Startup / Professional Brand",
  imagePlaceholderText: "BRAND IDENTITY & CREATIVE DESIGN",
  gradientFrom: "from-lime-950/80 to-zinc-950"
  }
];

export const WHY_WORK_WITH_ME = [
  {
    number: "01",
    title: "Business First",
    description: "Focus on understanding your core business problem and strategic goals, not simply delivering raw lines of code."
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
    quote: "Techyora understood our requirements quickly and helped us transform a complex business process into a practical and easy-to-use digital solution.",
    author: "Business Owner",
    role: "ERP & Business Solutions",
    companyType: "Manufacturing & Distribution",
    isSample: true
  },
  {
    id: "test-2",
    quote: "The team demonstrated strong communication and a clear understanding of both business requirements and technical development. The project was delivered professionally.",
    author: "Project Manager",
    role: "Software & ERP Development",
    companyType: "Technology Services",
    isSample: true
  },
  {
    id: "test-3",
    quote: "Professional, responsive, and focused on delivering practical solutions. Techyora paid attention to our requirements and delivered quality work with a smooth experience.",
    author: "Operations Professional",
    role: "Digital Solutions & Automation",
    companyType: "Logistics & Business Operations",
    isSample: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What type of freelance projects do you accept?",
    answer: "We accept end-to-end projects including ERPNext/Frappe implementation & customization, custom web application development (React/Node/Python), AI automation integrations, document processing workflows, CRM/HRM systems, and digital technology consulting engagements."
  },
  {
    question: "Can you customize ERPNext for my business?",
    answer: "Yes, absolutely! We specialize in ERPNext and Frappe framework development. We can create custom DocTypes, automate approval workflows, build custom web portals, integrate third-party APIs, and tailor stock/finance/HR modules to your exact business rules."
  },
  {
    question: "Can you build a website from scratch?",
    answer: "Yes. We build modern, lightning-fast corporate websites, SaaS landing pages, portfolio platforms, and dynamic web applications using React, TypeScript, Tailwind CSS, and robust backends."
  },
  {
    question: "Can you integrate AI into an existing business process?",
    answer: "Definitely. We can integrate LLM APIs (OpenAI/Anthropic/Gemini), build autonomous AI agents, automate document extraction from PDFs/images, construct internal AI query interfaces over your private business data, and automate repetitive data entry workflows."
  },
  {
    question: "Do you provide maintenance and ongoing support?",
    answer: "Yes, We offer flexible ongoing maintenance plans for server monitoring, bug fixes, feature enhancements, system updates, and dedicated technical advisory support."
  },
  {
    question: "How do we start a project?",
    answer: "We start with an initial discovery call or inquiry review to understand your requirements, business goals, and timeline. Once agreed on the technical scope and proposal, we proceed immediately into planning and execution."
  },
  
];
