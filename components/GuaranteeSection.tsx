import React from 'react';
import AnimatedSection from './AnimatedSection';
import ShieldCheckIcon from './icons/ShieldCheckIcon';

const GuaranteeSection: React.FC = () => {
  return (
    <section id="guarantee" className="py-16 md:py-20 bg-brand-bg-dark-section"> {/* Using a light yellow background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection 
          className="text-center"
          animationClasses="opacity-0 scale-95"
          visibleClasses="opacity-100 scale-100"
        >
          <div className="flex justify-center mb-6">
            <ShieldCheckIcon className="w-16 h-16 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Our Unique & Good Promise
            <span className="text-brand-primary">.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I stand by the quality and uniqueness of my work. If, for any honest and appropriate reason, 
            you are not satisfied with the final website, I offer a 
            <strong className="text-brand-secondary font-semibold"> 100% Money-Back Guarantee</strong>. 
            Your peace of mind is my priority.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GuaranteeSection;