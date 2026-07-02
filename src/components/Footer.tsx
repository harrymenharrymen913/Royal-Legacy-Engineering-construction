import React, { useState } from 'react';
import { ChevronUp, Facebook, Twitter, Linkedin, Instagram, Mail, HardHat } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 2500);
  };

  const handleLinkClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 pb-12 border-b border-slate-900">
          
          {/* Company Description */}
          <div className="md:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md shadow-amber-500/10 overflow-hidden p-0.5 group-hover:scale-105 transition-all duration-300">
                <img 
                  src="/src/assets/images/website_logo_1783019428349.jpg" 
                  alt="Royal Legacy Engineering Logo" 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-extrabold uppercase tracking-wide text-white leading-tight">
                  Royal Legacy
                </span>
                <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold font-mono">
                  Engineering
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-300 leading-relaxed">
              We deliver world-class construction, engineering, renovation, and infrastructure solutions with quality, safety, and innovation at the core of every project.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-lg bg-slate-900 border border-slate-850 p-2 text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-lg bg-slate-900 border border-slate-850 p-2 text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg bg-slate-900 border border-slate-850 p-2 text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-lg bg-slate-900 border border-slate-850 p-2 text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase text-white tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick('#home')} className="hover:text-amber-500 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('#about')} className="hover:text-amber-500 transition-colors">
                  About corporate
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('#team')} className="hover:text-amber-500 transition-colors">
                  Meet the Directors
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('#contact')} className="hover:text-amber-500 transition-colors">
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase text-white tracking-widest">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick('#services')} className="hover:text-amber-500 transition-colors">
                  Commercial Dev
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('#services')} className="hover:text-amber-500 transition-colors">
                  Residential Units
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('#services')} className="hover:text-amber-500 transition-colors">
                  Civil Suspension
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('#services')} className="hover:text-amber-500 transition-colors">
                  Road Rehabilitation
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase text-white tracking-widest">
              Corporate Intelligence
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Subscribe to our construction circular to receive our latest industrial papers and tenders.
            </p>

            {subscribed ? (
              <p className="text-xs font-mono text-emerald-500">
                ✓ Enrolled to engineering newsletter.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500 transition-all"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 p-2 px-3 hover:shadow-lg hover:shadow-amber-500/10 transition-all"
                  aria-label="Subscribe"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 text-xs font-mono text-slate-500 uppercase tracking-wider">
          <p>
            &copy; {new Date().getFullYear()} Royal Legacy Engineering Construction. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-lg border border-slate-900 hover:border-slate-800 bg-slate-950 hover:bg-slate-900 p-2.5 px-4 text-slate-400 hover:text-amber-500 transition-all"
          >
            <span>Back to Top</span>
            <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
