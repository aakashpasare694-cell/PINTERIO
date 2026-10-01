import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation Links
  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
  ];

  // Scroll handler for navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 glass-nav border-b border-stone-200/50 shadow-xs'
            : 'py-6 md:py-8 bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 z-50"
            data-cursor="clickable"
          >
            <span
              className={`font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] transition-colors duration-300 ${
                isScrolled ? 'text-[#121212]' : 'text-white'
              }`}
            >
              PINTERIO
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  data-cursor="clickable"
                  className={`relative text-xs lg:text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:opacity-100 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#121212] font-semibold'
                        : 'text-stone-700 hover:text-[#121212]'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-stone-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute -bottom-1 left-0 right-0 h-[1.5px] ${
                        isScrolled ? 'bg-[#121212]' : 'bg-white'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              data-cursor="clickable"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 group border ${
                isScrolled
                  ? 'bg-[#121212] text-white hover:bg-[#8C7A6B] border-[#121212] hover:border-[#8C7A6B]'
                  : 'bg-white/10 hover:bg-white text-white hover:text-[#121212] border-white/30 backdrop-blur-xs'
              }`}
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full z-50 transition-colors ${
                isScrolled ? 'text-[#121212]' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#121212] text-[#FBF9F5] flex flex-col justify-between p-8 sm:p-12 md:hidden"
          >
            <div className="pt-20">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-8">
                Navigation
              </span>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif text-3xl sm:text-4xl text-[#FBF9F5] hover:text-[#8C7A6B] transition-colors flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-mono opacity-40">0{idx + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="border-t border-stone-800 pt-8 flex flex-col gap-4">
              <p className="text-xs text-stone-400 uppercase tracking-widest">Inquiries</p>
              <a
                href="mailto:vishwakarmamaruti1@gmail.com"
                className="text-lg font-serif text-stone-200 hover:text-white"
              >
                vishwakarmamaruti1@gmail.com
              </a>
              <div className="flex gap-6 mt-2 text-xs text-stone-400 tracking-wider">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
