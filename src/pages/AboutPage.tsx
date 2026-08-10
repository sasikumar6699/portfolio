import React from 'react';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { WhyWorkWithMe } from '../components/WhyWorkWithMe';
import { CtaBanner } from '../components/CtaBanner';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24">
      <About />
      <WhyWorkWithMe />
      <Experience />
      <CtaBanner onOpenContact={onOpenContact} />
    </div>
  );
};
