import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { WhyWorkWithMe } from '../components/WhyWorkWithMe';
import { WorkProcess } from '../components/WorkProcess';
import { Experience } from '../components/Experience';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { CtaBanner } from '../components/CtaBanner';

interface HomePageProps {
  onOpenContact: (serviceTitle?: string) => void;
  onOpenResume: () => void;
  selectedService?: string;
  onFormSubmitted: (name: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenContact,
  onOpenResume,
  selectedService,
  onFormSubmitted
}) => {
  return (
    <div>
      <Hero onOpenContact={() => onOpenContact()} onOpenResume={onOpenResume} />
      <About />
      <Services onSelectService={(serviceTitle) => onOpenContact(serviceTitle)} />
      <Skills />
      <Projects onInquireProject={(projectTitle) => onOpenContact(projectTitle)} />
      <WhyWorkWithMe />
      <WorkProcess />
      <Experience />
      <Testimonials />
      <FAQ />
      <Contact initialService={selectedService} onSubmitted={onFormSubmitted} />
      <CtaBanner onOpenContact={() => onOpenContact()} />
    </div>
  );
};
