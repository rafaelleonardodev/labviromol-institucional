"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const LANGUAGES = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
] as const;

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.slice(0, 2); // "pt-BR" → "pt"

  function toggle() {
    const next = current === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="flex items-center gap-1.5 font-medium"
      title="Trocar idioma / Switch language"
    >
      <Languages className="w-4 h-4" />
      {LANGUAGES.find((l) => l.code === current)?.label ?? "PT"}
    </Button>
  );
}

export function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const navItems = [
    { label: t("common.home"), href: "/" },
    { label: t("common.about"), href: "/about" },
    { label: t("common.team"), href: "/team" },
    { label: t("common.research"), href: "/research" },
    { label: t("common.publications"), href: "/publications" },
    { label: t("common.equipments"), href: "/equipments" },
    { label: t("common.contact"), href: "/contact" },
  ];

  return (
    <header className="
      w-full
      sticky top-0 z-50
      border-b border-border
      bg-background/80 backdrop-blur
    ">
      <div className="
        max-w-6xl
        mx-auto
        px-6
        h-16
        flex
        items-center
        justify-between
      ">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-md" />
          <span className="font-heading font-semibold text-lg">
            LabViroMol
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={pathname === item.href ? "primary" : "ghost"}
              className="data-[active=true]:bg-default/10"
              size="sm"
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}

          {/* CTA */}
          <Button asChild className="ml-2 shadow-sm" size="sm">
            <Link href="/schedule">Agendar</Link>
          </Button>
          
          <LanguageSwitcher />

        </nav>

        {/* MOBILE MENU */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64 p-6">
              <nav className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    variant={pathname === item.href ? "primary" : "ghost"}
                    className="data-[active=true]:bg-default/10"
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}

                {/* CTA */}
                <Button asChild className="mt-4 shadow-sm">
                  <Link href="/schedule">Agendar</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}