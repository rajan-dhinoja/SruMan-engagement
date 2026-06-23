"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationDict } from "@/data/translations";

type Language = "gu" | "en" | "hi";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  formatNumber: (num: number | string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("gu");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  const formatNumber = (num: number | string): string => {
    const numStr = String(num);
    if (language === "gu") {
      const guDigits = ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"];
      return numStr.replace(/[0-9]/g, (w) => guDigits[+w]);
    }
    if (language === "hi") {
      const hiDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
      return numStr.replace(/[0-9]/g, (w) => hiDigits[+w]);
    }
    return numStr;
  };

  // Helper function to get translation by path: e.g. t("welcome.title")
  const t = (keyPath: string): string => {
    const dict = translations[language] as any;
    const parts = keyPath.split(".");
    let current = dict;
    for (const part of parts) {
      if (current && current[part] !== undefined) {
        current = current[part];
      } else {
        console.warn(`Translation path not found: ${keyPath} in language ${language}`);
        // Fallback to Gujarati
        const guDict = translations["gu"] as any;
        let guCurrent = guDict;
        for (const guPart of parts) {
          if (guCurrent && guCurrent[guPart] !== undefined) {
            guCurrent = guCurrent[guPart];
          } else {
            return keyPath;
          }
        }
        return guCurrent;
      }
    }
    return typeof current === "string" ? current : keyPath;
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, formatNumber }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
