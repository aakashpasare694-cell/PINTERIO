import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeading from './SectionHeading';
import ImageReveal from './ImageReveal';

export default function FeaturedProjects() {
  const featuredList = projects.filter((p) => p.featured);

  return (
    <section id="featured-projects" className="py-24 sm:py-32 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <SectionHeading
            number="01"
            category="Selected Work"
            title="Signature Architecture & Interiors"
            subtitle="Explore our recent hand-crafted residential, commercial, and hospitality sanctuaries."
            className="mb-0"
          />
          <Link
            to="/work"
            data-cursor="clickable"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#121212] hover:text-[#8C7A6B] transition-colors self-start md:self-end pb-2"
          >
            <span>View All Projects ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Featured Projects Grid - Editorial Asymmetrical Layout */}
        <div className="space-y-24 sm:space-y-36">
          {featuredList.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-8 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Link to={`/work/${project.slug}`}>
                    <ImageReveal
                      src={project.heroImage}
                      alt={project.title}
                      aspectRatio={project.aspectRatio}
                      dataCursor="project"
                      dataCursorText="EXPLORE"
                      className="rounded-xs cursor-pointer shadow-sm"
                    />
                  </Link>
                </div>

                {/* Info Column */}
                <div className={`lg:col-span-4 space-y-6 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#8C7A6B] uppercase tracking-widest">
                    <span>{project.location}, {project.country}</span>
                    <span>•</span>
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#121212]">
                    <Link
                      to={`/work/${project.slug}`}
                      className="hover:text-[#8C7A6B] transition-colors"
                      data-cursor="clickable"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
                      Area: {project.area}
                    </span>
                    <Link
                      to={`/work/${project.slug}`}
                      data-cursor="clickable"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#121212] group"
                    >
                      <span>Project Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
