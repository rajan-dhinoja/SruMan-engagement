"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MeetCouple() {
  const { t } = useLanguage();
  const [hasLikedBride, setHasLikedBride] = useState(false);
  const [hasLikedGroom, setHasLikedGroom] = useState(false);

  useEffect(() => {
    const bHasLiked = localStorage.getItem("sruman_has_liked_bride");
    const gHasLiked = localStorage.getItem("sruman_has_liked_groom");
    if (bHasLiked === "true") setHasLikedBride(true);
    if (gHasLiked === "true") setHasLikedGroom(true);
  }, []);

  const handleLikeBride = () => {
    const nextState = !hasLikedBride;
    setHasLikedBride(nextState);
    localStorage.setItem("sruman_has_liked_bride", String(nextState));
  };

  const handleLikeGroom = () => {
    const nextState = !hasLikedGroom;
    setHasLikedGroom(nextState);
    localStorage.setItem("sruman_has_liked_groom", String(nextState));
  };

  return (
    <section id="meet-couple-section" className="w-full flex flex-col gap-10 py-16 px-6 bg-[#fffdf7] relative">
      {/* Top Spacer for scroll buffer */}
      <div className="h-16 sm:h-24 flex-shrink-0 w-full pointer-events-none" />

      {/* Decorative Ornaments */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center z-20 flex-grow justify-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-purple-700/80 uppercase font-semibold block mb-2">
            Our Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8a1525] font-bold tracking-wide">
            {t("couple.meetCoupleTitle")}
          </h2>
          <div className="w-24 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-4xl justify-items-center">
          {/* Srushti's Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-purple-500/20 to-gold-400/20 opacity-70 blur-sm group-hover:opacity-100 transition duration-700 pointer-events-none" />
              <div className="relative z-10 glass-card p-6 rounded-[1.8rem] overflow-hidden flex flex-col items-center text-center bg-white/70 backdrop-blur-md border border-gold-300/20 shadow-md">
                <div className="relative w-full h-[22rem] sm:h-[24rem] rounded-xl overflow-hidden mb-5 bg-stone-50 border border-gold-300/10">
                  <Image
                    src="/images/srushti_natural.png"
                    alt="Srushti"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-w-768px) 100vw, 300px"
                    priority
                  />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#8a1525] tracking-wide mb-1">
                  {t("couple.brideName")}
                </h3>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-purple-650 font-semibold mb-3">
                  {t("couple.brideRole")}
                </span>
                
                {/* Beautiful Tagline */}
                <p className="font-serif italic text-sm text-[#8a1525] font-bold tracking-wide mb-3">
                  &ldquo;{t("couple.brideTagline")}&rdquo;
                </p>

                <p className="font-sans text-xs text-stone-600 leading-relaxed font-light px-2 mb-5">
                  {t("couple.brideDesc")}
                </p>
                <div className="flex gap-3 items-center justify-center w-full mt-2">
                  <span className="w-8 h-[1px] bg-gold-300/30" />
                  <motion.button
                    onClick={handleLikeBride}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    className={`relative z-20 flex items-center justify-center cursor-pointer p-2.5 rounded-full border transition-all duration-300 shadow-sm pointer-events-auto ${
                      hasLikedBride 
                        ? "bg-red-50 border-red-200 text-red-500" 
                        : "bg-purple-50/60 border-purple-200/30 text-purple-400 hover:bg-purple-100/60"
                    }`}
                  >
                    <Heart className={`w-4 h-4 transition-colors ${hasLikedBride ? "text-red-500 fill-red-500" : "fill-transparent"}`} />
                  </motion.button>
                  <span className="w-8 h-[1px] bg-gold-300/30" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Aman's Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-gold-400/20 to-purple-500/20 opacity-70 blur-sm group-hover:opacity-100 transition duration-700 pointer-events-none" />
              <div className="relative z-10 glass-card p-6 rounded-[1.8rem] overflow-hidden flex flex-col items-center text-center bg-white/70 backdrop-blur-md border border-gold-300/20 shadow-md">
                <div className="relative w-full h-[22rem] sm:h-[24rem] rounded-xl overflow-hidden mb-5 bg-stone-50 border border-gold-300/10">
                  <Image
                    src="/images/aman-new.png"
                    alt="Aman"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-w-768px) 100vw, 300px"
                    priority
                  />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#8a1525] tracking-wide mb-1">
                  {t("couple.groomName")}
                </h3>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-purple-650 font-semibold mb-3">
                  {t("couple.groomRole")}
                </span>

                {/* Beautiful Tagline */}
                <p className="font-serif italic text-sm text-[#8a1525] font-bold tracking-wide mb-3">
                  &ldquo;{t("couple.groomTagline")}&rdquo;
                </p>

                <p className="font-sans text-xs text-stone-605 leading-relaxed font-light px-2 mb-5">
                  {t("couple.groomDesc")}
                </p>
                <div className="flex gap-3 items-center justify-center w-full mt-2">
                  <span className="w-8 h-[1px] bg-gold-300/30" />
                  <motion.button
                    onClick={handleLikeGroom}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    className={`relative z-20 flex items-center justify-center cursor-pointer p-2.5 rounded-full border transition-all duration-300 shadow-sm pointer-events-auto ${
                      hasLikedGroom 
                        ? "bg-red-50 border-red-200 text-red-500" 
                        : "bg-purple-50/60 border-purple-200/30 text-purple-400 hover:bg-purple-100/60"
                    }`}
                  >
                    <Heart className={`w-4 h-4 transition-colors ${hasLikedGroom ? "text-red-500 fill-red-500" : "fill-transparent"}`} />
                  </motion.button>
                  <span className="w-8 h-[1px] bg-gold-300/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
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
          <ChevronDown className="w-3.5 h-3.5 text-purple-500" />
        </motion.div>
      </motion.div>

      {/* Bottom Spacer for scroll buffer */}
      <div className="h-20 sm:h-28 flex-shrink-0 w-full pointer-events-none" />
    </section>
  );
}
