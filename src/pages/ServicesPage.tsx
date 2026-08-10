import React from 'react';
import { Services } from '../components/Services';
import { WorkProcess } from '../components/WorkProcess';
import { FAQ } from '../components/FAQ';
import { CtaBanner } from '../components/CtaBanner';

interface ServicesPageProps {
  onOpenContact: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24">
      <Services onSelectService={onOpenContact} />
      <WorkProcess />
      <FAQ />
      <CtaBanner onOpenContact={() => onOpenContact()} />
    </div>
  );
};
