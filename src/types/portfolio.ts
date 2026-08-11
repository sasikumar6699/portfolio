export interface Project {
  id: string;
  title: string;
  category: 'ERP' | 'Web' | 'AI' | 'Automation' | 'Data' | 'Design';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  architectureSummary: string;
  businessImpact: string;
  clientType: string;
  imagePlaceholderText: string;
  gradientFrom: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; tag: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyType: string;
  isSample: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  focus: string;
  highlights: string[];
}
