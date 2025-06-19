
import React from 'react';
import { CompanyLogo } from '../types';
import AnimatedSection from './AnimatedSection';

const companies: CompanyLogo[] = [
  { id: '1', name: 'Company One', logoUrl: 'https://placehold.co/150x60/CBD5E1/64748B?text=Company1&font=sans' },
  { id: '2', name: 'Company Two', logoUrl: 'https://placehold.co/150x60/CBD5E1/64748B?text=Company2&font=sans' },
  { id: '3', name: 'Company Three', logoUrl: 'https://placehold.co/150x60/CBD5E1/64748B?text=Company3&font=sans' },
  { id: '4', name: 'Company Four', logoUrl: 'https://placehold.co/150x60/CBD5E1/64748B?text=Company4&font=sans' },
  { id: '5', name: 'Company Five', logoUrl: 'https://placehold.co/150x60/CBD5E1/64748B?text=Company5&font=sans' },
];

const TrustedCompaniesSection: React.FC = () => {
  return (
    <section id="trusted-companies" className="py-12 md:py-20 bg-brand-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text mb-2">
            Trusted Companies
            <span className="text-brand-primary">.</span>
          </h2>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company, index) => (
            <AnimatedSection
              key={company.id}
              animationClasses="opacity-0 scale-90"
              visibleClasses="opacity-100 scale-100"
              delay={`delay-${index * 100}`}
            >
              <img 
                src={company.logoUrl} 
                alt={company.name} 
                className="h-10 md:h-12 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;