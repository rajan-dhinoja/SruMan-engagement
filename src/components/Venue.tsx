"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Navigation, Car, Landmark } from "lucide-react";

export default function Venue() {
  const [startLoc, setStartLoc] = useState("");
  const [distanceInfo, setDistanceInfo] = useState<string | null>(null);

  const calculateDistance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startLoc.trim()) return;

    const loc = startLoc.toLowerCase().trim();
    // Fun mock calculator logic for Parishram The Lawns, Gondal
    if (loc.includes("rajkot") || loc.includes("રાજકોટ")) {
      setDistanceInfo("અંદાજે ૪૦ કિ.મી. • ૪૫-૫૦ મિનિટ નેશનલ હાઇવે ૨૭ દ્વારા");
    } else if (loc.includes("station") || loc.includes("સ્ટેશન") || loc.includes("gondal") || loc.includes("ગોંડલ")) {
      setDistanceInfo("અંદાજે ૩ કિ.મી. • ૫-૧૦ મિનિટ ડ્રાઇવ અથવા ઓટો દ્વારા");
    } else if (loc.includes("airport") || loc.includes("એરપોર્ટ") || loc.includes("hirasar") || loc.includes("હીરાસર")) {
      setDistanceInfo("અંદાજે ૭૫ કિ.મી. • ૧ કલાક ૧૫ મિનિટ રાજકોટ ઇન્ટરનેશનલ એરપોર્ટ (હીરાસર) થી");
    } else if (loc.includes("jetpur") || loc.includes("જેતપુર")) {
      setDistanceInfo("અંદાજે ૩૦ કિ.મી. • ૩૫-૪૦ મિનિટ નેશનલ હાઇવે ૨૭ દ્વારા");
    } else {
      // General random approximation based on input length
      const estimate = Math.floor((loc.length * 3.4) % 20) + 2;
      const mins = Math.floor(estimate * 2) + 5;
      setDistanceInfo(`અંદાજે ${estimate} કિ.મી. • ${mins} મિનિટ વાહન દ્વારા`);
    }
  };

  return (
    <section id="venue-section" className="py-24 px-6 bg-[#fbf9fb] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-purple-600 uppercase font-medium">
            સરનામું
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mt-3">
            સ્થળ અને દિશા નિર્દેશ
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Venue Card & Distance Calculator */}
          <div className="flex flex-col justify-between space-y-8">
            {/* Elegant Venue Showcase Card */}
            <div className="glass-card rounded-3xl p-6 flex flex-col sm:flex-row gap-6 border border-gold-300/20 shadow-sm relative overflow-hidden group">
              <div className="relative w-full sm:w-48 h-48 rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0">
                <Image
                  src="/images/venue.png"
                  alt="Parishram The Lawns"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="192px"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-purple-600 mb-2">
                  <Landmark className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold">
                    Parishram The Lawns
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-light text-stone-900 mb-2">
                  પરિશ્રમ ધ લોન્સ
                </h3>
                <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-4">
                  મોવીયા રોડ, ગોંડલ, રૂપાવટી, ગુજરાત ૩૬૦૩૧૧
                </p>
                <a
                  href="https://maps.app.goo.gl/khnAGM3quPtzB52K9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 self-start px-5 py-2.5 rounded-full bg-stone-900 text-[#fdfbf7] font-sans text-[10px] tracking-widest uppercase hover:bg-gold-500 hover:text-stone-900 transition-all duration-300 shadow-sm font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  રસ્તો મેળવો
                </a>
              </div>
            </div>

            {/* Distance Calculator */}
            <div className="glass-card rounded-3xl p-8 border border-gold-300/20 shadow-sm">
              <div className="flex items-center gap-2.5 text-purple-600 mb-4">
                <Car className="w-5 h-5" />
                <h4 className="font-serif text-xl font-light text-stone-900">
                  મુસાફરી સમય અંદાજક
                </h4>
              </div>
              <p className="font-sans text-xs text-stone-500 leading-relaxed font-light mb-6">
                મુસાફરીનું આયોજન કરો છો? અંદાજિત મુસાફરી સમય અને અંતર જાણવા માટે તમારું સ્થાન (જેમ કે રાજકોટ, ગોંડલ સ્ટેશન) લખો.
              </p>

              <form onSubmit={calculateDistance} className="flex gap-3">
                <input
                  type="text"
                  placeholder="દા.ત. રાજકોટ"
                  value={startLoc}
                  onChange={(e) => setStartLoc(e.target.value)}
                  className="flex-grow px-5 py-3 rounded-full border border-gold-200 bg-white/70 backdrop-blur-sm text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-gold-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-stone-900 text-[#fdfbf7] font-sans text-xs tracking-wider uppercase hover:bg-gold-500 hover:text-stone-900 transition-all cursor-pointer font-semibold"
                >
                  ગણતરી કરો
                </button>
              </form>

              <AnimatePresence mode="wait">
                {distanceInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 rounded-2xl bg-purple-50/50 border border-purple-300/10 flex items-start gap-3"
                  >
                    <MapPin className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-xs text-stone-700 leading-relaxed font-light">
                      {distanceInfo}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="rounded-3xl overflow-hidden border border-gold-300/20 shadow-md h-[400px] lg:h-auto min-h-[350px] relative">
            <iframe
              title="SruMan Wedding Ceremony Venue Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.040268595507!2d70.80373847604597!3d21.933167779270034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395847a9ef7197a9%3A0xe510c436b7cd6858!2sParishram%20The%20Lawns!5e0!3m2!1sen!2sin!4v1718987178000!5m2!1sen!2sin"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
