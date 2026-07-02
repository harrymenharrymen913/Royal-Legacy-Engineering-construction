/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import FeaturedProjects from './components/FeaturedProjects';
import Process from './components/Process';
import Equipment from './components/Equipment';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Safety from './components/Safety';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant simulated site preloader for high-end feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  if (loading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-950 text-white font-sans">
        <div className="relative flex items-center justify-center">
          {/* Animated Spinner ring */}
          <div className="h-16 w-16 rounded-full border-t-2 border-amber-500 border-r-2 border-transparent animate-spin" />
          <div className="absolute h-10 w-10 rounded-full border-b-2 border-orange-600 border-l-2 border-transparent animate-spin [animation-direction:reverse]" />
        </div>
        <h1 className="mt-8 text-xs font-bold uppercase tracking-[0.4em] text-slate-300 font-mono animate-pulse">
          Royal Legacy Engineering
        </h1>
        <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-amber-500/80">
          Loading Systems...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-300 overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      {/* Header Navigation */}
      <Navbar onRequestQuote={openQuoteModal} />

      {/* Main Single-Page Sections */}
      <main>
        {/* Full-screen Hero Banner */}
        <Hero onRequestQuote={openQuoteModal} />

        {/* Counters Statistics Section */}
        <Stats />

        {/* Company About Section */}
        <About />

        {/* Premium Capability Cards */}
        <Services />

        {/* Highlight features section */}
        <WhyChooseUs />

        {/* Project portfolio list with categories */}
        <FeaturedProjects />

        {/* Structural Timeline Section */}
        <Process />

        {/* Machinery specification cards */}
        <Equipment />

        {/* Client testimonial auto-play slider */}
        <Testimonials />

        {/* Safety certification and commitment indicators */}
        <Safety />

        {/* Management & Leadership Team Cards */}
        <Team />

        {/* Action prompt banner */}
        <CTA onRequestQuote={openQuoteModal} />

        {/* Inquiry Form & Map Coordinate card */}
        <Contact />
      </main>

      {/* Footer copyright, Quicklinks, and back to top button */}
      <Footer />

      {/* Floating estimate request modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
