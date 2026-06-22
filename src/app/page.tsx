"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import SparklesCanvas from "@/components/SparklesCanvas";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Couple from "@/components/Couple";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import Venue from "@/components/Venue";
import Family from "@/components/Family";
import Blessings from "@/components/Blessings";
import RSVP from "@/components/RSVP";
import PalaceGateEntry from "@/components/PalaceGateEntry";

export default function Home() {
  const [showGate, setShowGate] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [sectionStyles, setSectionStyles] = useState<string[]>([]);
  
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
    { id: "hero", name: "શરૂઆત", component: <Hero isPlaying={isPlaying} toggleMusic={toggleMusic} onOpenInvitation={handleOpenInvitation} /> },
    { id: "couple", name: "વર-વધૂ", component: <Couple /> },
    { id: "story", name: "પ્રેમ કહાની", component: <Story /> },
    { id: "events", name: "પ્રસંગો", component: <EventDetails /> },
    { id: "gallery", name: "યાદગાર પળો", component: <Gallery /> },
    { id: "venue", name: "સ્થળ", component: <Venue /> },
    { id: "family", name: "પરિવાર", component: <Family /> },
    { id: "blessings", name: "આશીર્વાદ", component: <Blessings /> },
    { 
      id: "rsvp", 
      name: "સંમતિ પત્રક", 
      component: (
        <div className="flex flex-col min-h-full">
          <div className="flex-grow">
            <RSVP />
          </div>
          <footer className="py-12 bg-[#1c1917] text-center px-6 border-t border-gold-400/20">
            <span className="font-serif text-2xl font-light text-gold-300 tracking-widest block mb-2 uppercase">
              SruMan
            </span>
            <p className="font-sans text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
              પ્રેમપૂર્વક બનાવેલ • ઓક્ટોબર ૨૦૨૬
            </p>
            <div className="w-8 h-[1px] bg-gold-500/20 mx-auto" />
          </footer>
        </div>
      )
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
    switch (style) {
      case "cube":
        return {
          initial: {
            rotateX: 75,
            opacity: 0,
            z: -150,
            y: 100
          },
          whileInView: {
            rotateX: 0,
            opacity: 1,
            z: 0,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
          }
        };
      case "flip":
        return {
          initial: {
            rotateY: 60,
            opacity: 0,
            scale: 0.85,
            z: -100
          },
          whileInView: {
            rotateY: 0,
            opacity: 1,
            scale: 1,
            z: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }
        };
      case "zoom":
        return {
          initial: {
            scale: 1.12,
            opacity: 0
          },
          whileInView: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
          }
        };
      case "slide":
        return {
          initial: {
            y: 120,
            opacity: 0
          },
          whileInView: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
          }
        };
      default:
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1, transition: { duration: 0.5 } }
        };
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

      {/* Preloader Phase */}
      <AnimatePresence>
        {!showGate && loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main 
          ref={containerRef}
          onScroll={handleScroll}
          className="h-[100dvh] w-screen overflow-y-auto snap-y snap-mandatory scroll-smooth relative select-none bg-[#fbf9fb] no-scrollbar"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          {sections.map((sec, idx) => (
            <div
              key={sec.id}
              className="w-full h-full snap-start snap-always relative overflow-hidden flex flex-col justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {sectionStyles[idx] && sectionStyles[idx] !== "none" ? (
                <motion.div
                  variants={getAnimationVariants(sectionStyles[idx])}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: false, amount: 0.25 }}
                  className="w-full h-full overflow-y-auto scroll-smooth origin-center no-scrollbar"
                  style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
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

          {/* Navigation Dot Indicators */}
          {isOpen && (
            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 bg-[#fbf9fb]/40 p-2 md:p-3 rounded-full backdrop-blur-md border border-purple-300/20 shadow-lg">
              {sections.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(idx)}
                  className={`group relative flex items-center justify-center w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    idx === activeSection ? "bg-purple-650 scale-125" : "bg-purple-300/40 hover:bg-purple-500 hover:scale-110"
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
        </main>
      )}
    </>
  );
}
