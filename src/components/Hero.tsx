import { motion } from 'motion/react';
import { ChevronDown, HardHat, Shield, ArrowRight } from 'lucide-react';
import { HERO_DATA } from '../data';

interface HeroProps {
  onRequestQuote: () => void;
}

export default function Hero({ onRequestQuote }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-slate-950 font-sans"
    >
      {/* Zooming background image with dark overlay */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-referrer"
        style={{
          backgroundImage: `url('${HERO_DATA.images.hero}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      {/* Background gradients and vignette overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
      <div className="absolute inset-0 z-10 bg-radial-gradient from-transparent via-transparent to-slate-950/80" />

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-500/20"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-left sm:px-6 lg:px-8 w-full flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-amber-500"></div>
          <span className="uppercase tracking-[0.3em] text-amber-500 text-xs font-bold font-sans">
            Building Excellence
          </span>
        </motion.div>

        {/* Large Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight font-sans"
        >
          Building Strong <br />
          <span className="text-amber-500">Foundations</span> for Tomorrow
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 max-w-2xl text-sm md:text-base text-slate-300 leading-relaxed opacity-90 font-sans"
        >
          {HERO_DATA.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-8 flex flex-col items-center justify-start gap-4 sm:flex-row"
        >
          <button
            onClick={onRequestQuote}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-amber-500 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-950 hover:bg-white hover:text-slate-950 hover:shadow-xl hover:shadow-amber-500/20 transition-all active:scale-95"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToProjects}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm border border-white/30 bg-slate-950/40 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-slate-900 hover:border-white/60 transition-all active:scale-95 backdrop-blur-sm"
          >
            <span>View Projects</span>
          </button>
        </motion.div>

        {/* Floating Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="mt-16 hidden md:flex items-center justify-start gap-8 text-[11px] font-mono uppercase text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-amber-500" />
            <span>Guaranteed Structural Integrity</span>
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <HardHat className="h-4 w-4 text-amber-500" />
            <span>Fully Safety Licensed</span>
          </div>
        </motion.div>
      </div>

      {/* Floating vertical Scroll indicator at side */}
      <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center opacity-50 select-none z-20 pointer-events-none">
        <div className="w-[1px] h-16 bg-white mb-3"></div>
        <span className="text-[9px] uppercase tracking-[0.4em] text-white rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Scroll Down
        </span>
      </div>
    </section>
  );
}
