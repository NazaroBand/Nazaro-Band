import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Video, ChevronRight } from 'lucide-react';
import { VIDEOS_DATA } from '../data';
import { VideoItem } from '../types';

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS_DATA[0]);

  return (
    <section id="video" className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/5">
      {/* Background visual graphics */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">PROMO VIDEO SNIMKE</span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-4">
            Doživite zvuk i <span className="text-gold-gradient">scenski nastup.</span>
          </h2>
          <div className="w-20 h-[3px] bg-gold rounded-full mx-auto" />
        </div>

        {/* Full-size Video Theater Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Active Player */}
          <motion.div 
            className="lg:col-span-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Elegant browser/theater shell */}
            <div className="rounded-none overflow-hidden bg-black border border-gold/15 shadow-2xl relative">
              
              {/* Responsive Aspect Ratio Container */}
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1&autoplay=0`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>

              {/* Video Bottom Panel */}
              <div className="p-6 bg-[#080808] border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col flex-grow">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider mb-1">Trenutno svira • {activeVideo.category}</span>
                  <h3 className="font-display font-bold text-white text-lg md:text-xl tracking-wide">
                    {activeVideo.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-gold-cream text-xs uppercase tracking-widest font-bold self-start md:self-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <Video className="w-4 h-4 text-gold" />
                  <span>UŽIVO / LIVE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar: Rest of the playlist items */}
          <motion.div 
            className="lg:col-span-4 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/40 uppercase tracking-widest text-xs font-semibold">IZABERITE SNIMKU</span>
              <span className="text-gold text-xs font-semibold">{VIDEOS_DATA.length} videa na popisu</span>
            </div>

            <div className="space-y-4">
              {VIDEOS_DATA.map((item) => {
                const isActive = item.id === activeVideo.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className={`w-full text-left p-4 rounded-none border flex items-center gap-4 transition-all duration-300 group cursor-pointer ${
                      isActive 
                        ? 'bg-gold/10 border-gold/40 shadow-[0_4px_15px_rgba(212,175,55,0.1)]' 
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                    }`}
                  >
                    {/* Small Image Thumbnail */}
                    <div className="w-24 aspect-video rounded-none overflow-hidden relative flex-shrink-0 border border-white/5">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Interactive play circle */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'bg-black/40' : 'bg-black/60 group-hover:bg-black/30'
                      }`}>
                        <Play className={`w-5 h-5 ${isActive ? 'text-gold fill-gold scale-110' : 'text-white'}`} />
                      </div>
                    </div>

                    {/* Meta labels */}
                    <div className="flex-grow min-w-0">
                      <span className={`text-[9px] uppercase tracking-wider font-extrabold block mb-1 ${
                        isActive ? 'text-gold' : 'text-white/40'
                      }`}>
                        {item.category}
                      </span>
                      <h4 className={`font-display font-bold text-xs line-clamp-2 transition-colors duration-300 ${
                        isActive ? 'text-gold-cream' : 'text-white/80 group-hover:text-white'
                      }`}>
                        {item.title}
                      </h4>
                    </div>

                    {/* Active chevron indicator */}
                    {isActive && (
                      <ChevronRight className="w-4 h-4 text-gold flex-shrink-0 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Official channel banner card */}
            <div className="glass-panel p-6 rounded-none flex flex-col items-center text-center">
              <span className="text-white/40 text-xs font-sans uppercase tracking-widest mb-3">POSJETITE NAŠ KANAL</span>
              <p className="text-white/70 text-xs font-sans leading-relaxed mb-4">
                Pronađite pregršt drugih nastupa, uživo svirki i covera izravno na našem službenom YouTube kanalu.
              </p>
              <a
                href="https://www.youtube.com/@nazarobandng/featured"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3 border border-white/20 hover:border-gold hover:bg-gold text-white hover:text-black font-display font-semibold text-xs uppercase tracking-widest transition-all duration-300 rounded-none"
              >
                Prati nas na YouTubeu
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
