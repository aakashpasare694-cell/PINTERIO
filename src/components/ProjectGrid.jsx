import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import SectionHeading from './SectionHeading';

export default function ProjectGrid({ showHeading = true }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5]" id="explore-work">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {showHeading && (
          <SectionHeading
            number="02"
            category="Portfolio"
            title="Explore Our Work"
            subtitle="Filter through our complete portfolio of interior architecture and residential masterworks."
          />
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-16 pb-6 border-b border-stone-200">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                data-cursor="clickable"
                className={`relative px-4 py-2 text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors duration-300 rounded-full ${
                  isActive
                    ? 'text-white bg-[#121212]'
                    : 'text-stone-600 hover:text-[#121212] bg-stone-100 hover:bg-stone-200/80'
                }`}
              >
                {category}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#121212] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Asymmetric column span math for magazine layout
              // e.g. 7 cols, 5 cols, 12 cols, 6 cols, 6 cols
              let colSpan = 'lg:col-span-6';
              if (idx % 5 === 0) colSpan = 'lg:col-span-7';
              else if (idx % 5 === 1) colSpan = 'lg:col-span-5';
              else if (idx % 5 === 2) colSpan = 'lg:col-span-12';
              else if (idx % 5 === 3) colSpan = 'lg:col-span-5';
              else if (idx % 5 === 4) colSpan = 'lg:col-span-7';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`${colSpan}`}
                >
                  <Link
                    to={`/work/${project.slug}`}
                    className="group block relative overflow-hidden bg-stone-200 rounded-xs"
                    data-cursor="project"
                    data-cursor-text="VIEW"
                  >
                    {/* Image Container with aspect ratio */}
                    <div className={`w-full overflow-hidden ${project.aspectRatio}`}>
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                      {/* Top badge */}
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-black/40 backdrop-blur-xs rounded-full border border-white/20">
                          {project.category}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Bottom Project Metadata */}
                      <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-xs font-mono text-stone-300 uppercase tracking-widest mb-1">
                          {project.location} · {project.year}
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-stone-300 line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
