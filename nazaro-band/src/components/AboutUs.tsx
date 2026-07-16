import React from 'react';
import { motion } from 'motion/react';
import { Award, Music, Speaker, Sparkles, ShieldCheck } from 'lucide-react';
// @ts-ignore
import regeneratedImage from '../assets/images/regenerated_image_1784138118154.jpg';

export default function AboutUs() {
  const cards = [
    {
      icon: Award,
      title: 'Profesionalni nastup',
      description: 'Dugogodišnje iskustvo, točnost i maksimalna posvećenost svakom detalju vašeg slavlja.'
    },
    {
      icon: Music,
      title: 'Bogat repertoar',
      description: 'Preko 500+ pjesama - od tradicionalnih slavonskih nota do najnovijih svjetskih i domaćih hitova.'
    },
    {
      icon: Speaker,
      title: 'Vrhunska oprema',
      description: 'Profesionalno ozvučenje i inteligentna koncertna rasvjeta koji daju vrhunski vizualni i zvučni ugođaj.'
    },
    {
      icon: Sparkles,
      title: 'Odlična atmosfera',
      description: 'Nevjerojatna energija i interakcija s publikom koja drži plesni podij punim cijelu noć.'
    },
    {
      icon: ShieldCheck,
      title: 'Pouzdanost',
      description: 'Sigurnost i miran san za mladence - jamčimo besprijekoran tijek glazbenog dijela večeri.'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="o-nama" className="py-24 relative overflow-hidden bg-[#080808]">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main section content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          
          {/* Left Side: Cinematic Photo with floating accents */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Image frame */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gold/20 aspect-[4/5] shadow-2xl group">
              <img 
                src={regeneratedImage} 
                alt="Nazaro Band Svadba"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Overlay Text card on the image */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/60 backdrop-blur-md border border-gold/10">
                <p className="text-gold font-display text-sm font-bold tracking-widest uppercase mb-1">Slavonija & Cijela HR</p>
                <p className="text-white/80 text-xs font-sans">Profesionalna organizacija i vrhunski štimung u svakom kutku domovine.</p>
              </div>
            </div>

            {/* Back decorative glowing gold card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-2xl blur-lg opacity-25 -z-10 animate-pulse" />
          </motion.div>

          {/* Right Side: Text & Brand narrative */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">TKO SMO MI</span>
            
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-6 leading-tight">
              Tamo gdje glazba <br />
              <span className="text-gold-gradient">postaje uspomena.</span>
            </h2>

            <div className="w-20 h-[3px] bg-gold rounded-full mb-8" />

            <p className="text-white/80 font-sans text-lg leading-relaxed mb-6">
              Nazaro Band je renomirani glazbeni sastav specijaliziran za svadbe i sve vrste svečanih događanja. Naš cilj nije samo svirati, već stvoriti atmosferu koju će gosti pamtiti cijeli život.
            </p>

            <p className="text-white/60 font-sans text-base leading-relaxed mb-10">
              Svakom nastupu pristupamo s maksimalnom razinom profesionalnosti, nepresušnom energijom i iskrenom ljubavi prema glazbi. Svjesni smo važnosti vašeg dana i zato se prilagođavamo vama, stvarajući jedinstvenu priču prilagođenu vašim željama i ukusu.
            </p>

            {/* Quote decoration */}
            <div className="p-8 border-l-2 border-gold bg-white/[0.03] backdrop-blur-md rounded-r-none relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 border-[20px] border-white/5 rounded-full opacity-30 pointer-events-none" />
              <p className="italic text-gold-cream/90 font-serif text-lg leading-relaxed">
                "Naša najveća nagrada je prepun plesni podij i osmijesi na licima vaših gostiju na samom kraju večeri."
              </p>
              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-white/40 font-display font-semibold">— Članovi Nazaro Banda</p>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-semibold">ZAŠTO IZABRATI NAS</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">Naši Premium Standardi</h3>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {cards.map((card, index) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-panel glass-panel-hover p-6 rounded-none flex flex-col items-center text-center group"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center bg-white/[0.02] mb-5 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <IconComp className="w-5 h-5 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                  </div>
                  <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-3 group-hover:text-gold transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-white/60 text-xs font-sans leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
