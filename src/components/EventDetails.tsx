"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Award } from "lucide-react";
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
    // Generate Google Calendar Link based on language
    const eventName = encodeURIComponent(language === "gu" ? "Srushti અને Aman ની રિંગ સેરેમની" : language === "hi" ? "सृष्टि और अमन की सगाई" : "Srushti & Aman's Ring Ceremony");
    const eventDesc = encodeURIComponent(language === "gu" ? "અમારી રિંગ સેરેમનીમાં પ્રેમની નવી શરૂઆતના સાક્ષી બનવા માટે આપનું સ્વાગત છે!" : language === "hi" ? "हमारी सगाई समारोह में प्रेम की नई शुरुआत के साक्षी बनने के लिए आपका स्वागत है!" : "Welcome to witness the beautiful beginning of our love story at our engagement ceremony!");
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventName}&dates=20260818T033000Z/20260818T083000Z&details=${eventDesc}&location=Parishram+The+Lawns,+Moviya+Road,+Gondal,+Gujarat+360311`;
    window.open(gCalUrl, "_blank");
  };

  const countdownItems = [
    { label: t("eventDetails.countdown.days"), value: timeLeft.days },
    { label: t("eventDetails.countdown.hours"), value: timeLeft.hours },
    { label: t("eventDetails.countdown.minutes"), value: timeLeft.minutes },
    { label: t("eventDetails.countdown.seconds"), value: timeLeft.seconds },
  ];

  return (
    <section id="event-section" className="py-24 px-6 bg-transparent relative overflow-x-hidden">
      {/* Top Spacer for scroll buffer */}
      <div className="h-16 sm:h-24 flex-shrink-0 w-full pointer-events-none" />

      {/* Decorative Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-purple-700 uppercase font-medium">
            {t("eventDetails.joinCelebration")}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mt-3">
            {t("eventDetails.mainTitle")}
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        {/* Live Countdown Grid */}
        <div className="mb-20">
          <div className="glass-card max-w-3xl mx-auto rounded-3xl p-8 relative overflow-hidden shadow-[0_8px_32px_rgba(214,168,83,0.06)] border border-gold-300/20 text-center">
            {/* Ambient gold glow behind countdown */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold-300/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="font-serif text-2xl font-light text-stone-900 tracking-wide mb-6">
              {t("eventDetails.countdownAwaiting")}
            </h3>

            <div className="grid grid-cols-4 gap-3 sm:gap-6 relative z-10">
              {countdownItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-18 sm:w-24 sm:h-24 rounded-2xl bg-white/70 backdrop-blur-md border border-gold-200/30 flex items-center justify-center shadow-sm relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="font-serif text-2xl sm:text-5xl font-light text-purple-600 tracking-tight shimmer-text">
                      {mounted ? formatNumber(String(item.value).padStart(2, "0")) : formatNumber("00")}
                    </span>
                  </div>
                  <span className="font-sans text-[10px] sm:text-xs tracking-wider uppercase text-stone-400 mt-3 font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Card 1: Time & Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:border-gold-300/40 transition-colors duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-gold-50/80 border border-gold-300/20 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-stone-900 transition-all duration-500">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-light text-stone-900 mb-3">
              {t("eventDetails.dateTimeCard.title")}
            </h4>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-1">
              {t("eventDetails.dateTimeCard.date")}
            </p>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-6">
              {t("eventDetails.dateTimeCard.time")}
            </p>
            <button
              onClick={handleAddToCalendar}
              className="mt-auto px-5 py-2.5 rounded-full border border-gold-300 text-gold-600 font-sans text-[10px] tracking-widest uppercase hover:bg-stone-900 hover:text-[#fdfbf7] hover:border-stone-900 transition-all duration-300 cursor-pointer"
            >
              {t("eventDetails.dateTimeCard.button")}
            </button>
          </motion.div>

          {/* Card 2: Venue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:border-gold-300/40 transition-colors duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-gold-50/80 border border-gold-300/20 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-stone-900 transition-all duration-500">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-light text-stone-900 mb-3">
              {t("eventDetails.venueCard.title")}
            </h4>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-1">
              {t("eventDetails.venueCard.name")}
            </p>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-6">
              {t("eventDetails.venueCard.address")}
            </p>
            <a
              href="#venue-section"
              className="mt-auto px-5 py-2.5 rounded-full border border-gold-300 text-gold-600 font-sans text-[10px] tracking-widest uppercase hover:bg-stone-900 hover:text-[#fdfbf7] hover:border-stone-900 transition-all duration-300"
            >
              {t("eventDetails.venueCard.button")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Spacer for scroll buffer */}
      <div className="h-20 sm:h-28 flex-shrink-0 w-full pointer-events-none" />
    </section>
  );
}
