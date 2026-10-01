import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { articles } from '../data/articles';
import PageTransition from '../components/PageTransition';
import FinalCTA from '../components/FinalCTA';

export default function ArticleDetails() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center text-center px-6 bg-[#FBF9F5]">
          <h1 className="font-serif text-4xl text-[#121212] mb-4">Article Not Found</h1>
          <p className="text-stone-600 mb-8 font-light">The requested journal article could not be found.</p>
          <Link
            to="/journal"
            className="px-6 py-3 rounded-full bg-[#121212] text-white text-xs uppercase tracking-widest font-mono"
          >
            Back to Journal Archive
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <article className="pt-32 sm:pt-40 bg-[#FBF9F5] min-h-screen">
        
        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="mb-8">
            <Link
              to="/journal"
              data-cursor="clickable"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-600 hover:text-[#121212] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Journal</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#8C7A6B] uppercase tracking-widest mb-4">
            <span>{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#121212] leading-[1.1] tracking-tight mb-8">
            {article.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center justify-between py-4 border-y border-stone-200 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center font-serif text-lg">
                {article.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#121212]">{article.author}</h4>
                <p className="text-xs text-stone-500 font-mono uppercase">{article.authorRole}</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              data-cursor="clickable"
              className="p-2.5 rounded-full border border-stone-300 hover:border-stone-800 text-stone-600 hover:text-[#121212] transition-colors"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <div className="aspect-[16/9] overflow-hidden rounded-xs bg-stone-200 shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Article Body Content */}
        <div className="max-w-3xl mx-auto px-6 sm:px-8 pb-24 text-stone-800 font-light text-base sm:text-lg leading-relaxed space-y-6">
          <p className="font-serif text-xl sm:text-2xl text-[#121212] leading-relaxed italic border-l-2 border-[#8C7A6B] pl-6 py-2 bg-stone-100/50">
            {article.excerpt}
          </p>

          <div className="whitespace-pre-line space-y-4 pt-4">
            {article.content}
          </div>
        </div>

        {/* Final CTA */}
        <FinalCTA />
      </article>
    </PageTransition>
  );
}
