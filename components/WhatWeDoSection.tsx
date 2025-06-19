import React from 'react';
import { WhatWeDoItem } from '../types';
import AnimatedSection from './AnimatedSection';

// Placeholder icons - replace with actual SVGs or a proper icon library
const UiUxResearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a2.25 2.25 0 11-4.5 0 .75.75 0 001.125-1.125V2.25m4.5 3.75a2.25 2.25 0 00-4.5 0V6m4.5 0a2.25 2.25 0 014.5 0V6m-19.5 0h9.75m0 0a2.25 2.25 0 004.5 0M3 6V2.25A2.25 2.25 0 015.25 0h13.5A2.25 2.25 0 0121 2.25V6m-19.5 0V9.75A2.25 2.25 0 005.25 12h13.5A2.25 2.25 0 0021 9.75V6m-19.5 0v2.25A2.25 2.25 0 005.25 10.5h3.75a.75.75 0 010 1.5H5.25A2.25 2.25 0 003 13.5v9A2.25 2.25 0 005.25 24h13.5A2.25 2.25 0 0021 21.75v-9A2.25 2.25 0 0018.75 12h-3.75a.75.75 0 010-1.5h3.75A2.25 2.25 0 0021 8.25V6" />
    <circle cx="12" cy="18" r="3" />
  </svg>
);
const WorkingProcessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 18L18 15.75l-2.25-2.25L18 11.25l-2.25-2.25L13.5 11.25 11.25 9 9 11.25 6.75 9 4.5 11.25 6.75 13.5 4.5 15.75 6.75 18l2.25-2.25L11.25 18l2.25-2.25L15.75 18z" />
  </svg>
);
const DesignIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 1.773a1.036 1.036 0 011.453 0l3.028 3.027a1.036 1.036 0 010 1.452l-3.028 3.028a1.036 1.036 0 01-1.452 0l-3.028-3.027a1.036 1.036 0 010-1.452l3.028-3.028z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const whatWeDoItems: WhatWeDoItem[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Research',
    description: 'Understanding your vision and target audience to lay a strong foundation for a unique and effective website.',
    icon: <UiUxResearchIcon className="w-12 h-12 text-brand-primary group-hover:text-brand-secondary transition-colors" />,
  },
  {
    id: 'process',
    title: 'Working Process',
    description: 'A collaborative and iterative approach, ensuring transparency and incorporating your feedback at every stage of development.',
    icon: <WorkingProcessIcon className="w-12 h-12 text-brand-primary group-hover:text-brand-secondary transition-colors" />,
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Crafting bespoke, responsive, and aesthetically pleasing websites tailored to your specific goals and brand identity.',
    icon: <DesignIcon className="w-12 h-12 text-brand-primary group-hover:text-brand-secondary transition-colors" />,
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-brand-bg-white relative">
      <AnimatedSection className="text-center mb-12 md:mb-16 relative z-10">
         <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">
            The Art of Unique & Good: What I Craft
            <span className="text-brand-primary">.</span>
          </h2>
      </AnimatedSection>
      <div 
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden select-none pointer-events-none"
      >
        <h1 className="text-[10rem] sm:text-[12rem] md:text-[20rem] lg:text-[28rem] font-extrabold text-gray-100 opacity-60 leading-none tracking-tighter">
          WHAT I DO
        </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {whatWeDoItems.map((item, index) => (
            <AnimatedSection 
              key={item.id}
              className="group text-center p-6 md:p-8 rounded-lg transition-all duration-300 hover:shadow-2xl bg-white/80 backdrop-blur-sm" // Added bg for readability over faint text
              animationClasses="opacity-0 translate-y-10"
              visibleClasses="opacity-100 translate-y-0"
              delay={`delay-${index * 150}`}
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-brand-text mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;