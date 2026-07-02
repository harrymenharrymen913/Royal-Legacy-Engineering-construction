import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calendar, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: 'Commercial Construction',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      // Reset
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceNeeded: 'Commercial Construction',
        message: ''
      });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="glass relative w-full max-w-lg overflow-hidden rounded-sm p-6 text-white shadow-2xl md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white border border-white/10 hover:border-white/30 p-1.5 rounded-sm transition-all duration-200"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="rounded-sm bg-amber-500/20 p-4 text-amber-500 mb-4 animate-pulse">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider font-sans">Estimate Request Received</h3>
                <p className="mt-2 text-xs text-slate-300 max-w-xs leading-relaxed font-sans">
                  Thank you! Our Lead Estimating Engineer will analyze your parameters and contact you within 24 working hours.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-mono uppercase text-amber-500">
                  <Calendar className="h-4 w-4" />
                  <span>Scheduled Callback: Within 1 Business Day</span>
                </div>
              </motion.div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-500 font-mono">
                    Royal Legacy Engineering
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white font-sans mt-1">Request an Estimate</h3>
                  <p className="text-xs text-slate-300 mt-1 font-sans">
                    Provide your blueprint dimensions or request information about our engineering processes.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-1 font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Engr. Marcus Sterling"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-sm border border-white/10 bg-slate-950 p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-1 font-mono">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. client@holdings.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-sm border border-white/10 bg-slate-950 p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-1 font-mono">
                        Phone Line
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +(237) 6 73 44 95 74"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-sm border border-white/10 bg-slate-950 p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-1 font-mono">
                      Required Structural Service
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full rounded-sm border border-white/10 bg-slate-950 p-3 text-xs text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    >
                      <option>Commercial Construction</option>
                      <option>Residential Construction</option>
                      <option>Building Renovation</option>
                      <option>Civil Engineering</option>
                      <option>Road Construction</option>
                      <option>Industrial Projects</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-1 font-mono">
                      Project Parameters & message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify project scope, estimated land mass, target completion date, or load requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-sm border border-white/10 bg-slate-950 p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-amber-500 p-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950 hover:bg-white hover:text-slate-950 hover:shadow-lg hover:shadow-amber-500/20 transition-all active:scale-[0.98] mt-4"
                  >
                    <span>Submit Proposal</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
