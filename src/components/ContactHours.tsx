import { business } from "@/data/business";
import { ScatterTile } from "./tiles/ScatterTile";
import { AzulejoMotif } from "./tiles/AzulejoMotif";

export function ContactHours() {
  return (
    <section id="contact" className="bg-cobalt-deep px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12">
        <ScatterTile
          index={95}
          className="col-span-1 border-2 border-porcelain/30 bg-cobalt p-8 lg:col-span-7"
        >
          <h2 className="font-display text-2xl font-bold text-porcelain sm:text-3xl">
            Hours
          </h2>
          <dl className="mt-6 divide-y divide-porcelain/15">
            {business.hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between py-2.5 text-sm sm:text-base"
              >
                <dt className="font-medium text-porcelain/85">{h.day}</dt>
                <dd className="text-porcelain/70">{h.hours}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-porcelain/15 pt-6 text-sm text-porcelain/70">
            <span>
              Serving: {business.citiesServed.join(", ")}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-porcelain/60">
            {business.paymentMethods.map((method) => (
              <span
                key={method}
                className="border border-porcelain/25 px-2 py-1"
              >
                {method}
              </span>
            ))}
          </div>
        </ScatterTile>

        <ScatterTile
          index={99}
          delay={0.1}
          className="relative col-span-1 flex flex-col justify-between overflow-hidden border-2 border-saffron bg-saffron p-8 lg:col-span-5"
        >
          <AzulejoMotif
            variant="quadra"
            ink="var(--color-saffron-deep)"
            className="absolute -bottom-6 -right-6 h-32 w-32 opacity-25"
          />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold text-cobalt-deep sm:text-3xl">
              Get a Free Quote
            </h2>
            <p className="mt-3 max-w-xs text-sm text-cobalt-deep/80">
              310 Park St, Concord, CA 94520
            </p>
          </div>
          <a
            href={business.phoneHref}
            className="relative mt-8 inline-flex w-fit items-center gap-2 border-2 border-cobalt-deep bg-cobalt-deep px-6 py-4 font-display text-xl font-bold text-porcelain transition-transform hover:-translate-y-0.5 sm:text-2xl"
          >
            {business.phone}
          </a>
        </ScatterTile>
      </div>
    </section>
  );
}
