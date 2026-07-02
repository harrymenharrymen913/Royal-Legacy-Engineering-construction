import React from 'react';
import { motion } from 'motion/react';
import { Award, Clock, ShieldCheck, DollarSign } from 'lucide-react';
import { FEATURES_DATA } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award: Award,
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  DollarSign: DollarSign,
};

export default function WhyChooseUs() {
  return (
    <section className="relative bg-slate-950 py-24 sm:py-32 font-sans overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-500/[0.01] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
            Our Edge
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
            Engineered to Deliver Without Compromise
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Royal Legacy Engineering combines stringent safety workflows, certified building materials, and world-class professionals to guarantee client satisfaction on every project.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES_DATA.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || ShieldCheck;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass group relative flex flex-col rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 shadow-xl cursor-pointer"
              >
                {/* Icon Wrapper */}
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-amber-500/10 text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Feature Title */}
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="mt-2 text-[11px] text-slate-400 leading-relaxed font-sans">
                  {feature.description}
                </p>

                {/* Sub-Indicator */}
                <div className="mt-auto pt-6 flex items-center gap-1.5 text-[9px] font-mono uppercase text-slate-500 group-hover:text-amber-500 transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Quality Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
