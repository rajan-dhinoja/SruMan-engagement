"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const duration = 2400; // 2.4s loader
    const intervalTime = 24;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setIsLoaded(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Small pause at 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1c1917] select-none"
      >
        {/* Soft Background Radial Light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,53,167,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-md w-full px-6">
          {/* Animated Gold Monogram Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center w-40 h-40 mb-10"
          >
            {/* Spinning Thin Outer Gold Circle */}
            <svg className="absolute w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="74"
                stroke="rgba(142, 53, 167, 0.15)"
                strokeWidth="1.5"
                fill="transparent"
              />
              <motion.circle
                cx="80"
                cy="80"
                r="74"
                stroke="#8e35a7"
                strokeWidth="1.5"
                fill="transparent"
                strokeDasharray="465"
                strokeDashoffset={465 - (465 * progress) / 100}
                strokeLinecap="round"
                transition={{ ease: "easeInOut" }}
              />
            </svg>

            {/* Inner Glow Circle */}
            <div className="absolute w-[130px] h-[130px] rounded-full border border-purple-300/20 bg-stone-900/50 flex items-center justify-center shadow-[0_0_20px_rgba(142,53,167,0.12)]">
              {/* Couple Monogram Letters */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-serif text-5xl font-light text-purple-350 tracking-wider"
              >
                S <span className="text-xl text-purple-400 font-sans">&</span> A
              </motion.span>
            </div>
          </motion.div>

          {/* SruMan Logo Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl font-light tracking-[0.25em] text-[#fdfbf7] mb-2 uppercase">
              SruMan
            </h1>
            <p className="font-sans text-xs tracking-[0.2em] text-purple-400/70 uppercase mb-8">
              અનંતકાળની શરૂઆત
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <div className="w-48 h-[1px] bg-stone-850 relative overflow-hidden mb-3">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-600 to-purple-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="font-sans text-[10px] tracking-[0.1em] text-purple-300/60 uppercase"
          >
            આપને ઉજવણી માટે આમંત્રિત કરીએ છીએ {Math.round(progress)}%
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
