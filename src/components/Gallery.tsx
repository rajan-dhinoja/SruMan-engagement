"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  span: string; // Tailwind Grid spans for masonry feel
}

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      src: "/images/gallery_1.png",
      alt: "ભવ્ય વચન",
      span: "md:col-span-2 md:row-span-2 h-[450px]",
    },
    {
      src: "/images/gallery_2.png",
      alt: "હૂંફાળી પળો",
      span: "md:col-span-1 md:row-span-1 h-[210px]",
    },
    {
      src: "/images/gallery_3.png",
      alt: "સાથે ડગ માંડતા",
      span: "md:col-span-1 md:row-span-2 h-[450px]",
    },
    {
      src: "/images/gallery_4.png",
      alt: "પ્રેમનું નૃત્ય",
      span: "md:col-span-1 md:row-span-1 h-[210px]",
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery-section" className="py-24 px-6 bg-[#fcf7fc] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-purple-600 uppercase font-medium">
            યાદગાર પળો
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mt-3">
            અમારી ગેલેરી
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        {/* Grid Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-gold-300/10 shadow-sm ${img.span}`}
              onClick={() => setSelectedIdx(idx)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image component */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1c1917]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-10">
                <Maximize2 className="w-6 h-6 text-[#fdfbf7] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <span className="font-serif text-lg text-[#fdfbf7] tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 bg-stone-950/95 z-50 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-white/15 hover:border-white/20 transition-all cursor-pointer z-50"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Navigate */}
            <button
              onClick={handlePrev}
              className="absolute left-6 w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-white/15 hover:border-white/20 transition-all cursor-pointer z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[70vh] md:h-[80vh] flex flex-col justify-center items-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={images[selectedIdx].src}
                  alt={images[selectedIdx].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                <p className="font-serif text-lg text-white tracking-widest">
                  {images[selectedIdx].alt}
                </p>
                <p className="font-sans text-xs text-stone-400 mt-1 uppercase tracking-widest">
                  {selectedIdx + 1} / {images.length}
                </p>
              </div>
            </motion.div>

            {/* Right Navigate */}
            <button
              onClick={handleNext}
              className="absolute right-6 w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-white/15 hover:border-white/20 transition-all cursor-pointer z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
