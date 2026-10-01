import React from 'react';
import PageTransition from '../components/PageTransition';
import JournalSection from '../components/JournalSection';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'framer-motion';

export default function Journal() {
  return (
    <PageTransition>
      <div className="pt-32 sm:pt-40 bg-[#FBF9F5]">
        
        {/* Journal Hero Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-mono text-[#8C7A6B] uppercase tracking-[0.25em] block mb-4">
              INTERIOR ESSAYS & PERSPECTIVES
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#121212] tracking-tight leading-none">
              Pinterio Journal.
            </h1>
            <p className="mt-6 text-stone-600 font-light text-lg sm:text-xl max-w-2xl leading-relaxed">
              Explorations on spatial philosophy, natural light physics, material patinas, and modern interior living.
            </p>
          </motion.div>
        </div>

        {/* All Articles Grid */}
        <JournalSection limit={100} />

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </PageTransition>
  );
}
