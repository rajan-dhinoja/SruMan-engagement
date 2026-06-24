"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Navigation, Landmark, Copy, Check, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Venue() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(t("venue.address"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="venue-section" className="py-24 px-6 bg-[#fbf9fb] relative overflow-x-hidden select-none">
      {/* Top Spacer for scroll buffer */}
      <div className="h-16 sm:h-24 flex-shrink-0 w-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-[#5e1f70] uppercase font-bold">
            {t("venue.addressLabel")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-2">
            {t("venue.mainTitle")}
          </h2>
          {/* Ornate Gold Diamond Separator */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <span className="w-12 h-[1px] bg-[#d4af37]/45" />
            <span className="text-[#d4af37] text-xs">◆</span>
            <span className="w-12 h-[1px] bg-[#d4af37]/45" />
          </div>
        </div>

        {/* Unified Luxury Venue Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-[#d4af37]/20 shadow-[0_20px_50px_rgba(94,31,112,0.06)] overflow-hidden"
        >
          {/* Inner Ornate Corner Accents */}
          <div className="absolute top-5 left-5 w-8 h-8 border-t border-l border-[#d4af37]/40 rounded-tl-xl pointer-events-none z-20" />
          <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-[#d4af37]/40 rounded-tr-xl pointer-events-none z-20" />
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b border-l border-[#d4af37]/40 rounded-bl-xl pointer-events-none z-20" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r border-[#d4af37]/40 rounded-br-xl pointer-events-none z-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px]">
            {/* Left Column: Venue Details & Actions (5/12 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200/40 relative z-10">
              
              {/* Top Meta info */}
              <div className="space-y-6">
                {/* Large image showcase */}
                <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md group border border-stone-200/50 bg-stone-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <Image
                    src="/images/wedding_hall_v2.png"
                    alt="Parishram The Lawns"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#5e1f70]/95 text-[#f7e4a9] text-[9px] tracking-wider uppercase font-bold backdrop-blur-sm border border-gold-400/20">
                      Celebration Hall
                    </span>
                  </div>
                </div>

                {/* Venue Name & Description */}
                <div>
                  <div className="flex items-center gap-2 text-[#5e1f70] mb-2">
                    <Landmark className="w-4 h-4 text-[#d4af37]" />
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold">
                      {t("eventDetails.venueCard.name")}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-wide">
                    {t("venue.venueName")}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-16 h-[1.5px] bg-[#d4af37]/35 my-4" />
                  
                  {/* Address Section */}
                  <div className="flex gap-3 items-start mt-4">
                    <MapPin className="w-5 h-5 text-purple-650 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-sans text-[11px] uppercase tracking-wider text-stone-400 font-bold">
                        Location Address
                      </h5>
                      <p className="font-sans text-sm sm:text-base text-stone-700 leading-relaxed font-semibold mt-1">
                        {t("venue.address")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/khnAGM3quPtzB52K9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-stone-900 hover:bg-[#d4af37] text-white hover:text-stone-950 font-sans text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.15)] font-bold cursor-pointer hover:scale-[1.02]"
                >
                  <Navigation className="w-4 h-4" />
                  {t("venue.button")}
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-stone-300/80 hover:border-[#d4af37] bg-white/40 hover:bg-[#5e1f70]/5 text-stone-700 hover:text-[#5e1f70] font-sans text-xs tracking-widest uppercase transition-all duration-300 font-bold cursor-pointer hover:scale-[1.02]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-650" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Google Maps Embed (7/12 cols) */}
            <div className="lg:col-span-7 h-[380px] lg:h-auto min-h-[380px] relative overflow-hidden group">
              {/* Map Floating Control Overlay */}
              <div className="absolute top-4 right-4 z-10 pointer-events-none opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-sm border border-[#d4af37]/20 shadow-md">
                  <Compass className="w-3.5 h-3.5 text-[#5e1f70] animate-pulse" />
                  <span className="font-sans text-[10px] tracking-wider text-stone-700 font-bold uppercase">
                    Interactive Map
                  </span>
                </div>
              </div>

              {/* The Google Map Iframe */}
              <iframe
                title="SruMan Wedding Ceremony Venue Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.040268595507!2d70.80373847604597!3d21.933167779270034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395847a9ef7197a9%3A0xe510c436b7cd6858!2sParishram%20The%20Lawns!5e0!3m2!1sen!2sin!4v1718987178000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0 filter saturate-[0.95] contrast-[1.02] hover:saturate-100 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Spacer for scroll buffer */}
      <div className="h-20 sm:h-28 flex-shrink-0 w-full pointer-events-none" />
    </section>
  );
}
