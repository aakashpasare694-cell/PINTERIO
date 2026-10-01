import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/studio';
import SectionHeading from './SectionHeading';

export default function ProcessTimeline() {
  return (
    <section className="py-24 sm:py-32 bg-[#121212] text-[#FBF9F5] relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        <SectionHeading
          number="06"
          category="Execution Framework"
          title="From Vision to Reality"
          subtitle="A disciplined 5-phase methodology ensuring spatial precision, cost transparency, and white-glove delivery."
          dark={true}
        />

        {/* Timeline Container */}
        <div className="relative mt-16 sm:mt-24">
          
          {/* Vertical progress line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-stone-800 transform sm:-translate-x-1/2" />
          
          {/* Animated fill progress bar */}
          <motion.div
            initial={{ height: '0%' }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-4 sm:left-1/2 top-0 w-[2px] bg-[#8C7A6B] transform sm:-translate-x-1/2 origin-top"
          />

          <div className="space-y-16 sm:space-y-24">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-12">
                    <div className={`p-6 sm:p-8 rounded-xs bg-stone-900/90 border border-stone-800 hover:border-stone-600 transition-all ${
                      isEven ? 'sm:text-right' : 'sm:text-left'
                    }`}>
                      <div className={`flex items-center gap-3 mb-3 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="font-mono text-xs text-[#8C7A6B] tracking-[0.25em] font-semibold">
                          PHASE {step.number}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
                        {step.title}
                      </h3>

                      <h4 className="text-sm font-medium text-stone-300 mb-4 font-sans">
                        {step.subtitle}
                      </h4>

                      <p className="text-stone-400 font-light text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Circle Indicator on vertical line */}
                  <div className="absolute left-4 sm:left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-[#121212] border-2 border-[#8C7A6B] flex items-center justify-center z-10">
                    <span className="font-mono text-[10px] text-white font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Empty spacer half for layout balance on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
