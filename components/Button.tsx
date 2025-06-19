
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent'; // accent can be an alternative color if needed
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-3 rounded-md font-semibold text-base md:text-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md";
  
  let variantStyle = "";
  switch (variant) {
    case 'primary': // Yellow/Orange button
      variantStyle = "bg-brand-primary text-brand-text hover:bg-brand-secondary focus:ring-brand-primary";
      break;
    case 'secondary': // Outline button
      variantStyle = "bg-transparent text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-brand-text focus:ring-brand-primary";
      break;
    case 'accent': // e.g. a dark button if needed
      variantStyle = "bg-brand-text text-brand-bg-white hover:bg-gray-700 focus:ring-brand-text"; 
      break;
    default:
      variantStyle = "bg-brand-primary text-brand-text hover:bg-brand-secondary focus:ring-brand-primary";
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;