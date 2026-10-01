import React from 'react';
import { motion } from 'framer-motion';

export default function BrandStatement() {
  const statementWords = [
    "We", "don't", "simply", "decorate", "spaces.",
    "We", "create", "environments", "that", "become",
    "part", "of", "the", "way", "you", "live."
  ];

  return (
    <section className="py-24 sm:py-32 md:py-44 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono tracking-[0.3em] uppercase text-[#8C7A6B] block mb-8"
        >
          OUR PHILOSOPHICAL FOUNDATION
        </motion.span>

        {/* Oversized typography word by word scroll animation */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#121212] leading-[1.15] tracking-tight flex flex-wrap justify-center gap-x-3 sm:gap-x-5 gap-y-2">
          {statementWords.map((word, index) => {
            const isItalic = word === "environments" || word === "live.";
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={isItalic ? "italic text-stone-600 font-normal" : ""}
              >
                {word}
              </motion.span>
            );
          })}
        </h2>

        {/* Supporting studio note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 flex items-center justify-center gap-4 text-xs font-medium tracking-widest text-stone-500 uppercase"
        >
          <div className="w-12 h-[1px] bg-stone-300" />
          <span>PINTERIO STUDIO — ARCHITECTURE & INTERIORS</span>
          <div className="w-12 h-[1px] bg-stone-300" />
        </motion.div>

      </div>
    </section>
  );
}
