"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Globe, Mail, Phone } from "lucide-react";
import SparklesCanvas from "@/components/SparklesCanvas";
import Welcome from "@/components/Welcome";
import Couple from "@/components/Couple";
import MeetCouple from "@/components/MeetCouple";
import Nimantrak from "@/components/Nimantrak";
import EventDetails from "@/components/EventDetails";
import Blessings from "@/components/Blessings";
import PalaceGateEntry from "@/components/PalaceGateEntry";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const [showGate, setShowGate] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { t } = useLanguage();
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const synthLoopIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const activeSectionRef = useRef(activeSection);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

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

  // Cleanup synthesizer loop on unmount
  useEffect(() => {
    return () => {
      if (synthLoopIntervalRef.current) {
        clearInterval(synthLoopIntervalRef.current);
      }
    };
  }, []);

  const sections = React.useMemo(() => [
    { id: "welcome", name: t("global.navDots.welcome"), component: <Welcome /> },
    { id: "couple", name: t("global.navDots.couple"), component: <Couple /> },
    { id: "nimantrak", name: t("global.navDots.nimantrak"), component: <Nimantrak /> },
    { id: "meet-couple", name: t("global.navDots.meetCouple"), component: <MeetCouple /> },
    { id: "events", name: t("global.navDots.events"), component: <EventDetails /> },
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
  ], [t]);

  // Monitor scroll positioning to update active dot
  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    
    sections.forEach((sec, idx) => {
      const element = document.getElementById(
        sec.id === "events" ? "event-section" : `${sec.id}-section`
      );
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          if (idx !== activeSectionRef.current) {
            setActiveSection(idx);
          }
        }
      }
    });
  };

  useEffect(() => {
    if (showGate) return;
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showGate]);

  const scrollToSection = (idx: number) => {
    const sec = sections[idx];
    const element = document.getElementById(
      sec.id === "events" ? "event-section" : `${sec.id}-section`
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
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
          className={`relative w-full overflow-x-hidden bg-white ${showGate ? "h-screen overflow-hidden pointer-events-none select-none" : ""}`}
        >
          {sections.map((sec) => (
            <div
              key={sec.id}
              id={sec.id === "events" ? "event-section" : `${sec.id}-section`}
              className="w-full relative"
            >
              {sec.component}
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
    </>
  );
}

function CreditsSection() {
  const { t, formatNumber } = useLanguage();
  return (
    <div id="credits-section" className="w-full bg-gradient-to-b from-[#1a0525] via-[#110119] to-[#08000c] text-center flex flex-col items-center gap-12 px-6 py-10 md:py-16 pb-20 md:pb-28 relative overflow-hidden select-none">
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
        className="mt-4 flex flex-col items-center"
      >
        <span className="font-serif text-xs tracking-[0.35em] text-[#d4af37]/60 uppercase mb-2">
          {t("global.footer.thankYouForVisiting")}
        </span>
        <div className="w-16 h-[1px] bg-gold-400/20" />
      </motion.div>

      {/* Central Couple & Logo Segment */}
      <div className="flex flex-col items-center gap-6 my-auto z-10">
        {/* Royal Monogram Crest */}
        <motion.div
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
            className="absolute inset-4 md:inset-5 rounded-full flex items-center justify-center bg-white z-10 border-2 border-gold-400/50"
          >
            <div className="relative w-full h-full p-1 flex items-center justify-center">
              <img 
                src="/logos/sruman-logo.png" 
                alt="SruMan Logo" 
                className="w-full h-full object-contain scale-[1.18] transition-transform duration-500 hover:scale-[1.26]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Date / Location Details */}
        <motion.p
          className="font-serif text-sm tracking-[0.2em] text-[#f7e4a9]/85 font-light"
        >
          18.08.2026 • GONDAL, GUJARAT
        </motion.p>
      </div>

      {/* Animated Developer Credits Card */}
      <motion.div
        className="w-full max-w-lg bg-[#fbf9fb]/[0.02] backdrop-blur-md rounded-[32px] border border-gold-400/10 p-6 md:p-8 flex flex-col items-center shadow-[0_12px_40px_rgba(0,0,0,0.6)] mb-4 z-10"
      >
        <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-[#d4af37]/75 uppercase mb-5 font-semibold">
          {t("global.footer.craftedBy")}
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
            <h3 className="font-sans text-base md:text-lg tracking-[0.15em] text-[#f7e4a9] font-bold group-hover:text-gold-400 transition-colors uppercase">
              DHINOJA OmniTech Resolutions
            </h3>
            <p className="font-sans text-[10px] tracking-[0.2em] text-stone-400 mt-1">
              {t("global.footer.nickname")} <span className="text-[#d4af37]/80 font-bold group-hover:text-gold-400 transition-colors">dotr</span>
            </p>
          </div>
        </a>

        {/* Interactive Button Pills */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
          <a 
            href="http://dotr.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold-400/20 bg-black/40 hover:bg-gold-500 hover:text-stone-950 font-sans text-xs tracking-wider text-[#f7e4a9] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] font-semibold cursor-pointer whitespace-nowrap"
          >
            <Globe className="w-3.5 h-3.5" />
            dotr.in
          </a>
          
          <a 
            href="mailto:info@dotr.in"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold-400/20 bg-black/40 hover:bg-gold-500 hover:text-stone-950 font-sans text-xs tracking-wider text-[#f7e4a9] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] font-semibold cursor-pointer whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            info@dotr.in
          </a>
          
          <a 
            href="tel:+918200965524"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold-400/20 bg-black/40 hover:bg-gold-500 hover:text-stone-950 font-sans text-xs tracking-wider text-[#f7e4a9] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] font-semibold cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            {formatNumber("+91 8200965524")}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
