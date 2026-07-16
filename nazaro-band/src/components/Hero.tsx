import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Calendar, Music } from 'lucide-react';

export default function Hero() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const words = [
    '💍 Svadbe',
    '🎉 Proslave',
    '🥂 Krštenja',
    '🎂 Rođendani',
    '🎶 Korporativni eventi'
  ];

  const { scrollY } = useScroll();
  // Hero fades out and moves slightly up as the user scrolls down
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const heroTranslateY = useTransform(scrollY, [0, 600], [0, -50]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(wordInterval);
  }, []);

  const handleCTAQuery = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pocetna" className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none filter brightness-50"
        referrerPolicy="no-referrer"
      >
        <source
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054ef24d2c3c99cc6ff66812dc5f782&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
        {/* Secondary fallback video */}
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-dancing-at-a-wedding-reception-39773-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Dark Overlay with Golden Ambient Radial Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-[#080808]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

      {/* Animated Hero Content Area */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center h-full"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroTranslateY }}
      >
        {/* Golden Crown/Band Logo Icon */}
        <motion.div
          className="mb-6 w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-[#080808]/60 backdrop-blur-md relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Inner animated gold pulse */}
          <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping opacity-30 animate-pulse" />
          <span className="text-xs font-black text-gold tracking-widest">NB</span>
        </motion.div>

        {/* Small subtitle above */}
        <motion.span
          className="text-gold text-xs tracking-[0.4em] uppercase mb-4 opacity-90 font-semibold font-display"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium glazba za svečane prigode
        </motion.span>

        {/* Main Brand Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white leading-none select-none uppercase mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Nazaro<br />
          <span className="text-transparent stroke-text">Band</span>
        </motion.h1>

        {/* Secondary Catchy Subtitle - Elegant list */}
        <motion.div
          className="flex justify-center gap-6 mb-8 text-sm italic font-serif text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span>💍 Svadbe</span>
          <span>🎉 Proslave</span>
          <span>🥂 Eventi</span>
        </motion.div>

        {/* Animated alternating text carousel */}
        <div className="h-12 md:h-16 flex items-center justify-center overflow-hidden mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWordIndex}
              className="text-xs md:text-sm font-display font-bold tracking-[0.25em] uppercase text-gold-cream flex items-center justify-center py-2.5 px-6 bg-white/[0.03] border border-gold/15 rounded-full backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
            >
              {words[activeWordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side-by-side luxurious rectangular buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 z-10 w-full max-w-md">
          <motion.button
            onClick={handleCTAQuery}
            className="bg-[#D4AF37] text-black px-10 py-4 font-display font-bold uppercase tracking-[0.2em] text-[11px] hover:scale-105 active:scale-95 transition-all duration-300 rounded-none cursor-pointer shadow-[0_10px_30px_rgba(212,175,55,0.25)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Rezervirajte termin
          </motion.button>
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              const videoSection = document.getElementById('video');
              if (videoSection) {
                videoSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white/[0.03] backdrop-blur-[12px] text-white border border-white/20 px-10 py-4 font-display font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 rounded-none cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Pogledaj Videe
          </motion.button>
        </div>
      </motion.div>

      {/* Down arrow link to scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        onClick={() => {
          const aboutSection = document.querySelector('#o-nama');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2 font-sans font-semibold">Saznajte više</span>
        <ChevronDown className="w-5 h-5 text-gold" />
      </motion.div>
    </section>
  );
}
