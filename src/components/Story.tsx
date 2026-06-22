"use client";

import React from "react";
import { motion } from "framer-motion";

interface Milestone {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

export default function Story() {
  const milestones: Milestone[] = [
    {
      date: "૧૨ ઓગસ્ટ, ૨૦૨૪",
      title: "પહેલી મુલાકાત",
      subtitle: "શરૂઆત",
      description:
        "એક સાદા નમસ્તેથી શરૂઆત થઈ, પણ પહેલી જ વાતચીતથી અમને જાદુનો અનુભવ થયો. કલાકો સુધી ફોન પર વાતો થતી રહી અને એક અનોખો નાતો બંધાયો.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-none stroke-purple-400" strokeWidth="2">
          {/* Chat bubbles vector */}
          <path d="M20 35h50c5 0 9 4 9 9v20c0 5-4 9-9 9H35l-15 10V64H20c-5 0-9-4-9-9V44c0-5 4-9 9-9z" />
          <path d="M80 20c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6" strokeDasharray="3 3" />
          <circle cx="35" cy="52" r="2" fill="#8e35a7" />
          <circle cx="45" cy="52" r="2" fill="#8e35a7" />
          <circle cx="55" cy="52" r="2" fill="#8e35a7" />
        </svg>
      ),
    },
    {
      date: "૨૫ ડિસેમ્બર, ૨૦૨૪",
      title: "પ્રથમ ડેટ",
      subtitle: "કોફી અને હાસ્ય",
      description:
        "રૂબરૂ મળવાથી અમારી કેમિસ્ટ્રી વધુ મજબૂત બની. કલાકો મિનિટો જેવા લાગ્યા અને અમને સમજાયું કે આ એક સુંદર સફરની શરૂઆત છે.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-none stroke-gold-500" strokeWidth="2">
          {/* Coffee cup with steam */}
          <path d="M25 45h40v25c0 8-6 14-14 14H39c-8 0-14-6-14-14V45z" />
          <path d="M65 52h8c4 0 7 3 7 7s-3 7-7 7h-8" />
          <path d="M35 25c0-4 4-8 4-8s4 4 4 8" />
          <path d="M47 28c0-4 4-6 4-6s4 2 4 6" />
          <path d="M20 90h50" />
        </svg>
      ),
    },
    {
      date: "૧૫ મે, ૨૦૨૫",
      title: "પ્રપોઝલ",
      subtitle: "તારાઓની છત્રછાયા હેઠળ",
      description:
        "દરિયાના મોજાથી પણ વધુ ઝડપી ધબકારા સાથે, Aman એ Srushti નો સાથ હંમેશ માટે માંગ્યો અને Srushti એ ખુશીથી 'હા' કહી.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-none stroke-purple-500" strokeWidth="2">
          {/* Ring Box / Proposal Icon */}
          <path d="M30 65l20-15 20 15v20H30V65z" />
          <path d="M30 65l20 12 20-12" />
          <circle cx="50" cy="30" r="12" stroke="#d6a853" strokeWidth="2.5" />
          <polygon points="50,14 54,20 50,26 46,20" fill="#ffffff" />
        </svg>
      ),
    },
    {
      date: "૨૮ ઓક્ટોબર, ૨૦૨૬",
      title: "સગાઈ વિધિ",
      subtitle: "બે હૃદય, એક સફર",
      description:
        "આજે અમે એક નવું કદમ ઉઠાવી રહ્યા છીએ, સગા-સંબંધીઓની હાજરીમાં અમારા પ્રેમને મહોર મારી રહ્યા છીએ. તમારા આશીર્વાદ સાથે સફર શરૂ થાય છે.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-none stroke-gold-600" strokeWidth="2">
          {/* Heart interlocking hands */}
          <path d="M50 80C20 60 12 40 12 25 12 12 24 6 36 6c8 0 12 4 14 6 2-2 6-6 14-6 12 0 24 6 24 19 0 15-8 35-38 55z" />
          <path d="M40 45h20" strokeLinecap="round" />
          <path d="M43 51h14" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="story-section" className="py-24 px-6 bg-[#fbf9fb] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-gold-600 uppercase font-medium">
            અમારા જીવનના પ્રકરણો
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mt-3">
            અમારી પ્રેમ કહાની
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Connector Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-gold-300 via-purple-300 to-gold-500 hidden md:block" />

          {/* Timeline Cards */}
          <div className="space-y-16 md:space-y-24">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty Spacer column for desktop */}
                  <div className="w-full md:w-1/2" />

                  {/* Circle Marker on Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#fdfbf7] border-2 border-gold-300 flex items-center justify-center shadow-sm z-20 hidden md:flex">
                    <div className="w-3.5 h-3.5 rounded-full bg-gold-500" />
                  </div>

                  {/* Active Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 px-4 md:px-12 z-20"
                  >
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:shadow-xl hover:border-gold-300/40 transition-all duration-500">
                      {/* Gold border shine overlay */}
                      <div className="absolute inset-0 border border-transparent group-hover:border-gold-300/20 rounded-2xl transition-all duration-500 pointer-events-none" />

                      {/* Icon & Date Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-xl bg-gold-50/50 border border-gold-200/20 group-hover:bg-gold-100/40 transition-colors duration-300">
                          {item.icon}
                        </div>
                        <span className="font-sans text-xs font-semibold tracking-wider text-gold-600 bg-gold-100/30 px-3.5 py-1 rounded-full">
                          {item.date}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="font-serif text-2xl font-light text-stone-900 mb-1 group-hover:text-gold-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-purple-600 font-semibold mb-3">
                        {item.subtitle}
                      </h4>
                      <p className="font-sans text-sm text-stone-600 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
