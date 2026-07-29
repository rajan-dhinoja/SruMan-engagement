"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Trash2, Edit2, ShieldAlert, LogOut, ArrowUp, ArrowDown, ChevronDown, ChevronUp, X, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Wish {
  id: string;
  name: string;
  message: string;
  date: string;
  theme: "gold" | "purple" | "rose" | "emerald" | "blue";
}

export default function Blessings() {
  const { t } = useLanguage();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<Wish["theme"]>("gold");
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  // User wishes tracking
  const [myWishIds, setMyWishIds] = useState<string[]>([]);

  // Admin States
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [editingWish, setEditingWish] = useState<Wish | null>(null);
  const [clickCount, setClickCount] = useState(0);

  // Color Swatches definition (Removed Champagne/Grey)
  const colorThemes: { id: Wish["theme"]; name: string; bg: string; border: string; circle: string }[] = [
    { id: "gold", name: "Gold", bg: "from-amber-100 to-yellow-200", border: "border-amber-300", circle: "bg-amber-400" },
    { id: "purple", name: "Royal Purple", bg: "from-purple-100 to-indigo-200", border: "border-purple-300", circle: "bg-purple-400" },
    { id: "rose", name: "Rose Gold", bg: "from-rose-100 to-pink-200", border: "border-rose-300", circle: "bg-rose-400" },
    { id: "emerald", name: "Emerald", bg: "from-emerald-100 to-teal-200", border: "border-emerald-300", circle: "bg-emerald-400" },
    { id: "blue", name: "Soft Blue", bg: "from-blue-100 to-cyan-200", border: "border-blue-300", circle: "bg-blue-400" },
  ];

  // Fetch wishes from API
  const fetchWishes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/wishes?t=${Date.now()}`, {
        cache: "no-store",
      });
      if (response.ok) {
        const data = await response.json();
        setWishes(data);
      }
    } catch (error) {
      console.error("Error fetching wishes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishes();

    const mySaved = localStorage.getItem("sruman_my_wishes");
    if (mySaved) {
      try {
        setMyWishIds(JSON.parse(mySaved));
      } catch (e) {}
    }

    // Poll for new wishes every 3 seconds
    const interval = setInterval(fetchWishes, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePostWish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    try {
      const response = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
          theme: selectedTheme,
        }),
      });

      if (response.ok) {
        const newWish = await response.json();
        
        const updatedMyWishes = [newWish.id, ...myWishIds];
        setMyWishIds(updatedMyWishes);
        localStorage.setItem("sruman_my_wishes", JSON.stringify(updatedMyWishes));

        setName("");
        setMessage("");
        
        // Refresh wishes list
        await fetchWishes();
      }
    } catch (error) {
      console.error("Error posting wish:", error);
      alert("Failed to add wish. Please try again.");
    }
  };

  const handleHeaderClick = () => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        if (isAdmin) {
          setIsAdmin(false);
        } else {
          setShowPasswordModal(true);
        }
        return 0;
      }
      return next;
    });
  };

  const handleVerifyPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === "sruman@18082026") {
      setIsAdmin(true);
      setShowPasswordModal(false);
      setAdminPassword("");
    } else {
      alert("Incorrect admin passcode!");
    }
  };

  const handleDeleteWish = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this wish?")) {
      try {
        const response = await fetch(`/api/wishes?id=${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const updatedMy = myWishIds.filter((mid) => mid !== id);
          setMyWishIds(updatedMy);
          localStorage.setItem("sruman_my_wishes", JSON.stringify(updatedMy));
          
          // Refresh wishes list
          await fetchWishes();
        }
      } catch (error) {
        console.error("Error deleting wish:", error);
        alert("Failed to delete wish. Please try again.");
      }
    }
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingWish) return;
    
    try {
      const response = await fetch("/api/wishes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingWish),
      });

      if (response.ok) {
        setEditingWish(null);
        // Refresh wishes list
        await fetchWishes();
      }
    } catch (error) {
      console.error("Error updating wish:", error);
      alert("Failed to update wish. Please try again.");
    }
  };

  const handleClearAll = async () => {
    if (window.confirm("Delete ALL wishes from the wall?")) {
      try {
        // Delete each wish individually
        for (const wish of wishes) {
          await fetch(`/api/wishes?id=${wish.id}`, { method: "DELETE" });
        }
        
        setWishes([]);
        setMyWishIds([]);
        localStorage.setItem("sruman_my_wishes", JSON.stringify([]));
        
        // Refresh wishes list
        await fetchWishes();
      } catch (error) {
        console.error("Error clearing wishes:", error);
        alert("Failed to clear wishes. Please try again.");
      }
    }
  };

  const handleMoveWish = async (index: number, direction: "up" | "down") => {
    const newWishes = [...wishes];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newWishes.length) return;

    const temp = newWishes[index];
    newWishes[index] = newWishes[targetIndex];
    newWishes[targetIndex] = temp;

    setWishes(newWishes);
    
    // Save the reordered list by updating all wishes in a single request
    try {
      await fetch("/api/wishes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWishes),
      });
    } catch (error) {
      console.error("Error reordering wishes:", error);
    }
  };

  // Get user's own sent wishes
  const myWishes = wishes.filter((w) => myWishIds.includes(w.id));

  // Split wishes into two rows for the marquee
  const topWishes = wishes.filter((_, i) => i % 2 === 0);
  const bottomWishes = wishes.filter((_, i) => i % 2 !== 0);

  // Determine marquee wishes (duplicate array to ensure a seamless infinite looping scroll)
  const getMarqueeList = (list: Wish[]) => {
    if (list.length === 0) return [];
    if (list.length < 3) return [...list, ...list, ...list, ...list]; // Duplicate more if list is small
    return [...list, ...list];
  };

  const topMarqueeList = getMarqueeList(topWishes);
  const bottomMarqueeList = getMarqueeList(bottomWishes);

  return (
    <section id="blessings-section" className="py-8 px-4 bg-[#fffdf7] relative overflow-x-hidden">
      
      {/* Styles for Infinite Loop Wishes Train Marquee */}
      <style>{`
        @keyframes loopMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes loopMarqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-train {
          display: flex;
          width: max-content;
          animation: loopMarquee 40s linear infinite;
        }
        .marquee-train-reverse {
          display: flex;
          width: max-content;
          animation: loopMarqueeReverse 40s linear infinite;
        }
        .marquee-train:hover, .marquee-train-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Title with Admin Trigger */}
        <div className="text-center mb-16 relative">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-[#8a1525]/85 uppercase font-bold">
            {t("blessings.blessingsLove")}
          </span>
          <h2 
            onClick={handleHeaderClick}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8a1525] tracking-wide mb-0 mt-3 cursor-pointer select-none active:scale-95 transition-transform"
            title="Click 5 times for Admin Actions"
          >
            :: {t("blessings.mainTitle")} ::
          </h2>
          
          {/* Traditional Separator */}
          <div className="flex items-center justify-center gap-2 mt-1 mb-6">
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#8a1525]/50" />
            <span className="text-[#8a1525] text-lg">♦</span>
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#8a1525]/50" />
          </div>

          {/* Admin Mode Controls */}
          {isAdmin && (
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500 text-white font-sans text-[10px] font-bold uppercase tracking-wider shadow-sm animate-pulse">
                <ShieldAlert className="w-3.5 h-3.5" />
                Admin Controls Active
              </span>
              <button 
                onClick={() => setIsAdmin(false)}
                className="flex items-center gap-1 px-3 py-1 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-600 text-[10px] font-bold uppercase tracking-wider shadow-sm cursor-pointer"
              >
                <LogOut className="w-3 h-3 text-[#5e1f70]" />
                Logout
              </button>
              <button 
                onClick={handleClearAll}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-stone-900 hover:bg-red-650 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Form (4 cols) */}
          <div className="lg:col-span-4">
            {myWishes.length === 0 ? (
              <div className="glass-card rounded-3xl p-6 border border-gold-300/20 shadow-sm sticky top-28">
                <h3 className="font-serif text-xl font-light text-stone-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  {t("blessings.writeWishTitle")}
                </h3>

                <form onSubmit={handlePostWish} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t("blessings.inputNamePlaceholder")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 bg-white/70 text-sm focus:outline-none focus:border-gold-500 text-stone-800"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t("blessings.inputTextPlaceholder")}
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 bg-white/70 text-sm focus:outline-none focus:border-gold-500 text-stone-800 resize-none"
                      required
                    />
                  </div>

                  {/* Redesigned Card Theme Selector (Circular Color Picker) */}
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-bold mb-3 block">
                      Select Card Theme Color
                    </span>
                    <div className="flex gap-3 items-center">
                      {colorThemes.map((theme) => (
                        <button
                          key={theme.id}
                          type="button"
                          onClick={() => setSelectedTheme(theme.id)}
                          className={`w-7 h-7 rounded-full ${theme.circle} flex items-center justify-center shadow-sm cursor-pointer transition-all duration-350 ${
                            selectedTheme === theme.id 
                              ? "scale-120 ring-4 ring-purple-600/30 border-2 border-white" 
                              : "hover:scale-110"
                          }`}
                          title={theme.name}
                        >
                          {selectedTheme === theme.id && (
                            <Check className="w-3 h-3 text-white stroke-[3px]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-stone-900 text-[#fdfbf7] font-sans text-xs tracking-widest uppercase hover:bg-gold-500 hover:text-stone-900 transition-all flex items-center justify-center gap-2 cursor-pointer font-semibold"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {t("blessings.submitButton")}
                  </button>
                </form>
              </div>
            ) : (
              <div className="glass-card rounded-3xl p-6 border border-purple-300/30 shadow-sm sticky top-28 bg-gradient-to-br from-purple-50/50 to-pink-50/30 text-center flex flex-col items-center justify-center py-10 relative overflow-hidden">
                {/* Decorative glowing gradient backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl pointer-events-none" />
                
                <div className="w-12 h-12 rounded-full bg-purple-100/80 flex items-center justify-center text-purple-650 mb-4 z-10">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#5e1f70] mb-2 z-10">
                  {t("blessings.blessingSentTitle")}
                </h3>
                <p className="font-sans text-xs text-stone-605 leading-relaxed max-w-[240px] mx-auto z-10">
                  {t("blessings.blessingSentMsg")}
                </p>
                <div className="w-8 h-[1px] bg-gold-400/40 my-4 z-10" />
                <span className="font-serif italic text-xs text-[#5e1f70] font-bold z-10">
                  Srushti & Aman
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Moving Train / Loop Marquee (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6 overflow-hidden w-full">
            
            {/* User's Static Wish Highlight Slot (Always visible at the top of the wishes panel) */}
            {myWishes.length > 0 && (
              <div className="space-y-3 pt-2 pb-2 pl-1">
                <h4 className="font-sans text-[10px] uppercase tracking-widest text-[#5e1f70] font-bold">
                  {t("blessings.yourBlessing")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {myWishes.map((w) => {
                    const themeMatch = colorThemes.find(t => t.id === w.theme) || colorThemes[0];
                    return (
                      <div 
                        key={w.id} 
                        className={`p-6 rounded-[1.8rem] border bg-gradient-to-br backdrop-blur-md ${themeMatch.bg} ${themeMatch.border} ring-4 ring-purple-500/30 shadow-[0_12px_24px_rgba(147,51,234,0.15)] border-purple-550 flex flex-col justify-between relative`}
                      >
                        {/* Delete own wish button */}
                        <button
                          onClick={() => handleDeleteWish(w.id)}
                          className="absolute top-3 right-3 p-1.5 rounded-full bg-white border border-stone-200 text-red-500 hover:bg-red-50 shadow-sm cursor-pointer transition-colors z-20"
                          title="Delete My Wish"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-serif text-lg font-bold text-stone-900">{w.name}</h4>
                              <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full bg-purple-650 text-[#fdfbf7] font-sans text-[8px] tracking-wider uppercase font-bold shadow-sm">
                                Pinned Blessing ✨
                              </span>
                            </div>
                            <span className="font-sans text-[9px] text-stone-400 font-bold uppercase">{w.date}</span>
                          </div>
                          <p className="font-sans text-sm text-stone-900 leading-relaxed font-semibold">
                            &ldquo;{w.message}&rdquo;
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* View 1: Infinite Loop Marquee (Active in visitor mode, hidden/paused when admin wants list) */}
            {!isAdmin && !showAll && (
              <div className="w-full relative py-4 pl-1 flex flex-col gap-6">
                
                {/* Horizontal Scrolling Track - Top (Left to Right) */}
                <div className="overflow-x-hidden w-full relative select-none">
                  {/* Visual Train Track Lines */}
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-dashed bg-stone-200 -translate-y-1/2 pointer-events-none opacity-20" />
                  <div className="marquee-train flex gap-6 py-2">
                    {topMarqueeList.map((w, idx) => {
                      const isMyWish = myWishIds.includes(w.id);
                      const themeMatch = colorThemes.find(t => t.id === w.theme) || colorThemes[0];
                      let themeClass = `${themeMatch.bg} ${themeMatch.border}`;
                      if (isMyWish) {
                        themeClass += " ring-4 ring-purple-500/30 shadow-[0_12px_24px_rgba(147,51,234,0.15)] border-purple-400/80";
                      }

                      return (
                        <div
                          key={`${w.id}-top-loop-${idx}`}
                          className={`w-[260px] sm:w-[300px] flex-shrink-0 p-5 rounded-2xl border bg-gradient-to-br backdrop-blur-md ${themeClass} flex flex-col justify-between shadow-md relative whitespace-normal transition-transform duration-300 hover:scale-103`}
                        >
                          {/* Delete own wish button */}
                          {isMyWish && !isAdmin && (
                            <button
                              onClick={() => handleDeleteWish(w.id)}
                              className="absolute top-3 right-3 p-1.5 rounded-full bg-white border border-stone-200 text-red-500 hover:bg-red-50 shadow-sm cursor-pointer transition-colors z-20"
                              title="Delete My Wish"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                          <div>
                            <div className="flex justify-between items-start mb-2 pr-6">
                              <div>
                                <h4 className="font-serif text-sm sm:text-base font-bold text-stone-900 truncate max-w-[150px]">
                                  {w.name}
                                </h4>
                                {isMyWish && (
                                  <span className="inline-block px-1.5 py-0.5 rounded bg-purple-650 text-white font-sans text-[7px] font-bold uppercase tracking-wider">
                                    Your Blessing
                                  </span>
                                )}
                              </div>
                              <span className="font-sans text-[8px] text-stone-400 uppercase font-semibold">
                                {w.date === "હમણાં જ" ? t("blessings.justNow") : w.date === "૨ કલાક પહેલા" ? `2 ${t("blessings.hoursAgo")}` : w.date === "૧ દિવસ પહેલા" ? `1 ${t("blessings.daysAgo")}` : w.date}
                              </span>
                            </div>
                            <p className="font-sans text-xs text-stone-700 leading-relaxed font-semibold">
                              &ldquo;{w.message}&rdquo;
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Horizontal Scrolling Track - Bottom (Right to Left) */}
                {bottomMarqueeList.length > 0 && (
                  <div className="overflow-x-hidden w-full relative select-none">
                    {/* Visual Train Track Lines */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-dashed bg-stone-200 -translate-y-1/2 pointer-events-none opacity-20" />
                    <div className="marquee-train-reverse flex gap-6 py-2">
                      {bottomMarqueeList.map((w, idx) => {
                        const isMyWish = myWishIds.includes(w.id);
                        const themeMatch = colorThemes.find(t => t.id === w.theme) || colorThemes[0];
                        let themeClass = `${themeMatch.bg} ${themeMatch.border}`;
                        if (isMyWish) {
                          themeClass += " ring-4 ring-purple-500/30 shadow-[0_12px_24px_rgba(147,51,234,0.15)] border-purple-400/80";
                        }

                        return (
                          <div
                            key={`${w.id}-bottom-loop-${idx}`}
                            className={`w-[260px] sm:w-[300px] flex-shrink-0 p-5 rounded-2xl border bg-gradient-to-br backdrop-blur-md ${themeClass} flex flex-col justify-between shadow-md relative whitespace-normal transition-transform duration-300 hover:scale-103`}
                          >
                            {/* Delete own wish button */}
                            {isMyWish && !isAdmin && (
                              <button
                                onClick={() => handleDeleteWish(w.id)}
                                className="absolute top-3 right-3 p-1.5 rounded-full bg-white border border-stone-200 text-red-500 hover:bg-red-50 shadow-sm cursor-pointer transition-colors z-20"
                                title="Delete My Wish"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
                            <div>
                              <div className="flex justify-between items-start mb-2 pr-6">
                                <div>
                                  <h4 className="font-serif text-sm sm:text-base font-bold text-stone-900 truncate max-w-[150px]">
                                    {w.name}
                                  </h4>
                                  {isMyWish && (
                                    <span className="inline-block px-1.5 py-0.5 rounded bg-purple-650 text-white font-sans text-[7px] font-bold uppercase tracking-wider">
                                      Your Blessing
                                    </span>
                                  )}
                                </div>
                                <span className="font-sans text-[8px] text-stone-400 uppercase font-semibold">
                                  {w.date === "હમણાં જ" ? t("blessings.justNow") : w.date === "૨ કલાક પહેલા" ? `2 ${t("blessings.hoursAgo")}` : w.date === "૧ દિવસ પહેલા" ? `1 ${t("blessings.daysAgo")}` : w.date}
                                </span>
                              </div>
                              <p className="font-sans text-xs text-stone-700 leading-relaxed font-semibold">
                                &ldquo;{w.message}&rdquo;
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* View 2: Static Grid List (Active when ShowAll is expanded or when in Admin Mode) */}
            {(isAdmin || showAll) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-h-[600px] lg:overflow-y-auto pr-2 pt-2 pb-2 pl-1 scrollbar-thin">
                <AnimatePresence>
                  {wishes.map((w, idx) => {
                    const isMyWish = myWishIds.includes(w.id);
                    const themeMatch = colorThemes.find(t => t.id === w.theme) || colorThemes[0];
                    let themeClass = `${themeMatch.bg} ${themeMatch.border}`;
                    if (isMyWish) {
                      themeClass += " ring-4 ring-purple-500/30 shadow-[0_12px_24px_rgba(147,51,234,0.15)] border-purple-400/80";
                    }

                    return (
                      <motion.div
                        key={w.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className={`p-6 rounded-[1.8rem] border bg-gradient-to-br backdrop-blur-md ${themeClass} flex flex-col justify-between shadow-md relative group`}
                      >
                        <div>
                          {/* Admin Action Buttons & Reordering */}
                          {isAdmin && (
                            <div className="absolute top-3 right-3 flex items-center gap-1 z-20">
                              <button
                                onClick={() => handleMoveWish(idx, "up")}
                                disabled={idx === 0}
                                className="p-1 rounded bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                                title="Move Up"
                              >
                                <ArrowUp className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleMoveWish(idx, "down")}
                                disabled={idx === wishes.length - 1}
                                className="p-1 rounded bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                                title="Move Down"
                              >
                                <ArrowDown className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setEditingWish(w)}
                                className="p-1 rounded-full bg-white border border-stone-200 text-blue-500 hover:bg-blue-50 cursor-pointer"
                                title="Edit Wish"
                              >
                                <Edit2 className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => handleDeleteWish(w.id)}
                                className="p-1 rounded-full bg-white border border-stone-200 text-red-500 hover:bg-red-550 cursor-pointer"
                                title="Delete Wish"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          )}

                          {/* User delete own wish button */}
                          {isMyWish && !isAdmin && (
                            <button
                              onClick={() => handleDeleteWish(w.id)}
                              className="absolute top-3 right-3 p-1.5 rounded-full bg-white border border-stone-200 text-red-500 hover:bg-red-50 shadow-sm cursor-pointer transition-colors z-20"
                              title="Delete My Wish"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}

                          <div className="flex justify-between items-start mb-4 pr-12">
                            <div>
                              <h4 className="font-serif text-lg font-bold text-stone-900 truncate">
                                {w.name}
                              </h4>
                              {isMyWish && (
                                <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full bg-purple-650 text-[#fdfbf7] font-sans text-[8px] tracking-wider uppercase font-bold shadow-sm">
                                  Your Blessing ✨
                                </span>
                              )}
                            </div>
                            <span className="font-sans text-[9px] text-stone-400 uppercase font-semibold flex-shrink-0 mt-1">
                              {w.date === "હમણાં જ" ? t("blessings.justNow") : w.date === "૨ કલાક પહેલા" ? `2 ${t("blessings.hoursAgo")}` : w.date === "૧ દિવસ પહેલા" ? `1 ${t("blessings.daysAgo")}` : w.date}
                            </span>
                          </div>

                          <p className="font-sans text-sm text-stone-900 leading-relaxed font-semibold">
                            &ldquo;{w.message}&rdquo;
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}

            {/* Toggle View More/Less Button */}
            {!isAdmin && wishes.length > 0 && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#d4af37]/40 hover:border-[#5e1f70] bg-white/60 hover:bg-[#5e1f70]/5 text-stone-700 hover:text-[#5e1f70] font-sans text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer shadow-sm hover:scale-[1.03]"
                >
                  {showAll ? (
                    <>
                      <ChevronUp className="w-4 h-4 text-[#5e1f70]" />
                      {t("blessings.backToLoopView")}
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 text-[#5e1f70]" />
                      {t("blessings.viewAllWishes")} ({wishes.length} {t("blessings.cardsCount")})
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Secret Password Prompt Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl border border-gold-300/20 max-w-sm w-full p-6 shadow-2xl flex flex-col relative"
            >
              <button 
                onClick={() => setShowPasswordModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-605 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-serif text-xl font-bold text-[#5e1f70] mb-2">
                Admin Authentication
              </h3>
              <p className="font-sans text-xs text-stone-500 mb-4 leading-relaxed">
                Please enter the passcode to enable wish moderation and responses management.
              </p>
              <form onSubmit={handleVerifyPassword} className="space-y-4">
                <input
                  type="password"
                  placeholder="Enter admin PIN..."
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-sm focus:outline-none focus:border-[#5e1f70]"
                  autoFocus
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-stone-900 text-[#fdfbf7] hover:bg-[#5e1f70] font-sans text-xs uppercase tracking-widest transition-all cursor-pointer font-bold"
                >
                  Authorize
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Admin Edit Modal */}
      <AnimatePresence>
        {editingWish && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl border border-gold-300/20 max-w-md w-full p-6 shadow-2xl flex flex-col relative"
            >
              <button 
                onClick={() => setEditingWish(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-605 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-serif text-xl font-bold text-[#5e1f70] mb-4">
                Edit Wish Details
              </h3>

              <form onSubmit={handleSaveEdit} className="space-y-4">
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-1">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    value={editingWish.name}
                    onChange={(e) => setEditingWish({ ...editingWish, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-[#5e1f70]"
                    required
                  />
                </div>

                <div>
                  <label className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={editingWish.message}
                    onChange={(e) => setEditingWish({ ...editingWish, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-[#5e1f70] resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-1">
                    Date Indicator
                  </label>
                  <input
                    type="text"
                    value={editingWish.date}
                    onChange={(e) => setEditingWish({ ...editingWish, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-[#5e1f70]"
                    required
                  />
                </div>

                <div>
                  <label className="font-sans text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-2">
                    Card Theme Color
                  </label>
                  <div className="flex gap-3 items-center">
                    {colorThemes.map((theme) => (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() => setEditingWish({ ...editingWish, theme: theme.id })}
                        className={`w-7 h-7 rounded-full ${theme.circle} flex items-center justify-center shadow-sm cursor-pointer transition-all duration-350 ${
                          editingWish.theme === theme.id 
                            ? "scale-120 ring-4 ring-purple-600/30 border-2 border-white" 
                            : "hover:scale-110"
                        }`}
                        title={theme.name}
                      >
                        {editingWish.theme === theme.id && (
                          <Check className="w-3 h-3 text-white stroke-[3px]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-full bg-stone-900 hover:bg-[#5e1f70] text-white font-sans text-xs uppercase tracking-widest transition-all cursor-pointer font-bold"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingWish(null)}
                    className="flex-1 py-3 rounded-full border border-stone-200 hover:bg-stone-50 text-stone-605 font-sans text-xs uppercase tracking-widest transition-all cursor-pointer font-bold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
