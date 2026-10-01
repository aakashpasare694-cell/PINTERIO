import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '../data/articles';
import SectionHeading from './SectionHeading';
import ImageReveal from './ImageReveal';

export default function JournalSection({ limit = 3 }) {
  const displayArticles = articles.slice(0, limit);

  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5]" id="journal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            number="09"
            category="Journal & Insights"
            title="Design Discourse & Essays"
            subtitle="Thought pieces on spatial planning, materiality, lighting physics, and architectural trends."
            className="mb-0"
          />
          {limit < articles.length && (
            <Link
              to="/journal"
              data-cursor="clickable"
              className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#121212] hover:text-[#8C7A6B] transition-colors self-start md:self-end pb-2"
            >
              <span>View All Journal Articles ({articles.length})</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {displayArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group flex flex-col justify-between h-full bg-white p-6 rounded-xs border border-stone-200/80 hover:border-stone-400 hover:shadow-md transition-all duration-500"
            >
              <div className="space-y-4">
                <Link to={`/journal/${article.slug}`}>
                  <ImageReveal
                    src={article.image}
                    alt={article.title}
                    aspectRatio="aspect-[16/10]"
                    className="rounded-xs cursor-pointer mb-6"
                  />
                </Link>

                <div className="flex items-center justify-between text-xs font-mono text-[#8C7A6B] uppercase tracking-wider">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl font-light text-[#121212] group-hover:text-[#8C7A6B] transition-colors leading-tight">
                  <Link to={`/journal/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-stone-600 font-light text-sm line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                <span>{article.date}</span>
                <Link
                  to={`/journal/${article.slug}`}
                  data-cursor="clickable"
                  className="inline-flex items-center gap-1.5 font-sans font-semibold uppercase tracking-widest text-[#121212] group-hover:text-[#8C7A6B] transition-colors"
                >
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
