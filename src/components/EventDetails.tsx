"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Award } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventDetails() {
  const targetDate = new Date("2026-10-28T17:00:00+05:30"); // 28th October 2026 at 5:00 PM IST

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
    // Generate Google Calendar Link
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Srushti+અને+Aman+ની+રિંગ+સેરેમની&dates=20261028T113000Z/20261028T163000Z&details=અમારી+રિંગ+સેરેમનીમાં+પ્રેમની+નવી+શરૂઆતના+સાક્ષી+બનવા+માટે+આપનું+સ્વાગત+છે!&location=Parishram+The+Lawns,+Moviya+Road,+Gondal,+Gujarat+360311`;
    window.open(gCalUrl, "_blank");
  };

  const countdownItems = [
    { label: "દિવસ", value: timeLeft.days },
    { label: "કલાક", value: timeLeft.hours },
    { label: "મિનિટ", value: timeLeft.minutes },
    { label: "સેકન્ડ", value: timeLeft.seconds },
  ];

  return (
    <section id="event-section" className="py-24 px-6 bg-[#fbf9fb] relative overflow-hidden">
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-purple-700 uppercase font-medium">
            ઉજવણીમાં સામેલ થાઓ
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mt-3">
            સમારોહની વિગત
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        {/* Live Countdown Grid */}
        <div className="mb-20">
          <div className="glass-card max-w-3xl mx-auto rounded-3xl p-8 relative overflow-hidden shadow-[0_8px_32px_rgba(214,168,83,0.06)] border border-gold-300/20 text-center">
            {/* Ambient gold glow behind countdown */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold-300/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="font-serif text-2xl font-light text-stone-900 tracking-wide mb-6">
              શુભ ઘડીની રાહ
            </h3>

            <div className="grid grid-cols-4 gap-3 sm:gap-6 relative z-10">
              {countdownItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-18 sm:w-24 sm:h-24 rounded-2xl bg-white/70 backdrop-blur-md border border-gold-200/30 flex items-center justify-center shadow-sm relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="font-serif text-2xl sm:text-5xl font-light text-purple-600 tracking-tight shimmer-text">
                      {mounted ? String(item.value).padStart(2, "0") : "00"}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              તારીખ અને સમય
            </h4>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-1">
              બુધવાર, ૨૮ ઓક્ટોબર ૨૦૨૬
            </p>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-6">
              સાંજે ૫:૦૦ વાગ્યાથી શરૂ
            </p>
            <button
              onClick={handleAddToCalendar}
              className="mt-auto px-5 py-2.5 rounded-full border border-gold-300 text-gold-600 font-sans text-[10px] tracking-widest uppercase hover:bg-stone-900 hover:text-[#fdfbf7] hover:border-stone-900 transition-all duration-300 cursor-pointer"
            >
              કેલેન્ડરમાં ઉમેરો
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
              સ્થળ
            </h4>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-1">
              પરિશ્રમ ધ લોન્સ
            </p>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-6">
              મોવીયા રોડ, ગોંડલ, ગુજરાત
            </p>
            <a
              href="#venue-section"
              className="mt-auto px-5 py-2.5 rounded-full border border-gold-300 text-gold-600 font-sans text-[10px] tracking-widest uppercase hover:bg-stone-900 hover:text-[#fdfbf7] hover:border-stone-900 transition-all duration-300"
            >
              નકશામાં જુઓ
            </a>
          </motion.div>

          {/* Card 3: Dress Code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:border-gold-300/40 transition-colors duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-purple-50/80 border border-purple-300/20 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-500 group-hover:text-[#fdfbf7] transition-all duration-500">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-light text-stone-900 mb-3">
              પહેરવેશ
            </h4>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-1">
              રાજવી ભારતીય પરંપરાગત / ઇન્ડો-વેસ્ટર્ન
            </p>
            <p className="font-sans text-sm text-purple-700 leading-relaxed font-semibold mb-6">
              જાંબલી, લેવેન્ડર અને સોનેરી રંગો
            </p>
            <a
              href="#rsvp-section"
              className="mt-auto px-6 py-2.5 rounded-full bg-stone-900 border border-stone-900 text-[#fdfbf7] font-sans text-[10px] tracking-widest uppercase hover:bg-gold-500 hover:border-gold-500 hover:text-stone-900 transition-all duration-300 cursor-pointer font-semibold"
            >
              ઓનલાઇન હાજરી નોંધાવો
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
