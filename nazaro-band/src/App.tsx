import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('pocetna');
  const [isLoading, setIsLoading] = useState(true);

  // Intersection Observer to trace active viewport element
  useEffect(() => {
    if (isLoading) return;

    const sections = ['pocetna', 'o-nama', 'galerija', 'recenzije', 'kontakt'];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.2, rootMargin: '-10% 0px -40% 0px' }
      );
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [isLoading]);

  return (
    <>
      {/* Cinematic Loader Screen */}
      <Loader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <motion.div
          id="app-content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-[#080808] text-white selection:bg-gold selection:text-black overflow-hidden"
        >
          {/* Transparent-Sticky Navbar */}
          <Navbar activeSection={activeSection} />

          {/* 1. Hero Cover Background Video */}
          <Hero />

          {/* 2. O nama (About Us) Section */}
          <AboutUs />

          {/* 3. Brojači (Animated metrics) */}
          <Stats />

          {/* 4. Galerija (Filterable Portfolio) */}
          <Gallery />

          {/* 5. Video sekcija (YouTube embed & carousel) */}
          <Videos />

          {/* 7. Recenzije (Testimonials slider) */}
          <Reviews />

          {/* 8. Standalone Premium CTA Banner */}
          <section className="relative py-24 overflow-hidden bg-[#0c0c0c] border-y border-white/5 flex items-center justify-center">
            {/* Background photo of a high-energy golden celebration */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808] pointer-events-none" />
            
            {/* Central visual text */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-5xl font-display font-black text-white tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Rezervirajte svoj termin <span className="text-gold-gradient">na vrijeme.</span>
              </motion.h2>
              
              <motion.p 
                className="text-white/60 text-sm md:text-base font-sans max-w-lg mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Svadbena slavlja popunjavaju se i do godinu dana unaprijed. Osigurajte premium glazbu za svoj poseban dan i stvorite uspomene za cijeli život.
              </motion.p>
              
              <motion.button
                onClick={() => {
                  const contactSection = document.querySelector('#kontakt');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_5px_20px_rgba(212,175,55,0.25)] cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
                <span className="relative z-10 text-black font-display text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2">
                  <span>Provjerite slobodne datume</span>
                </span>
              </motion.button>
            </div>
          </section>

          {/* 9. Kontakt (Detailed forms, locations, maps) */}
          <Contact />

          {/* 10. Footer (Social indexes, Back-to-Top, Floating WhatsApp actions) */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}