import React from 'react';
import { motion } from 'framer-motion';

export default function ImageReveal({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  dataCursor,
  dataCursorText,
  onClick,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden group bg-stone-200 ${aspectRatio} ${className}`}
      data-cursor={dataCursor}
      data-cursor-text={dataCursorText}
      onClick={onClick}
    >
      <motion.img
        src={src}
        alt={alt || 'Pinterio interior architecture project visual'}
        loading="lazy"
        className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}
