import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS_DATA } from '../data';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  // Auto slide reviews every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const currentReview = REVIEWS_DATA[activeIndex];

  return (
    <section id="recenzije" className="py-24 bg-[#080808] relative overflow-hidden border-y border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">RECENZIJE I DOJMOVI</span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-4">
            Što o nama kažu <span className="text-gold-gradient">zadovoljni mladenci?</span>
          </h2>
          <div className="w-20 h-[3px] bg-gold rounded-full mx-auto" />
        </div>

        {/* Custom Testimonial Carousel Frame */}
        <div className="relative min-h-[380px] md:min-h-[320px] flex items-center justify-center">
          
          {/* Slider Left Arrow */}
          <button
            id="review-prev"
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 bg-black/60 text-white hover:text-gold hover:border-gold flex items-center justify-center transition-all duration-300 z-10 cursor-pointer rounded-none"
            aria-label="Prethodna recenzija"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Animating Card Frame */}
          <div className="w-full max-w-3xl overflow-hidden px-2 py-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass-panel p-8 md:p-12 rounded-none relative border border-gold/15 shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col items-center text-center"
              >
                {/* Large Background Quote Icon */}
                <Quote className="absolute right-8 top-8 w-24 h-24 text-gold/5 pointer-events-none" />
                
                {/* Golden Stars rating */}
                <div className="flex items-center space-x-1.5 mb-6">
                  {[...Array(currentReview.stars)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-gold fill-gold drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 font-serif text-lg md:text-xl leading-relaxed italic mb-8 max-w-2xl relative z-10">
                  "{currentReview.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <span className="font-display font-black text-gold-cream text-base md:text-lg tracking-wide">
                    {currentReview.author}
                  </span>
                  
                  <span className="font-sans text-gold/80 text-xs uppercase tracking-widest font-bold mt-1">
                    {currentReview.role}
                  </span>

                  <span className="font-sans text-white/40 text-[10px] mt-2">
                    {currentReview.event} • {currentReview.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Right Arrow */}
          <button
            id="review-next"
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 bg-black/60 text-white hover:text-gold hover:border-gold flex items-center justify-center transition-all duration-300 z-10 cursor-pointer rounded-none"
            aria-label="Sljedeća recenzija"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Indicators / Navigation Dots */}
        <div className="flex items-center justify-center space-x-2.5 mt-8">
          {REVIEWS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`h-[3px] transition-all duration-300 rounded-none cursor-pointer ${
                index === activeIndex 
                  ? 'w-8 bg-gold' 
                  : 'w-3 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Prikaži recenziju ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
