import { services } from "@/data/business";
import { ScatterTile } from "./tiles/ScatterTile";
import { AzulejoMotif } from "./tiles/AzulejoMotif";
import { motifForIndex } from "./tiles/AzulejoMotif";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <section id="services" className="bg-cobalt-deep px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-porcelain sm:text-4xl">
          Four ways in the door. One standard once we&rsquo;re inside.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ScatterTile
              key={service.id}
              index={i + 30}
              delay={i * 0.08}
              className={cn(
                "relative flex flex-col justify-between border-2 border-porcelain/25 bg-cobalt p-6",
                i === 0 ? "sm:col-span-2 lg:col-span-2 lg:py-10" : "min-h-48"
              )}
            >
              <AzulejoMotif
                variant={motifForIndex(i)}
                ink="var(--color-cobalt-soft)"
                className={cn(
                  "absolute right-3 top-3 h-10 w-10 opacity-40",
                  i === 0 && "h-16 w-16"
                )}
              />
              <h3
                className={cn(
                  "font-display font-bold text-porcelain",
                  i === 0 ? "text-2xl sm:text-3xl" : "text-lg"
                )}
              >
                {service.name}
              </h3>
              <p
                className={cn(
                  "mt-4 text-porcelain/75",
                  i === 0 ? "max-w-sm text-base" : "text-sm"
                )}
              >
                {service.description}
              </p>
            </ScatterTile>
          ))}
        </div>
      </div>
    </section>
  );
}
