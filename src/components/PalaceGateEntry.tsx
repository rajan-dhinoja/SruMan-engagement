"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Key } from "lucide-react";

interface PalaceGateEntryProps {
  onEnter: () => void;
}

export default function PalaceGateEntry({ onEnter }: PalaceGateEntryProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenGates = () => {
    setIsOpened(true);
    playChime();
    setTimeout(() => {
      onEnter();
    }, 2000); // Majestic slow transition
  };

  // Synthesize a royal welcoming chime (Harp & Temple Bell hybrid)
  const playChime = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.connect(ctx.destination);

      // Play a rich, majestic chord arpeggio (C major pentatonic scale notes)
      const freqs = [196.00, 261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // G3, C4, E4, G4, C5, E5, G5, C6
      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        // Triangle wave for smooth, warm flute/harp tone
        osc.type = index % 2 === 0 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.08);
        
        oscGain.gain.setValueAtTime(0, ctx.currentTime + index * 0.08);
        oscGain.gain.linearRampToValueAtTime(0.6, ctx.currentTime + index * 0.08 + 0.04);
        oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.08 + 1.8);
        
        osc.connect(oscGain);
        oscGain.connect(gainNode);
        
        osc.start(ctx.currentTime + index * 0.08);
        osc.stop(ctx.currentTime + index * 0.08 + 2);
      });
    } catch (e) {
      console.warn("Chime synthesis failed:", e);
    }
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#180a1e] overflow-hidden select-none"
          style={{ perspective: "1800px" }}
        >
          {/* Ambient Royal Spotlights */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)] pointer-events-none z-10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(142,53,167,0.25)_0%,transparent_70%)] pointer-events-none z-10" />

          {/* Palace Archway Frame Overlay */}
          <div className="absolute inset-6 border-[3px] border-double border-[#d4af37]/35 rounded-[3.5rem] pointer-events-none z-20 shadow-[inset_0_0_50px_rgba(212,175,55,0.1)]" />

          {/* Hanging Traditional Garlands / Toran (Top Corner Hangings) */}
          <div className="absolute top-6 left-6 right-6 h-32 pointer-events-none z-20 flex justify-between overflow-hidden opacity-80">
            {/* Garland Left */}
            <svg viewBox="0 0 200 100" className="w-48 h-24 fill-none stroke-[#d4af37]" strokeWidth="1.5">
              <path d="M10,0 C30,30 70,30 90,0 C110,30 150,30 170,0" />
              <circle cx="10" cy="5" r="4" fill="#d4af37" />
              <circle cx="50" cy="22" r="4.5" fill="#e06a3b" />
              <circle cx="90" cy="5" r="4" fill="#d4af37" />
              <circle cx="130" cy="22" r="4.5" fill="#e06a3b" />
              <circle cx="170" cy="5" r="4" fill="#d4af37" />
            </svg>
            {/* Garland Right */}
            <svg viewBox="0 0 200 100" className="w-48 h-24 fill-none stroke-[#d4af37] transform scale-x-[-1]" strokeWidth="1.5">
              <path d="M10,0 C30,30 70,30 90,0 C110,30 150,30 170,0" />
              <circle cx="10" cy="5" r="4" fill="#d4af37" />
              <circle cx="50" cy="22" r="4.5" fill="#e06a3b" />
              <circle cx="90" cy="5" r="4" fill="#d4af37" />
              <circle cx="130" cy="22" r="4.5" fill="#e06a3b" />
              <circle cx="170" cy="5" r="4" fill="#d4af37" />
            </svg>
          </div>

          {/* Left Palace Door */}
          <motion.div
            animate={isOpened ? { rotateY: -110, x: "-30%", opacity: 0 } : { rotateY: 0, x: 0 }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#210d29] to-[#3a1846] border-r-[4px] border-[#d4af37]/60 shadow-[20px_0_40px_rgba(0,0,0,0.6)] flex flex-col justify-center items-end"
            style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
          >
            {/* Door Panel Frame */}
            <div className="w-[85%] h-[85%] border-2 border-[#d4af37]/30 rounded-l-[3.5rem] mr-8 relative flex flex-col justify-center items-center overflow-hidden bg-[#240e2b]/95 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
              {/* Inner Arch Details */}
              <div className="absolute inset-4 border border-[#d4af37]/15 rounded-l-[3rem] pointer-events-none" />
              
              {/* Royal Arch Filigree Pattern */}
              <svg viewBox="0 0 100 200" className="absolute top-8 left-6 w-32 opacity-40 stroke-[#d4af37] fill-none" strokeWidth="1">
                <path d="M0,20 Q30,20 40,40 T60,60 T70,100 T60,140 T40,160 T0,160" />
                <path d="M10,40 Q30,40 35,55 T50,75 T55,100" />
                <circle cx="5" cy="100" r="2" fill="#d4af37" />
                <circle cx="20" cy="80" r="2.5" fill="#d4af37" />
                <circle cx="20" cy="120" r="2.5" fill="#d4af37" />
              </svg>

              {/* Hanging Pearl/Bead Strands (Decorative Left) */}
              <div className="absolute bottom-8 left-8 flex gap-3 opacity-30">
                <div className="w-[1.5px] h-32 bg-gradient-to-b from-[#d4af37] to-transparent relative">
                  <div className="absolute -bottom-1 -left-[3px] w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                </div>
                <div className="w-[1.5px] h-20 bg-gradient-to-b from-[#d4af37] to-transparent relative">
                  <div className="absolute -bottom-1 -left-[3px] w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                </div>
              </div>

              {/* Left Handle */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-32 rounded-l-full bg-gradient-to-l from-[#f7e4a9] to-[#d4af37] border border-[#d4af37]/40 shadow-[0_4px_15px_rgba(0,0,0,0.5)] flex items-center justify-end pr-1 z-30">
                <div className="w-4 h-20 rounded-l-full bg-[#240e2b] border-r border-[#d4af37]/20" />
              </div>
            </div>
          </motion.div>

          {/* Right Palace Door */}
          <motion.div
            animate={isOpened ? { rotateY: 110, x: "30%", opacity: 0 } : { rotateY: 0, x: 0 }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#210d29] to-[#3a1846] border-l-[4px] border-[#d4af37]/60 shadow-[-20px_0_40px_rgba(0,0,0,0.6)] flex flex-col justify-center items-start"
            style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
          >
            {/* Door Panel Frame */}
            <div className="w-[85%] h-[85%] border-2 border-[#d4af37]/30 rounded-r-[3.5rem] ml-8 relative flex flex-col justify-center items-center overflow-hidden bg-[#240e2b]/95 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
              {/* Inner Arch Details */}
              <div className="absolute inset-4 border border-[#d4af37]/15 rounded-r-[3rem] pointer-events-none" />
              
              {/* Royal Arch Filigree Pattern (Flipped) */}
              <svg viewBox="0 0 100 200" className="absolute top-8 right-6 w-32 opacity-40 stroke-[#d4af37] fill-none transform scale-x-[-1]" strokeWidth="1">
                <path d="M0,20 Q30,20 40,40 T60,60 T70,100 T60,140 T40,160 T0,160" />
                <path d="M10,40 Q30,40 35,55 T50,75 T55,100" />
                <circle cx="5" cy="100" r="2" fill="#d4af37" />
                <circle cx="20" cy="80" r="2.5" fill="#d4af37" />
                <circle cx="20" cy="120" r="2.5" fill="#d4af37" />
              </svg>

              {/* Hanging Pearl/Bead Strands (Decorative Right) */}
              <div className="absolute bottom-8 right-8 flex gap-3 opacity-30 transform scale-x-[-1]">
                <div className="w-[1.5px] h-32 bg-gradient-to-b from-[#d4af37] to-transparent relative">
                  <div className="absolute -bottom-1 -left-[3px] w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                </div>
                <div className="w-[1.5px] h-20 bg-gradient-to-b from-[#d4af37] to-transparent relative">
                  <div className="absolute -bottom-1 -left-[3px] w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                </div>
              </div>

              {/* Right Handle */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-32 rounded-r-full bg-gradient-to-r from-[#f7e4a9] to-[#d4af37] border border-[#d4af37]/40 shadow-[0_4px_15px_rgba(0,0,0,0.5)] flex items-center justify-start pl-1 z-30">
                <div className="w-4 h-20 rounded-r-full bg-[#240e2b] border-l border-[#d4af37]/20" />
              </div>
            </div>
          </motion.div>

          {/* Central Monogram Lock and Invitation Button */}
          <div className="absolute z-30 flex flex-col items-center justify-center text-center px-4">
            {/* Spinning/Pulsing Golden Mandala Monogram Frame */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 relative flex items-center justify-center w-56 h-56 rounded-full border-2 border-[#d4af37] bg-[#1e0a25] shadow-[0_0_60px_rgba(212,175,55,0.4)]"
            >
              {/* Outer Mandala Rays SVG */}
              <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_50s_linear_infinite] opacity-40 fill-none stroke-[#d4af37]" strokeWidth="0.5">
                {[...Array(24)].map((_, i) => (
                  <path
                    key={i}
                    d="M50,5 C47,20 45,35 50,45 C55,35 53,20 50,5"
                    transform={`rotate(${i * 15} 50 50)`}
                  />
                ))}
                <circle cx="50" cy="50" r="44" strokeDasharray="3,3" />
                <circle cx="50" cy="50" r="38" />
              </svg>

              {/* Monogram initials */}
              <div className="flex flex-col items-center z-10">
                <span className="font-serif text-5xl font-light text-transparent bg-clip-text bg-gradient-to-b from-[#f7e4a9] to-[#d4af37] tracking-wider mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  S <span className="text-xl text-[#dbafe3] font-sans">&</span> A
                </span>
                <div className="w-10 h-[1.5px] bg-[#d4af37]/65 mb-2" />
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#dbafe3] font-semibold">
                  મંગલ પ્રવેશોત્સવ
                </span>
              </div>
            </motion.div>

            {/* CTA Opening Button */}
            <motion.button
              onClick={handleOpenGates}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e4a9] to-[#d4af37] text-stone-900 font-sans text-xs tracking-[0.15em] uppercase hover:shadow-[0_0_40px_rgba(212,175,55,0.65)] transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.3)] cursor-pointer border border-[#d4af37] font-bold"
            >
              <Key className="w-4 h-4 animate-bounce" />
              મહેલના દ્વાર ખોલો
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
