import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000); // 6 seconds auto-play
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const active = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="relative bg-slate-900 py-24 sm:py-32 font-sans overflow-hidden border-y border-slate-950">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/[0.015] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
            Endorsements
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
            What Our Partners Say
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            From private syndicates to governmental ministries, our structural fidelity has earned the trust of premium stakeholders.
          </p>
        </div>

        {/* Testimonial Active Slider Display */}
        <div className="glass relative rounded-sm p-8 md:p-12 shadow-2xl">
          {/* Quote Icon watermark */}
          <div className="absolute right-8 bottom-8 text-slate-800/10 pointer-events-none">
            <Quote className="h-24 w-24" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Client Portrait */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative h-36 w-36 rounded-sm border border-white/10 p-1.5 bg-slate-950">
                  <div className="h-full w-full rounded-sm overflow-hidden">
                    <img
                      src={active.image}
                      alt={active.name}
                      className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Verified badge */}
                  <div className="absolute bottom-2 right-2 bg-amber-500 rounded-sm p-1 text-slate-950 border border-slate-950 shadow-md">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Client Testimonial Text */}
              <div className="md:col-span-8">
                {/* 5-Star Rating */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />
                  ))}
                </div>

                <blockquote className="mt-4 text-xs md:text-sm text-slate-200 leading-relaxed font-sans italic">
                  &ldquo;{active.content}&rdquo;
                </blockquote>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans">
                      {active.name}
                    </h4>
                    <p className="text-[10px] text-amber-500 font-mono mt-0.5 uppercase tracking-widest">
                      {active.role} &mdash; <span className="text-slate-400">{active.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider navigation controls (Bottom center) */}
          <div className="flex items-center justify-between mt-10 border-t border-white/10 pt-6">
            <div className="flex gap-1.5">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1 transition-all duration-300 ${
                    activeIndex === i ? 'w-8 bg-amber-500' : 'w-2 bg-white/10'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="rounded-sm border border-white/10 bg-slate-950 p-2 text-slate-400 hover:text-white hover:border-amber-500 hover:text-amber-500 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="rounded-sm border border-white/10 bg-slate-950 p-2 text-slate-400 hover:text-white hover:border-amber-500 hover:text-amber-500 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
