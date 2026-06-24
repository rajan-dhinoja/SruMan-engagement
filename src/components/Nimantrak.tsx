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
    <section id="nimantrak-section" className="min-h-screen w-full flex flex-col justify-between py-12 px-6 bg-[#fcf9f2] relative overflow-x-hidden select-none">
      {/* Top Spacer for scroll buffer */}
      <div className="h-16 sm:h-24 flex-shrink-0 w-full pointer-events-none" />

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Spacer */}
      <div className="h-4" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center z-20 flex-grow justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          {/* Section Header */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5e1f70] tracking-wide mb-2">
            {t("nimantrak.title")}
          </h2>
          
          {/* Traditional Separator */}
          <div className="flex items-center justify-center gap-2 my-6">
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#5e1f70]/50" />
            <span className="text-[#5e1f70] text-lg">♦</span>
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#5e1f70]/50" />
          </div>
        </motion.div>

        {/* Content Card with Traditional Borders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-3xl bg-white/40 backdrop-blur-sm p-5 sm:p-10 rounded-[2rem] border border-[#5e1f70]/10 shadow-[0_8px_30px_rgb(94,31,112,0.03)] flex flex-col items-center text-center"
        >
          {/* Decorative Corner Borders */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#5e1f70]/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#5e1f70]/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#5e1f70]/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#5e1f70]/30 rounded-br-lg" />

          {/* Invitation List */}
          <div className="font-sans text-sm sm:text-base lg:text-lg text-stone-800 space-y-4 sm:space-y-5 leading-relaxed font-medium w-full">
            <div className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#5e1f70] border-b border-[#5e1f70]/5 pb-2">
              {(() => {
                const text = t("nimantrak.grandparents");
                if (text.includes(" • ")) {
                  const parts = text.split(" • ");
                  return (
                    <span className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-2 flex-wrap">
                      <span>{formatName(parts[0])}</span>
                      <span className="hidden md:inline text-[#5e1f70]/40">•</span>
                      <span>{formatName(parts[1])}</span>
                    </span>
                  );
                }
                return <span>{formatName(text)}</span>;
              })()}
            </div>
            
            <div className="py-1 text-sm sm:text-base md:text-lg">
              {(() => {
                const text = t("nimantrak.parents");
                if (text.includes(" • ")) {
                  const parts = text.split(" • ");
                  return (
                    <span className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-2 flex-wrap">
                      <span>{formatName(parts[0])}</span>
                      <span className="hidden md:inline text-[#5e1f70]/40">•</span>
                      <span>{formatName(parts[1])}</span>
                    </span>
                  );
                }
                return <span>{formatName(text)}</span>;
              })()}
            </div>
            
            <div className="py-1 text-sm sm:text-base md:text-lg">
              {(() => {
                const text = t("nimantrak.uncleAunt");
                if (text.includes(" • ")) {
                  const parts = text.split(" • ");
                  return (
                    <span className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-2 flex-wrap">
                      <span>{formatName(parts[0])}</span>
                      <span className="hidden md:inline text-[#5e1f70]/40">•</span>
                      <span>{formatName(parts[1])}</span>
                    </span>
                  );
                }
                return <span>{formatName(text)}</span>;
              })()}
            </div>
            
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2.5 text-stone-700 text-sm sm:text-base max-w-lg mx-auto w-full">
              <div className="flex items-center justify-center sm:justify-end">
                <span className="w-1.5 h-1.5 bg-[#5e1f70]/50 rounded-full mr-2 flex-shrink-0" />
                <span>{formatName(t("nimantrak.relativesList.riki"))}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-1.5 h-1.5 bg-[#5e1f70]/50 rounded-full mr-2 flex-shrink-0" />
                <span>{formatName(t("nimantrak.relativesList.rajan"))}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-end">
                <span className="w-1.5 h-1.5 bg-[#5e1f70]/50 rounded-full mr-2 flex-shrink-0" />
                <span>{formatName(t("nimantrak.relativesList.ruchi"))}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-1.5 h-1.5 bg-[#5e1f70]/50 rounded-full mr-2 flex-shrink-0" />
                <span>{formatName(t("nimantrak.relativesList.vansh"))}</span>
              </div>
            </div>

            {/* Ending Message */}
            <p className="font-serif italic text-base sm:text-lg lg:text-xl text-[#5e1f70] pt-4 font-bold tracking-wide">
              {t("nimantrak.endingGreeting")}
            </p>
          </div>
        </motion.div>

        {/* Shubh Sthal Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col items-center text-center z-20"
        >
          <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-[#b02a3a] tracking-widest">
            {t("nimantrak.shubhSthalTitle")}
          </span>
          
          <div className="flex items-center justify-center gap-1.5 my-2">
            <span className="w-12 sm:w-16 h-[1.5px] bg-[#b02a3a]/40" />
            <span className="text-[#b02a3a] text-xs">◆</span>
            <span className="text-[#b02a3a] text-[10px]">◆</span>
            <span className="text-[#b02a3a] text-xs">◆</span>
            <span className="w-12 sm:w-16 h-[1.5px] bg-[#b02a3a]/40" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1d3c26] tracking-wide mt-1">
            {t("nimantrak.shubhSthalName")}
          </h3>

          <p className="font-serif text-sm sm:text-base text-[#1d3c26] mt-2 max-w-md px-4 leading-relaxed font-semibold">
            {t("nimantrak.shubhSthalAddress")}
          </p>

          <p className="font-sans text-sm sm:text-base font-bold text-[#1d3c26] mt-1.5">
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
