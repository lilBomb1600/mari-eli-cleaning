"use client";

import { AzulejoMotif } from "./tiles/AzulejoMotif";
import { business } from "@/data/business";

const LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-cobalt/20 bg-porcelain/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 grid-cols-2 grid-rows-2 gap-px border border-cobalt/40 bg-cobalt/40 p-px">
            <AzulejoMotif variant="estrela" className="h-full w-full bg-porcelain p-0.5" />
            <AzulejoMotif variant="flor" className="h-full w-full bg-porcelain p-0.5" />
            <AzulejoMotif variant="losango" className="h-full w-full bg-porcelain p-0.5" />
            <AzulejoMotif variant="quadra" className="h-full w-full bg-porcelain p-0.5" />
          </span>
          <span className="font-display text-sm font-bold tracking-tight text-cobalt-deep sm:text-base">
            Mari &amp; Eli
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cobalt-deep/80 transition-colors hover:text-cobalt-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={business.phoneHref}
          className="rounded-full bg-cobalt-deep px-4 py-2 text-sm font-semibold text-porcelain transition-colors hover:bg-cobalt sm:px-5"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
