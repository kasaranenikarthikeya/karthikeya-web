
import React from 'react';
import { WorkExperienceItem } from '../types';
import AnimatedSection from './AnimatedSection';

const experiences: WorkExperienceItem[] = [
  {
    id: 'byteco',
    company: 'ByTeco',
    period: 'Oct 2021 - Present',
    role: 'Sr. Visual Designer',
    description: 'I am a Sr.Visual Designer and have been working last 1.5 Year in ByTeco. Created website template, UI elements, Wireframe, Prototype, User flow, website flow, design Research. Designed mobile application Create user flow, mockup, wireframe, prototype, visual design, UI element by using sketch, figma and xd.',
  },
  {
    id: 'infosys',
    company: '1st Infoways',
    period: 'March 2020 - Oct 2021',
    role: 'UI/UX Designer',
    description: 'I am a UI/UX Designer and have been worked 2 Year in CMS Solution. Created website template, UI elements, Wireframe, Prototype, User flow, website flow, design Research. Designed mobile application Create user flow, mockup, wireframe, prototype, visual design, UI element by using sketch, figma and xd.',
  },
  {
    id: 'cms',
    company: 'CMS Solution',
    period: 'Jan 2019 - Mar 2020',
    role: 'Graphics Designer',
    description: 'Responsible for designed marketing advertising, Banner, Brochure, Logo, Icon, Infographic by using illustrator and photoshop, UI elements, Wireframe, Prototype, User flow, website flow, design Research. Designed mobile application Create user flow, mockup, wireframe, prototype, visual design, UI element by using sketch, figma and xd.',
  },
];

const WorkExperienceSection: React.FC = () => {
  return (
    <section id="work-experience" className="py-16 md:py-24 bg-brand-bg-dark-section"> {/* Light yellow background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 md:mb-16 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">
            My Work Experience
            <span className="text-brand-primary">.</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/3 ml-[-1px] w-0.5 bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              className="mb-12 md:mb-16"
              animationClasses="opacity-0 translate-y-10"
              visibleClasses="opacity-100 translate-y-0"
              delay={`delay-${index * 150}`}
            >
              <div className="md:grid md:grid-cols-3 md:gap-8 items-start">
                {/* Left side: Company & Period */}
                <div className="md:col-span-1 md:text-right md:pr-12 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-brand-text">{exp.company}</h3>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>

                {/* Center dot for desktop */}
                <div className="hidden md:flex justify-center items-start pt-1">
                   <div className="w-4 h-4 bg-brand-primary rounded-full border-4 border-brand-bg-dark-section shadow-sm"></div>
                </div>
                
                {/* Right side: Role & Description */}
                <div className="md:col-span-2 md:pl-0">
                   {/* Dotted line for mobile connecting to content block */}
                   <div className="md:hidden border-l-2 border-brand-primary border-dashed pl-6 mb-2 ml-2 h-6"></div>
                   <div className="relative md:border-none border-l-2 border-brand-primary border-dashed pl-6 ml-2 md:pl-0 md:ml-0 md:border-l-0">
                     {/* Dot for mobile */}
                     <div className="md:hidden absolute -left-[0.6rem] top-1 w-4 h-4 bg-brand-primary rounded-full border-4 border-brand-bg-dark-section"></div>
                    <h4 className="text-2xl font-semibold text-brand-text mb-2">{exp.role}</h4>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;