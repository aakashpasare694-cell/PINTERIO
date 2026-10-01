import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-28 sm:py-40 bg-[#121212] text-[#FBF9F5] relative overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div className="absolute inset-0 bg-radial from-stone-800/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10 text-center">
        
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono tracking-[0.3em] uppercase text-[#8C7A6B] block mb-6"
        >
          START A COMMISSIONS DIALOGUE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.02] mb-6"
        >
          Let's Create <br />
          <span className="italic text-stone-300 font-normal">Something Beautiful.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-stone-300 text-lg sm:text-xl max-w-xl mx-auto font-light mb-12"
        >
          Have a space in mind? Tell us about your vision and let's craft a spatial masterpiece together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <Link
            to="/contact"
            data-cursor="clickable"
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white text-[#121212] hover:bg-[#8C7A6B] hover:text-white text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-xl group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Contact Snippets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-stone-800/80 max-w-2xl mx-auto text-left">
          
          <div className="flex items-center gap-4 p-4 rounded-xs bg-stone-900/50 border border-stone-800/50">
            <div className="p-3 rounded-full bg-stone-800 text-[#8C7A6B]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">EMAIL INQUIRIES</span>
              <a href="mailto:vishwakarmamaruti1@gmail.com" className="text-sm text-stone-200 hover:text-white transition-colors">
                vishwakarmamaruti1@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xs bg-stone-900/50 border border-stone-800/50">
            <div className="p-3 rounded-full bg-stone-800 text-[#8C7A6B]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">DIRECT LINE</span>
              <a href="tel:+918956903770" className="text-sm text-stone-200 hover:text-white transition-colors">
                +91 89569 03770
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
