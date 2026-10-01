import React from 'react';
import PageTransition from '../components/PageTransition';
import AboutSection from '../components/AboutSection';
import PhilosophySection from '../components/PhilosophySection';
import StatsSection from '../components/StatsSection';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 sm:pt-40 bg-[#FBF9F5]">
        
        {/* About Hero Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-mono text-[#8C7A6B] uppercase tracking-[0.25em] block mb-4">
              ABOUT PINTERIO STUDIO
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#121212] tracking-tight leading-none">
              Crafting Quiet Masterpieces.
            </h1>
            <p className="mt-6 text-stone-600 font-light text-lg sm:text-xl max-w-2xl leading-relaxed">
              We are an international interior architecture studio devoted to spatial clarity, elemental materiality, and timeless warmth.
            </p>
          </motion.div>
        </div>

        {/* Main About Component */}
        <AboutSection showFullDetails={true} />

        {/* Design Philosophy */}
        <PhilosophySection />

        {/* Statistics */}
        <StatsSection />

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </PageTransition>
  );
}
