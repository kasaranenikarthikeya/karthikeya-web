
import React from 'react';
import { ServiceItem } from '../types';
import AnimatedSection from './AnimatedSection';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <AnimatedSection 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#6A93D0]"
      delay={`delay-${index * 100}`} // Stagger animation
    >
      <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-full bg-[#EBF1F5] text-[#6A93D0] mx-auto">
        {React.cloneElement(service.icon, { className: "w-8 h-8" })}
      </div>
      <h3 className="text-xl font-[Inter] font-semibold text-[#2C3E50] mb-3 text-center">{service.title}</h3>
      <p className="text-md font-[Inter] text-gray-600 leading-relaxed text-center">{service.description}</p>
    </AnimatedSection>
  );
};

export default ServiceCard;