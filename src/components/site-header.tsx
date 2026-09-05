import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import fatecCps from "@/assets/fatec-cps.png.asset.json";
import selo from "@/assets/selo-curso.png.asset.json";

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/doacao", label: "Doação" },
  { to: "/quem-pode-doar", label: "Quem pode doar" },
  { to: "/hemocomponentes", label: "Hemocomponentes" },
  { to: "/triagem", label: "Triagem e segurança" },
  { to: "/infeccoes", label: "Infecções" },
  { to: "/onde-doar", label: "Onde doar" },
  { to: "/materiais", label: "Materiais" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="border-b border-border bg-surface-2">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2">
          <div className="flex items-center gap-4">
            <img src={fatecCps.url} alt="Fatec Bauru e Centro Paula Souza" className="h-7 w-auto" />
            <img
              src={selo.url}
              alt="Selo do curso de Sistemas Biomédicos da Fatec Bauru"
              className="h-9 w-auto"
            />
          </div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Sistemas Biomédicos · 6º Semestre Noturno · Hematologia
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blood text-lg text-primary-foreground"
          >
            ♥
          </span>
          <span>
            <span className="block eyebrow">Projeto de extensão</span>
            <span className="block font-display text-lg font-extrabold uppercase leading-none text-ink">
              Doe sangue, compartilhe vida
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="rounded-md border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <nav aria-label="Assuntos do site" className="hidden border-t border-border lg:block">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="whitespace-nowrap border-b-2 border-transparent px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-blood"
              activeProps={{ className: "!border-blood !text-blood" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <nav aria-label="Assuntos do site" className="border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-semibold text-muted-foreground"
                activeProps={{ className: "!text-blood" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
