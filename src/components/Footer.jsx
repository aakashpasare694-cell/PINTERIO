import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-[#FBF9F5] pt-20 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block" data-cursor="clickable">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-light text-[#FBF9F5]">
                PINTERIO
              </span>
            </Link>
            <p className="font-serif italic text-lg text-stone-300 max-w-sm">
              “Spaces Designed to Inspire.”
            </p>
            <p className="text-sm text-stone-400 leading-relaxed max-w-md font-light">
              Thoughtfully designed interiors where architecture, material, light and lifestyle come together into a quiet harmony.
            </p>
            <div className="pt-2 text-xs text-stone-400 font-mono tracking-widest">
              INTERIOR DESIGN STUDIO
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {['Work', 'Services', 'About', 'Journal', 'Contact'].map((item) => {
                const path = `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="text-stone-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                      data-cursor="clickable"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono">
              Social
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Instagram', url: 'https://instagram.com' },
                { name: 'Facebook', url: 'https://facebook.com' },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                    data-cursor="clickable"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="p-4 rounded-full border border-stone-800 hover:border-stone-500 text-stone-300 hover:text-white transition-all group flex items-center justify-center"
              aria-label="Back to top"
              data-cursor="clickable"
            >
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 PINTERIO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
