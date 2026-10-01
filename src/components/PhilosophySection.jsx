import React from 'react';
import { motion } from 'framer-motion';
import { philosophy } from '../data/studio';
import SectionHeading from './SectionHeading';
import { fadeUp } from '../animations/variants';

export default function PhilosophySection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] border-t border-stone-200" id="philosophy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        <SectionHeading
          number="05"
          category="Design Principles"
          title="Our Philosophy"
          subtitle="Four core pillars guiding every pencil stroke, material choice, and spatial volume."
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {philosophy.map((item, idx) => (
            <motion.div
              key={item.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={idx}
              className="group p-8 rounded-xs bg-white border border-stone-200/80 hover:border-stone-400 hover:shadow-lg transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-[#8C7A6B] tracking-[0.2em] font-semibold border-b border-stone-300 pb-1">
                    {item.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-[#8C7A6B] transition-colors" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#121212] mb-4 group-hover:text-[#8C7A6B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 text-[10px] font-mono text-stone-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                PILLAR {item.number} / PINTERIO
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
