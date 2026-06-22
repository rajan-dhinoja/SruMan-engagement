"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, Sparkles } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  message: string;
  hearts: number;
  date: string;
  theme: "gold" | "purple" | "champagne";
}

export default function Blessings() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<"gold" | "purple" | "champagne">("gold");

  const defaultWishes: Wish[] = [
    {
      id: "1",
      name: "Rohan Sharma",
      message: "સૌથી સુંદર જોડીને, તમારી રિંગ સેરેમની તમારા જીવનની નવી અને પ્રેમભરી શરૂઆત બને તેવી શુભકામનાઓ!",
      hearts: 12,
      date: "હમણાં જ",
      theme: "purple",
    },
    {
      id: "2",
      name: "Sneha & Amit Gupta",
      message: "Srushti અને Aman, અમને તમારા આ સુંદર સોપાનની ઉજવણી તમારી સાથે કરતાં ખૂબ જ આનંદ થાય છે! ખુબ ખુબ અભિનંદન!",
      hearts: 8,
      date: "૨ કલાક પહેલા",
      theme: "gold",
    },
    {
      id: "3",
      name: "Priyanjali Sen",
      message: "તમારા બંનેને મારા હાર્દિક આશીર્વાદ અને પ્રાર્થના. આ સુંદર પ્રેમ ઉત્સવની ઉજવણી જોવા આતુર છું!",
      hearts: 15,
      date: "૧ દિવસ પહેલા",
      theme: "champagne",
    },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("sruman_wishes");
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        setWishes(defaultWishes);
      }
    } else {
      setWishes(defaultWishes);
    }
  }, []);

  const handlePostWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      hearts: 0,
      date: "હમણાં જ",
      theme: selectedTheme,
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem("sruman_wishes", JSON.stringify(updated));

    setName("");
    setMessage("");
  };

  const handleLike = (id: string) => {
    const updated = wishes.map((w) => {
      if (w.id === id) {
        return { ...w, hearts: w.hearts + 1 };
      }
      return w;
    });
    setWishes(updated);
    localStorage.setItem("sruman_wishes", JSON.stringify(updated));
  };

  return (
    <section id="blessings-section" className="py-24 px-6 bg-[#fbf9fb] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-purple-600 uppercase font-medium">
            આશીર્વાદ અને પ્રેમ
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mt-3">
            શુભેચ્છા બોર્ડ
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Post Form */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-3xl p-6 border border-gold-300/20 shadow-sm sticky top-28">
              <h3 className="font-serif text-xl font-light text-stone-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-500" />
                શુભેચ્છા લખો
              </h3>

              <form onSubmit={handlePostWish} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="આપનું નામ"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gold-200 bg-white/70 text-sm focus:outline-none focus:border-gold-500 text-stone-800"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="અહીં તમારા શુભાશિષ લખો..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gold-200 bg-white/70 text-sm focus:outline-none focus:border-gold-500 text-stone-800 resize-none"
                    required
                  />
                </div>

                {/* Theme Selector */}
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-2 block">
                    કાર્ડની શૈલી પસંદ કરો
                  </span>
                  <div className="flex gap-2">
                    {["gold", "purple", "champagne"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTheme(t as any)}
                        className={`px-3 py-1.5 rounded-full font-sans text-[10px] uppercase tracking-widest border transition-all cursor-pointer ${
                          selectedTheme === t
                            ? "bg-stone-950 text-[#fdfbf7] border-stone-950 font-semibold"
                            : "bg-white text-stone-500 border-stone-200"
                        }`}
                      >
                        {t === "gold" ? "સોનેરી" : t === "purple" ? "જાંબલી" : "શેમ્પેઈન"}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-stone-900 text-[#fdfbf7] font-sans text-xs tracking-widest uppercase hover:bg-gold-500 hover:text-stone-900 transition-all flex items-center justify-center gap-2 cursor-pointer font-semibold"
                >
                  <Send className="w-3.5 h-3.5" />
                  શુભેચ્છા મોકલો
                </button>
              </form>
            </div>
          </div>

          {/* Message Wall Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[550px] overflow-y-auto pr-2 scrollbar-thin">
              <AnimatePresence>
                {wishes.map((w) => {
                  let themeClass = "from-gold-50/40 to-gold-100/20 border-gold-300/20";
                  let heartClass = "text-gold-500 hover:bg-gold-100/50";
                  
                  if (w.theme === "purple") {
                    themeClass = "from-purple-50/40 to-purple-100/20 border-purple-300/20";
                    heartClass = "text-purple-500 hover:bg-purple-100/50";
                  } else if (w.theme === "champagne") {
                    themeClass = "from-amber-50/30 to-amber-100/20 border-amber-300/10";
                    heartClass = "text-amber-600 hover:bg-amber-100/40";
                  }

                  return (
                    <motion.div
                      key={w.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className={`glass-card p-6 rounded-2xl border bg-gradient-to-br ${themeClass} flex flex-col justify-between shadow-sm relative group`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-serif text-lg font-light text-stone-900 truncate">
                            {w.name}
                          </h4>
                          <span className="font-sans text-[9px] text-stone-400 uppercase font-semibold">
                            {w.date}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-stone-600 leading-relaxed font-light mb-6">
                          &ldquo;{w.message}&rdquo;
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        <button
                          onClick={() => handleLike(w.id)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200/40 bg-white/60 text-xs transition-colors cursor-pointer ${heartClass}`}
                        >
                          <Heart className="w-3.5 h-3.5 fill-current" />
                          <span>{w.hearts}</span>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
