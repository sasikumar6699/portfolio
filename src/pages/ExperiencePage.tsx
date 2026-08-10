import React from 'react';
import { Experience } from '../components/Experience';
import { WorkProcess } from '../components/WorkProcess';
import { CtaBanner } from '../components/CtaBanner';

interface ExperiencePageProps {
  onOpenContact: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24">
      <Experience />
      <WorkProcess />
      <CtaBanner onOpenContact={onOpenContact} />
    </div>
  );
};
