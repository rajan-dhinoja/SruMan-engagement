"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Key } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface PalaceGateEntryProps {
  onEnter: () => void;
}

// Pre-seeded star data — deterministic, safe for SSR
const STAR_DATA = [
  { w: 1.8, h: 1.9, top: 28.1, left: 65.0, dur: 3.2, delay: 1.1 },
  { w: 1.7, h: 2.0, top: 8.2,  left: 24.3, dur: 2.5, delay: 0.3 },
  { w: 2.9, h: 1.8, top: 46.9, left: 85.3, dur: 4.1, delay: 2.7 },
  { w: 2.0, h: 2.8, top: 22.0, left: 67.8, dur: 3.5, delay: 0.8 },
  { w: 1.9, h: 1.5, top: 71.7, left: 34.6, dur: 2.8, delay: 1.9 },
  { w: 2.1, h: 1.4, top: 50.2, left: 73.0, dur: 3.0, delay: 0.5 },
  { w: 1.1, h: 1.8, top: 93.2, left: 25.9, dur: 4.2, delay: 3.1 },
  { w: 1.3, h: 2.4, top: 23.4, left: 22.1, dur: 2.2, delay: 1.5 },
  { w: 2.8, h: 2.4, top: 29.5, left: 35.8, dur: 3.7, delay: 2.3 },
  { w: 1.8, h: 2.4, top: 33.7, left: 65.9, dur: 2.6, delay: 0.1 },
  { w: 1.0, h: 1.1, top: 29.2, left: 47.5, dur: 4.5, delay: 3.8 },
  { w: 2.4, h: 2.8, top: 87.8, left: 61.8, dur: 3.1, delay: 1.2 },
  { w: 1.3, h: 1.9, top: 31.1, left: 98.0, dur: 2.9, delay: 0.6 },
  { w: 1.2, h: 2.3, top: 70.5, left: 78.3, dur: 3.3, delay: 2.0 },
  { w: 2.6, h: 1.3, top: 57.5, left: 49.0, dur: 2.4, delay: 1.7 },
  { w: 2.2, h: 1.6, top: 47.0, left: 83.4, dur: 4.0, delay: 0.9 },
  { w: 2.7, h: 2.0, top: 94.5, left: 88.4, dur: 3.6, delay: 2.5 },
  { w: 1.3, h: 1.7, top: 78.2, left: 82.3, dur: 2.7, delay: 0.4 },
  { w: 2.6, h: 1.1, top: 45.1, left: 81.8, dur: 3.9, delay: 1.6 },
  { w: 2.2, h: 1.5, top: 36.6, left: 88.1, dur: 2.3, delay: 3.5 },
  { w: 2.4, h: 2.9, top: 73.7, left: 46.2, dur: 4.3, delay: 0.7 },
  { w: 1.7, h: 2.5, top: 16.5, left: 10.2, dur: 2.1, delay: 2.9 },
  { w: 1.4, h: 2.3, top: 46.3, left: 89.8, dur: 3.4, delay: 1.3 },
  { w: 2.3, h: 1.2, top: 93.6, left: 61.4, dur: 4.4, delay: 0.2 },
  { w: 1.9, h: 2.4, top: 4.9,  left: 76.5, dur: 2.8, delay: 3.0 },
  { w: 2.2, h: 1.5, top: 69.4, left: 14.8, dur: 3.2, delay: 1.8 },
  { w: 1.4, h: 2.6, top: 67.8, left: 53.6, dur: 2.5, delay: 0.9 },
  { w: 1.0, h: 2.9, top: 96.0, left: 86.4, dur: 4.1, delay: 2.2 },
  { w: 1.6, h: 1.2, top: 47.4, left: 61.2, dur: 3.0, delay: 1.4 },
  { w: 2.6, h: 1.1, top: 63.0, left: 48.0, dur: 2.6, delay: 3.3 },
];

