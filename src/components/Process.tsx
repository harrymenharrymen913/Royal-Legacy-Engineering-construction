import React from 'react';
import { motion } from 'motion/react';
import { Users, FileText, Layout, Wrench, Eye, CheckCircle } from 'lucide-react';
import { PROCESS_DATA } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users: Users,
  FileText: FileText,
  Layout: Layout,
  Wrench: Wrench,
  Eye: Eye,
  CheckCircle: CheckCircle,
};

export default function Process() {
  return (
    <section className="relative bg-slate-900 py-24 sm:py-32 font-sans overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-[10%] h-[300px] w-[300px] rounded-full bg-amber-500/[0.01] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
            How We Work
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
            The Construction Life-Cycle
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            We employ a rigorous six-stage framework to ensure that conceptual sketches are translated into structurally flawless landmarks.
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="relative">
          {/* Horizontal Line (Desktop only) */}
          <div className="absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-slate-800 hidden lg:block" />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6 relative z-10">
            {PROCESS_DATA.map((step, index) => {
              const IconComponent = iconMap[step.icon] || CheckCircle;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Bubble Indicator */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-sm border border-white/10 bg-slate-950 text-amber-500 group-hover:text-slate-950 group-hover:bg-amber-500 group-hover:border-transparent transition-all duration-300 shadow-xl group-hover:shadow-amber-500/10">
                    
                    {/* Floating Step Number */}
                    <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-sm bg-slate-900 border border-white/10 text-[9px] font-bold font-mono text-slate-400 group-hover:bg-white group-hover:text-slate-950 transition-colors">
                      {step.step}
                    </div>

                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white mt-6 group-hover:text-amber-500 transition-colors font-sans">
                    {step.title}
                  </h3>
                  
                  <p className="mt-2 text-[11px] text-slate-400 leading-relaxed max-w-[170px] font-sans">
                    {step.description}
                  </p>

                  {/* Vertical Connection indicator for mobile screen view */}
                  {index < PROCESS_DATA.length - 1 && (
                    <div className="h-8 w-px bg-slate-800 my-4 block lg:hidden" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
