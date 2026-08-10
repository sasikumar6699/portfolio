import React from 'react';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';

interface ContactPageProps {
  selectedService?: string;
  onSubmitted: (name: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ selectedService, onSubmitted }) => {
  return (
    <div className="pt-24">
      <Contact initialService={selectedService} onSubmitted={onSubmitted} />
      <FAQ />
    </div>
  );
};
