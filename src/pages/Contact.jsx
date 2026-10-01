import React from 'react';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-32 sm:pt-40 bg-[#FBF9F5] min-h-screen">
        
        {/* Contact Hero Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-mono text-[#8C7A6B] uppercase tracking-[0.25em] block mb-4">
              COMMISSION AN INQUIRY
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#121212] tracking-tight leading-none">
              Start a Dialogue.
            </h1>
            <p className="mt-6 text-stone-600 font-light text-lg sm:text-xl max-w-2xl leading-relaxed">
              We accept a limited number of private residential and luxury commercial commissions each year to guarantee uncompromising interior design focus.
            </p>
          </motion.div>
        </div>

        {/* Form & Studio Info Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Contact Form (Multi-step) */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

            {/* Right Studio Information */}
            <div className="lg:col-span-4 space-y-8 bg-[#121212] text-[#FBF9F5] p-8 sm:p-10 rounded-xs">
              <span className="text-xs font-mono text-[#8C7A6B] uppercase tracking-[0.25em] block pb-3 border-b border-stone-800">
                DIRECT CONTACT
              </span>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-stone-800 text-[#8C7A6B] mt-1">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400">STUDIO EMAIL</h4>
                    <a href="mailto:vishwakarmamaruti1@gmail.com" className="text-base text-white hover:text-[#8C7A6B] transition-colors font-medium">
                      vishwakarmamaruti1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-stone-800 text-[#8C7A6B] mt-1">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400">TELEPHONE</h4>
                    <a href="tel:+918956903770" className="text-base text-white hover:text-[#8C7A6B] transition-colors font-medium">
                      +91 89569 03770
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-stone-800 text-[#8C7A6B] mt-1">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400">HOURS & APPOINTMENTS</h4>
                    <p className="text-sm text-stone-300 font-light mt-1">
                      Monday — Friday: 09:30 – 18:30 IST<br />
                      By prior appointment only.
                    </p>
                  </div>
                </div>
              </div>

              {/* Press & Media */}
              <div className="pt-6 border-t border-stone-800 text-xs text-stone-400 space-y-1">
                <p className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest">PRESS & EDITORIAL</p>
                <p className="text-stone-300">vishwakarmamaruti1@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </PageTransition>
  );
}
