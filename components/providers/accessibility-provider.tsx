"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type FontSize = "normal" | "large" | "xlarge";

type AccessibilityContextType = {
  highContrast: boolean;
  fontSize: FontSize;
  toggleHighContrast: () => void;
  setFontSize: (size: FontSize) => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSizeState] = useState<FontSize>("normal");

  useEffect(() => {
    const html = document.documentElement;
    setHighContrast(html.classList.contains("high-contrast"));
    if (html.classList.contains("font-scale-xl")) setFontSizeState("xlarge");
    else if (html.classList.contains("font-scale-lg")) setFontSizeState("large");
    else setFontSizeState("normal");
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("high-contrast", highContrast);
    try { localStorage.setItem("a11y-high-contrast", String(highContrast)); } catch {}
  }, [highContrast]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("font-scale-lg", "font-scale-xl");
    if (fontSize === "large") html.classList.add("font-scale-lg");
    if (fontSize === "xlarge") html.classList.add("font-scale-xl");
    try { localStorage.setItem("a11y-font-size", fontSize); } catch {}
  }, [fontSize]);

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        fontSize,
        toggleHighContrast: () => setHighContrast((p) => !p),
        setFontSize: setFontSizeState,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return ctx;
}