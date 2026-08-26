import { Star } from "lucide-react";
import { TileField } from "./tiles/TileField";
import { AzulejoMotif } from "./tiles/AzulejoMotif";
import { ScatterTile } from "./tiles/ScatterTile";
import { business } from "@/data/business";

function CornerMotif({ className }: { className?: string }) {
  return (
    <AzulejoMotif
      variant="losango"
      className={className}
      ink="var(--color-cobalt-soft)"
    />
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-porcelain"
    >
      <div className="absolute inset-0 p-4 sm:p-6">
        <TileField cols={10} rows={7} keystoneCol={3} keystoneRow={3} className="h-full" />
      </div>

      <div className="relative z-10 flex flex-1 items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
          <ScatterTile
            index={2}
            strength={0.6}
            className="relative col-span-1 border-2 border-cobalt bg-porcelain px-6 py-10 shadow-[8px_8px_0_0_rgba(22,74,140,0.12)] sm:px-10 sm:py-12 lg:col-span-7"
          >
            <CornerMotif className="absolute -left-3 -top-3 h-6 w-6" />
            <CornerMotif className="absolute -right-3 -top-3 h-6 w-6 rotate-90" />
            <CornerMotif className="absolute -bottom-3 -left-3 h-6 w-6 -rotate-90" />
            <CornerMotif className="absolute -bottom-3 -right-3 h-6 w-6 rotate-180" />

            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-cobalt-deep sm:text-6xl lg:text-7xl">
              Mari &amp; Eli
            </h1>
            <p className="mt-4 max-w-md text-lg font-medium text-cobalt sm:text-xl">
              {business.tagline}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border-2 border-saffron-deep bg-saffron px-4 py-2">
              <span className="font-display text-lg font-bold text-cobalt-deep">
                {business.rating}
              </span>
              <span aria-hidden="true" className="flex items-center gap-0.5 text-cobalt-deep">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="text-sm font-semibold text-cobalt-deep">
                · {business.reviewCount} reviews
              </span>
            </div>
          </ScatterTile>

          <div className="col-span-1 flex flex-col items-start justify-end gap-6 lg:col-span-5 lg:items-end lg:justify-between">
            <p className="max-w-xs text-sm font-medium text-cobalt/70 lg:text-right">
              Serving {business.address.city} and the greater East Bay since{" "}
              {business.founded}.
            </p>

            <ScatterTile index={5} delay={0.15}>
              <a
                href={business.phoneHref}
                className="relative flex flex-col items-center justify-center border-2 border-saffron-deep bg-saffron px-10 py-8 text-center transition-transform hover:-translate-y-1"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <span className="font-display text-base font-bold text-cobalt-deep sm:text-lg">
                  Get a Free
                </span>
                <span className="font-display text-base font-bold text-cobalt-deep sm:text-lg">
                  Quote
                </span>
              </a>
            </ScatterTile>
          </div>
        </div>
      </div>
    </section>
  );
}
