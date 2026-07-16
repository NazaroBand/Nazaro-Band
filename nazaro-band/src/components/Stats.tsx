import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Heart, CheckCircle2 } from 'lucide-react';
import { STATS_DATA } from '../data';

// Component for a single animating counter
function Counter({ value, suffix, duration = 1.5 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-black text-5xl md:text-7xl text-gold-gradient tracking-tight drop-shadow-[0_4px_12px_rgba(212,175,55,0.15)]">
      {count}
      <span>{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const icons = [Award, CheckCircle2, Heart];

  return (
    <section id="brojaci" className="relative py-16 bg-[#080808] border-y border-white/5 overflow-hidden">
      {/* Absolute faint grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center">
          {STATS_DATA.map((stat, idx) => {
            const IconComp = icons[idx] || Award;
            return (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Gold sharp-corner icon container */}
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center bg-white/[0.02] mb-4">
                  <IconComp className="w-5 h-5 text-gold" />
                </div>

                {/* Animated Number Counter */}
                <div className="mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Counter label */}
                <span className="font-display text-white/50 text-xs uppercase tracking-[0.25em] font-semibold">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
