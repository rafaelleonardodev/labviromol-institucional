"use client";

import { useEffect, useRef, useState } from "react";
import { Accessibility, X, Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useAccessibility, type FontSize } from "@/components/providers/accessibility-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FONT_OPTIONS: { value: FontSize; label: string; size: string }[] = [
  { value: "normal", label: "A", size: "text-sm" },
  { value: "large",  label: "A", size: "text-base" },
  { value: "xlarge", label: "A", size: "text-lg" },
];

export function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const { highContrast, fontSize, toggleHighContrast, setFontSize } = useAccessibility();
  const { t } = useTranslation();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  // Focus first element when panel opens
  useEffect(() => {
    if (open) {
      const first = panelRef.current?.querySelector<HTMLElement>("button, [tabindex]");
      first?.focus();
    }
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t("common.accessibility.label")}
          className={cn(
            "bg-card border border-border rounded-2xl shadow-xl",
            "p-5 flex flex-col gap-5 w-64",
            "animate-in fade-in-0 slide-in-from-bottom-2 duration-150"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-heading font-semibold text-sm">
              {t("common.accessibility.label")}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => { setOpen(false); triggerRef.current?.focus(); }}
              aria-label={t("common.accessibility.close")}
              className="h-7 w-7"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Contrast */}
          <section aria-labelledby="a11y-contrast-label">
            <p
              id="a11y-contrast-label"
              className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2"
            >
              {t("common.accessibility.contrast.label")}
            </p>
            <button
              role="switch"
              aria-checked={highContrast}
              onClick={toggleHighContrast}
              className={cn(
                "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                "border focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                highContrast
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground border-border hover:bg-accent"
              )}
            >
              {highContrast
                ? <Moon className="h-4 w-4 shrink-0" aria-hidden="true" />
                : <Sun  className="h-4 w-4 shrink-0" aria-hidden="true" />
              }
              {highContrast
                ? t("common.accessibility.contrast.on")
                : t("common.accessibility.contrast.off")}
            </button>
          </section>

          {/* Font size */}
          <section aria-labelledby="a11y-font-label">
            <p
              id="a11y-font-label"
              className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2"
            >
              {t("common.accessibility.fontSize.label")}
            </p>
            <div className="flex gap-2" role="group" aria-labelledby="a11y-font-label">
              {FONT_OPTIONS.map(({ value, label, size }) => (
                <button
                  key={value}
                  aria-pressed={fontSize === value}
                  onClick={() => setFontSize(value)}
                  aria-label={t(`common.accessibility.fontSize.${value}`)}
                  className={cn(
                    "flex-1 rounded-lg py-2 font-semibold transition-colors",
                    "border focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    size,
                    fontSize === value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-foreground border-border hover:bg-accent"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {t("common.accessibility.fontSize.hint")}
            </p>
          </section>

          {/* Reset */}
          <button
            onClick={() => {
              if (highContrast) toggleHighContrast();
              setFontSize("normal");
            }}
            className={cn(
              "text-xs text-muted-foreground underline underline-offset-4",
              "hover:text-foreground transition-colors focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-ring rounded"
            )}
          >
            {t("common.accessibility.reset")}
          </button>
        </div>
      )}

      {/* Trigger */}
      <Button
        ref={triggerRef}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={t("common.accessibility.trigger")}
        className="h-12 w-12 rounded-full shadow-lg"
        size="icon"
      >
        <Accessibility className="h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  );
}