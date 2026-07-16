import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Instagram, Facebook, Youtube, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!name || !email || !message) {
      setErrorMessage('Molimo vas popunite sva obavezna polja (Ime, Email, Poruka).');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/meeyeavl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ime_i_prezime: name,
          email: email,
          telefon: phone,
          datum_dogadaja: date,
          lokacija: location,
          poruka: message
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setLocation('');
        setMessage('');
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(', '));
        } else {
          setErrorMessage('Došlo je do pogreške prilikom slanja poruke. Pokušajte ponovno.');
        }
      }
    } catch (err) {
      setErrorMessage('Došlo je do mrežne pogreške. Molimo vas pokušajte ponovno ili nas nazovite izravno.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative Radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-[-100px] w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">REZERVACIJE U TIJEKU</span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-4">
            Rezervirajte svoj <span className="text-gold-gradient">termin na vrijeme.</span>
          </h2>
          <div className="w-20 h-[3px] bg-gold rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact details & Google map */}
          <motion.div 
            className="lg:col-span-5 flex flex-col space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-white tracking-wide mb-4">Uvijek dostupni</h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed mb-6">
                Slobodno nas kontaktirajte putem telefona, e-maila ili društvenih mreža. Rado ćemo odgovoriti na sva vaša pitanja i dogovoriti sastanak kako bismo isplanirali savršen glazbeni ugođaj za vaš poseban dan.
              </p>
            </div>

            {/* Visual Quick Contact Information Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:0989588748" 
                className="p-5 rounded-none bg-white/[0.02] border border-white/5 hover:border-gold/30 flex items-center space-x-4 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-none bg-gold/10 flex items-center justify-center border border-gold/15 group-hover:bg-gold/25 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-sans font-bold">Telefon (Nazovite izravno)</p>
                  <p className="text-white font-display font-bold text-base md:text-lg group-hover:text-gold transition-colors duration-300">098 958 8748</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:nazaroband1@gmail.com" 
                className="p-5 rounded-none bg-white/[0.02] border border-white/5 hover:border-gold/30 flex items-center space-x-4 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-none bg-gold/10 flex items-center justify-center border border-gold/15 group-hover:bg-gold/25 transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div className="min-w-0">
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-sans font-bold">E-mail adresa</p>
                  <p className="text-white font-display font-bold text-sm md:text-base group-hover:text-gold transition-colors duration-300 truncate">nazaroband1@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div 
                className="p-5 rounded-none bg-white/[0.02] border border-white/5 flex items-center space-x-4 flex-shrink-0"
              >
                <div className="w-12 h-12 rounded-none bg-gold/10 flex items-center justify-center border border-gold/15 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-sans font-bold">Lokacija</p>
                  <p className="text-white font-display font-bold text-sm md:text-base">Nova Gradiška, Hrvatska</p>
                </div>
              </div>
            </div>

            {/* Styled Social Channels */}
            <div>
              <p className="text-white/40 uppercase tracking-widest text-[10px] font-sans font-bold mb-4 ml-1">PRATITE NAS</p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/nazarobandng/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-none bg-white/5 hover:bg-gold border border-white/10 hover:border-gold text-white hover:text-black flex items-center justify-center transition-all duration-400"
                  aria-label="Instagram profil"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/nazarobandng"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-none bg-white/5 hover:bg-gold border border-white/10 hover:border-gold text-white hover:text-black flex items-center justify-center transition-all duration-400"
                  aria-label="Facebook stranica"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@nazarobandng/featured"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-none bg-white/5 hover:bg-gold border border-white/10 hover:border-gold text-white hover:text-black flex items-center justify-center transition-all duration-400"
                  aria-label="YouTube kanal"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="rounded-none overflow-hidden border border-white/5 h-64 shadow-2xl relative">
              <iframe
                title="Lokacija Nazaro Band"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22434.782806290747!2d17.368731326442657!3d45.261234976735515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475dfad5c862eb99%3A0xc30403754ef24483!2s35400%2C%20Nova%20Gradi%C5%A1ka!5e0!3m2!1shr!2shr!4v1715000000000!5m2!1shr!2shr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%) brightness(95%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Contact booking Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-none border border-gold/15 relative">
              <h3 className="font-display font-black text-2xl text-gold-cream tracking-wide mb-2">Pošaljite nam upit</h3>
              <p className="text-white/50 font-sans text-xs mb-8">Odgovaramo na sve upite u roku od 24 sata.</p>

              {errorMessage && (
                <div className="mb-6 p-4 rounded-none bg-red-500/10 border border-red-500/20 flex items-center space-x-3 text-red-200 text-xs font-sans">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-Column fields: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-white/70 text-xs font-sans font-semibold mb-2 ml-1">Vaše Ime i Prezime <span className="text-gold">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="npr. Ivan Horvat"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/[0.02] border border-white/10 hover:border-gold/30 focus:border-gold text-white rounded-none py-3.5 px-5 text-sm font-sans outline-none transition-all duration-300"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-white/70 text-xs font-sans font-semibold mb-2 ml-1">E-mail Adresa <span className="text-gold">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="npr. ivan@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/[0.02] border border-white/10 hover:border-gold/30 focus:border-gold text-white rounded-none py-3.5 px-5 text-sm font-sans outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* 2-Column fields: Phone & Wedding Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-white/70 text-xs font-sans font-semibold mb-2 ml-1">Broj Telefona</label>
                    <input
                      type="tel"
                      placeholder="npr. 098 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white/[0.02] border border-white/10 hover:border-gold/30 focus:border-gold text-white rounded-none py-3.5 px-5 text-sm font-sans outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-white/70 text-xs font-sans font-semibold mb-2 ml-1">Datum Događaja / Svadbe</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-white/[0.02] border border-white/10 hover:border-gold/30 focus:border-gold text-white rounded-none py-3.5 px-5 text-sm font-sans outline-none transition-all duration-300 text-white/80"
                    />
                  </div>
                </div>

                {/* Event Location */}
                <div className="flex flex-col">
                  <label className="text-white/70 text-xs font-sans font-semibold mb-2 ml-1">Lokacija Svadbene Sale / Grada</label>
                  <input
                    type="text"
                    placeholder="npr. Hotel Antunović, Zagreb"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-white/[0.02] border border-white/10 hover:border-gold/30 focus:border-gold text-white rounded-none py-3.5 px-5 text-sm font-sans outline-none transition-all duration-300"
                  />
                </div>

                {/* Message text area */}
                <div className="flex flex-col">
                  <label className="text-white/70 text-xs font-sans font-semibold mb-2 ml-1">Vaša Poruka i Želje <span className="text-gold">*</span></label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Ovdje upišite sve vaše želje, planirani broj gostiju, omiljene žanrove..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white/[0.02] border border-white/10 hover:border-gold/30 focus:border-gold text-white rounded-none py-3.5 px-5 text-sm font-sans outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Golden submit action button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-none bg-gold hover:bg-white text-black font-display text-sm uppercase font-bold tracking-widest transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(212,175,55,0.2)] disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                        <span>Slanje upita...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>Pošaljite upit</span>
                      </>
                    )}
                  </span>
                </button>

              </form>

              {/* Glass success overlay */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    className="absolute inset-0 bg-black/95 backdrop-blur-md rounded-none flex flex-col items-center justify-center text-center p-8 z-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15, type: 'spring', damping: 15 }}
                    >
                      <CheckCircle2 className="w-20 h-20 text-gold mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                    </motion.div>
                    <h4 className="font-display font-black text-2xl text-gold-cream tracking-wide mb-3">Upit uspješno poslan!</h4>
                    <p className="text-white/70 font-sans text-sm max-w-sm mb-8 leading-relaxed">
                      Zahvaljujemo vam na interesu za Nazaro Band. Naš booking menadžer će vas kontaktirati u najkraćem mogućem roku kako bismo dogovorili sve pojedinosti.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-8 py-3 rounded-none border border-gold/40 text-gold hover:bg-gold hover:text-black font-sans text-xs uppercase font-extrabold tracking-widest transition-all duration-300 cursor-pointer"
                    >
                      Zatvori
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
