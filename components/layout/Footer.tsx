"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";

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
      {/* DESENVOLVIMENTO */}
      <div className="space-y-3 max-w-6xl mx-auto px-6 py-12">
        <h3 className="font-heading text-lg font-semibold">
          {t("common.footer.development.title")}
        </h3>

        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            {t("common.footer.development.description")}
          </p>

          <div className="space-y-1">
            <p className="font-medium text-foreground">
              UFPR - Universidade Federal do Paraná
              <br/>
              GEPTA - Grupo de Estudos e Pesquisas em Tecnologia Aplicada 
            </p>
            <div className="mt-4">
              <Image
                src="/images/gepta.png"
                alt="Logo GEPTA"
                width={180}
                height={90}
                className="h-auto w-auto max-w-[180px]"
              />
            </div>
            <p>
              Prof. Dr. Luis Antônio Pereira Neves — {t("common.footer.development.advisor")}
            </p>

            <p>
              Dra. Caroline Mazetto Mendes — {t("common.footer.development.coAdvisor")}
            </p>

            <p>
              Rafael Leonardo da Silva — {t("common.footer.development.developer")}
            </p>

            <p>
              Vitor Deganelli Espinoza Moya — {t("common.footer.development.developer")}
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