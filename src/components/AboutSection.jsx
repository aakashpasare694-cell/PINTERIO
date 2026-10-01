import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { studioInfo } from '../data/studio';
import SectionHeading from './SectionHeading';
import ImageReveal from './ImageReveal';

export default function AboutSection({ showFullDetails = false }) {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5]" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        <SectionHeading
          number="04"
          category="About Pinterio"
          title="Designing Spaces. Shaping Experiences."
          subtitle="An interior design practice rooted in brutalist honesty, warm minimalism, and light."
        />

        {/* Asymmetrical Layout 1: Studio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 lg:mb-36">
          <div className="lg:col-span-7">
            <ImageReveal
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
              alt="Pinterio studio interior design workshop"
              aspectRatio="aspect-[4/3]"
              className="rounded-xs shadow-md"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8C7A6B]">
              THE STUDIO STORY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#121212] leading-tight">
              Quiet Luxury Built Around Human Rituals.
            </h3>
            <p className="text-stone-600 font-light leading-relaxed text-base sm:text-lg">
              {studioInfo.storyParagraph1}
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-base">
              {studioInfo.storyParagraph2}
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                data-cursor="clickable"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#121212] hover:text-[#8C7A6B] transition-colors group"
              >
                <span>Read Studio Profile</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Asymmetrical Layout 2: Founders & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 lg:order-1 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8C7A6B]">
              LEADERSHIP & DIRECTION
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#121212] leading-tight">
              Designers of Atmosphere.
            </h3>
            <p className="text-stone-600 font-light leading-relaxed text-base">
              Led by Aarav Mehta and Elena Rostova, our multi-disciplinary team brings together decades of international expertise across interior design, material science, and spatial styling.
            </p>

            {/* Founder Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {studioInfo.founders.map((founder) => (
                <div key={founder.name} className="space-y-2">
                  <div className="aspect-square overflow-hidden rounded-xs bg-stone-200">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-[#121212]">
                    {founder.name}
                  </h4>
                  <p className="text-xs text-[#8C7A6B] font-mono uppercase tracking-wider">
                    {founder.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:order-2">
            <ImageReveal
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop"
              alt="Interior details at Pinterio"
              aspectRatio="aspect-[16/10]"
              className="rounded-xs shadow-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
