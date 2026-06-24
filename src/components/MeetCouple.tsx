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
    <section id="meet-couple-section" className="w-full flex flex-col gap-10 py-8 px-4 bg-[#fffdf7] relative">
      {/* Decorative Ornaments */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center z-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
        >
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-[#8a1525]/85 uppercase font-semibold block mb-3">
            Our Story
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8a1525] tracking-wide mb-0">
            :: {t("couple.meetCoupleTitle")} ::
          </h2>
          
          {/* Traditional Separator */}
          <div className="flex items-center justify-center gap-2 mt-1 mb-6">
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#8a1525]/50" />
            <span className="text-[#8a1525] text-lg">♦</span>
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#8a1525]/50" />
          </div>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 w-full justify-items-center">

          {/* Srushti's Card */}
          <motion.div
            className="w-full max-w-sm"
          >
            <div className="relative group w-full">
              {/* Glow border */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-purple-400/30 via-[#d4af37]/20 to-purple-400/30 opacity-60 blur-md group-hover:opacity-90 transition duration-700 pointer-events-none" />

              {/* Card */}
              <div className="relative z-10 flex flex-col items-center text-center bg-white rounded-[1.8rem] overflow-hidden border border-[#d4af37]/30 shadow-[0_8px_32px_rgba(94,31,112,0.10)]">

                {/* Photo */}
                <div className="relative w-full h-[26rem] sm:h-[28rem] overflow-hidden bg-gradient-to-b from-[#f9f4ff] to-[#f3eaf8]">
                  <Image
                    src="/images/srushti_natural.png"
                    alt="Srushti"
                    fill
                    className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                    priority
                  />
                  {/* Soft bottom fade into card */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </div>

                {/* Info */}
                <div className="px-6 pb-6 pt-2 flex flex-col items-center w-full">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#8a1525] tracking-wide mb-3">
                    {t("couple.brideName")}
                  </h3>

                  {/* Divider */}
                  <div className="w-16 h-[1px] bg-[#d4af37]/40 mb-3" />

                  {/* Tagline */}
                  <p className="font-serif italic text-sm text-[#5e1f70] font-semibold tracking-wide mb-3 px-2">
                    &ldquo;{t("couple.brideTagline")}&rdquo;
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-stone-700 leading-relaxed px-2 mb-5">
                    {t("couple.brideDesc")}
                  </p>

                  {/* Like */}
                  <div className="flex gap-3 items-center justify-center w-full">
                    <span className="flex-1 h-[1px] bg-[#d4af37]/30" />
                    <motion.button
                      onClick={handleLikeBride}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      className={`relative z-20 flex items-center justify-center cursor-pointer p-2.5 rounded-full border transition-all duration-300 shadow-sm ${
                        hasLikedBride
                          ? "bg-red-50 border-red-200 text-red-500"
                          : "bg-purple-50 border-purple-200/50 text-purple-500 hover:bg-purple-100"
                      }`}
                    >
                      <Heart className={`w-4 h-4 transition-colors ${hasLikedBride ? "text-red-500 fill-red-500" : "fill-transparent"}`} />
                    </motion.button>
                    <span className="flex-1 h-[1px] bg-[#d4af37]/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Aman's Card */}
          <motion.div
            className="w-full max-w-sm"
          >
            <div className="relative group w-full">
              {/* Glow border */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#d4af37]/30 via-purple-400/20 to-[#d4af37]/30 opacity-60 blur-md group-hover:opacity-90 transition duration-700 pointer-events-none" />

              {/* Card */}
              <div className="relative z-10 flex flex-col items-center text-center bg-white rounded-[1.8rem] overflow-hidden border border-[#d4af37]/30 shadow-[0_8px_32px_rgba(94,31,112,0.10)]">

                {/* Photo */}
                <div className="relative w-full h-[26rem] sm:h-[28rem] overflow-hidden bg-gradient-to-b from-[#fef9ee] to-[#f8f0dc]">
                  <Image
                    src="/images/aman-without-safa.png"
                    alt="Aman"
                    fill
                    className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                    priority
                  />
                  {/* Soft bottom fade into card */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </div>

                {/* Info */}
                <div className="px-6 pb-6 pt-2 flex flex-col items-center w-full">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#8a1525] tracking-wide mb-3">
                    {t("couple.groomName")}
                  </h3>

                  {/* Divider */}
                  <div className="w-16 h-[1px] bg-[#d4af37]/40 mb-3" />

                  {/* Tagline */}
                  <p className="font-serif italic text-sm text-[#5e1f70] font-semibold tracking-wide mb-3 px-2">
                    &ldquo;{t("couple.groomTagline")}&rdquo;
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-stone-700 leading-relaxed px-2 mb-5">
                    {t("couple.groomDesc")}
                  </p>

                  {/* Like */}
                  <div className="flex gap-3 items-center justify-center w-full">
                    <span className="flex-1 h-[1px] bg-[#d4af37]/30" />
                    <motion.button
                      onClick={handleLikeGroom}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      className={`relative z-20 flex items-center justify-center cursor-pointer p-2.5 rounded-full border transition-all duration-300 shadow-sm ${
                        hasLikedGroom
                          ? "bg-red-50 border-red-200 text-red-500"
                          : "bg-amber-50 border-amber-200/50 text-amber-600 hover:bg-amber-100"
                      }`}
                    >
                      <Heart className={`w-4 h-4 transition-colors ${hasLikedGroom ? "text-red-500 fill-red-500" : "fill-transparent"}`} />
                    </motion.button>
                    <span className="flex-1 h-[1px] bg-[#d4af37]/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.0, duration: 1 }}
        className="flex flex-col items-center text-stone-400 z-20 mt-4 cursor-pointer"
      >
        <span className="font-sans text-[8px] tracking-[0.1em] uppercase mb-1">
          {t("couple.meetCoupleScrollNext")}
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-purple-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
