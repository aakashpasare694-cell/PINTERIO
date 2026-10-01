import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart } from 'lucide-react';
import { instagramPosts } from '../data/studio';
import SectionHeading from './SectionHeading';

export default function InstagramSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] border-t border-stone-200" id="instagram">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <SectionHeading
            number="10"
            category="Live Feed"
            title="Follow the Studio"
            subtitle="Daily architectural work-in-progress, site visits, and material studies."
            className="mb-0"
          />
          <a
            href="https://www.instagram.com/p_interio_?stkn=MTdsbXg3N2JjZm1naw=="
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="clickable"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#121212] text-white hover:bg-[#8C7A6B] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 self-start sm:self-end"
          >
            <Instagram className="w-4 h-4" />
            <span>@p_interio_</span>
          </a>
        </div>

        {/* Instagram Visual Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/p_interio_?stkn=MTdsbXg3N2JjZm1naw=="
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              data-cursor="clickable"
              className="group relative aspect-square overflow-hidden rounded-xs bg-stone-200 block"
            >
              <img
                src={post.image}
                alt={`Pinterio instagram post ${post.id}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white text-xs">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="line-clamp-2 text-[11px] font-light leading-tight">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-stone-300">
                    <Heart className="w-3 h-3 fill-white text-white" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
