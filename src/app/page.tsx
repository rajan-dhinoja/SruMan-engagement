"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Globe, Mail, Phone } from "lucide-react";
import SparklesCanvas from "@/components/SparklesCanvas";
import Welcome from "@/components/Welcome";
import Couple from "@/components/Couple";
import Nimantrak from "@/components/Nimantrak";
import EventDetails from "@/components/EventDetails";
import Venue from "@/components/Venue";
import Blessings from "@/components/Blessings";
import PalaceGateEntry from "@/components/PalaceGateEntry";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const [showGate, setShowGate] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [sectionStyles, setSectionStyles] = useState<string[]>([]);
  const { t } = useLanguage();
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const synthLoopIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Web Audio Synthesizer for high-end romantic arpeggios
  const startSynth = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      const gainNode = ctx.createGain();
      // Extremely low, pleasant background level
      gainNode.gain.setValueAtTime(0.06, ctx.currentTime);
      gainNode.connect(ctx.destination);
      gainNodeRef.current = gainNode;

      // Chord Progression: Cmaj7 -> Am7 -> Fmaj7 -> G6
      const chords = [
        [261.63, 329.63, 392.00, 493.88], // C4, E4, G4, B4
        [220.00, 261.63, 329.63, 392.00], // A3, C4, E4, G4
        [174.61, 220.00, 261.63, 329.63], // F3, A3, C4, E4
        [196.00, 246.94, 293.66, 392.00], // G3, B3, D4, G4
      ];

      let chordIdx = 0;
      let noteIdx = 0;

      const playNote = () => {
        if (ctx.state === "suspended") return;

        const freq = chords[chordIdx][noteIdx];
        
        // Pluck Oscillator
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        // Triangle wave for smooth, warm flute/harp tone
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Pluck Envelope
        oscGain.gain.setValueAtTime(0, ctx.currentTime);
        oscGain.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.05);
        oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
        
        osc.connect(oscGain);
        oscGain.connect(gainNode);
        
        osc.start();
        osc.stop(ctx.currentTime + 2);

        // Schedule next note in arpeggio
        noteIdx = (noteIdx + 1) % 4;
        if (noteIdx === 0) {
          chordIdx = (chordIdx + 1) % chords.length;
        }
      };

      // Play immediately
      playNote();
      
      // Schedule looping notes (every 650ms for slow romantic flow)
      synthLoopIntervalRef.current = setInterval(playNote, 650);
      setIsPlaying(true);
    } catch (e) {
      console.warn("Web Audio failed to start:", e);
    }
  };

  const stopSynth = () => {
    if (synthLoopIntervalRef.current) {
      clearInterval(synthLoopIntervalRef.current);
      synthLoopIntervalRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopSynth();
    } else {
      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume();
        setIsPlaying(true);
      } else {
        startSynth();
      }
    }
  };

  const handleOpenInvitation = () => {
    setIsOpen(true);
    
    // Resume audio context in case browser blocked auto-play
    if (audioContextRef.current?.state === "suspended") {
      audioContextRef.current.resume();
      setIsPlaying(true);
    } else if (!audioContextRef.current) {
      startSynth();
    }

    // Scroll to the second section (Couple)
    setTimeout(() => {
      if (containerRef.current) {
        const height = containerRef.current.clientHeight;
        containerRef.current.scrollTo({
          top: height,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  // Cleanup synthesizer loop on unmount
  useEffect(() => {
    return () => {
      if (synthLoopIntervalRef.current) {
        clearInterval(synthLoopIntervalRef.current);
      }
    };
  }, []);

  const sections = [
    { id: "welcome", name: t("global.navDots.welcome"), component: <Welcome /> },
    { id: "couple", name: t("global.navDots.couple"), component: <Couple /> },
    { id: "nimantrak", name: t("global.navDots.nimantrak"), component: <Nimantrak /> },
    { id: "events", name: t("global.navDots.events"), component: <EventDetails /> },
    { id: "venue", name: t("global.navDots.venue"), component: <Venue /> },
    { 
      id: "blessings", 
      name: t("global.navDots.blessings"), 
      component: <Blessings />
    },
    {
      id: "credits",
      name: t("global.navDots.credits"),
      component: <CreditsSection />
    }
  ];

  // Initialize random styles for each section
  useEffect(() => {
    const styles = ["cube", "flip", "slide", "zoom"];
    const assigned = sections.map((_, idx) => {
      if (idx === 0) return "none"; // Hero starts with default entrance
      return styles[Math.floor(Math.random() * styles.length)];
    });
    setSectionStyles(assigned);
  }, []);

  // Monitor scroll positioning to update active dot
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, clientHeight } = containerRef.current;
    const index = Math.round(scrollTop / clientHeight);
    if (index !== activeSection) {
      setActiveSection(index);
      if (index > 0) {
        setIsOpen(true);
      }
    }
  };

  const scrollToSection = (idx: number) => {
    if (!containerRef.current) return;
    const height = containerRef.current.clientHeight;
    containerRef.current.scrollTo({
      top: idx * height,
      behavior: "smooth"
    });
  };

  const getAnimationVariants = (style: string): any => {
    return {
      initial: {
        opacity: 0
      },
      whileInView: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
      }
    };
  };

  return (
    <>
      {/* 60fps Ambient Sparkles & Falling Petals */}
      <SparklesCanvas />

      {/* Royal Gate Opening Entrance */}
      <AnimatePresence>
        {showGate && <PalaceGateEntry onEnter={() => setShowGate(false)} />}
      </AnimatePresence>

      <main 
          ref={containerRef}
          onScroll={showGate ? undefined : handleScroll}
          className={`h-[100dvh] w-screen overflow-y-auto snap-y snap-mandatory scroll-smooth relative bg-[#fbf9fb] no-scrollbar ${showGate ? "pointer-events-none select-none" : "select-none"}`}
        >
          {sections.map((sec, idx) => (
            <div
              key={sec.id}
              className="w-full h-full snap-start snap-always relative overflow-hidden flex flex-col justify-center"
            >
              {sectionStyles[idx] && sectionStyles[idx] !== "none" ? (
                <motion.div
                  variants={getAnimationVariants(sectionStyles[idx])}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: false, amount: 0.25 }}
                  className="w-full h-full overflow-y-auto scroll-smooth origin-center no-scrollbar"
                >
                  {sec.component}
                </motion.div>
              ) : (
                <div className="w-full h-full overflow-y-auto scroll-smooth no-scrollbar">
                  {sec.component}
                </div>
              )}
            </div>
          ))}
        </main>

      {/* Navigation Dot Indicators */}
      {!showGate && (
        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 bg-[#fbf9fb]/40 p-2 md:p-3 rounded-full backdrop-blur-md border border-purple-300/20 shadow-lg">
          {sections.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(idx)}
              className={`group relative flex items-center justify-center w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                idx === activeSection ? "bg-[#5e1f70] scale-125" : "bg-purple-300/40 hover:bg-purple-500 hover:scale-110"
              }`}
              title={sec.name}
            >
              <span className="absolute right-8 px-2 py-1 rounded bg-stone-900/90 text-gold-200 font-serif text-[10px] sm:text-xs opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 whitespace-nowrap shadow-md">
                {sec.name}
              </span>
            </button>
          ))}
        </div>
      )}

      <LanguageSwitcher />

      {/* Floating Audio Controller */}
      {!showGate && (
        <div className="fixed top-8 right-8 z-50">
          <motion.button
            onClick={toggleMusic}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-300/30 bg-[#fbf9fb]/80 backdrop-blur-md text-purple-600 shadow-md cursor-pointer hover:bg-purple-50 transition-colors"
            title={isPlaying ? t("global.audio.mute") : t("global.audio.play")}
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5 animate-pulse" />
            ) : (
              <VolumeX className="w-5 h-5 text-stone-400" />
            )}
          </motion.button>
        </div>
      )}
    </>
  );
}

