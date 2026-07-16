import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Music } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
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

  const navLinks = [
    { id: 'pocetna', label: 'Početna', href: '#pocetna' },
    { id: 'o-nama', label: 'O nama', href: '#o-nama' },
    { id: 'galerija', label: 'Galerija', href: '#galerija' },
    { id: 'recenzije', label: 'Recenzije', href: '#recenzije' },
    { id: 'kontakt', label: 'Kontakt', href: '#kontakt' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-gold/20 py-4 shadow-lg'
            : 'bg-[#080808]/40 backdrop-blur-sm py-6 border-b border-white/5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Left */}
          <a
            href="#pocetna"
            onClick={(e) => handleLinkClick(e, '#pocetna')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 border-2 border-gold flex items-center justify-center rounded-full bg-black/40 group-hover:bg-gold/10 transition-all duration-300">
              <span className="text-xs font-black text-gold tracking-widest">NB</span>
            </div>
            <span className="font-display font-bold tracking-[0.2em] text-lg uppercase text-white group-hover:text-gold transition-colors duration-300">
              Nazaro Band
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-display text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 hover:text-gold ${
                    isActive ? 'text-gold' : 'text-white/80'
                  }`}
                >
                  {link.label}
                  {/* Underline Indicator for Active Section */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#kontakt"
              onClick={(e) => handleLinkClick(e, '#kontakt')}
              className="px-6 py-2 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 rounded-none cursor-pointer font-display font-semibold"
            >
              Rezerviraj
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-black/20 text-white hover:text-gold focus:outline-none hover:border-gold/30 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center px-8 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            {/* Background luxury lights */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-gold/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-gold/10 rounded-full blur-[120px]" />

            <div className="flex flex-col space-y-6 z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-black shadow-lg">
                  <span className="text-sm font-black text-gold tracking-widest">NB</span>
                </div>
              </div>

              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-display text-2xl font-bold tracking-[0.2em] uppercase ${
                      isActive ? 'text-gold' : 'text-white'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <a
                  href="#kontakt"
                  onClick={(e) => handleLinkClick(e, '#kontakt')}
                  className="inline-block px-10 py-4 border border-white/20 text-xs uppercase tracking-[0.2em] text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
                >
                  Rezervirajte termin
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
