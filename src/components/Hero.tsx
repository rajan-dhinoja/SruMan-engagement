"use client";

import React from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  isPlaying: boolean;
  toggleMusic: () => void;
  onOpenInvitation: () => void;
}

export default function Hero({ isPlaying, toggleMusic, onOpenInvitation }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-[#fbf9fb] py-12 px-6">
      {/* Top Left/Right Corner Accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-gold-300/30 m-8 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold-300/30 m-8 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-gold-300/30 m-8 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-gold-300/30 m-8 pointer-events-none" />

      {/* Floating Audio Controller */}
      <div className="absolute top-8 right-8 z-30">
        <motion.button
          onClick={toggleMusic}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-300/30 bg-[#fbf9fb]/80 backdrop-blur-md text-purple-600 shadow-md cursor-pointer hover:bg-purple-50 transition-colors"
          title={isPlaying ? "Mute Music" : "Play Music"}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-stone-400" />
          )}
        </motion.button>
      </div>

      {/* Top Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-center mt-12 z-20"
      >
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-purple-700/90 uppercase font-semibold">
          પરિવારના આશીર્વાદ સાથે
        </span>
      </motion.div>

      {/* Centerpiece: Titles & Interlocking Rings */}
      <div className="flex flex-col items-center justify-center flex-grow z-20 text-center select-none max-w-4xl">
        {/* Animated Rings SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="w-48 h-28 relative mb-8 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(142,53,167,0.25)]"
          >
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ecdaf2" />
                <stop offset="40%" stopColor="#c47ed6" />
                <stop offset="70%" stopColor="#8e35a7" />
                <stop offset="100%" stopColor="#5e1f70" />
              </linearGradient>
              <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5ebf7" />
                <stop offset="55%" stopColor="#8e35a7" />
                <stop offset="100%" stopColor="#3f144d" />
              </linearGradient>
            </defs>

            {/* Left Ring (Srushti - Purple Gold) */}
            <circle
              cx="75"
              cy="65"
              r="38"
              fill="none"
              stroke="url(#roseGrad)"
              strokeWidth="5"
            />
            {/* Diamond Setting on Left Ring */}
            <g transform="translate(75, 23)">
              <polygon
                points="0,-8 6,-14 12,-8 6,-2"
                fill="#ffffff"
                className="animate-pulse"
                style={{ transformOrigin: "center" }}
              />
              <circle cx="6" cy="-8" r="1.5" fill="#fbf9fb" />
              {/* Shine sparkle lines */}
              <line x1="6" y1="-20" x2="6" y2="-17" stroke="#ffffff" strokeWidth="1" />
              <line x1="-3" y1="-8" x2="0" y2="-8" stroke="#ffffff" strokeWidth="1" />
              <line x1="12" y1="-8" x2="15" y2="-8" stroke="#ffffff" strokeWidth="1" />
            </g>

            {/* Right Ring (Aman - Yellow Gold) */}
            <circle
              cx="125"
              cy="65"
              r="38"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="6.5"
            />
          </svg>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap my-4"
        >
          <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#8a1525] leading-none">
            ચિ. સૃષ્ટિ
          </span>
          <div className="relative w-14 h-14 sm:w-24 sm:h-24 flex-shrink-0">
            <Image
              src="/images/gold_rings.png"
              alt="Rings"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#8a1525] leading-none">
            ચિ. અમન
          </span>
        </motion.div>

        {/* Romance Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="w-16 h-[1px] bg-purple-400/40 mb-4" />
          <p className="font-serif italic text-lg sm:text-2xl text-stone-600 font-light">
            અનંતકાળની શરૂઆત
          </p>
          <p className="font-sans text-[10px] sm:text-xs tracking-[0.1em] text-purple-700/70 uppercase mt-2 font-medium">
            સગાઈના બંધનમાં બંધાવા જઈ રહ્યા છે • ૧૮ ઓગસ્ટ ૨૦૨૬
          </p>
        </motion.div>

        {/* Opening Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-10"
        >
          <button
            onClick={onOpenInvitation}
            className="px-8 py-3.5 rounded-full border border-purple-300 bg-stone-900 text-[#fdfbf7] font-sans text-xs tracking-[0.1em] uppercase hover:bg-purple-600 hover:border-purple-600 hover:text-stone-900 transition-all duration-500 shadow-[0_4px_20px_rgba(142,53,167,0.15)] hover:shadow-[0_6px_25px_rgba(142,53,167,0.35)] cursor-pointer active:scale-95 font-semibold"
          >
            આમંત્રણ પત્રિકા ખોલો
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="flex flex-col items-center text-stone-400 z-20 cursor-pointer"
        onClick={onOpenInvitation}
      >
        <span className="font-sans text-[9px] tracking-[0.1em] uppercase mb-2">
          આમંત્રણ પત્રિકા જોવા માટે સ્ક્રોલ કરો
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-purple-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
