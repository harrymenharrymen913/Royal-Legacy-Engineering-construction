import React from 'react';
import { motion } from 'motion/react';
import { Building2, Home, Briefcase, HardHat, Hammer, Factory, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2: Building2,
  Home: Home,
  Briefcase: Briefcase,
  HardHat: HardHat,
  Hammer: Hammer,
  Factory: Factory,
};

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative bg-slate-900 py-24 sm:py-32 font-sans overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-orange-500/[0.02] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
            Our Expertise
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
            Engineering Excellence Across Sectors
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            We operate at the intersection of complex structural engineering, innovative green building, and timely operational delivery. Explore our premium capabilities.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.icon] || HardHat;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass group relative flex flex-col justify-between rounded-xl p-6 md:p-8 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/[0.03] transition-all duration-300 shadow-xl cursor-pointer"
              >
                {/* Decorative border glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/0 via-transparent to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all pointer-events-none" />

                <div>
                  {/* Icon */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-transparent transition-all duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mt-6 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[11px] text-slate-400 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-amber-500 transition-colors">
                  <button onClick={scrollToContact} className="flex items-center gap-1.5">
                    <span>Inquire Service</span>
                    <ArrowUpRight className="h-3 w-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
