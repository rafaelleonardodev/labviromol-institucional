"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* SOBRE */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold">
            Laboratório de Virologia Molecular
          </h3>
          <p className="text-sm text-muted-foreground">
            Centro de excelência em pesquisa virológica molecular,
            comprometido com a inovação científica.
          </p>
        </div>

        {/* LINKS */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold">
            Links Rápidos
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              { label: "Sobre", href: "/sobre" },
              { label: "Equipe", href: "/equipe" },
              { label: "Projetos", href: "/pesquisa" },
              { label: "Publicações", href: "/publicacoes" },
            ].map((item) => (
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
            Contato
          </h3>

          <div className="text-sm text-muted-foreground space-y-1">
            <p>(00) 0000-0000</p>
            <p>contato@virologia.edu.br</p>
            <p>
              Universidade Federal<br />
              Campus Universitário
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-border text-center py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Laboratório de Virologia Molecular
      </div>
    </footer>
  );
}