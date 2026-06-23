"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Welcome() {
  const { t } = useLanguage();
  return (
    <section id="welcome-section" className="min-h-screen w-full flex flex-col justify-between py-12 px-6 bg-[#fbf9fb] relative overflow-x-hidden overflow-y-auto no-scrollbar select-none">
      {/* Top Spacer for scroll buffer */}
      <div className="h-16 sm:h-24 flex-shrink-0 w-full pointer-events-none" />

      {/* Traditional Side Garlands (Toran / Hanging Flowers) */}
      <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-20 pointer-events-none z-10 flex flex-col justify-between items-center opacity-60">
        <svg viewBox="0 0 40 400" className="w-full h-full fill-none stroke-[#d4af37]" strokeWidth="1">
          {/* Hanging flowers garland */}
          <line x1="20" y1="0" x2="20" y2="400" strokeDasharray="3,6" />
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`translate(20, ${50 + i * 50})`}>
              <circle cx="0" cy="0" r="8" fill="#d4af37" fillOpacity="0.2" stroke="#d4af37" />
              <path d="M-6,0 C-6,-6 6,-6 6,0 C6,6 -6,6 -6,0 Z" fill="#5e1f70" fillOpacity="0.8" />
              <circle cx="0" cy="0" r="3" fill="#f7e4a9" />
            </g>
          ))}
        </svg>
      </div>

      <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-20 pointer-events-none z-10 flex flex-col justify-between items-center opacity-60">
        <svg viewBox="0 0 40 400" className="w-full h-full fill-none stroke-[#d4af37]" strokeWidth="1">
          <line x1="20" y1="0" x2="20" y2="400" strokeDasharray="3,6" />
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`translate(20, ${50 + i * 50})`}>
              <circle cx="0" cy="0" r="8" fill="#d4af37" fillOpacity="0.2" stroke="#d4af37" />
              <path d="M-6,0 C-6,-6 6,-6 6,0 C6,6 -6,6 -6,0 Z" fill="#5e1f70" fillOpacity="0.8" />
              <circle cx="0" cy="0" r="3" fill="#f7e4a9" />
            </g>
          ))}
        </svg>
      </div>

      {/* Mobile view deities header (visible on mobile only) */}
      <div className="md:hidden w-full flex justify-between items-start z-20 px-6 pt-6 relative">
        {/* Top Left: Lord Shreenathji */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-[30%]"
        >
          <span className="font-serif text-[#5e1f70] text-[9px] font-semibold text-center leading-tight min-h-[24px] flex items-center justify-center">
            {t("welcome.shreenathjiMantra")}
          </span>
          <div className="relative w-28 h-28 mt-2">
            <Image
              src="/images/shreenathji.png"
              alt="Shreenathji"
              fill
              className="object-contain rounded-lg"
              style={{ filter: "drop-shadow(0 0 10px rgba(212,175,55,0.85)) drop-shadow(0 0 20px rgba(94,31,112,0.4))" }}
              priority
            />
          </div>
        </motion.div>

        {/* Top Center: Lord Ganesh */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center w-[35%] mt-20"
        >
          <div className="relative w-28 h-28">
            <Image
              src="/images/ChatGPT Image Jun 23, 2026, 12_21_15 AM.png"
              alt="Lord Ganesha"
              fill
              className="object-contain"
              style={{ filter: "drop-shadow(0 0 12px rgba(212,175,55,0.9)) drop-shadow(0 0 24px rgba(94,31,112,0.45))" }}
              priority
            />
          </div>
          <span className="font-serif text-[#5e1f70] text-[9px] font-bold text-center leading-tight mt-2">
            {t("welcome.ganeshMantra")}
          </span>
        </motion.div>

        {/* Top Right: Goddess Ambe Maa */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-[30%]"
        >
          <span className="font-serif text-[#5e1f70] text-[9px] font-semibold text-center leading-tight min-h-[24px] flex items-center justify-center">
            {t("welcome.kuldeviMantra")}
          </span>
          <div className="relative w-28 h-28 mt-2">
            <Image
              src="/images/Mataji-removebg.png"
              alt="Kuldevi Maa"
              fill
              className="object-contain rounded-lg"
              style={{ filter: "drop-shadow(0 0 10px rgba(212,175,55,0.85)) drop-shadow(0 0 20px rgba(94,31,112,0.4))" }}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Top Mantras Grid (Desktop only) */}
      <div className="hidden md:grid w-full max-w-5xl mx-auto grid-cols-3 gap-4 items-start text-center z-20 mt-4 px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-[#5e1f70] text-sm sm:text-base font-semibold tracking-wide flex flex-col items-center"
        >
          <span>{t("welcome.shreenathjiMantra")}</span>
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mt-2">
            <Image
              src="/images/shreenathji.png"
              alt="Shreenathji"
              fill
              className="object-contain rounded-lg"
              style={{ filter: "drop-shadow(0 0 15px rgba(212,175,55,0.85)) drop-shadow(0 0 30px rgba(94,31,112,0.4))" }}
              priority
            />
          </div>
        </motion.div>

        {/* Lord Ganesh on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden md:flex flex-col items-center md:mt-16"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44">
            <Image
              src="/images/ChatGPT Image Jun 23, 2026, 12_21_15 AM.png"
              alt="Lord Ganesha"
              fill
              className="object-contain"
              style={{ filter: "drop-shadow(0 0 18px rgba(212,175,55,0.9)) drop-shadow(0 0 32px rgba(94,31,112,0.45))" }}
              priority
            />
          </div>
          <span className="font-serif text-[#5e1f70] text-sm sm:text-base font-bold text-center mt-4">
            {t("welcome.ganeshMantra")}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-[#5e1f70] text-sm sm:text-base font-semibold tracking-wide flex flex-col items-center"
        >
          <span>{t("welcome.kuldeviMantra")}</span>
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mt-2">
            <Image
              src="/images/Mataji-removebg.png"
              alt="Kuldevi Maa"
              fill
              className="object-contain rounded-lg"
              style={{ filter: "drop-shadow(0 0 15px rgba(212,175,55,0.85)) drop-shadow(0 0 30px rgba(94,31,112,0.4))" }}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Main Content (Title) */}
      <div className="flex flex-col items-center justify-center flex-grow z-20 text-center px-4 mt-6 md:mt-10">

        {/* Shreefal Vidhi Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-[#5e1f70] filter drop-shadow-sm leading-tight flex flex-col items-center"
        >
          <span className="font-alex text-6xl sm:text-8xl lg:text-9xl tracking-wide capitalize">{t("welcome.ringCeremony")}</span>
          <span className="font-serif text-xl sm:text-3xl lg:text-4xl font-semibold text-[#5e1f70]/80 mt-2">
            {t("welcome.shreefalVidhi")}
          </span>
        </motion.h1>

        {/* Romance Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.0 }}
          className="flex flex-col items-center text-center mt-8 mb-4"
        >
          <p className="font-serif italic text-base sm:text-xl text-stone-600 font-light">
            {t("couple.foreverBeginning")}
          </p>
          <p className="font-sans text-[10px] sm:text-xs tracking-[0.1em] text-purple-700/70 uppercase mt-2 font-medium">
            {t("couple.gettingEngagedDate")}
          </p>
          <div className="w-16 h-[1px] bg-purple-400/30 mt-4" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex flex-col items-center text-stone-400 z-20 mt-4 cursor-pointer"
      >
        <span className="font-sans text-[8px] tracking-[0.1em] uppercase mb-1">
          {t("welcome.scrollExplore")}
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#5e1f70]" />
        </motion.div>
      </motion.div>
      
      {/* Bottom Spacer for scroll buffer */}
      <div className="h-20 sm:h-28 flex-shrink-0 w-full pointer-events-none" />
    </section>
  );
}
