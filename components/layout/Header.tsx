"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const LANGUAGES = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
] as const;

function LanguageSwitcher() {
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const current = i18n.language?.slice(0, 2); // "pt-BR" → "pt"
  const next = current === "pt" ? "en" : "pt";

  function toggle() {
    document.cookie = `i18next=${next};path=/;max-age=31536000;SameSite=Lax`;
    i18n.changeLanguage(next);
    router.refresh();
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="flex items-center gap-1.5 font-medium"
      aria-label={`${t("common.switchLanguage")}: ${next.toUpperCase()}`}
    >
      <Languages className="w-4 h-4" aria-hidden="true" />
      <span aria-hidden="true">
        {LANGUAGES.find((l) => l.code === current)?.label ?? "PT"}
      </span>
    </Button>
  );
}

export function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t("common.home"),         href: "/" },
    { label: t("common.about"),        href: "/about" },
    { label: t("common.team"),         href: "/team" },
    { label: t("common.research"),     href: "/research" },
    { label: t("common.publications"), href: "/publications" },
    { label: t("common.equipments"),   href: "/equipments" },
    { label: t("common.contact"),      href: "/contact" },
  ];

  return (
    <header
      className="w-full sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" aria-label="LabViroMol — página inicial">
          <span className="flex items-center gap-2">
            <Image
              src="/images/small-logo.png"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-heading font-semibold text-lg">
              LabViroMol
            </span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav
          aria-label={t("common.mainNavigation")}
          className="hidden lg:flex items-center gap-2"
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "primary" : "ghost"}
              size="sm"
              asChild
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}

          {/* CTA */}
          <Button asChild className="ml-2 shadow-sm" size="sm">
            <Link href="/schedule">{t("common.schedule")}</Link>
          </Button>

          <LanguageSwitcher />
        </nav>

        {/* MOBILE MENU */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("common.openMenu")}
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64 p-6 items-center">
              <nav
                aria-label={t("common.mobileNavigation")}
                className="flex flex-col gap-3 max-w-[210px] w-full"
              >
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={pathname === item.href ? "primary" : "outline"}
                    className="w-full"
                    asChild
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
                  </Button>
                ))}

                {/* CTA */}
                <Button asChild className="mt-4 shadow-sm">
                  <Link href="/schedule" onClick={() => setOpen(false)}>{t("common.schedule")}</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}