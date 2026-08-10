import React from 'react';
import { Skills } from '../components/Skills';
import { WhyWorkWithMe } from '../components/WhyWorkWithMe';
import { CtaBanner } from '../components/CtaBanner';

interface SkillsPageProps {
  onOpenContact: () => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24">
      <Skills />
      <WhyWorkWithMe />
      <CtaBanner onOpenContact={onOpenContact} />
    </div>
  );
};
