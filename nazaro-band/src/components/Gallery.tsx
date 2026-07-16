import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredData = GALLERY_DATA;

  const handleOpenLightbox = (item: GalleryItem) => {
    // Find the original index in GALLERY_DATA or filteredData
    const index = GALLERY_DATA.findIndex(img => img.id === item.id);
    setLightboxIndex(index);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % GALLERY_DATA.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  const handleClose = () => {
    setLightboxIndex(null);
  };

  // Keyboard controls for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="galerija" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">GALERIJA USPOMENA</span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-4">
            Pogledajte dio <span className="text-gold-gradient">naše atmosfere.</span>
          </h2>
          <div className="w-20 h-[3px] bg-gold rounded-full mx-auto" />
        </div>

        {/* Masonry / Responsive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-none aspect-[4/3] sm:aspect-square bg-[#0c0c0c] border border-white/5 cursor-pointer"
                onClick={() => handleOpenLightbox(item)}
              >
                {/* Photo */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Luxury Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center border border-gold/0 group-hover:border-gold/30 rounded-none">
                  {/* Expand button inside hover */}
                  <div className="w-12 h-12 rounded-none bg-black/60 backdrop-blur-md flex items-center justify-center border border-gold/20 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-400">
                    <Maximize2 className="w-5 h-5 text-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="lightbox-backdrop"
            className="fixed inset-0 z-[9999] bg-black/95 flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header / Top Bar of Lightbox */}
            <div className="p-6 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center space-x-3 text-white/80">
                <Camera className="w-4 h-4 text-gold" />
                <span className="text-xs uppercase tracking-[0.2em] font-sans">
                  Galerija • {lightboxIndex + 1} od {GALLERY_DATA.length}
                </span>
              </div>
              
              <button
                id="lightbox-close"
                onClick={handleClose}
                className="w-12 h-12 rounded-full border border-white/10 bg-black/50 text-white hover:text-gold hover:border-gold/30 flex items-center justify-center transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image View & Side Navigation */}
            <div className="relative flex-grow flex items-center justify-center px-4 md:px-16">
              {/* Prev Button */}
              <button
                id="lightbox-prev"
                onClick={handlePrev}
                className="absolute left-4 md:left-8 w-14 h-14 rounded-full border border-white/10 bg-black/50 text-white hover:text-gold hover:border-gold/30 flex items-center justify-center transition-all duration-300 z-50"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Lightbox Main Image Frame */}
              <motion.div
                key={lightboxIndex}
                className="max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center relative p-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={GALLERY_DATA[lightboxIndex].url}
                  alt={GALLERY_DATA[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next Button */}
              <button
                id="lightbox-next"
                onClick={handleNext}
                className="absolute right-4 md:right-8 w-14 h-14 rounded-full border border-white/10 bg-black/50 text-white hover:text-gold hover:border-gold/30 flex items-center justify-center transition-all duration-300 z-50"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
