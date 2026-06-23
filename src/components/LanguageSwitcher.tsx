"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "gu", label: "ગુજરાતી" },
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
  ] as const;

  return (
    <div className="fixed bottom-6 md:bottom-auto md:top-8 left-1/2 md:left-auto md:right-24 -translate-x-1/2 md:translate-x-0 z-50 flex items-center bg-[#fbf9fb]/90 backdrop-blur-xl border border-[#d4af37]/45 p-[3px] rounded-full shadow-[0_12px_40px_rgba(94,31,112,0.22),_0_0_20px_rgba(212,175,55,0.18)] select-none max-w-[calc(100vw-32px)] md:max-w-none overflow-x-auto no-scrollbar transition-all duration-300">
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-[10px] sm:text-xs transition-all duration-300 cursor-pointer whitespace-nowrap ${
              isActive
                ? "text-stone-900 font-bold"
                : "text-purple-700 hover:text-purple-900 font-medium"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeLangTab"
                className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f7e4a9] to-[#d4af37] rounded-full z-0 shadow-[0_3px_12px_rgba(212,175,55,0.45)] border border-[#f7e4a9]/60 overflow-hidden"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              >
                {/* Shiny gloss overlay */}
                <div 
                  className="absolute inset-0 opacity-40 mix-blend-overlay"
                  style={{
                    background: "linear-gradient(110deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 80%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 3s linear infinite"
                  }}
                />
              </motion.div>
            )}
            <span className="relative z-10">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}
