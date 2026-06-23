"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Couple() {
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
    <section id="couple-section" className="min-h-screen w-full flex flex-col justify-between py-12 px-6 bg-[#fcf9f2] relative overflow-y-auto no-scrollbar">
      {/* Top Spacer for scroll buffer */}
      <div className="h-16 sm:h-24 flex-shrink-0 w-full pointer-events-none" />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mt-4 z-20"
      >
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-purple-700/90 uppercase font-semibold">
          {t("couple.familyBlessingIntro")}
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center z-20 flex-grow justify-center mt-6">

        {/* Family Blessings/Details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.0 }}
          className="text-center max-w-4xl mb-10 px-4 z-20"
        >
          <p className="font-serif text-[#8a1525] text-base sm:text-lg font-bold leading-relaxed mb-3">
            {t("couple.shreenathjiGrace")}
          </p>
          <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {t("couple.brideGrandparents")} <br className="hidden sm:inline" />
            {t("couple.brideParents")}
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 w-full items-center justify-items-center">
          {/* Srushti's Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-purple-500/20 to-gold-400/20 opacity-70 blur-sm group-hover:opacity-100 transition duration-700 pointer-events-none" />
              <div className="relative z-10 glass-card p-5 rounded-[1.8rem] overflow-hidden flex flex-col items-center text-center">
                <div className="relative w-full h-[22rem] sm:h-[24rem] rounded-xl overflow-hidden mb-4 bg-stone-100 border border-gold-300/10">
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
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-purple-650 font-semibold mb-2.5">
                  {t("couple.brideRole")}
                </span>
                
                {/* Beautiful Tagline */}
                <p className="font-serif italic text-[13px] sm:text-[14px] text-[#8a1525] font-bold tracking-wide mb-3">
                  &ldquo;{t("couple.brideTagline")}&rdquo;
                </p>

                <p className="font-sans text-xs text-stone-600 leading-relaxed font-light px-2 mb-4">
                  {t("couple.brideDesc")}
                </p>
                <div className="flex gap-3 items-center justify-center w-full mt-2">
                  <span className="w-6 h-[1px] bg-gold-300/30" />
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
                  <span className="w-6 h-[1px] bg-gold-300/30" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Ring Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center justify-center py-4 md:py-0"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-56 xl:h-56"
            >
              <Image
                src="/images/ring.png"
                alt="Wedding Rings"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 15px rgba(212,175,55,0.95)) drop-shadow(0 0 35px rgba(94,31,112,0.5))" }}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Aman's Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-gold-400/20 to-purple-500/20 opacity-70 blur-sm group-hover:opacity-100 transition duration-700 pointer-events-none" />
              <div className="relative z-10 glass-card p-5 rounded-[1.8rem] overflow-hidden flex flex-col items-center text-center">
                <div className="relative w-full h-[22rem] sm:h-[24rem] rounded-xl overflow-hidden mb-4 bg-stone-100 border border-gold-300/10">
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
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-purple-650 font-semibold mb-2.5">
                  {t("couple.groomRole")}
                </span>

                {/* Beautiful Tagline */}
                <p className="font-serif italic text-[13px] sm:text-[14px] text-[#8a1525] font-bold tracking-wide mb-3">
                  &ldquo;{t("couple.groomTagline")}&rdquo;
                </p>

                <p className="font-sans text-xs text-stone-605 leading-relaxed font-light px-2 mb-4">
                  {t("couple.groomDesc")}
                </p>
                <div className="flex gap-3 items-center justify-center w-full mt-2">
                  <span className="w-6 h-[1px] bg-gold-300/30" />
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
                  <span className="w-6 h-[1px] bg-gold-300/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Groom Family Blessings/Details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.0 }}
          className="text-center max-w-4xl mt-10 mb-6 px-4 z-20"
        >
          <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {t("couple.groomGrandparents")} <br className="hidden sm:inline" />
            {t("couple.groomParents")} <br className="my-2 block" />
            {t("couple.eventAnnouncement")} <br className="my-1 block" />
            {t("couple.invitationGreeting")}
          </p>
        </motion.div>


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
