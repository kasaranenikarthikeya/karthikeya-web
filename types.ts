
import React from 'react';

// For "What We Do" section
export interface WhatWeDoItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>; // Icon for the cards
}

// For "Work Experience" section
export interface WorkExperienceItem {
  id: string;
  company: string;
  period: string;
  role: string;
  description: string;
}

// For "How We Work" section
export interface HowWeWorkStep {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

// For new "Services" list section
export interface DiverseServiceItem {
  id: string;
  title: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  feedback: string;
  clientImage?: string; // URL to client's photo
  clientTitle?: string; // e.g., CEO of Company
  rating?: number; // Rating from 1 to 5
}

export interface Project { // Kept from original, might need adjustments
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CompanyLogo {
  id: string;
  name: string;
  logoUrl: string; // URL to company logo
}

// Type for ReviewCard.tsx
export interface Review {
  id: string;
  clientName: string;
  feedback: string;
  rating?: number; // Optional rating, as used in ReviewCard
}


// Original ServiceItem for reference, can be adapted or removed
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}