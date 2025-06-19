import React from 'react';
import { DiverseServiceItem } from '../types'; // Ensure this type matches the new structure
import AnimatedSection from './AnimatedSection';

import DesktopCodeIcon from './icons/DesktopCodeIcon';
import WrenchGearIcon from './icons/WrenchGearIcon';
import BugFixIcon from './icons/BugFixIcon';
import SeoRocketIcon from './icons/SeoRocketIcon';

const services: DiverseServiceItem[] = [
  { 
    id: 'website-making', 
    title: 'Website Making', 
    icon: <DesktopCodeIcon className="w-10 h-10 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300"/> 
  },
  { 
    id: 'website-maintaining', 
    title: 'Website Maintaining', 
    icon: <WrenchGearIcon className="w-10 h-10 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300"/> 
  },
  { 
    id: 'error-handling', 
    title: 'Error Handling', 
    icon: <BugFixIcon className="w-10 h-10 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300"/> 
  },
  { 
    id: 'seo-optimization', 
    title: 'SEO Optimization', 
    icon: <SeoRocketIcon className="w-10 h-10 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300"/> 
  },
];

const DiverseServicesSection: React.FC = () => {
  return (
    <section id="services-alt" className="py-16 md:py-24 bg-brand-bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">
            Services Tailored for Unique & Good Results
            <span className="text-brand-primary">.</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.id}
              className="group text-center p-4 py-8 bg-brand-bg-light rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              animationClasses="opacity-0 scale-90"
              visibleClasses="opacity-100 scale-100"
              delay={`delay-${index * 100}`}
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-text">{service.title}</h3>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiverseServicesSection;