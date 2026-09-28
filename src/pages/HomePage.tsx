import React from 'react';
import { GravityHero } from '../components/gravity/GravityHero';
import { GravityOrbitCarousel } from '../components/gravity/GravityOrbitCarousel';
import { GravityManifesto } from '../components/gravity/GravityManifesto';
import { GravityConstellation } from '../components/gravity/GravityConstellation';
import { GravityBio } from '../components/gravity/GravityBio';
import { GravityContactPortal } from '../components/gravity/GravityContactPortal';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';

interface HomePageProps {
  onOpenContact: (serviceTitle?: string) => void;
  onOpenResume: () => void;
  onFormSubmitted: (name: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenContact,
  onOpenResume,
  onFormSubmitted
}) => {
  return (
    <div className="relative bg-[#050505] text-white">
      {/* 1. Keplerian Gravity Physics Hero Stage (Orbit on Right Side, 4 Named Satellites) */}
      <GravityHero
        onOpenContact={(serviceTitle) => onOpenContact(serviceTitle)}
        onOpenResume={onOpenResume}
      />

      {/* 2. 3D Cylindrical Orbit Carousel (Broader, Center-Aligned, Scroll-Driven Rotation) */}
      <GravityOrbitCarousel
        onSelectService={(serviceTitle) => onOpenContact(serviceTitle)}
        onSelectProject={(projectTitle) => onOpenContact(projectTitle)}
      />

      {/* 3. Pinned Studio Manifesto (Spiral Vortex Entrance, Laptop Responsive, SEO Services) */}
      <GravityManifesto />

      {/* 4. Planetary Services Constellation (Twinkling Moving Orbits, Auto-Advancing Cards) */}
      <GravityConstellation
        onSelectService={(serviceTitle) => onOpenContact(serviceTitle)}
      />

      {/* 5. Sticky Column Milestones & Bio Horizon */}
      <GravityBio
        onOpenContact={() => onOpenContact()}
      />

      {/* 6. Client Proof & Testimonials */}
      <Testimonials />

      {/* 7. Frequently Asked Questions */}
      <FAQ />

      {/* 8. Innovative Gyroscopic 3D Spherical Contact Portal (Standalone Before Footer) */}
      <GravityContactPortal
        onOpenContact={() => onOpenContact()}
        onSubmitted={onFormSubmitted}
      />
    </div>
  );
};
