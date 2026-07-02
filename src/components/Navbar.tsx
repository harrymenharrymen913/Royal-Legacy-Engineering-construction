import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, HardHat } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
}

export default function Navbar({ onRequestQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Safety', href: '#safety' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-sans ${
          isScrolled
            ? 'glass-nav bg-slate-950/80 shadow-lg py-3'
            : 'bg-gradient-to-b from-slate-950/80 to-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform duration-300 p-0.5 border border-white/20">
                <img 
                  src="/src/assets/images/website_logo_1783019428349.jpg" 
                  alt="Royal Legacy Engineering Logo" 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-bold tracking-widest uppercase text-white leading-tight">
                  Royal Legacy <span className="font-light opacity-60">Engineering</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-amber-500 font-bold font-mono">
                  Sleek Construction
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[11px] font-semibold uppercase tracking-widest text-slate-300 hover:text-amber-500 hover:opacity-100 transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={onRequestQuote}
                className="hidden md:flex items-center gap-2 rounded-full bg-amber-500 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-slate-950 hover:bg-white hover:text-slate-950 shadow-lg shadow-amber-500/10 transition-all duration-300 active:scale-95"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-3 w-3" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:text-amber-500 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-slate-950/95 backdrop-blur-xl lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8 justify-between font-sans">
          <div className="flex flex-col gap-5 text-center">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-lg font-bold uppercase tracking-widest text-slate-300 hover:text-amber-500 py-2 border-b border-slate-900 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-4 text-sm font-bold uppercase tracking-widest text-slate-950 hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-center text-[10px] uppercase font-mono tracking-widest text-slate-500">
              Royal Legacy Engineering Construction
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
