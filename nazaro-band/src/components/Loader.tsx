import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600); // Allow exit animation to play
          }, 400);
          return 100;
        }
        // Simulated loading speeds for a premium feel
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="app-preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Golden Rings */}
            <motion.div
              className="w-24 h-24 rounded-full border-2 border-dashed border-gold/30 flex items-center justify-center relative"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-b-2 border-gold"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              />
            </motion.div>

            {/* Glowing Center Icon */}
            <div className="absolute top-8 flex items-center justify-center w-8 h-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <Music className="w-8 h-8 text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
              </motion.div>
            </div>

            {/* Typography */}
            <motion.h1
              className="mt-10 text-3xl font-bold tracking-[0.25em] text-gold-cream text-center font-display drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              NAZARO BAND
            </motion.h1>

            <motion.p
              className="mt-2 text-xs uppercase tracking-[0.4em] text-gray-500 font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Učitavanje luksuznog doživljaja
            </motion.p>

            {/* Progress Percentage */}
            <div className="mt-8 flex flex-col items-center w-48">
              <span className="text-sm font-mono text-gold mb-2 font-semibold">
                {progress}%
              </span>
              <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
