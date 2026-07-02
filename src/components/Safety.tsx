import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Leaf, ClipboardCheck, Award, Cpu, ShieldCheck } from 'lucide-react';
import { SAFETY_COMMITMENT_DATA } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldAlert: ShieldAlert,
  Leaf: Leaf,
  ClipboardCheck: ClipboardCheck,
  Award: Award,
  Cpu: Cpu,
};

export default function Safety() {
  return (
    <section id="safety" className="relative bg-slate-900 py-24 sm:py-32 font-sans overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/[0.015] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Layout with Description on Left and Cards on Right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Descriptive header block */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-md"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
                Corporate Responsibility
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
                Uncompromising Safety, ESG & Compliance
              </h2>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Structural engineering is about protecting lives. At Royal Legacy Engineering, safety is not a secondary checkbox&mdash;it is a rigorous, legally audited process that governs every single aggregate we mix and every crane lift we execute.
              </p>

              {/* List of Certifications */}
              <div className="mt-8 space-y-3.5 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-emerald-500/10 text-emerald-500">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-300 tracking-wide">ISO 9001: Quality management certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-emerald-500/10 text-emerald-500">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-300 tracking-wide">ISO 14001: Environmental stewardship certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-emerald-500/10 text-emerald-500">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-300 tracking-wide">ISO 45001: Occupational Health & safety certified</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {SAFETY_COMMITMENT_DATA.map((point, index) => {
                const IconComponent = iconMap[point.icon] || ShieldCheck;
                return (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass group rounded-sm p-6 hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <h3 className="text-xs font-bold text-white uppercase tracking-wider font-sans mt-4">
                      {point.title}
                    </h3>
                    
                    <p className="mt-2 text-[11px] text-slate-400 leading-relaxed font-sans">
                      {point.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
