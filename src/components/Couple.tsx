"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Couple() {
  const { t, language } = useLanguage();

  return (
    <section id="couple-section" className="min-h-screen w-full flex flex-col justify-between py-12 px-6 bg-[#fcf9f2] relative">
      {/* Top Spacer for scroll buffer */}
      <div className="h-16 sm:h-24 flex-shrink-0 w-full pointer-events-none" />

      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mt-2 z-20"
      >
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-purple-700/90 uppercase font-semibold">
          {t("couple.familyBlessingIntro")}
        </span>
      </motion.div>

      <div className={`${language === "en" ? "max-w-7xl" : "max-w-6xl"} mx-auto w-full flex flex-col items-center z-20 flex-grow justify-center mt-4 px-2 sm:px-4`}>
        {/* Traditional Invitation Envelope Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="w-full relative bg-white/70 backdrop-blur-md rounded-[2.5rem] border-2 border-[#d4af37]/35 p-6 sm:p-10 md:p-14 lg:p-16 shadow-[0_15px_50px_rgba(138,21,37,0.06)] text-center flex flex-col items-center overflow-hidden"
        >
          {/* Card Corner Ornaments */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#d4af37]/40 rounded-tl-3xl m-4 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#d4af37]/40 rounded-tr-3xl m-4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#d4af37]/40 rounded-bl-3xl m-4 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#d4af37]/40 rounded-br-3xl m-4 pointer-events-none" />

          {/* Shreenathji Grace Heading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-[#8a1525] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mb-6 sm:mb-8"
          >
            {t("couple.shreenathjiGrace")}
          </motion.p>

          {/* Bride Family Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`mb-6 sm:mb-8 ${language === "en" ? "max-w-6xl" : "max-w-5xl"}`}
          >
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 leading-relaxed font-semibold">
              {t("couple.brideGrandparents")} <br className="hidden sm:inline" />
              {t("couple.brideParents")}
            </p>
          </motion.div>

          {/* Main Couple Names Section (Centered) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 my-6 sm:my-8 py-2 w-full"
          >
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#8a1525] tracking-wide whitespace-nowrap">
              {t("couple.brideName")}
            </h2>

            {/* Rotating / Floating Ring Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex-shrink-0"
            >
              <Image
                src="/images/ring.png"
                alt="Wedding Rings"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 10px rgba(212,175,55,0.8))" }}
                priority
              />
            </motion.div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#8a1525] tracking-wide whitespace-nowrap">
              {t("couple.groomName")}
            </h2>
          </motion.div>

          {/* Groom Family Details & Announcement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`${language === "en" ? "max-w-6xl" : "max-w-5xl"} space-y-4`}
          >
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 leading-relaxed font-semibold">
              {t("couple.groomGrandparents")} <br className="hidden sm:inline" />
              {t("couple.groomParents")}
            </p>

            <div className="w-16 h-[1px] bg-gold-400/30 mx-auto my-4" />

            <p className="font-serif text-[#8a1525] text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold leading-relaxed">
              {t("couple.eventAnnouncement")}
            </p>

            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-[#8a1525] font-extrabold leading-relaxed">
              {t("couple.invitationGreeting")}
            </p>
          </motion.div>
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
