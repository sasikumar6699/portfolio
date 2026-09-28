import React from 'react';
import { Contact } from '../components/Contact';

interface ContactPageProps {
  selectedService?: string;
  onSubmitted: (name: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ selectedService, onSubmitted }) => {
  return (
    <div className="pt-20">
      <Contact initialService={selectedService} onSubmitted={onSubmitted} />
    </div>
  );
};
