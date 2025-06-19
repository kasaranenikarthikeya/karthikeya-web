
import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationClasses?: string; // Initial classes (e.g., "opacity-0 translate-y-10")
  visibleClasses?: string;  // Classes when visible (e.g., "opacity-100 translate-y-0")
  threshold?: number;
  delay?: string; // Tailwind delay class e.g. delay-300 (or direct style if needed)
  style?: React.CSSProperties; // Allow direct style for animation delay if Tailwind classes are not sufficient
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animationClasses = 'opacity-0 translate-y-5', // Default to a slight upward animation
  visibleClasses = 'opacity-100 translate-y-0',
  threshold = 0.1,
  delay = '', // e.g. 'delay-100', 'delay-200'
  style
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const combinedClassName = `transition-all duration-700 ease-out ${delay} ${className} ${isVisible ? visibleClasses : animationClasses}`;

  return (
    <div 
      ref={ref} 
      className={combinedClassName}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;