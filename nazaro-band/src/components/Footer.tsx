import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Music, Instagram, Facebook, Youtube, PhoneCall } from 'lucide-react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer-section" className="bg-[#040404] py-16 border-t border-white/5 relative overflow-hidden">
        {/* Background glow lines */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gold/5 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          
          {/* Footer Logo */}
          <div className="flex flex-col items-center space-y-3 mb-8 group cursor-pointer" onClick={scrollToTop}>
            <div className="w-12 h-12 rounded-none border border-gold/30 flex items-center justify-center bg-black/40 group-hover:border-gold transition-colors duration-300">
              <Music className="w-6 h-6 text-gold animate-pulse" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display font-black text-2xl tracking-[0.2em] text-gold group-hover:text-gold-light transition-colors duration-300">
                NAZARO
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold mt-1">
                Glazba Za Svadbe i Svečanosti
              </span>
            </div>
          </div>

          {/* Core Footer Navigation shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10 text-sm font-sans text-white/60">
            <a href="#pocetna" className="hover:text-gold transition-colors duration-300">Početna</a>
            <a href="#o-nama" className="hover:text-gold transition-colors duration-300">O nama</a>
            <a href="#galerija" className="hover:text-gold transition-colors duration-300">Galerija</a>
            <a href="#recenzije" className="hover:text-gold transition-colors duration-300">Recenzije</a>
            <a href="#kontakt" className="hover:text-gold transition-colors duration-300">Kontakt</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-6 mb-12">
            <a
              href="https://www.instagram.com/nazarobandng/"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-gold transition-colors duration-300"
              aria-label="Instagram profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/nazarobandng"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-gold transition-colors duration-300"
              aria-label="Facebook page"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@nazarobandng/featured"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-gold transition-colors duration-300"
              aria-label="YouTube channel"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Under-credits */}
          <div className="w-full h-[1px] bg-white/5 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs font-sans text-white/30 space-y-4 md:space-y-0">
            <p>© {new Date().getFullYear()} Nazaro Band. Sva prava pridržana.</p>
            <p className="flex items-center space-x-1.5">
              <span>Premium Wedding Experience by</span>
              <span className="text-gold font-semibold">Web Agency Croatia</span>
            </p>
          </div>

        </div>
      </footer>

      {/* Floating Action Elements (Bottom Right corner) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
        
        {/* Sticky WhatsApp Floating Button */}
        <motion.a
          id="whatsapp-sticky-action"
          href="https://wa.me/385989588748?text=Pozdrav%20Nazaro%20Band!%20Zanima%20nas%20slobodan%20termin%20za%20svadbu."
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-none bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          aria-label="Kontaktirajte nas preko WhatsApp-a"
        >
          {/* Pulse highlight */}
          <div className="absolute inset-0 rounded-none bg-[#25D366]/40 animate-ping opacity-75 -z-10" />
          
          <svg
            className="w-7 h-7 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.015 14.077 1.01 11.514 1.01c-5.436 0-9.86 4.37-9.864 9.8 0 1.639.428 3.24 1.238 4.653L1.87 20.917l5.127-1.345c.01-.005.01-.005.01-.01-.002.002-.002.002 0 0zm11.758-7.234c-.312-.156-1.848-.912-2.134-1.017-.286-.105-.494-.156-.701.156-.207.312-.8 1.017-.982 1.222-.182.205-.364.23-.676.074-1.336-.669-2.215-1.162-3.1-2.684-.234-.403.234-.374.67-.124.391.223.494.258.647.456.153.197.076.37-.038.52-.114.152-.701.815-.91 1.016-.208.201-.433.153-.746-.002-.312-.156-1.32-.486-2.515-1.551-.93-.829-1.558-1.854-1.74-2.165-.181-.312-.019-.481.137-.636.14-.139.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.701-1.693-.96-2.31-.252-.61-.51-.522-.7-.533-.18-.01-.39-.012-.6-.012s-.552.08-.84.39c-.288.312-1.1.1.08-1.1 1.1 0 2.21 1.12 2.45 1.45.24.33 4.36 6.66 10.57 9.34.1.04.1.04.1.04.3.1.5.1.7.1.3 0 .8-.4 1-.9.2-.5.2-1 .1-1.1-.1-.2-.3-.3-.6-.4z" />
          </svg>
          
          {/* Hover WhatsApp Label */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 bg-[#25D366] text-white text-xs font-sans font-bold uppercase tracking-wider py-2 px-4 rounded-none shadow-xl transition-all duration-300 origin-right whitespace-nowrap">
            Pošalji WhatsApp upit
          </span>
        </motion.a>

        {/* Back-to-Top Action Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              id="back-to-top-trigger"
              onClick={scrollToTop}
              className="w-14 h-14 rounded-none bg-[#0c0c0c] text-gold border border-gold/30 hover:border-gold flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              aria-label="Skoči na vrh"
            >
              <ChevronUp className="w-6 h-6 text-gold group-hover:-translate-y-1 transition-transform duration-300" />
              
              {/* Hover Label */}
              <span className="absolute right-16 scale-0 group-hover:scale-100 bg-[#0c0c0c] border border-gold/30 text-gold text-xs font-sans font-bold uppercase tracking-wider py-2 px-4 rounded-none shadow-xl transition-all duration-300 origin-right whitespace-nowrap">
                Nazad na vrh
              </span>
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
