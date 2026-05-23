"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t("common.footer.links.about"), href: "/about" },
    { label: t("common.footer.links.team"), href: "/team" },
    { label: t("common.footer.links.research"), href: "/research" },
    { label: t("common.footer.links.publications"), href: "/publications" },
  ];

  return (
    <footer className="mt-20 border-t bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* SOBRE */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold">
            {t("common.footer.copyright")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("common.footer.description")}
          </p>
        </div>

        {/* LINKS */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold">
            {t("common.footer.quickLinks")}
          </h3>

          <ul className="space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTATO */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold">
            {t("common.footer.contact")}
          </h3>

          <div className="text-sm text-muted-foreground space-y-1">
            <p>(+55) 41 3360-7950</p>
            <p>labpesquisahcufpr@gmail.com</p>
            <p>
              Av. Agostinho Leão Junior, 108 - Alto da Glória<br />
              Curitiba - PR<br />
              CEP 80030-110
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-border text-center py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {t("common.footer.copyright")}
      </div>
    </footer>
  );
}