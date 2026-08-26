import { Check } from "lucide-react";
import { detailWork } from "@/data/business";
import { ScatterTile } from "./tiles/ScatterTile";

export function DetailWork() {
  return (
    <section className="bg-porcelain px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-cobalt-deep sm:text-4xl">
          What reviewers actually mention isn&rsquo;t &ldquo;great
          service.&rdquo; It&rsquo;s this.
        </h2>
        <p className="mt-4 max-w-xl text-base text-cobalt/70">
          Real, specific lines pulled from Yelp reviews — the things a crew
          only notices if they&rsquo;re actually looking.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {detailWork.map((item, i) => (
            <ScatterTile
              key={item}
              index={i + 60}
              delay={i * 0.06}
              className="flex items-center gap-2 border-2 border-cobalt bg-porcelain px-4 py-3"
            >
              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center bg-saffron text-cobalt-deep"
              >
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-semibold text-cobalt-deep sm:text-base">
                {item}
              </span>
            </ScatterTile>
          ))}
        </div>
      </div>
    </section>
  );
}
