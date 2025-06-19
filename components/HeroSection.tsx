import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection'; 

const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  const personImageUrl = "https://media.licdn.com/dms/image/v2/D5603AQHB9ZNLUTJCFQ/profile-displayphoto-shrink_800_800/B56ZY6uY0lGcAc-/0/1744741964303?e=1754524800&v=beta&t=nXSq3tC2SF1XKtvCqDYY2Nfv46x4p8jJ6gLQZpjaKH0"; 

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center bg-brand-bg-light relative overflow-hidden pt-24 md:pt-20" 
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c7da?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} 
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg-light/80 via-brand-bg-light/50 to-transparent md:from-brand-bg-light/90 md:via-brand-bg-light/70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <AnimatedSection animationClasses="opacity-0 translate-y-6" visibleClasses="opacity-100 translate-y-0" delay="delay-100">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text mb-4 leading-tight">
                Karthikeya Kasaraneni:
                <br />
                <span className="text-brand-primary">Igniting Digital Uniqueness, Website by Website.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animationClasses="opacity-0 translate-y-6" visibleClasses="opacity-100 translate-y-0" delay="delay-300">
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
                More than a motto, it's my mission: 
                <span className="font-semibold text-brand-secondary"> "To make websites which are unique and good,"</span> ensuring your online presence is both memorable and effective.
              </p>
            </AnimatedSection>
            <AnimatedSection animationClasses="opacity-0 scale-90" visibleClasses="opacity-100 scale-100" delay="delay-400">
              <Button 
                variant="primary" 
                className="text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={(e) => handleScrollTo(e, '#latest-work')}
              >
                Explore My Work
              </Button>
            </AnimatedSection>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <AnimatedSection animationClasses="opacity-0 scale-90" visibleClasses="opacity-100 scale-100" delay="delay-200">
              <img 
                src={personImageUrl} 
                alt="Karthikeya Kasaraneni - Creative Professional" 
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto object-cover rounded-lg shadow-xl" 
              />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;