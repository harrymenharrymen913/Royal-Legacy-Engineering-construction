import { motion } from 'motion/react';
import { Settings, ShieldCheck, Cpu } from 'lucide-react';
import { EQUIPMENT_DATA } from '../data';

export default function Equipment() {
  return (
    <section id="equipment" className="relative bg-slate-950 py-24 sm:py-32 font-sans overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/3 right-[-5%] h-96 w-96 rounded-full bg-amber-500/[0.01] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
            Machinery Fleet
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
            Heavy-Duty Industrial Assets
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Our company owns and maintains a premium, state-of-the-art machinery fleet. Having proprietary assets enables faster project scheduling, lower margins, and total on-site reliability.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EQUIPMENT_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group flex flex-col rounded-sm overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 z-20 rounded-sm bg-amber-500 px-2.5 py-1 text-[9px] font-bold font-mono text-slate-950 uppercase">
                  {item.category}
                </span>
              </div>

              {/* Technical Specifications Container */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-500/80">
                    <Settings className="h-3.5 w-3.5 animate-spin-slow" />
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono">
                      Engineering Specs
                    </span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white mt-2 font-sans">
                    {item.name}
                  </h3>

                  {/* Spec List (JetBrains Mono) */}
                  <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                        <span className="text-slate-500 text-[9px]">
                          {spec.label}
                        </span>
                        <span className="text-slate-300 font-bold">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verification Indicator */}
                <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-[9px] font-mono uppercase text-slate-500 tracking-wider">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>Certified Active</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Cpu className="h-3.5 w-3.5" />
                    <span>Lidar Configured</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
