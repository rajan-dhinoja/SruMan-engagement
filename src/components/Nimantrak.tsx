"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Nimantrak() {
  const { t } = useLanguage();

  // Helper to split a name and wrap the last two words to prevent orphan surnames/last-names from wrapping alone
  const formatName = (name: string) => {
    const words = name.trim().split(/\s+/);
    if (words.length <= 2) {
      return <span className="whitespace-nowrap">{name}</span>;
    }
    const firstPart = words.slice(0, words.length - 2).join(" ");
    const lastPart = words.slice(words.length - 2).join(" ");
    return (
      <span>
        {firstPart}{" "}
        <span className="whitespace-nowrap">{lastPart}</span>
      </span>
    );
  };

  return (
    <section id="nimantrak-section" className="w-full flex flex-col gap-10 py-8 px-4 bg-[#fdf9ff] relative overflow-x-hidden select-none">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center z-20 flex-grow justify-center px-4">
        <motion.div
          className="text-center w-full"
        >
          {/* Section Header */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#5e1f70] tracking-wide mb-0">
            {t("nimantrak.title")}
          </h2>
          
          {/* Traditional Separator */}
          <div className="flex items-center justify-center gap-2 mt-1 mb-6">
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#5e1f70]/50" />
            <span className="text-[#5e1f70] text-lg">♦</span>
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#5e1f70]/50" />
          </div>
        </motion.div>

        {/* Content Card with Traditional Borders */}
        <motion.div
          className="relative w-full max-w-5xl bg-white/40 backdrop-blur-sm p-6 sm:p-12 md:p-16 rounded-[2.5rem] border border-[#5e1f70]/15 shadow-[0_12px_40px_rgb(94,31,112,0.04)] flex flex-col items-center text-center"
        >
          {/* Decorative Corner Borders */}
          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-[#5e1f70]/30 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-[#5e1f70]/30 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-[#5e1f70]/30 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-[#5e1f70]/30 rounded-br-xl pointer-events-none" />

          {/* Invitation List */}
          <div className="font-sans space-y-6 sm:space-y-8 leading-relaxed font-semibold w-full text-stone-850">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-850 pb-4">
              {(() => {
                const text = t("nimantrak.grandparents");
                if (text.includes(" • ")) {
                  const parts = text.split(" • ");
                  return (
                    <span className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 flex-wrap">
                      <span>{formatName(parts[0])}</span>
                      <span className="hidden md:inline text-stone-300">•</span>
                      <span>{formatName(parts[1])}</span>
                    </span>
                  );
                }
                return <span>{formatName(text)}</span>;
              })()}
            </div>
            
            <div className="py-1 text-base sm:text-lg md:text-xl lg:text-2xl text-stone-800">
              {(() => {
                const text = t("nimantrak.parents");
                if (text.includes(" • ")) {
                  const parts = text.split(" • ");
                  return (
                    <span className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 flex-wrap">
                      <span>{formatName(parts[0])}</span>
                      <span className="hidden md:inline text-[#5e1f70]/40">•</span>
                      <span>{formatName(parts[1])}</span>
                    </span>
                  );
                }
                return <span>{formatName(text)}</span>;
              })()}
            </div>
            
            <div className="py-1 text-base sm:text-lg md:text-xl lg:text-2xl text-stone-800">
              {(() => {
                const text = t("nimantrak.uncleAunt");
                if (text.includes(" • ")) {
                  const parts = text.split(" • ");
                  return (
                    <span className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 flex-wrap">
                      <span>{formatName(parts[0])}</span>
                      <span className="hidden md:inline text-[#5e1f70]/40">•</span>
                      <span>{formatName(parts[1])}</span>
                    </span>
                  );
                }
                return <span>{formatName(text)}</span>;
              })()}
            </div>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-stone-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto w-full">
              <div className="flex items-center justify-center sm:justify-end">
                <span className="w-2 h-2 bg-[#5e1f70]/50 rounded-full mr-3 flex-shrink-0" />
                <span>{formatName(t("nimantrak.relativesList.riki"))}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 bg-[#5e1f70]/50 rounded-full mr-3 flex-shrink-0" />
                <span>{formatName(t("nimantrak.relativesList.rajan"))}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-end">
                <span className="w-2 h-2 bg-[#5e1f70]/50 rounded-full mr-3 flex-shrink-0" />
                <span>{formatName(t("nimantrak.relativesList.ruchi"))}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 bg-[#5e1f70]/50 rounded-full mr-3 flex-shrink-0" />
                <span>{formatName(t("nimantrak.relativesList.vansh"))}</span>
              </div>
            </div>

            {/* Ending Message */}
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-stone-800 pt-6 font-bold tracking-wide">
              {t("nimantrak.endingGreeting")}
            </p>
          </div>
        </motion.div>

        {/* Shubh Sthal Section */}
        <motion.div
          className="mt-12 sm:mt-16 flex flex-col items-center text-center z-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#b02a3a] tracking-wide mb-0">
            {t("nimantrak.shubhSthalTitle")}
          </h2>
          
          {/* Traditional Separator */}
          <div className="flex items-center justify-center gap-2 mt-1 mb-6">
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#b02a3a]/50" />
            <span className="text-[#b02a3a] text-lg">♦</span>
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#b02a3a]/50" />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d3c26] tracking-wide mt-2">
            {t("nimantrak.shubhSthalName")}
          </h3>

          <p className="font-serif text-base sm:text-lg md:text-xl text-[#1d3c26] mt-3 max-w-2xl px-4 leading-relaxed font-semibold">
            {t("nimantrak.shubhSthalAddress")}
          </p>

          <p className="font-sans text-base sm:text-lg md:text-xl font-bold text-[#1d3c26] mt-2">
            {t("nimantrak.shubhSthalMobile")}
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.0, duration: 1 }}
        className="flex flex-col items-center text-stone-400 z-20 mt-4 cursor-pointer"
      >
        <span className="font-sans text-[8px] tracking-[0.1em] uppercase mb-1">
          {t("nimantrak.scrollNext")}
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#5e1f70]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
