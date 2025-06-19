
import React, { useState, useEffect } from 'react';
import { TestimonialItem } from '../types';
import AnimatedSection from './AnimatedSection';
import Button from './Button'; // Import Button component

// Star Icon Component (already defined, ensuring it's used correctly)
const StarIcon: React.FC<React.SVGProps<SVGSVGElement> & {filled?: boolean, isInteractive?: boolean}> = ({ filled = true, isInteractive = false, ...props }) => (
  <svg 
    {...props} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"} 
    className={`w-5 h-5 ${filled ? 'text-brand-primary' : 'text-gray-300'} ${isInteractive ? 'cursor-pointer hover:opacity-75' : ''}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth={filled ? 0 : 1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.82.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.82-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const initialTestimonials: TestimonialItem[] = [
  {
    id: '1',
    clientName: 'Leslie Alexander',
    clientTitle: 'Freelance React Developer',
    feedback: "Karthikeya is a true professional with a knack for creating truly unique and functional websites. A pleasure to work with!",
    clientImage: 'https://placehold.co/100x100/FDBA74/FFFFFF?text=LA', 
    rating: 5,
  },
  {
    id: '2',
    clientName: 'Robert Fox',
    clientTitle: 'CEO, Example Startup',
    feedback: "Amazing work! Delivered on time and exceeded expectations. Our new site is good, unique, and effective. Highly recommend!",
    clientImage: 'https://placehold.co/100x100/FB923C/FFFFFF?text=RF', 
    rating: 5,
  },
   {
    id: '3',
    clientName: 'Jenny Wilson',
    clientTitle: 'Marketing Head, Creative Co.',
    feedback: "The website Karthikeya built for us is fantastic and performing great. Captured our vision perfectly. Thank you!",
    clientImage: 'https://placehold.co/100x100/FDBA74/FFFFFF?text=JW', 
    rating: 5,
  },
];

const LOCAL_STORAGE_KEY = 'userSubmittedReviews';

const TestimonialsSection: React.FC = () => {
  const [displayedTestimonials, setDisplayedTestimonials] = useState<TestimonialItem[]>(initialTestimonials);
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState<number>(0); // 0 means no rating selected yet
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [reviewStatus, setReviewStatus] = useState<string | null>(null);

  useEffect(() => {
    const storedUserReviewsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedUserReviewsJSON) {
      try {
        const storedUserReviews: TestimonialItem[] = JSON.parse(storedUserReviewsJSON);
        setDisplayedTestimonials([...initialTestimonials, ...storedUserReviews]);
      } catch (error) {
        console.error("Failed to parse user reviews from localStorage:", error);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
  }, []);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewText.trim()) {
      setReviewStatus("Please fill in both your name and review.");
      setTimeout(() => setReviewStatus(null), 3000);
      return;
    }
    if (reviewRating === 0) {
      setReviewStatus("Please select a star rating for your review.");
      setTimeout(() => setReviewStatus(null), 3000);
      return;
    }

    const newReview: TestimonialItem = {
      id: `user-${Date.now().toString()}`,
      clientName: reviewName,
      feedback: reviewText,
      rating: reviewRating,
      clientImage: `https://placehold.co/100x100/A0AEC0/FFFFFF?text=${reviewName.substring(0,2).toUpperCase() || 'UR'}`,
      clientTitle: 'Valued User',
    };

    setDisplayedTestimonials(prevTestimonials => [...prevTestimonials, newReview]);

    const currentUserReviewsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    const currentUserReviews: TestimonialItem[] = currentUserReviewsJSON ? JSON.parse(currentUserReviewsJSON) : [];
    const updatedUserReviews = [...currentUserReviews, newReview];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUserReviews));
    
    setReviewStatus('Thank you for your review! It has been submitted.');
    setReviewName('');
    setReviewText('');
    setReviewRating(0); // Reset rating
    setHoverRating(0);
    setTimeout(() => setReviewStatus(null), 5000);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">
            Echoes of Unique & Good: Client Triumphs
            <span className="text-brand-primary">.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear directly from those who've experienced the unique and good difference.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedTestimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.id}
              className="bg-brand-bg-light p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              animationClasses="opacity-0 translate-y-10"
              visibleClasses="opacity-100 translate-y-0"
              delay={`delay-${index * 100}`}
            >
              <div className="flex items-center mb-4">
                {testimonial.clientImage && (
                  <img src={testimonial.clientImage} alt={testimonial.clientName} className="w-16 h-16 rounded-full mr-4 object-cover bg-gray-200" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-brand-text">{testimonial.clientName}</h3>
                  {testimonial.clientTitle && <p className="text-sm text-gray-500">{testimonial.clientTitle}</p>}
                </div>
              </div>
              {testimonial.rating && testimonial.rating > 0 && (
                <div className="flex mb-3" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating!} aria-hidden="true" />
                  ))}
                </div>
              )}
              <p className="text-gray-600 leading-relaxed italic flex-grow">"{testimonial.feedback}"</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection 
            className="mt-16 pt-12 border-t border-gray-200"
            animationClasses="opacity-0 translate-y-10"
            visibleClasses="opacity-100 translate-y-0"
            delay="delay-300"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-brand-text text-center mb-8">
            Share Your Unique & Good Experience
            <span className="text-brand-primary">!</span>
          </h3>
          <form onSubmit={handleReviewSubmit} className="max-w-xl mx-auto bg-brand-bg-light p-8 rounded-lg shadow-xl space-y-6">
            <div>
              <label htmlFor="reviewName" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                name="reviewName" 
                id="reviewName" 
                placeholder="E.g., Jane Doe"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                required 
                className="block w-full px-4 py-3 bg-white text-brand-text placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                aria-required="true"
              />
            </div>
             <div>
              <label htmlFor="reviewRating" className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
              <div 
                id="reviewRating"
                className="flex space-x-1" 
                role="radiogroup" 
                aria-label="Select your rating"
                onMouseLeave={() => setHoverRating(0)}
              >
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <button
                    type="button" 
                    key={starValue}
                    role="radio" 
                    aria-checked={reviewRating === starValue}
                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                    onClick={() => setReviewRating(starValue)}
                    onMouseEnter={() => setHoverRating(starValue)}
                    className="p-1 focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
                  >
                    <StarIcon 
                      filled={(hoverRating || reviewRating) >= starValue} 
                      isInteractive={true}
                      className="w-7 h-7"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
              <textarea 
                name="reviewText" 
                id="reviewText" 
                placeholder="Share your experience..."
                rows={5}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
                className="block w-full px-4 py-3 bg-white text-brand-text placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                aria-required="true"
              ></textarea>
            </div>
            <div className="text-center">
              <Button type="submit" variant="primary" className="shadow-lg hover:shadow-xl">
                Submit Review
              </Button>
            </div>
            {reviewStatus && (
              <p 
                className={`mt-4 text-sm text-center p-3 rounded-md ${reviewStatus.includes("Thank you") ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                role="alert"
              >
                {reviewStatus}
              </p>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
