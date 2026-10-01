import React from 'react';
import PageTransition from '../components/PageTransition';
import ServiceList from '../components/ServiceList';
import MaterialsSection from '../components/MaterialsSection';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <PageTransition>
      <div className="pt-32 sm:pt-40 bg-[#FBF9F5]">
        
        {/* Services Hero Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-mono text-[#8C7A6B] uppercase tracking-[0.25em] block mb-4">
              STUDIO CAPABILITIES & SERVICES
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#121212] tracking-tight leading-none">
              What We Do.
            </h1>
            <p className="mt-6 text-stone-600 font-light text-lg sm:text-xl max-w-2xl leading-relaxed">
              From initial spatial concept sketches to bespoke millwork, lighting physics, and white-glove turnkey execution.
            </p>
          </motion.div>
        </div>

        {/* Services Accordion List Component */}
        <ServiceList />

        {/* Materials Showcase */}
        <MaterialsSection />

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </PageTransition>
  );
}
