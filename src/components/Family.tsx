"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";

interface FamilyGroup {
  side: "Bride's Family" | "Groom's Family";
  parents: string;
  siblings?: string;
  blessing: string;
}

export default function Family() {
  const families: FamilyGroup[] = [
    {
      side: "Bride's Family",
      parents: "Ramesh Sharma અને Sunita Sharma",
      siblings: "Rohan Sharma (ભાઈ)",
      blessing: "ખુલ્લા દિલથી અમે આપનું સ્વાગત કરીએ છીએ. અમારી દીકરી Srushti ના લગ્ન જીવનના શ્રીગણેશમાં સહભાગી બનો.",
    },
    {
      side: "Groom's Family",
      parents: "Vijay Gupta અને Rekha Gupta",
      siblings: "Neha Gupta (બહેન)",
      blessing: "અમારા દીકરા Aman ની સગાઈ પ્રસંગે અમારી ખુશીઓ વધારવા પધારો. આપના આશીર્વાદ એ જ અમારી મૂડી.",
    },
  ];

  return (
    <section id="family-section" className="py-24 px-6 bg-[#fcf7fc] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-purple-600 uppercase font-medium">
            અમારા જીવનના સ્તંભો
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mt-3">
            પરિવારના આશીર્વાદ સાથે
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        {/* Family Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {families.map((fam, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="glass-card rounded-[2rem] p-8 border border-gold-300/20 shadow-sm relative group overflow-hidden flex flex-col justify-between text-center"
            >
              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100/10 rounded-full blur-2xl group-hover:bg-purple-300/20 transition-all duration-700 pointer-events-none" />

              <div>
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-200/25 flex items-center justify-center text-purple-600">
                    <Users className="w-5 h-5" />
                  </div>
                </div>

                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-purple-600 font-semibold mb-2 block">
                  {fam.side === "Bride's Family" ? "કન્યા પક્ષ" : "વર પક્ષ"}
                </span>

                <h3 className="font-serif text-2xl font-light text-stone-900 tracking-wide mb-1">
                  {fam.parents}
                </h3>
                
                {fam.siblings && (
                  <p className="font-sans text-xs text-purple-600 font-medium tracking-wide mb-6">
                    {fam.siblings}
                  </p>
                )}

                <div className="w-8 h-[1px] bg-gold-300/30 mx-auto mb-6" />

                <p className="font-sans text-sm text-stone-600 leading-relaxed font-light italic px-4">
                  &ldquo;{fam.blessing}&rdquo;
                </p>
              </div>

              {/* Bottom Subtle Decors */}
              <div className="flex justify-center gap-2 items-center mt-8 text-gold-400">
                <Sparkles className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
