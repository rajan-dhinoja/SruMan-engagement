"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Couple() {
  return (
    <section id="couple-section" className="py-24 px-6 bg-[#fcf9f2] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-gold-600 uppercase font-medium">
            વર-વધૂને મળો
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mt-3">
            જોડાયેલા હૃદય
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Srushti's Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Gold border shine overlay */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-purple-500/25 to-gold-400/25 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              {/* Main Card */}
              <div className="relative glass-card p-6 rounded-[2rem] overflow-hidden flex flex-col items-center text-center">
                <div className="relative w-72 h-80 w-full rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-gold-300/10">
                  <Image
                    src="/images/srushti.png"
                    alt="Srushti"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 384px"
                    priority
                  />
                </div>

                <h3 className="font-serif text-3xl font-light text-stone-900 tracking-wide mb-1">
                  Srushti
                </h3>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-purple-650 font-semibold mb-4">
                  કન્યા
                </span>
                
                <p className="font-sans text-sm text-stone-600 leading-relaxed font-light px-4 mb-6">
                  સુંદર સપનાઓથી ભરેલું હૃદય. તે Aman ની દુનિયામાં ખુશીઓ અને શાલીનતા લાવે છે, રોજિંદી પળોને યાદગાર વાર્તાઓમાં ફેરવે છે.
                </p>

                {/* Social/Decor */}
                <div className="flex gap-4 items-center justify-center">
                  <span className="w-8 h-[1px] bg-gold-300/30" />
                  <Heart className="w-4 h-4 text-purple-500 fill-purple-500/20" />
                  <span className="w-8 h-[1px] bg-gold-300/30" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Aman's Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Gold border shine overlay */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-gold-400/25 to-purple-500/25 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              {/* Main Card */}
              <div className="relative glass-card p-6 rounded-[2rem] overflow-hidden flex flex-col items-center text-center">
                <div className="relative w-72 h-80 w-full rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-gold-300/10">
                  <Image
                    src="/images/aman.png"
                    alt="Aman"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 384px"
                    priority
                  />
                </div>

                <h3 className="font-serif text-3xl font-light text-stone-900 tracking-wide mb-1">
                  Aman
                </h3>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-purple-650 font-semibold mb-4">
                  વરરાજ
                </span>
                
                <p className="font-sans text-sm text-stone-605 leading-relaxed font-light px-4 mb-6">
                  એક સ્વપ્નદ્રષ્ટા અને શક્તિનો સ્તંભ, જે માયાળુ અને હૂંફાળો છે. Aman Srushti ને એક નિશ્ચિત, અતૂટ અને આદરપૂર્વકનો પ્રેમ આપે છે.
                </p>

                {/* Social/Decor */}
                <div className="flex gap-4 items-center justify-center">
                  <span className="w-8 h-[1px] bg-gold-300/30" />
                  <Heart className="w-4 h-4 text-purple-600 fill-purple-600/20" />
                  <span className="w-8 h-[1px] bg-gold-300/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
