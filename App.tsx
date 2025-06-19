
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import GuaranteeSection from './components/GuaranteeSection'; // Added
// import WorkExperienceSection from './components/WorkExperienceSection'; // Removed
import HowWeWorkSection from './components/HowWeWorkSection';
import DiverseServicesSection from './components/DiverseServicesSection';
import LatestWorkSection from './components/LatestWorkSection';
import TestimonialsSection from './components/TestimonialsSection'; // Ensured relative path
// import TrustedCompaniesSection from './components/TrustedCompaniesSection'; // Removed
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-bg-white min-h-screen text-brand-text font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <GuaranteeSection /> {/* Added */}
        {/* <WorkExperienceSection /> */} {/* Removed */}
        <HowWeWorkSection />
        <DiverseServicesSection />
        <LatestWorkSection />
        <TestimonialsSection />
        {/* <TrustedCompaniesSection /> */} {/* Removed */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;