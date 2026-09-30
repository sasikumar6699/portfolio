import React from 'react';
import { About } from '../components/About';
import { WhyWorkWithMe } from '../components/WhyWorkWithMe';
import { CtaBanner } from '../components/CtaBanner';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      {/* Main About Component */}
      <About />

      {/* Advantage Matrix & Philosophy */}
      <WhyWorkWithMe />

      {/* Call to Action Banner */}
      <CtaBanner onOpenContact={onOpenContact} />
    </div>
  );
};
