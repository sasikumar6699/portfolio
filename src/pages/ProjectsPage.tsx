import React from 'react';
import { Projects } from '../components/Projects';
import { CtaBanner } from '../components/CtaBanner';

interface ProjectsPageProps {
  onOpenContact: (projectTitle?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24">
      <Projects onInquireProject={onOpenContact} />
      <CtaBanner onOpenContact={() => onOpenContact()} />
    </div>
  );
};
