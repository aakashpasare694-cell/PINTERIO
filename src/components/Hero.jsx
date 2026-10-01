import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { heroTextStagger, textWordReveal } from '../animations/variants';

export default function Hero() {
  const scrollToExplore = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#121212] text-[#FBF9F5]">
      {/* Background Image with scale animation */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Pinterio luxury architectural interior background"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        {/* Subtle cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-black/60" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full pt-20 flex flex-col justify-between h-full pb-16">
        
        {/* Top spacer / studio badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-between text-xs font-mono tracking-[0.3em] uppercase text-stone-300"
        >
          <span>INTERIOR DESIGN STUDIO</span>
        </motion.div>

        {/* Center Typography */}
        <div className="my-auto py-8">
          <motion.div
            variants={heroTextStagger}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            {/* Tagline Lines */}
            <div className="overflow-hidden mb-2 sm:mb-4">
              <motion.h1
                variants={textWordReveal}
                className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] text-white"
              >
                Spaces
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2 sm:mb-4 pl-4 sm:pl-12 md:pl-20">
              <motion.h1
                variants={textWordReveal}
                className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light italic tracking-tight leading-[0.95] text-stone-200"
              >
                Designed
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={textWordReveal}
                className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] text-white"
              >
                to Inspire.
              </motion.h1>
            </div>
          </motion.div>

          {/* Subtext description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-12 max-w-xl text-stone-300 font-light text-base sm:text-lg md:text-xl leading-relaxed space-y-1"
          >
            <p>Thoughtful interiors. Timeless spaces.</p>
            <p className="text-stone-400">Personal spaces crafted with absolute precision.</p>
          </motion.div>
        </div>

        {/* Bottom CTA & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-end justify-between pt-6 border-t border-stone-800/80"
        >
          <button
            onClick={scrollToExplore}
            data-cursor="clickable"
            className="group flex items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-stone-200 hover:text-white transition-colors"
          >
            <span>Explore Our Work</span>
            <div className="w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
            </div>
          </button>

          {/* Scroll text indicator */}
          <div className="hidden sm:flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-stone-400 uppercase">
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-4 rounded-full bg-stone-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
