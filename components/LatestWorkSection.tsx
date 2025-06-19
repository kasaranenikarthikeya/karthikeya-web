import React from 'react';
import AnimatedSection from './AnimatedSection';
// import Button from './Button'; // Not needed for "Coming Soon" version

const LatestWorkSection: React.FC = () => {
  return (
    <section id="latest-work" className="py-16 md:py-24 bg-brand-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">
            Gallery of Unique & Good: My Signature Projects
            <span className="text-brand-primary">.</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection 
          className="bg-brand-bg-white rounded-lg shadow-xl overflow-hidden p-8 md:p-12 text-center"
          animationClasses="opacity-0 translate-y-10"
          visibleClasses="opacity-100 translate-y-0"
        >
          <img 
            src="https://placehold.co/600x400/FDBA74/1F2937?text=Unique+Creations+Loading..." 
            alt="Coming Soon Placeholder" 
            className="w-full max-w-lg mx-auto h-auto object-cover rounded-md mb-8 shadow-md"
          />
          <h3 className="text-2xl font-semibold text-brand-text mb-4">
            Witness the Unfolding of Unique & Good Digital Stories!
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            This is where the magic happens! I'm constantly brewing up fresh, unique digital experiences. 
            Stay tuned to see my latest work that aims to inspire and deliver excellence.
          </p>
          {/* Optional: Add a subtle loading animation or graphic here */}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LatestWorkSection;