import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, HelpCircle, ExternalLink } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: 'Commercial Construction',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceNeeded: 'Commercial Construction',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="relative bg-slate-900 py-24 sm:py-32 font-sans overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-amber-500/[0.01] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-orange-500/[0.01] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
            Get In Touch
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
            Establish Contact with Our Estimators
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Have blueprint draft packages ready for evaluation? Send them through, or connect directly with our regional corporate offices.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Contact info & architectural Map placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-sm p-6 md:p-8 space-y-6 shadow-xl"
            >
              <h3 className="text-xs font-bold text-white font-sans uppercase tracking-[0.2em] border-b border-white/10 pb-4">
                Headquarters
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-sm bg-amber-500/10 p-2 text-amber-500 mt-1 shrink-0">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-[0.2em]">Direct Hotline</span>
                    <a href="tel:+237673449574" className="text-xs font-bold text-slate-200 hover:text-amber-500 transition-colors tracking-wide">
                      +(237) 6 73 44 95 74
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-sm bg-amber-500/10 p-2 text-amber-500 mt-1 shrink-0">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-[0.2em]">Corporate Inquiries</span>
                    <a href="mailto:contact@royallegacy.com" className="text-xs font-bold text-slate-200 hover:text-amber-500 transition-colors tracking-wide">
                      contact@royallegacy.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-sm bg-amber-500/10 p-2 text-amber-500 mt-1 shrink-0">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-[0.2em]">Physical Address</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Up station Bamenda
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-sm bg-amber-500/10 p-2 text-amber-500 mt-1 shrink-0">
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-[0.2em]">Working Hours</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Mon &mdash; Fri: 08:00 AM &mdash; 06:00 PM<br />
                      Sat: 09:00 AM &mdash; 02:00 PM (Emergency Pours Only)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Custom Architectural Grid map placeholder */}
            <a 
              href="https://share.google/1NseXGOdqLyv76xkr"
              target="_blank"
              rel="noopener noreferrer"
              className="block group/map cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-60 w-full overflow-hidden rounded-sm border border-white/5 bg-slate-950 shadow-xl group-hover/map:border-amber-500/40 transition-colors"
              >
                {/* Grid Background Mocking Architectural Blueprint */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle, #f59e0b 1px, transparent 1px),
                      linear-gradient(to right, rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '16px 16px',
                  }}
                />
                <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent z-10 pointer-events-none group-hover/map:from-amber-500/15 transition-all" />

                {/* Map Label Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                  <div className="rounded-sm bg-amber-500/20 p-3 text-amber-500 group-hover/map:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h4 className="text-[10px] font-bold text-white mt-3 uppercase tracking-widest font-mono group-hover/map:text-amber-400 transition-colors">
                    Up Station Bamenda
                  </h4>
                  <p className="text-[9px] text-slate-400 mt-1 max-w-[200px] leading-relaxed">
                    Lidar site coordinate reference lock: 5.9631 N, 10.1591 E.
                  </p>
                  <div className="mt-4 flex items-center gap-1 px-3 py-1 text-[9px] font-mono text-amber-500 uppercase tracking-widest rounded-sm border border-amber-500/30 bg-slate-900/80 group-hover/map:bg-amber-500 group-hover/map:text-slate-950 group-hover/map:border-transparent transition-all">
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            </a>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-sm p-6 md:p-8 shadow-xl"
            >
              <h3 className="text-xs font-bold text-white font-sans uppercase tracking-[0.2em] border-b border-white/10 pb-4 mb-6">
                Online Inquiry Portal
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="rounded-sm bg-amber-500/20 p-4 text-amber-500 mb-4 animate-pulse">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-wider text-white font-sans">Message Transmitted</h4>
                  <p className="mt-2 text-xs text-slate-300 max-w-sm leading-relaxed font-sans">
                    Thank you. Your message has been routed to our corporate logistics and structural appraisal department.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-sm border border-white/10 bg-slate-950 p-3.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. client@holdings.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-sm border border-white/10 bg-slate-950 p-3.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                        Phone Line
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +(237) 6 73 44 95 74"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-sm border border-white/10 bg-slate-950 p-3.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                        Required Service
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full rounded-sm border border-white/10 bg-slate-950 p-3.5 text-xs text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      >
                        <option>Commercial Construction</option>
                        <option>Residential Construction</option>
                        <option>Building Renovation</option>
                        <option>Civil Engineering</option>
                        <option>Road Construction</option>
                        <option>Industrial Projects</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Message Body *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Detail your load requirements, soil constraints, floor sizes, or generic inquiries here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-sm border border-white/10 bg-slate-950 p-3.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-amber-500 p-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950 hover:bg-white hover:text-slate-950 hover:shadow-lg hover:shadow-amber-500/20 transition-all active:scale-[0.98]"
                  >
                    <span>Transmit Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
