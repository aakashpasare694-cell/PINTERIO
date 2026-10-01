import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '../animations/variants';

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
