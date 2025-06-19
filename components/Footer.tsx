import React from 'react';

// Placeholder social icons - ideally use SVGs
const FacebookIcon = () => <span>FB</span>; // Replace with actual SVG icon
const TwitterIcon = () => <span>TW</span>;   // Replace with actual SVG icon
const LinkedInIcon = () => <span>LI</span>;  // Replace with actual SVG icon
const InstagramIcon = () => <span>IN</span>; // Replace with actual SVG icon


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg-white border-t border-gray-200 text-brand-text py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} Karthikeya Kasaraneni. All Rights Reserved. <br className="sm:hidden"/> Unique experiences crafted with passion.
          </p>
          <div className="flex space-x-5">
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-brand-primary transition-colors">
              <FacebookIcon /> 
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-brand-primary transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-brand-primary transition-colors">
              <LinkedInIcon />
            </a>
             <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-brand-primary transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;