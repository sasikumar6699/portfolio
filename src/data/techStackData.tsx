import React from 'react';

export interface TechStackItem {
  id: string;
  name: string;
  category: 'erp' | 'frontend' | 'backend' | 'ai' | 'devops' | 'design';
  categoryLabel: string;
  role: string;
  description: string;
  badge: string;
  color: string;
  icon: (props: { className?: string; color?: string }) => React.ReactElement;
}

export const TECH_CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'erp', label: 'ERP & Business Systems' },
  { id: 'frontend', label: 'Frontend & 3D Web' },
  { id: 'backend', label: 'Backend & Databases' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'devops', label: 'Cloud, DevOps & AMC' },
  { id: 'design', label: 'Branding & UI/UX' },
] as const;

export const TECH_STACKS: TechStackItem[] = [
  // ==================== ERP & BUSINESS SYSTEMS ====================
  {
    id: 'erpnext',
    name: 'ERPNext',
    category: 'erp',
    categoryLabel: 'Enterprise ERP',
    role: 'Enterprise Core System',
    description: 'Complete ERP implementation, DocTypes, multi-branch accounting & manufacturing workflows.',
    badge: 'Enterprise Core',
    color: '#0089FF',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#0089FF" />
        <path d="M7 9.5H17M7 12H14M7 14.5H17" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'frappe',
    name: 'Frappe Framework',
    category: 'erp',
    categoryLabel: 'ERP Framework',
    role: 'Full-Stack Python Framework',
    description: 'Custom app architecture, server scripts, hooks, automated background jobs & REST bridges.',
    badge: 'Core Framework',
    color: '#0066FF',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="6" fill="#0066FF" />
        <path d="M7 6H17V9.5H10.5V11H15.5V14H10.5V18H7V6Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    category: 'erp',
    categoryLabel: 'ERP & AI Backend',
    role: 'Server & Business Logic',
    description: 'Server scripting, ERPNext customizations, AI agents & high-performance asynchronous microservices.',
    badge: 'Primary Language',
    color: '#3776AB',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M11.914 0C5.82 0 6.193 2.656 6.193 2.656l.007 2.752h5.814v.826H3.896S0 5.79 0 11.932c0 6.14 3.402 5.922 3.402 5.922h2.033v-2.857s-.11-3.402 3.346-3.402h5.758s3.236.052 3.236-3.181V2.656S18.252 0 11.914 0zm-3.32 1.637a1.042 1.042 0 1 1 0 2.083 1.042 1.042 0 0 1 0-2.083zM12.086 24c6.094 0 5.72-2.656 5.72-2.656l-.006-2.752H11.986v-.826h8.118s3.896.444 3.896-5.698c0-6.14-3.402-5.922-3.402-5.922h-2.033v2.857s.11 3.402-3.346 3.402H9.461s-3.236-.052-3.236 3.181v5.758s-.478 2.656 5.861 2.656zm3.32-1.637a1.042 1.042 0 1 1 0-2.083 1.042 1.042 0 0 1 0 2.083z" fill="#3776AB" />
      </svg>
    ),
  },
  {
    id: 'mariadb',
    name: 'MariaDB / MySQL',
    category: 'erp',
    categoryLabel: 'ERP Database',
    role: 'Relational Database Engine',
    description: 'High-concurrency transactions, ledger integrity, automated daily backups & query optimization.',
    badge: 'Enterprise DB',
    color: '#C0765A',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="6" fill="#1F2937" />
        <path d="M12 4C7.58 4 4 5.34 4 7V17C4 18.66 7.58 20 12 20C16.42 20 20 18.66 20 17V7C20 5.34 16.42 4 12 4ZM12 6C15.87 6 18 7.08 18 7C18 6.92 15.87 8 12 8C8.13 8 6 6.92 6 7C6 7.08 8.13 6 12 6ZM6 9.17C7.61 9.7 9.68 10 12 10C14.32 10 16.39 9.7 18 9.17V12C18 12.08 15.87 13 12 13C8.13 13 6 12.08 6 12V9.17ZM6 14.17C7.61 14.7 9.68 15 12 15C14.32 15 16.39 14.7 18 14.17V17C18 17.08 15.87 18 12 18C8.13 18 6 17.08 6 17V14.17Z" fill="#C0765A" />
      </svg>
    ),
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'erp',
    categoryLabel: 'Memory Cache & Queue',
    role: 'In-Memory Data Store',
    description: 'ERP background task queues, session caching, rate-limiting & sub-millisecond query caching.',
    badge: 'High Speed Cache',
    color: '#DC382D',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M2 7L12 2L22 7L12 12L2 7Z" fill="#DC382D" />
        <path d="M2 12L12 17L22 12" stroke="#B8241A" strokeWidth="2" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="#B8241A" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },

  // ==================== FRONTEND & 3D INTERACTIVE ====================
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    categoryLabel: 'Frontend UI',
    role: 'Component Architecture',
    description: 'Modular enterprise web applications, real-time dashboards & reactive UI state management.',
    badge: 'Frontend Core',
    color: '#61DAFB',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    categoryLabel: 'Full-Stack React',
    role: 'Server-Side Rendering & SEO',
    description: 'High-speed Jamstack web portals, edge-rendered pages, API routes & enterprise SEO.',
    badge: 'Production Standard',
    color: '#FFFFFF',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M8 8V16M8 8L16 16.5M16 8V13.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'threejs',
    name: 'Three.js / WebGL',
    category: 'frontend',
    categoryLabel: '3D Graphics & Shaders',
    role: 'Interactive 3D Web',
    description: 'Interactive gyroscopic portals, 3D product viewports, particle physics & hardware-accelerated shaders.',
    badge: '3D Engineering',
    color: '#049EF4',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L2 21H22L12 2Z" stroke="#049EF4" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 2V21M2 21L17 11.5M22 21L7 11.5" stroke="#049EF4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Type-Safe Architecture',
    role: 'Strict Typing & Tooling',
    description: 'Zero runtime type bugs, enterprise maintainability, shared data contracts & refactoring safety.',
    badge: 'Strict Architecture',
    color: '#3178C6',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5 9H11M8 9V17M13 14.5C13.5 15.5 14.5 16 16 16C17.5 16 18.5 15 18.5 13.8C18.5 11.5 13.5 12.8 13.5 10.5C13.5 9.5 14.5 8.5 16 8.5C17.2 8.5 18.1 9.2 18.5 10M16 16V17" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Styling & Design System',
    role: 'Fluid Responsive Engine',
    description: 'Utility-first cyberpunk aesthetics, ultra-low bundle sizes, responsive viewports & glassmorphism.',
    badge: 'Design System',
    color: '#06B6D4',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="#06B6D4">
        <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.2-1.1 3.5-.8 1.1.2 2 1.1 2.9 2 1.5 1.6 3.2 3.2 6.1 3.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.2 1.1-3.5.8-1.1-.2-2-1.1-2.9-2-1.5-1.6-3.2-3.2-6.1-3.2zm-8 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.2-1.1 3.5-.8 1.1.2 2 1.1 2.9 2 1.5 1.6 3.2 3.2 6.1 3.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.2 1.1-3.5.8-1.1-.2-2-1.1-2.9-2-1.5-1.6-3.2-3.2-6.1-3.2z" />
      </svg>
    ),
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    categoryLabel: 'Modern Build Tool',
    role: 'Blazing Fast Bundling',
    description: 'Instant HMR development, Rollup-optimized production chunks & high-efficiency code splitting.',
    badge: 'Build Tool',
    color: '#646CFF',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M19.5 3L12 22L4.5 3L19.5 3Z" fill="url(#vite-grad)" />
        <path d="M13 3L8 13H12L11 20L17 10H13L15 3H13Z" fill="#FFD026" />
        <defs>
          <linearGradient id="vite-grad" x1="4.5" y1="3" x2="19.5" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // ==================== BACKEND & CUSTOM SOFTWARE ====================
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    categoryLabel: 'Server Runtime',
    role: 'Event-Driven Backend',
    description: 'High-throughput event loops, custom billing backends, microservices & live WebSocket pipelines.',
    badge: 'Backend Core',
    color: '#339933',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="#339933">
        <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2ZM11 18V13.5L8 15V11.5L11 10V6H13V18H11ZM16 15.5H14V13.5H16V15.5ZM16 11.5H14V9.5H16V11.5Z" />
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'backend',
    categoryLabel: 'Relational Database',
    role: 'ACID-Compliant Enterprise DB',
    description: 'Complex financial schemas, JSONB querying, audit trails, chit fund & inventory data engines.',
    badge: 'Enterprise DB',
    color: '#4169E1',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="6" fill="#336791" />
        <path d="M12 4C8 4 6 7 6 10C6 14 9 17 12 17C15 17 18 14 18 10C18 7 16 4 12 4ZM10 10C9.4 10 9 9.6 9 9C9 8.4 9.4 8 10 8C10.6 8 11 8.4 11 9C11 9.6 10.6 10 10 10ZM14 10C13.4 10 13 9.6 13 9C13 8.4 13.4 8 14 8C14.6 8 15 8.4 15 9C15 9.6 14.6 10 14 10Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    categoryLabel: 'API Framework',
    role: 'RESTful Architecture',
    description: 'Clean routing, middleware authentication, JWT tokens, file uploads & rapid microservices.',
    badge: 'REST Engine',
    color: '#FFFFFF',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#111827" />
        <text x="5" y="16" fill="white" fontSize="11" fontWeight="bold" fontFamily="monospace">ex</text>
      </svg>
    ),
  },
  {
    id: 'restapi',
    name: 'REST & Webhooks',
    category: 'backend',
    categoryLabel: 'System Integration',
    role: 'Inter-System Connectivity',
    description: 'Connecting ERPs to payment gateways, WhatsApp business endpoints, biometric devices & GST portals.',
    badge: 'Integration Layer',
    color: '#10B981',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#10B981" strokeWidth="2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <path d="M8.5 7.5L15.5 7.5M7.5 8.5L10.5 15.5M16.5 8.5L13.5 15.5" />
      </svg>
    ),
  },

  // ==================== AI & AUTOMATION ====================
  {
    id: 'agentic-ai',
    name: 'Agentic AI & LLMs',
    category: 'ai',
    categoryLabel: 'Autonomous AI',
    role: 'Intelligent Decision Agents',
    description: 'Multi-agent orchestration, dynamic tool calling, autonomous business process automation & reasoning.',
    badge: 'Next-Gen AI',
    color: '#10B981',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#10B981" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1.5" fill="#10B981" />
        <circle cx="15" cy="10" r="1.5" fill="#10B981" />
        <path d="M8 15C9.5 17 14.5 17 16 15" strokeLinecap="round" />
        <path d="M12 3V6M12 18V21M3 12H6M18 12H21" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'langchain',
    name: 'LangChain & RAG',
    category: 'ai',
    categoryLabel: 'Vector & Knowledge AI',
    role: 'Contextual Document Retrieval',
    description: 'Vector databases, internal corporate knowledge base Q&A, document OCR & automated summaries.',
    badge: 'RAG Architecture',
    color: '#22C55E',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="6" fill="#0F172A" />
        <path d="M6 12C6 8.686 8.686 6 12 6C15.314 6 18 8.686 18 12C18 15.314 15.314 18 12 18" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill="#22C55E" />
      </svg>
    ),
  },
  {
    id: 'whatsapp-api',
    name: 'WhatsApp Cloud API',
    category: 'ai',
    categoryLabel: 'Conversational Bot',
    role: 'Business Comms Automation',
    description: 'Automated invoice delivery, 24/7 client booking bots, broadcast alerts & CRM two-way chat synchronization.',
    badge: 'Enterprise Comms',
    color: '#25D366',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
      </svg>
    ),
  },

  // ==================== CLOUD, DEVOPS & AMC ====================
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    categoryLabel: 'Containerization',
    role: 'Isolated Production Environments',
    description: 'Docker Compose ERPNext setups, reproducible builds, rapid horizontal scaling & isolated stacks.',
    badge: 'DevOps Core',
    color: '#2496ED',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="#2496ED">
        <path d="M13 8.5H10.5V11H13V8.5ZM10 8.5H7.5V11H10V8.5ZM7 8.5H4.5V11H7V8.5ZM16 8.5H13.5V11H16V8.5ZM10 5.5H7.5V8H10V5.5ZM13 5.5H10.5V8H13V5.5ZM16 5.5H13.5V8H16V5.5ZM23.5 10.5C23.2 9.5 22 9.2 21.2 9.4C20.6 7.8 19 6.8 17.5 7.2L17.2 7.3V11.5H1V14.5C1 18.5 4 21 8.5 21C14.5 21 19.5 17.5 20.5 12.5C21.8 12.6 23.8 11.8 23.5 10.5Z" />
      </svg>
    ),
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'devops',
    categoryLabel: 'Cloud Infrastructure',
    role: 'Enterprise Cloud Hosting',
    description: 'EC2 instance orchestration, S3 automated backups, RDS databases, CloudFront CDN & VPC security.',
    badge: 'Cloud Host',
    color: '#FF9900',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M7.5 11.5C6.5 11.5 5.5 12 5 12.8V11.8H3V17H5V15.2C5.5 16 6.5 16.5 7.5 16.5C9.5 16.5 11 15 11 13C11 11 9.5 11.5 7.5 11.5ZM7 15C6 15 5 14.2 5 13C5 11.8 6 11 7 11C8 11 9 11.8 9 13C9 14.2 8 15 7 15Z" fill="#FF9900" />
        <path d="M3 19C8 22 16 22 21 18" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 18L18 17M21 18L19.5 20.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'linux',
    name: 'Linux (Ubuntu)',
    category: 'devops',
    categoryLabel: 'Server OS',
    role: 'Enterprise Server Operating System',
    description: 'Hardened Linux servers, systemd service management, bash automation scripts, firewall (UFW) & Cron jobs.',
    badge: 'Server OS',
    color: '#E95420',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="#E95420">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" fill="white" />
        <circle cx="12" cy="6" r="2" fill="white" />
        <circle cx="6.5" cy="15" r="2" fill="white" />
        <circle cx="17.5" cy="15" r="2" fill="white" />
      </svg>
    ),
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'devops',
    categoryLabel: 'Security & CDN',
    role: 'Global Edge Security & SSL',
    description: 'DDoS mitigation, web application firewall (WAF), edge caching & global DNS latency reduction.',
    badge: 'Edge Security',
    color: '#F38020',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="#F38020">
        <path d="M18.5 10.5C18.1 7.5 15.5 5.5 12.5 5.5C10.1 5.5 8 6.9 7 9C4.5 9.3 2.5 11.4 2.5 14C2.5 16.8 4.7 19 7.5 19H18.5C20.7 19 22.5 17.2 22.5 15C22.5 12.9 20.8 11.1 18.5 10.5Z" />
      </svg>
    ),
  },
  {
    id: 'nginx',
    name: 'Nginx',
    category: 'devops',
    categoryLabel: 'Reverse Proxy',
    role: 'High-Performance Web Server',
    description: 'Reverse proxying for Frappe & Node.js, SSL termination (Let\'s Encrypt), load balancing & gzip compression.',
    badge: 'Proxy Engine',
    color: '#009639',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="6" fill="#009639" />
        <path d="M7 6V18L17 6V18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  // ==================== BRANDING & UI/UX DESIGN ====================
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    categoryLabel: 'UI/UX Architecture',
    role: 'Enterprise Design Systems',
    description: 'High-fidelity wireframes, interactive user journeys, design tokens, component libraries & prototypes.',
    badge: 'UI/UX Standard',
    color: '#F24E1E',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M8 2H12V8H8C6.34 8 5 6.66 5 5C5 3.34 6.34 2 8 2Z" fill="#F24E1E" />
        <path d="M12 2H16C17.66 2 19 3.34 19 5C19 6.66 17.66 8 16 8H12V2Z" fill="#FF7262" />
        <path d="M12 8H16C17.66 8 19 9.34 19 11C19 12.66 17.66 14 16 14H12V8Z" fill="#1ABCFE" />
        <path d="M8 8H12V14H8C6.34 14 5 12.66 5 11C5 9.34 6.34 8 8 8Z" fill="#A259FF" />
        <path d="M8 14H12V17C12 18.66 10.66 20 9 20C7.34 20 6 18.66 6 17C6 15.34 7.34 14 8 14Z" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    category: 'design',
    categoryLabel: 'Vector Graphic Design',
    role: 'Corporate Branding & Flex Design',
    description: 'Large-scale commercial flex banners, precision vector logos, pamphlets, stationery & digital branding.',
    badge: 'Vector Engine',
    color: '#FF9A00',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="5" fill="#330000" stroke="#FF9A00" strokeWidth="1.5" />
        <text x="5" y="16.5" fill="#FF9A00" fontSize="11" fontWeight="900" fontFamily="sans-serif">Ai</text>
      </svg>
    ),
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'design',
    categoryLabel: 'Raster & Creative Assets',
    role: 'Digital Marketing & Social Assets',
    description: 'High-resolution marketing graphics, commercial product retouching, promotional banners & social creative.',
    badge: 'Creative Suite',
    color: '#31A8FF',
    icon: ({ className = 'w-8 h-8' }) => (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="5" fill="#001E36" stroke="#31A8FF" strokeWidth="1.5" />
        <text x="5" y="16.5" fill="#31A8FF" fontSize="11" fontWeight="900" fontFamily="sans-serif">Ps</text>
      </svg>
    ),
  },
];
