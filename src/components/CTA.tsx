import { motion } from 'motion/react';
import { ArrowRight, HardHat } from 'lucide-react';

interface CTAProps {
  onRequestQuote: () => void;
}

export default function CTA({ onRequestQuote }: CTAProps) {
  return (
    <section className="relative bg-slate-950 py-20 sm:py-28 font-sans overflow-hidden border-t border-slate-900">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-sm p-8 sm:p-12 md:p-16 shadow-2xl"
        >
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-amber-500/10 text-amber-500 mb-6">
            <HardHat className="h-4 w-4" />
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
            Ready to Start Your Next <br /> Construction Project?
          </h2>
          
          <p className="mx-auto mt-4 max-w-lg text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Partner with Royal Legacy Engineering. From structural blueprint draft reviews to foundation pours and heavy structural assemblies, our certified engineers are ready to build your vision.
          </p>

          <div className="mt-8">
            <button
              onClick={onRequestQuote}
              className="group inline-flex items-center gap-2 rounded-sm bg-amber-500 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950 hover:bg-white hover:text-slate-950 hover:shadow-lg hover:shadow-amber-500/20 transition-all active:scale-[0.98]"
            >
              <span>Get Your Free Estimate</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* SLA Counter info */}
          <p className="mt-4 text-[9px] font-mono uppercase tracking-[0.25em] text-slate-500">
            * 24-Hour Estimator Callback Guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
