import { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Sparkles, Check, ChevronRight } from 'lucide-react';
import { ABOUT_DATA } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative bg-slate-950 py-24 sm:py-32 font-sans overflow-hidden">
      {/* Absolute Decorative Vector elements */}
      <div className="absolute top-1/4 left-[-10%] h-96 w-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] h-96 w-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Premium Interactive Frame with Concrete Casting Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
              <img
                src={ABOUT_DATA.image}
                alt="Royal Legacy Construction workers on site casting stairs"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-xl border border-slate-800 bg-slate-950/80 p-5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-amber-500/20 p-2 text-amber-500">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Structural Integrity</h4>
                    <p className="text-xs text-slate-400 mt-0.5">ISO 9001 quality verified testing loop.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Corporate Description */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
                {ABOUT_DATA.headline}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
                {ABOUT_DATA.subheadline}
              </h2>
              <p className="mt-6 text-sm md:text-base text-slate-300 leading-relaxed">
                {ABOUT_DATA.description1}
              </p>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                {ABOUT_DATA.description2}
              </p>

              {/* Interactive Tabs (Mission, Vision, Values) */}
              <div className="mt-8 flex border-b border-white/10">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex items-center gap-2 pb-4 text-xs font-bold uppercase tracking-widest transition-colors border-b-2 ${
                    activeTab === 'mission'
                      ? 'border-amber-500 text-amber-500'
                      : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Target className="h-4 w-4" />
                  <span>Mission</span>
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`ml-8 flex items-center gap-2 pb-4 text-xs font-bold uppercase tracking-widest transition-colors border-b-2 ${
                    activeTab === 'vision'
                      ? 'border-amber-500 text-amber-500'
                      : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Eye className="h-4 w-4" />
                  <span>Vision</span>
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`ml-8 flex items-center gap-2 pb-4 text-xs font-bold uppercase tracking-widest transition-colors border-b-2 ${
                    activeTab === 'values'
                      ? 'border-amber-500 text-amber-500'
                      : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Core Values</span>
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="mt-6 min-h-[140px]">
                {activeTab === 'mission' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-sm p-6"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed italic">
                      &ldquo;{ABOUT_DATA.mission}&rdquo;
                    </p>
                  </motion.div>
                )}

                {activeTab === 'vision' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-sm p-6"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed italic">
                      &ldquo;{ABOUT_DATA.vision}&rdquo;
                    </p>
                  </motion.div>
                )}

                {activeTab === 'values' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    {ABOUT_DATA.values.map((v, i) => (
                      <div key={i} className="glass rounded-sm p-4 flex gap-3 hover:border-amber-500/30 transition-all duration-300">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-amber-500/10 text-amber-500 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
                            {v.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{v.desc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              <div className="mt-10">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 rounded-sm bg-slate-900 hover:bg-slate-850 border border-white/10 hover:border-amber-500/40 px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all hover:translate-x-1"
                >
                  <span>Learn More</span>
                  <ChevronRight className="h-3.5 w-3.5 text-amber-500" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
