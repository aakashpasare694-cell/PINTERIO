import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { services } from '../data/services';
import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';

export default function ServiceList() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-[#121212] text-[#FBF9F5]" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        <SectionHeading
          number="03"
          category="Capabilities"
          title="What We Do"
          subtitle="Full-spectrum spatial architecture, interior design, custom joinery, and turn-key execution."
          dark={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Service Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((service, index) => {
              const isOpen = activeService === index;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setActiveService(index)}
                  className={`border-b border-stone-800 pb-6 pt-4 cursor-pointer transition-all duration-300 ${
                    isOpen ? 'border-stone-500' : 'hover:border-stone-700'
                  }`}
                  data-cursor="clickable"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-sm sm:text-base text-[#8C7A6B]">
                        {service.number}
                      </span>
                      <h3 className={`font-serif text-2xl sm:text-3xl lg:text-4xl transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-stone-400 group-hover:text-stone-200'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className={`p-2 rounded-full border transition-colors ${
                      isOpen ? 'border-stone-400 bg-stone-800 text-white' : 'border-stone-800 text-stone-500'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Expandable description */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pl-12 pr-4 pt-4"
                      >
                        <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light mb-4">
                          {service.fullDescription}
                        </p>
                        
                        {/* Deliverables tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {service.deliverables.map((item) => (
                            <span
                              key={item}
                              className="text-[11px] font-mono uppercase tracking-wider text-stone-300 px-3 py-1 bg-stone-900 rounded-full border border-stone-800"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Dynamic Image Preview Column */}
          <div className="lg:col-span-5 sticky top-32 hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-stone-900 border border-stone-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={services[activeService].id}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs text-[#8C7A6B] uppercase tracking-widest block mb-1">
                  SERVICE PREVIEW — {services[activeService].number}
                </span>
                <p className="font-serif text-2xl text-white">
                  {services[activeService].title}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Banner inside services */}
        <div className="mt-16 pt-12 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-stone-400 font-light text-sm sm:text-base">
            Need a bespoke service package or multi-disciplinary spatial masterplan?
          </p>
          <Link
            to="/services"
            data-cursor="clickable"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-white text-[#121212] hover:bg-[#8C7A6B] hover:text-white transition-all"
          >
            <span>Explore All Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
