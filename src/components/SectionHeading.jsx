import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function SectionHeading({
  number,
  category,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className={`mb-12 md:mb-20 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : align === 'right' ? 'text-right' : 'max-w-4xl'} ${className}`}
    >
      {/* Category / Index tag */}
      <div className={`flex items-center gap-3 mb-4 text-xs font-medium tracking-[0.25em] uppercase ${dark ? 'text-stone-400' : 'text-[#8C7A6B]'} ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : ''}`}>
        {number && <span className="font-mono opacity-80">{number}</span>}
        {number && category && <span>—</span>}
        {category && <span>{category}</span>}
      </div>

      {/* Main Display Heading */}
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight ${dark ? 'text-[#FBF9F5]' : 'text-[#121212]'}`}>
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-light leading-relaxed ${dark ? 'text-stone-300' : 'text-stone-600'} ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
