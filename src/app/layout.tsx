import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mari & Eli Cleaning Service | Concord, CA",
  description:
    "Mari & Eli will have your home Brazilian clean in no time. 4.8 stars, 122 reviews. Regular cleaning, deep cleaning, move-in/move-out, and maid services in Concord, Walnut Creek, San Ramon, Oakland & Dublin.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${inter.variable} antialiased`}
    >
      <body>
        {/*
          THESIS: An original azulejo tile grid — scattered on load, springing into flawless
          registration — replaces stock "friendly cleaner" cheer with heritage-plus-order as the
          whole visual system, since no real photography exists.
          OWN-WORLD: Porcelain #F1F0E8 ground, cobalt #164A8C tile ink, saffron #E8AC28 accent,
          navy #0C2F72 chrome; Unbounded display, Inter body; every tile a hand-authored SVG
          motif with grout-line hairlines — no stock cards, no photography.
          STORY: Disorder resolves into a registered tile grid as the visitor scrolls, while real
          proof (4.8★/122 reviews, the 2007 founding story, specific praised detail-work) rides
          inside that same grid; ends on a keystone CTA.
          FIRST VIEWPORT: Full-bleed scattered tile field snapping into an aligned plaque holding
          "Mari & Eli," the 4.8★ stat tile, and a saffron keystone CTA bottom-right; nav above.
          FORM: Azulejo Grid — Impeccable's Pick card, direction round seed f91341d4.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
          review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
        */}
        {children}
      </body>
    </html>
  );
}
