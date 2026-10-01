import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../data/studio';

function CounterNumber({ targetValue, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2s
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = targetValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <span ref={ref} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#121212]">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#EFEBE4] border-y border-stone-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center sm:text-left space-y-2 border-l sm:border-l-2 border-stone-400 pl-4 sm:pl-6"
            >
              <CounterNumber targetValue={stat.value} suffix={stat.suffix} />
              <p className="text-xs sm:text-sm font-mono text-[#8C7A6B] uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
