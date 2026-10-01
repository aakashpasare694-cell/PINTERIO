import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';
import PageTransition from '../components/PageTransition';
import ImageReveal from '../components/ImageReveal';

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  // Fallback if slug not found
  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center text-center px-6 bg-[#FBF9F5]">
          <h1 className="font-serif text-4xl text-[#121212] mb-4">Project Not Found</h1>
          <p className="text-stone-600 mb-8 font-light">The requested project could not be found in our archive.</p>
          <Link
            to="/work"
            className="px-6 py-3 rounded-full bg-[#121212] text-white text-xs uppercase tracking-widest font-mono"
          >
            Back to All Projects
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Find Next Project
  const nextProject = projects.find((p) => p.slug === project.nextProjectSlug) || projects[0];

  return (
    <PageTransition>
      <article className="w-full bg-[#FBF9F5]">
        
        {/* 1. Project Hero (Full Screen) */}
        <div className="relative w-full h-screen min-h-[650px] flex items-end pb-16 bg-stone-900 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full">
            <div className="mb-6">
              <Link
                to="/work"
                data-cursor="clickable"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-300 hover:text-white transition-colors bg-black/40 backdrop-blur-xs px-4 py-2 rounded-full border border-white/20"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Portfolio</span>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8C7A6B] block mb-2">
                  {project.location}, {project.country} · {project.category} · {project.year}
                </span>
                <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-white tracking-tight">
                  {project.title}
                </h1>
              </div>
              <p className="text-stone-300 font-light text-base sm:text-lg max-w-md">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Introduction & Details Grid */}
        <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-8">
              <span className="text-xs font-mono text-[#8C7A6B] uppercase tracking-widest block">
                PROJECT OVERVIEW
              </span>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#121212] leading-relaxed">
                “{project.shortDescription}”
              </p>
              <p className="text-stone-700 font-light text-base sm:text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Right Meta Sidebar */}
            <div className="lg:col-span-4 bg-white p-8 rounded-xs border border-stone-200 shadow-sm space-y-6 self-start">
              <h3 className="text-xs font-mono text-[#8C7A6B] uppercase tracking-[0.25em] pb-3 border-b border-stone-200">
                PROJECT SPECIFICATIONS
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500 font-mono text-xs">CLIENT</span>
                  <span className="font-medium text-[#121212]">{project.client}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500 font-mono text-xs">LOCATION</span>
                  <span className="font-medium text-[#121212]">{project.location}, {project.country}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500 font-mono text-xs">SPATIAL AREA</span>
                  <span className="font-medium text-[#121212]">{project.area}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500 font-mono text-xs">YEAR COMPLETED</span>
                  <span className="font-medium text-[#121212]">{project.year}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500 font-mono text-xs">CATEGORY</span>
                  <span className="font-medium text-[#121212]">{project.category}</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Primary Gallery (Asymmetric Layouts) */}
        <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 space-y-12">
          {project.gallery[0] && (
            <ImageReveal
              src={project.gallery[0]}
              alt={`${project.title} detail shot 1`}
              aspectRatio="aspect-[16/9]"
              className="rounded-xs shadow-md"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {project.gallery[1] && (
              <ImageReveal
                src={project.gallery[1]}
                alt={`${project.title} detail shot 2`}
                aspectRatio="aspect-[4/5]"
                className="rounded-xs shadow-md"
              />
            )}
            {project.gallery[2] && (
              <ImageReveal
                src={project.gallery[2]}
                alt={`${project.title} detail shot 3`}
                aspectRatio="aspect-[4/5]"
                className="rounded-xs shadow-md"
              />
            )}
          </div>
        </section>

        {/* 4. Design Concept & Material Breakdown */}
        <section className="py-20 sm:py-28 bg-[#121212] text-[#FBF9F5] my-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono text-[#8C7A6B] uppercase tracking-[0.25em] block mb-3">
                DESIGN METHODOLOGY
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-white">
                Design Concept & Materiality
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-stone-900 rounded-xs border border-stone-800 space-y-3">
                <span className="text-xs font-mono text-[#8C7A6B] block">01 / CONCEPT</span>
                <h4 className="font-serif text-xl text-white">Spatial Vision</h4>
                <p className="text-stone-400 font-light text-sm leading-relaxed">{project.concept}</p>
              </div>

              <div className="p-6 bg-stone-900 rounded-xs border border-stone-800 space-y-3">
                <span className="text-xs font-mono text-[#8C7A6B] block">02 / MATERIALS</span>
                <h4 className="font-serif text-xl text-white">Surface Palette</h4>
                <p className="text-stone-400 font-light text-sm leading-relaxed">{project.materials}</p>
              </div>

              <div className="p-6 bg-stone-900 rounded-xs border border-stone-800 space-y-3">
                <span className="text-xs font-mono text-[#8C7A6B] block">03 / LIGHTING</span>
                <h4 className="font-serif text-xl text-white">Illumination</h4>
                <p className="text-stone-400 font-light text-sm leading-relaxed">{project.lighting}</p>
              </div>

              <div className="p-6 bg-stone-900 rounded-xs border border-stone-800 space-y-3">
                <span className="text-xs font-mono text-[#8C7A6B] block">04 / FURNITURE</span>
                <h4 className="font-serif text-xl text-white">FF&E Curation</h4>
                <p className="text-stone-400 font-light text-sm leading-relaxed">{project.furniture}</p>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Final Gallery Images */}
        <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 space-y-12">
          {project.gallery[3] && (
            <ImageReveal
              src={project.gallery[3]}
              alt={`${project.title} gallery 4`}
              aspectRatio="aspect-[16/10]"
              className="rounded-xs shadow-md"
            />
          )}
          {project.gallery[4] && (
            <ImageReveal
              src={project.gallery[4]}
              alt={`${project.title} gallery 5`}
              aspectRatio="aspect-[21/9]"
              className="rounded-xs shadow-md"
            />
          )}
        </section>

        {/* 6. Next Project Banner */}
        <section className="py-24 bg-[#EFEBE4] border-t border-stone-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            <span className="text-xs font-mono text-[#8C7A6B] uppercase tracking-[0.25em] block mb-4">
              NEXT INTERIOR COMMISSION
            </span>

            <Link
              to={`/work/${nextProject.slug}`}
              className="group flex flex-col md:flex-row items-center justify-between gap-8"
              data-cursor="project"
              data-cursor-text="NEXT"
            >
              <div className="space-y-2">
                <h3 className="font-serif text-4xl sm:text-6xl font-light text-[#121212] group-hover:text-[#8C7A6B] transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs font-mono text-stone-600 uppercase tracking-widest">
                  {nextProject.location} · {nextProject.category} · {nextProject.year}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-48 h-32 overflow-hidden rounded-xs bg-stone-300 hidden sm:block">
                  <img
                    src={nextProject.heroImage}
                    alt={nextProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-14 h-14 rounded-full bg-[#121212] text-white flex items-center justify-center group-hover:bg-[#8C7A6B] transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          </div>
        </section>

      </article>
    </PageTransition>
  );
}
