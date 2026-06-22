"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle2, Sparkles, Heart } from "lucide-react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [isAttending, setIsAttending] = useState<string>("yes");
  const [guestsCount, setGuestsCount] = useState(1);
  const [mealPreference, setMealPreference] = useState("vegetarian");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Trigger luxury gold & pink confetti
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#8e35a7", "#eedcaf", "#3f144d"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#8e35a7", "#eedcaf", "#3f144d"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setIsSubmitted(true);
  };

  return (
    <section id="rsvp-section" className="py-24 px-6 bg-[#fcf7fc] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-purple-600 uppercase font-medium">
            અમારા અતિથિ બનો
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mt-3">
            હાજરી પત્રક (RSVP)
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card rounded-[2.5rem] p-8 border border-gold-300/20 shadow-lg relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-2 block">
                    આખું નામ
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="દા.ત. સૃષ્ટિ શર્મા"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gold-200 bg-white/70 text-sm text-stone-850 placeholder-stone-400 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                {/* Will you attend? */}
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-2 block">
                    શું આપ પધારશો?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setIsAttending("yes")}
                      className={`py-3 rounded-2xl font-sans text-xs tracking-widest uppercase border transition-all cursor-pointer ${
                        isAttending === "yes"
                          ? "bg-stone-900 border-stone-900 text-[#fdfbf7] font-semibold"
                          : "bg-white border-gold-200 text-stone-600 hover:bg-gold-50/50"
                      }`}
                    >
                      હા, ચોક્કસ પધારીશ!
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAttending("no")}
                      className={`py-3 rounded-2xl font-sans text-xs tracking-widest uppercase border transition-all cursor-pointer ${
                        isAttending === "no"
                          ? "bg-stone-900 border-stone-900 text-[#fdfbf7] font-semibold"
                          : "bg-white border-gold-200 text-stone-600 hover:bg-gold-50/50"
                      }`}
                    >
                      ના, દિલગીરી સાથે
                    </button>
                  </div>
                </div>

                {isAttending === "yes" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6 overflow-hidden"
                  >
                    {/* Number of Guests */}
                    <div>
                      <label className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-2 block">
                        મહેમાનોની સંખ્યા
                      </label>
                      <select
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(Number(e.target.value))}
                        className="w-full px-5 py-3.5 rounded-2xl border border-gold-200 bg-white/70 text-sm text-stone-850 focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "મહેમાન" : "મહેમાનો"}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Meal Preference */}
                    <div>
                      <label className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-2 block">
                        ભોજનની પસંદગી
                      </label>
                      <select
                        value={mealPreference}
                        onChange={(e) => setMealPreference(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-2xl border border-gold-200 bg-white/70 text-sm text-stone-850 focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="vegetarian">શાકાહારી ભોજન</option>
                        <option value="vegan">વેગન ભોજન</option>
                        <option value="jain">જૈન ભોજન</option>
                        <option value="regular">બધી વાનગીઓ</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Additional Note */}
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-2 block">
                    શુભેચ્છા અથવા ખાસ વિનંતી
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="વર-વધૂ માટે કોઈ સંદેશો..."
                    className="w-full px-5 py-3.5 rounded-2xl border border-gold-200 bg-white/70 text-sm text-stone-850 placeholder-stone-400 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-stone-900 text-[#fdfbf7] font-sans text-xs tracking-widest uppercase hover:bg-gold-500 hover:text-stone-900 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.08)] cursor-pointer font-semibold active:scale-98"
                >
                  હાજરી કન્ફર્મ કરો
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-[2.5rem] p-10 border border-purple-300/30 shadow-lg text-center flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-300/10 rounded-full blur-2xl pointer-events-none" />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-purple-50 border-2 border-purple-400/40 flex items-center justify-center text-purple-600 mb-8 relative z-10"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>

              <h3 className="font-serif text-3xl font-light text-stone-900 mb-3 relative z-10">
                {isAttending === "yes" ? "આપની નોંધણી થઈ ગઈ છે!" : "આભાર"}
              </h3>
              
              <p className="font-sans text-sm text-stone-600 leading-relaxed font-light px-4 mb-8 relative z-10">
                {isAttending === "yes"
                  ? "અમે તમારી હાજરીથી અત્યંત ખુશ છીએ. તાજ મહેલ પેલેસમાં આપની રાહ જોવાશે!"
                  : "અમે આપની હાજરીને મિસ કરીશું, પરંતુ આપના આશીર્વાદ હંમેશા અમારી સાથે છે."}
              </p>

              <div className="flex gap-4 items-center justify-center relative z-10">
                <span className="w-8 h-[1px] bg-gold-300/30" />
                <Heart className="w-4 h-4 text-purple-500 fill-purple-500/20" />
                <span className="w-8 h-[1px] bg-gold-300/30" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
