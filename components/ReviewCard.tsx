
import React from 'react';
import { Review } from '../types';
import StarIcon from './icons/StarIcon';
import AnimatedSection from './AnimatedSection';

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => {
  return (
    <AnimatedSection 
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#A6D9A0]"
      delay={`delay-${index * 100}`}
      animationClasses="opacity-0 translate-y-5"
      visibleClasses="opacity-100 translate-y-0"
    >
      {review.rating && (
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon 
              key={i} 
              className={`w-5 h-5 ${i < review.rating! ? 'text-[#FFC107]' : 'text-gray-300'}`} 
              filled={i < review.rating!}
            />
          ))}
        </div>
      )}
      <p className="text-md font-[Inter] text-gray-700 leading-relaxed mb-4 italic">"{review.feedback}"</p>
      <p className="text-sm font-[Inter] font-semibold text-[#2C3E50] text-right">- {review.clientName}</p>
    </AnimatedSection>
  );
};

export default ReviewCard;
