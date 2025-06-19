import React from 'react';
import { HowWeWorkStep } from '../types';
import AnimatedSection from './AnimatedSection';

// Placeholder icons, replace with actual SVGs
const ResearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);
const DesignedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17A3 3 0 016.344 12.17l4.385-4.386a3 3 0 014.242 0l.707.707a3 3 0 010 4.242l-4.386 4.385a3 3 0 01-2.121.879zM4.5 4.5l4.5 4.5M13.5 4.5l4.5 4.5M4.5 13.5l4.5 4.5M13.5 13.5l4.5 4.5" />
  </svg>
);
const DeliverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m6 0a2.25 2.25 0 012.25 2.25v0A2.25 2.25 0 0115 16.5h-0A2.25 2.25 0 0112.75 18.75v0A2.25 2.25 0 0115 21h0a2.25 2.25 0 01-2.25-2.25V6a2.25 2.25 0 012.25-2.25h0A2.25 2.25 0 0117.25 6v15" />
  </svg>
);

const steps: HowWeWorkStep[] = [
  {
    id: 'research',
    title: 'Discovery & Strategy',
    description: 'We start by thoroughly understanding your vision, goals, and audience to craft a solid plan for your unique digital presence.',
    icon: <ResearchIcon className="w-10 h-10 text-brand-primary mb-4"/>
  },
  {
    id: 'designed',
    title: 'Unique Design & Good Build',
    description: 'Our creative process focuses on designing intuitive user interfaces and engaging experiences that embody "unique and good."',
    icon: <DesignedIcon className="w-10 h-10 text-brand-primary mb-4"/>
  },
  {
    id: 'deliver',
    title: 'Launch & Excel',
    description: 'We meticulously develop and deploy your website, ensuring high quality, peak performance, and a seamless launch for lasting impact.',
    icon: <DeliverIcon className="w-10 h-10 text-brand-primary mb-4"/>
  },
];

const HowWeWorkSection: React.FC = () => {
  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-brand-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">
            Our Journey to Your Unique & Good Website
            <span className="text-brand-primary">.</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <AnimatedSection 
              key={step.id}
              className="text-center p-6 bg-brand-bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              animationClasses="opacity-0 translate-y-10"
              visibleClasses="opacity-100 translate-y-0"
              delay={`delay-${index * 150}`}
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-brand-text mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;