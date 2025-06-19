
// Attempting to resolve module export error by forcing a file update.
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus("Please fill out all fields.");
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus("Please enter a valid email address.");
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }

    console.log('Contact form submitted:', formData);
    // Here you would typically send the form data to a backend or email service
    setFormStatus('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' }); 
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">
            Let's Build Your Unique & Good Digital Future
            <span className="text-brand-primary">.</span>
          </h2>
          <p className="text-lg text-gray-600">Ready to discuss your next big idea? Reach out – I'm excited to hear from you!</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <AnimatedSection 
            className="bg-brand-bg-light p-8 rounded-lg shadow-xl"
            animationClasses="opacity-0 translate-x-[-20px]"
            visibleClasses="opacity-100 translate-x-0"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" name="name" id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required 
                       className="block w-full px-4 py-3 bg-white text-brand-text placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input type="email" name="email" id="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required
                       className="block w-full px-4 py-3 bg-white text-brand-text placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"/>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Website Idea" value={formData.subject} onChange={handleChange} required
                       className="block w-full px-4 py-3 bg-white text-brand-text placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" id="message" placeholder="Your message here..." rows={5} value={formData.message} onChange={handleChange} required
                          className="block w-full px-4 py-3 bg-white text-brand-text placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"></textarea>
              </div>
              <div className="text-left">
                <Button type="submit" variant="primary" className="shadow-lg hover:shadow-xl">
                  Send Message
                </Button>
              </div>
              {formStatus && (
                <p className={`mt-4 text-sm text-center p-3 rounded-md ${formStatus.includes("successfully") ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </AnimatedSection>

          <AnimatedSection 
            className="space-y-8"
            animationClasses="opacity-0 translate-x-[20px]"
            visibleClasses="opacity-100 translate-x-0"
            delay="delay-150"
          >
            <div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">Email Address</h3>
              <a href="mailto:kasarnenikarthikeya4@gmail.com" className="text-gray-600 hover:text-brand-primary break-all">kasarnenikarthikeya4@gmail.com</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">Phone Number</h3>
              <a href="tel:+17816036013" className="text-gray-600 hover:text-brand-primary">+1 (781) 603-6013</a>
            </div>
            {/* Office address removed as per PRD focus */}
            <div>
              <h3 className="text-xl font-semibold text-brand-text mb-3">Follow Me</h3>
              <div className="flex space-x-4">
                {/* Replace with actual links and SVG icons */}
                <a href="#" className="text-gray-500 hover:text-brand-primary"><span className="sr-only">Facebook</span> F </a>
                <a href="#" className="text-gray-500 hover:text-brand-primary"><span className="sr-only">Twitter</span> T </a>
                <a href="#" className="text-gray-500 hover:text-brand-primary"><span className="sr-only">LinkedIn</span> L </a>
                <a href="#" className="text-gray-500 hover:text-brand-primary"><span className="sr-only">Instagram</span> I </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