export default function PalaceGateEntry({ onEnter }: PalaceGateEntryProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [isEntering, setIsEntering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenGates = () => {
    playChime();
    setIsEntering(true);          // kick off the entire cinematic sequence
    setTimeout(() => {
      setIsVisible(false);        // unmount after animation
      onEnter();                  // reveal website
    }, 1100);
  };

  const playChime = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.connect(ctx.destination);
      const freqs = [196.0, 261.63, 329.63, 392.0, 523.25, 659.25, 783.99, 1046.5];
      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
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

  const LotusPanel = ({ size = 80 }: { size?: number }) => (
    <svg viewBox="0 0 100 100" width={size} height={size} className="opacity-90">
      {[...Array(8)].map((_, i) => (
        <ellipse key={i} cx="50" cy="30" rx="7" ry="18" fill="none" stroke="#d4af37" strokeWidth="1.2" transform={`rotate(${i * 45} 50 50)`} opacity="0.8" />
      ))}
      {[...Array(8)].map((_, i) => (
        <ellipse key={i} cx="50" cy="36" rx="4.5" ry="12" fill="#d4af37" fillOpacity="0.3" stroke="#d4af37" strokeWidth="0.8" transform={`rotate(${i * 45 + 22.5} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="8" fill="#d4af37" fillOpacity="0.5" stroke="#f7e4a9" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="4" fill="#f7e4a9" opacity="0.9" />
      {/* Decorative dots */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        return (
          <circle
            key={i}
            cx={50 + 14 * Math.sin(angle)}
            cy={50 - 14 * Math.cos(angle)}
            r="1.5"
            fill="#d4af37"
          />
        );
      })}
    </svg>
  );


  // ── GENERATED LUXURY IMAGE PANEL ──────────────────────────────────
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent overflow-hidden select-none ${isEntering ? "pointer-events-none" : ""}`}
          style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
        >
          {/* ═══════════════════════════════════════════════════════════
               CINEMATIC SEQUENCE (all driven by isEntering):
               Phase 1  0.0 – 0.7s  Walk toward door  scale 1 → 1.9
               Phase 2  0.5 – 1.5s  Doors open (scaleX 1 → 0)
               Phase 3  1.2 – 2.5s  Rush through arch  scale 1.9 → 10
          ═══════════════════════════════════════════════════════════ */}
          {/* === CENTRAL PALACE CONTAINER === */}
          <motion.div
            animate={isEntering
              ? { scale: [1, 1.9, 1.9, 5], opacity: [1, 1, 0.4, 0] }
              : { scale: 1,  opacity: 1 }
            }
            transition={isEntering
              ? {
                  duration: 1.1,
                  times: [0, 0.3, 0.55, 1],
                  ease: ["easeOut", "linear", "easeIn", "easeIn"],
                }
              : { duration: 0 }
            }
            className="relative aspect-[4/3] w-[max(100vw,133.33vh)] h-[max(100vh,75vw)] flex items-center justify-center"
            style={{ transformStyle: "preserve-3d", transformOrigin: "50% 44%" }}
          >
            
            {/* Palace Background (z-20) */}
            <img 
              src="/images/dark_purple_without_door.png" 
              alt="Palace Background" 
              className="absolute inset-0 w-full h-full object-fill z-20 pointer-events-none"
            />

            {/* LEFT DOOR — scaleX 1→0 */}
            <motion.div
              animate={isEntering ? { scaleX: [1, 1, 0] } : { scaleX: 1 }}
              transition={isEntering
                ? { duration: 0.8, times: [0, 0.3, 1], ease: "easeInOut" }
                : { duration: 0 }
              }
              style={{
                position: "absolute",
                left: "30%",
                width: "20%",
                top: "19.5%",
                height: "51%",
                zIndex: 21,
                transformOrigin: "left center",
                backgroundImage: "url('/images/royal_door_v2.png')",
                backgroundSize: "200% 100%",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* RIGHT DOOR — scaleX 1→0 */}
            <motion.div
              animate={isEntering ? { scaleX: [1, 1, 0] } : { scaleX: 1 }}
              transition={isEntering
                ? { duration: 0.8, times: [0, 0.3, 1], ease: "easeInOut" }
                : { duration: 0 }
              }
              style={{
                position: "absolute",
                left: "50%",
                width: "20%",
                top: "19.5%",
                height: "51%",
                zIndex: 21,
                transformOrigin: "right center",
                backgroundImage: "url('/images/royal_door_v2.png')",
                backgroundSize: "200% 100%",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Sparkle stars (z-21) */}
            <div className="absolute inset-0 pointer-events-none z-21 overflow-hidden">
              {mounted && STAR_DATA.map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-[#d4af37]"
                  style={{ width: s.w, height: s.h, top: `${s.top}%`, left: `${s.left}%` }}
                  animate={{ opacity: [0.1, 0.8, 0.1] }}
                  transition={{ duration: s.dur, repeat: Infinity, delay: s.delay }}
                />
              ))}
            </div>

            {/* === CENTRAL MONOGRAM + BUTTON — fades on enter === */}
            <motion.div
              animate={isEntering ? { opacity: 0, scale: 0.7 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[48%] flex flex-col items-center justify-center text-center px-4"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0, rotate: -30 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-32 h-32 md:w-52 md:h-52 mb-4 md:mb-8 relative flex items-center justify-center"
              >
                {/* Outer spinning ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#5e1f70]" strokeWidth="0.5">
                    {[...Array(24)].map((_, i) => (
                      <path key={i} d="M50,4 C48,18 46,32 50,42 C54,32 52,18 50,4"
                        transform={`rotate(${i * 15} 50 50)`} />
                    ))}
                    <circle cx="50" cy="50" r="46" strokeDasharray="2,4" />
                    <circle cx="50" cy="50" r="41" />
                  </svg>
                </motion.div>
                
                {/* Static inner circle holding the SruMan Logo */}
                <div className="absolute inset-4 md:inset-6 rounded-full flex items-center justify-center overflow-hidden"
                  style={{
                    background: "#ffffff",
                    border: "2px solid rgba(94, 31, 112, 0.8)",
                    boxShadow: "0 0 30px rgba(94, 31, 112, 0.4)"
                  }}
                >
                  <div className="relative w-full h-full p-1 md:p-1 flex items-center justify-center">
                    <img 
                      src="/logos/sruman-logo.png?v=2" 
                      alt="SruMan Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={handleOpenGates}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(212,175,55,0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-10 py-4 rounded-full font-sans text-xs tracking-[0.2em] uppercase font-bold cursor-pointer transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, #d4af37 0%, #f7e4a9 50%, #d4af37 100%)",
                  color: "#1a0030",
                  boxShadow: "0 4px 30px rgba(212,175,55,0.4), 0 0 0 1px rgba(212,175,55,0.5)",
                  border: "none"
                }}
              >
                <Key className="w-4 h-4" style={{ animation: "bounce 1s infinite" }} />
                {t("gateEntry.openGateBtn")}
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Company Credit at absolute bottom of gate page viewport */}
          <motion.div
            animate={isEntering ? { opacity: 0, y: 20 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40"
          >
            <motion.a
              href="http://dotr.in"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-gold-400/20 bg-black/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-gold-400/40 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center p-1 bg-black/40 rounded-lg border border-[#d4af37]/35 h-9 w-18 overflow-hidden">
                <img 
                  src="/logos/dotr_logo.png" 
                  alt="dotr logo" 
                  className="h-full w-full object-contain filter invert(1) brightness-200 contrast-125" 
                />
              </div>
              
              <div className="flex flex-col items-start">
                <span className="font-sans text-[7px] tracking-[0.25em] text-[#d4af37]/75 uppercase font-semibold">
                  Crafted By
                </span>
                <span className="font-sans text-[10px] tracking-[0.1em] text-[#f7e4a9] font-bold uppercase mt-0.5">
                  DHINOJA OmniTech Resolutions
                </span>
              </div>
            </motion.a>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
