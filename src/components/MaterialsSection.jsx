import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { materials } from '../data/materials';
import SectionHeading from './SectionHeading';

export default function MaterialsSection() {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5]" id="materials">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        <SectionHeading
          number="07"
          category="Materiality & Tactility"
          title="Beauty Lives in the Details."
          subtitle="We source, test, and hand-finish natural elemental surfaces that mature with grace."
        />

        {/* Materials Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Large Visual Display */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-stone-900 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedMaterial.id}
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="font-mono text-xs text-[#8C7A6B] uppercase tracking-widest block">
                  SELECTED MATERIAL SPECIFICATION
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light">
                  {selectedMaterial.name}
                </h3>
                <p className="text-stone-300 text-sm sm:text-base font-light max-w-xl">
                  {selectedMaterial.detail}
                </p>
              </div>
            </div>
          </div>

          {/* Right Material Thumbnail List */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {materials.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <motion.button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  onMouseEnter={() => setSelectedMaterial(mat)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor="clickable"
                  className={`p-4 rounded-xs text-left transition-all border relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#121212] text-white border-[#121212] shadow-md'
                      : 'bg-white text-[#121212] border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-xs mb-3 bg-stone-200">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-serif text-base font-medium leading-tight">
                    {mat.name}
                  </h4>
                  <p className={`text-[11px] mt-1 font-mono line-clamp-1 ${
                    isSelected ? 'text-stone-400' : 'text-stone-500'
                  }`}>
                    {mat.subtitle}
                  </p>
                </motion.button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
