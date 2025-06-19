import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Craft', href: '#what-we-do' }, // Renamed from What I Do to Craft
  { label: 'Promise', href: '#guarantee' }, // Added
  { label: 'Process', href: '#how-we-work' }, // Renamed from Journey to Process
  { label: 'Services', href: '#services-alt' }, 
  { label: 'Work', href: '#latest-work' },
  { label: 'Testimonials', href: '#testimonials'},
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      let currentSection = '';
      const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
            const rect = section.getBoundingClientRect();
            // Check if the top of the section is within a certain range from the top of the viewport
            // Adjusted threshold for better active link detection (e.g., when section top is near 1/3 of viewport height)
            if (rect.top <= window.innerHeight * 0.33 && rect.bottom >= window.innerHeight * 0.33) { 
              currentSection = `#${section.id}`;
              break;
            }
        }
      }
      
      // Fallback if no section is perfectly in the "active zone"
      if (!currentSection) {
        for (const section of sections) {
          if (section) {
            const rect = section.getBoundingClientRect();
            // If any part of the section is visible, and it's closer to the active zone than current, pick it.
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
              const currentActiveSection = currentSection ? document.querySelector(currentSection) : null;
              if (!currentActiveSection || Math.abs(rect.top - window.innerHeight * 0.33) < Math.abs(currentActiveSection.getBoundingClientRect().top - window.innerHeight * 0.33)) {
                currentSection = `#${section.id}`;
              }
            }
          }
        }
      }

      if (!currentSection && window.scrollY < 200) { 
         currentSection = '#hero';
      }
      setActiveLink(currentSection || '#hero'); // Ensure activeLink always has a value
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
        // Calculate offset for fixed navbar
        const navbarHeight = document.querySelector('header')?.offsetHeight || 80; // 80 is h-20
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        setActiveLink(href); 
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                  ${isScrolled || isOpen ? 'bg-brand-bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')} 
            className="text-2xl sm:text-3xl font-bold text-brand-primary hover:text-brand-secondary transition-colors"
          >
            Karthikeya K.
          </a>
          <nav className="hidden md:flex space-x-6 lg:space-x-8"> {/* Adjusted spacing for more items */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-md font-medium transition-colors duration-200 relative
                            ${activeLink === item.href ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'}
                            after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-brand-primary
                            after:transition-transform after:duration-300 ${activeLink === item.href ? 'after:scale-x-100' : 'after:scale-x-0'} hover:after:scale-x-100`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-brand-text hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-bg-white shadow-lg absolute top-20 left-0 right-0 pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-md font-medium transition-colors duration-200
                            ${activeLink === item.href ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;