function CreditsSection() {
  const { t } = useLanguage();
  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-b from-[#1a0525] via-[#110119] to-[#08000c] text-center flex flex-col items-center justify-between px-6 py-12 md:py-16 relative overflow-hidden select-none">
      {/* Decorative Royal Corner Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-0 left-0 w-36 h-36 md:w-48 md:h-48 border-l border-t border-gold-400/25 rounded-tl-[100px] m-4 md:m-6" />
        <div className="absolute top-0 right-0 w-36 h-36 md:w-48 md:h-48 border-r border-t border-gold-400/25 rounded-tr-[100px] m-4 md:m-6" />
        <div className="absolute bottom-0 left-0 w-36 h-36 md:w-48 md:h-48 border-l border-b border-gold-400/25 rounded-bl-[100px] m-4 md:m-6" />
        <div className="absolute bottom-0 right-0 w-36 h-36 md:w-48 md:h-48 border-r border-b border-gold-400/25 rounded-br-[100px] m-4 md:m-6" />
        
        {/* Subtle radial lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5e1f70]/5 rounded-full filter blur-[120px]" />
      </div>

      {/* Top Header Group */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="mt-4 flex flex-col items-center"
      >
        <span className="font-serif text-[10px] tracking-[0.35em] text-[#d4af37]/60 uppercase mb-2">
          Thank You For Visiting
        </span>
        <div className="w-16 h-[1px] bg-gold-400/20" />
      </motion.div>

      {/* Central Couple & Logo Segment */}
      <div className="flex flex-col items-center gap-6 my-auto z-10">
        {/* Royal Monogram Crest */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-gold-400/15 bg-black/50 backdrop-blur-sm"
        >
          {/* Animated Outer Gold Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border border-dashed border-gold-400/30 rounded-full"
          />
          {/* Pulsating Inner Light */}
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 bg-gradient-to-br from-[#d4af37]/5 to-[#5e1f70]/10 rounded-full filter blur-sm"
          />
          
          {/* SruMan Logo Image with Shiny Shadows */}
          <motion.div 
            animate={{ 
              boxShadow: [
                "0 0 15px rgba(212, 175, 55, 0.4), 0 0 30px rgba(94, 31, 112, 0.3), inset 0 2px 8px rgba(255,255,255,1)",
                "0 0 30px rgba(212, 175, 55, 0.8), 0 0 50px rgba(94, 31, 112, 0.6), inset 0 2px 8px rgba(255,255,255,1)",
                "0 0 15px rgba(212, 175, 55, 0.4), 0 0 30px rgba(94, 31, 112, 0.3), inset 0 2px 8px rgba(255,255,255,1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 md:inset-5 rounded-full flex items-center justify-center overflow-hidden bg-white z-10 border-2 border-gold-400/50"
          >
            <div className="relative w-full h-full p-2 flex items-center justify-center">
              <img 
                src="/logos/sruman-logo.png" 
                alt="SruMan Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Date / Location Details */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-sm tracking-[0.2em] text-[#f7e4a9]/85 font-light"
        >
          18.08.2026 • GONDAL, GUJARAT
        </motion.p>
      </div>

      {/* Animated Developer Credits Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg bg-[#fbf9fb]/[0.02] backdrop-blur-md rounded-[32px] border border-gold-400/10 p-6 md:p-8 flex flex-col items-center shadow-[0_12px_40px_rgba(0,0,0,0.6)] mb-4 z-10"
      >
        <span className="font-sans text-[8px] md:text-[9px] tracking-[0.3em] text-[#d4af37]/75 uppercase mb-5 font-semibold">
          Digital Invitation Crafted By
        </span>

        {/* Logo and Company Name (Interactive Group) */}
        <a 
          href="http://dotr.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3.5 cursor-pointer mb-6"
        >
          {/* Glowing Glassmorphic Rectangular Logo Frame */}
          <motion.div 
            animate={{ 
              boxShadow: [
                "0 0 15px rgba(212,175,55,0.1), inset 0 2px 10px rgba(255,255,255,0.05)",
                "0 0 25px rgba(212,175,55,0.3), inset 0 2px 10px rgba(255,255,255,0.05)",
                "0 0 15px rgba(212,175,55,0.1), inset 0 2px 10px rgba(255,255,255,0.05)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-48 h-24 md:w-60 md:h-30 rounded-2xl bg-black/40 border border-[#d4af37]/35 flex items-center justify-center p-3 group-hover:scale-105 group-hover:border-[#d4af37]/60 transition-all duration-500 shadow-inner overflow-hidden"
          >
            <img 
              src="/logos/dotr_logo.png" 
              alt="dotr logo" 
              className="w-full h-full object-contain filter invert(1) brightness-200 contrast-125 transition-all duration-500"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
          
          <div className="text-center">
            <h3 className="font-sans text-sm md:text-base tracking-[0.15em] text-[#f7e4a9] font-bold group-hover:text-gold-400 transition-colors uppercase">
              DHINOJA OmniTech Resolutions
            </h3>
            <p className="font-sans text-[9px] tracking-[0.2em] text-stone-400 mt-1">
              INSHORT (NICKNAME): <span className="text-[#d4af37]/80 font-bold group-hover:text-gold-400 transition-colors">dotr</span>
            </p>
          </div>
        </a>

        {/* Interactive Button Pills */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
          <a 
            href="http://dotr.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold-400/20 bg-black/40 hover:bg-gold-500 hover:text-stone-950 font-sans text-[11px] tracking-wider text-[#f7e4a9] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] font-semibold cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            dotr.in
          </a>
          
          <a 
            href="mailto:info@dotr.in"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold-400/20 bg-black/40 hover:bg-gold-500 hover:text-stone-950 font-sans text-[11px] tracking-wider text-[#f7e4a9] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] font-semibold cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            info@dotr.in
          </a>
          
          <a 
            href="tel:+918200965524"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold-400/20 bg-black/40 hover:bg-gold-500 hover:text-stone-950 font-sans text-[11px] tracking-wider text-[#f7e4a9] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] font-semibold cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            +91 8200965524
          </a>
        </div>
      </motion.div>
    </div>
  );
}
