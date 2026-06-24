"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, Navigation, Landmark, Copy, Check, Compass, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventDetails() {
  const { language, t, formatNumber } = useLanguage();
  const targetDate = new Date("2026-08-18T09:00:00+05:30"); // 18th August 2026 at 9:00 AM IST

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      const difference = +targetDate - +new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCalendar = () => {
    const eventName = encodeURIComponent(language === "gu" ? "Srushti અને Aman ની રિંગ સેરેમની" : language === "hi" ? "सृष्टि और अमन की सगाई" : "Srushti & Aman's Ring Ceremony");
    const eventDesc = encodeURIComponent(language === "gu" ? "અમારી રિંગ સેરેમનીમાં પ્રેમની નવી શરૂઆતના સાક્ષી બનવા માટે આપનું સ્વાગત છે!" : language === "hi" ? "हमारी सगाई समारोह में प्रेम की नई शुरुआत के साक्षी बनने के लिए आपका स्वागत है!" : "Welcome to witness the beautiful beginning of our love story at our engagement ceremony!");
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventName}&dates=20260818T033000Z/20260818T083000Z&details=${eventDesc}&location=Parishram+The+Lawns,+Moviya+Road,+Gondal,+Gujarat+360311`;
    window.open(gCalUrl, "_blank");
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(t("venue.address"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const countdownItems = [
    { label: t("eventDetails.countdown.days"), value: timeLeft.days },
    { label: t("eventDetails.countdown.hours"), value: timeLeft.hours },
    { label: t("eventDetails.countdown.minutes"), value: timeLeft.minutes },
    { label: t("eventDetails.countdown.seconds"), value: timeLeft.seconds },
  ];

  // Dynamic language labels to avoid mixed languages in brackets
  const labels = {
    en: {
      auspiciousDay: "Tithi",
      date: "Date",
      time: "Time",
      venueTitle: "Venue & Location",
      venueName: "Venue Name",
      address: "Location Address",
      interactiveMap: "Interactive Map",
      copyAddress: "Copy Address",
      getDirections: "Get Directions",
      functionStarts: "The ceremony begins on Tuesday, August 18, 2026 at 9:00 AM",
      countdownTitle: "Countdown to the Auspicious Event",
    },
    gu: {
      auspiciousDay: "તિથિ",
      date: "તારીખ",
      time: "સમય",
      venueTitle: "સ્થળ વિગત",
      venueName: "સ્થળનું નામ",
      address: "સરનામું",
      interactiveMap: "ઇન્ટરેક્ટિવ નકશો",
      copyAddress: "સરનામું કોપી કરો",
      getDirections: "નકશો જુઓ",
      functionStarts: "શુભ પ્રસંગ મંગળવાર, ૧૮ ઓગસ્ટ ૨૦૨૬ ના રોજ સવારે ૯:૦૦ વાગ્યે શરૂ થશે",
      countdownTitle: "શુભ પ્રસંગ શરૂ થવા માટેનો સમય",
    },
    hi: {
      auspiciousDay: "तिथि",
      date: "तारीख",
      time: "समय",
      venueTitle: "स्थान विवरण",
      venueName: "स्थान का नाम",
      address: "पता",
      interactiveMap: "इंटरैक्टिव नक्शा",
      copyAddress: "पता कॉपी करें",
      getDirections: "दिशा निर्देश",
      functionStarts: "शुभ समारोह मंगलवार, १८ अगस्त २०२६ को सुबह ९:०० बजे शुरू होगा",
      countdownTitle: "शुभ प्रसंग शुरू होने का समय",
    }
  }[language as "en" | "gu" | "hi"] || {
    auspiciousDay: "Tithi",
    date: "Date",
    time: "Time",
    venueTitle: "Venue & Location",
    venueName: "Venue Name",
    address: "Location Address",
    interactiveMap: "Interactive Map",
    copyAddress: "Copy Address",
    getDirections: "Get Directions",
    functionStarts: "The ceremony begins on Tuesday, August 18, 2026 at 9:00 AM",
    countdownTitle: "Countdown to the Auspicious Event",
  };

  return (
    <section id="event-section" className="py-8 px-4 bg-[#fdf9ff] relative overflow-x-hidden select-none">
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-purple-750 uppercase font-bold">
            {t("eventDetails.joinCelebration")}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#5e1f70] tracking-wide mb-0 mt-3">
            :: {t("eventDetails.mainTitle")} ::
          </h2>
          
          {/* Traditional Separator */}
          <div className="flex items-center justify-center gap-2 mt-1 mb-6">
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#5e1f70]/50" />
            <span className="text-[#5e1f70] text-lg">♦</span>
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#5e1f70]/50" />
          </div>
        </div>

        {/* Live Countdown Card with Ceremony Start Time details */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto rounded-[2.5rem] bg-white/50 backdrop-blur-md p-6 sm:p-8 border border-purple-300/20 shadow-[0_12px_40px_rgba(94,31,112,0.04)] text-center overflow-hidden">
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#d4af37]/45 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#d4af37]/45 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#d4af37]/45 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#d4af37]/45 rounded-br-lg pointer-events-none" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-100/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 tracking-wide mb-2">
              {labels.countdownTitle}
            </h3>
            
            <p className="text-xs sm:text-sm text-[#5e1f70] font-sans tracking-wide mb-6 max-w-2xl mx-auto font-semibold">
              {labels.functionStarts}
            </p>
            
            <div className="grid grid-cols-4 gap-3 sm:gap-8 max-w-2xl mx-auto relative z-10">
              {countdownItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-14 h-16 sm:w-28 sm:h-28 rounded-2xl bg-white border border-[#d4af37]/25 flex items-center justify-center shadow-md relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/5 to-[#5e1f70]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="font-serif text-xl sm:text-5xl font-bold text-purple-700 tracking-tight">
                      {mounted ? formatNumber(String(item.value).padStart(2, "0")) : formatNumber("00")}
                    </span>
                  </div>
                  <span className="font-sans text-[8px] sm:text-xs tracking-widest uppercase text-stone-500 mt-2.5 font-bold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unified Event Details Grid: 12 Columns - items-stretch aligns card heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Time, Date & Timeline (4/12 Columns - matches Card 2 height) */}
          <motion.div
            className="lg:col-span-4 relative bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-[#d4af37]/35 p-6 sm:p-10 flex flex-col shadow-[0_12px_40px_rgba(94,31,112,0.04)]"
          >
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]/30 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]/30 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]/30 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]/30 rounded-br-lg pointer-events-none" />

            {/* Header Label */}
            <div className="flex items-center gap-2 text-[#5e1f70] mb-4 pb-3 border-b border-purple-100 flex-shrink-0">
              <Calendar className="w-5 h-5 text-[#d4af37]" />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold">
                {t("eventDetails.dateTimeCard.title")}
              </span>
            </div>
            
            <div className="flex-grow flex flex-col justify-evenly py-4 sm:py-6">
              {/* Timeline Row 1: Tithi */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-stone-400 font-bold block">
                    {labels.auspiciousDay}
                  </span>
                  <p className="font-serif text-base sm:text-lg text-stone-850 font-bold mt-0.5">
                    {language === "gu" ? "શ્રાવણ સુદ-૬" : language === "hi" ? "श्रावण सुद-६" : "Shravan Sud-6"}
                  </p>
                </div>
              </div>

              {/* Timeline Row 2: Date */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-650 flex-shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-stone-400 font-bold block">
                    {labels.date}
                  </span>
                  <p className="font-serif text-base sm:text-lg text-stone-850 font-bold mt-0.5">
                    {t("eventDetails.dateTimeCard.date")}
                  </p>
                </div>
              </div>

              {/* Timeline Row 3: Time */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-650 flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-stone-400 font-bold block">
                    {labels.time}
                  </span>
                  <p className="font-serif text-base sm:text-lg text-stone-850 font-bold mt-0.5">
                    {t("eventDetails.dateTimeCard.time")}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-auto pt-4 border-t border-stone-200/50">
              <button
                onClick={handleAddToCalendar}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-stone-900 hover:bg-[#d4af37] text-white hover:text-stone-950 font-sans text-xs tracking-widest uppercase transition-all duration-300 font-bold cursor-pointer hover:scale-[1.02] shadow-sm"
              >
                {t("eventDetails.dateTimeCard.button")}
              </button>
            </div>
          </motion.div>

          {/* Card 2: Venue details, Address & Map (8/12 Columns) */}
          <motion.div
            className="lg:col-span-8 relative bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-[#d4af37]/35 overflow-hidden shadow-[0_12px_40px_rgba(94,31,112,0.04)] grid grid-cols-1 md:grid-cols-2"
          >
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#d4af37]/35 rounded-tl-lg pointer-events-none z-20" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#d4af37]/35 rounded-tr-lg pointer-events-none z-20" />

            <div className="p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#d4af37]/20">
              <div>
                {/* Header Label */}
                <div className="flex items-center gap-2 text-[#5e1f70] mb-4 pb-3 border-b border-purple-100">
                  <Landmark className="w-5 h-5 text-[#d4af37]" />
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold">
                    {labels.venueTitle}
                  </span>
                </div>

                {/* Large Image Showcase */}
                <div className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden shadow-md group border border-stone-200/50 bg-stone-100 mb-5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <Image
                    src="/images/venue_hall.jpg"
                    alt="Parishram The Lawns"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#5e1f70]/95 text-[#f7e4a9] text-[9px] tracking-wider uppercase font-bold backdrop-blur-sm border border-gold-400/20 shadow-sm">
                      Celebration Hall
                    </span>
                  </div>
                </div>

                {/* Venue details */}
                <div className="flex gap-3 items-start mt-2">
                  <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                    <Landmark className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-stone-400 font-bold block">
                      {labels.venueName}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-850 mt-0.5">
                      {t("venue.venueName")}
                    </h3>
                  </div>
                </div>

                {/* Address details */}
                <div className="flex gap-3 items-start mt-3">
                  <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-650 flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-stone-400 font-bold block">
                      {labels.address}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed font-semibold mt-0.5">
                      {t("venue.address")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-2.5 w-full">
                <a
                  href="https://maps.app.goo.gl/khnAGM3quPtzB52K9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-stone-900 hover:bg-[#d4af37] text-white hover:text-stone-950 font-sans text-[10px] tracking-widest uppercase transition-all duration-300 shadow-sm font-bold cursor-pointer hover:scale-[1.02]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  {labels.getDirections}
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-stone-300 hover:border-[#d4af37] bg-white hover:bg-[#5e1f70]/5 text-stone-750 hover:text-[#5e1f70] font-sans text-[10px] tracking-widest uppercase transition-all duration-300 font-bold cursor-pointer hover:scale-[1.02] shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-650 font-bold" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      {labels.copyAddress}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Interactive location map embed (Redesigned with floating glass header) */}
            <div className="relative w-full h-full min-h-[300px] md:min-h-full overflow-hidden group/map">
              <div className="absolute top-4 left-4 z-20 px-3.5 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-[#d4af37]/35 shadow-md flex items-center gap-2 pointer-events-none">
                <Compass className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                <span className="font-sans text-[9px] tracking-wider text-[#5e1f70] font-bold uppercase">
                  {labels.interactiveMap}
                </span>
              </div>
              <iframe
                title="SruMan Wedding Ceremony Venue Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.040268595507!2d70.80373847604597!3d21.933167779270034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395847a9ef7197a9%3A0xe510c436b7cd6858!2sParishram%20The%20Lawns!5e0!3m2!1sen!2sin!4v1718987178000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0 filter saturate-[0.95] contrast-[1.02] hover:saturate-100 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
