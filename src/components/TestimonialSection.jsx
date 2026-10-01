import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import SectionHeading from './SectionHeading';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 sm:py-36 bg-[#121212] text-[#FBF9F5] border-t border-stone-800" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        
        <SectionHeading
          number="08"
          category="Client Voices"
          title="Endorsements"
          subtitle="Reflections from patrons who inhabit our designed spaces."
          dark={true}
          align="center"
        />

        {/* Large Editorial Quote Display */}
        <div className="relative min-h-[320px] sm:min-h-[280px] flex flex-col justify-between max-w-4xl mx-auto text-center mt-8">
          
          <Quote className="w-12 h-12 mx-auto text-[#8C7A6B]/40 mb-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-white leading-relaxed italic">
                “{current.quote}”
              </blockquote>

              <div className="pt-4 border-t border-stone-800/80 max-w-md mx-auto">
                <h4 className="font-sans text-base sm:text-lg font-semibold text-white tracking-wide">
                  {current.author}
                </h4>
                <p className="text-xs font-mono text-[#8C7A6B] uppercase tracking-widest mt-1">
                  {current.project} · {current.location} ({current.category})
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12 pt-8">
            <button
              onClick={prevTestimonial}
              data-cursor="clickable"
              className="p-3 rounded-full border border-stone-800 hover:border-stone-500 text-stone-300 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Step Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#8C7A6B]' : 'w-2 bg-stone-800'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              data-cursor="clickable"
              className="p-3 rounded-full border border-stone-800 hover:border-stone-500 text-stone-300 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
