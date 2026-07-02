import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
      {count}
      <span className="text-amber-500">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-gradient-navy border-b border-white/5 py-16 font-sans overflow-hidden">
      {/* Dynamic background lighting */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card-accent p-6 flex flex-col justify-between rounded-sm transition-all duration-300 hover:bg-amber-500/[0.08]"
            >
              {/* Animated Count Number */}
              <div>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Stat Label */}
              <p className="mt-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
