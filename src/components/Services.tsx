import { services } from "@/data/business";
import { ScatterTile } from "./tiles/ScatterTile";
import { AzulejoMotif } from "./tiles/AzulejoMotif";

export function Services() {
  const [regular, deep, move, maid] = services;

  return (
    <section id="services" className="bg-cobalt-deep px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-porcelain sm:text-4xl">
          Four ways in the door. One standard once we&rsquo;re inside.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Regular Home Cleaning — wide, left-aligned, corner watermark */}
          <ScatterTile
            index={30}
            className="relative overflow-hidden border-2 border-porcelain/25 bg-cobalt p-8 lg:col-span-7"
          >
            <AzulejoMotif
              variant="estrela"
              ink="var(--color-cobalt-soft)"
              className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 opacity-20"
            />
            <h3 className="relative font-display text-2xl font-bold text-porcelain sm:text-3xl">
              {regular.name}
            </h3>
            <p className="relative mt-4 max-w-sm text-base text-porcelain/75">
              {regular.description}
            </p>
          </ScatterTile>

          {/* Deep Cleaning — narrow, centered, stacked icon */}
          <ScatterTile
            index={31}
            delay={0.07}
            className="flex flex-col items-center justify-center border-2 border-porcelain/25 bg-cobalt px-6 py-10 text-center lg:col-span-5"
          >
            <AzulejoMotif
              variant="flor"
              ink="var(--color-saffron)"
              className="h-12 w-12"
            />
            <h3 className="mt-4 font-display text-xl font-bold text-porcelain">
              {deep.name}
            </h3>
            <p className="mt-3 text-sm text-porcelain/75">{deep.description}</p>
          </ScatterTile>

          {/* Move-In / Move-Out — icon as large watermark, text pinned to top */}
          <ScatterTile
            index={32}
            delay={0.14}
            className="relative overflow-hidden border-2 border-porcelain/25 bg-cobalt p-6 lg:col-span-5"
          >
            <h3 className="relative font-display text-lg font-bold text-porcelain">
              {move.name}
            </h3>
            <p className="relative mt-3 max-w-[14rem] text-sm text-porcelain/75">
              {move.description}
            </p>
            <AzulejoMotif
              variant="losango"
              ink="var(--color-cobalt-soft)"
              className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 opacity-30"
            />
          </ScatterTile>

          {/* Maid Services — ticket-stub shape, permanently tilted, inline icon */}
          <ScatterTile
            index={33}
            delay={0.21}
            className="border-2 border-saffron-deep bg-saffron p-6 [clip-path:polygon(0_0,100%_0,100%_78%,92%_100%,84%_78%,76%_100%,68%_78%,60%_100%,52%_78%,44%_100%,36%_78%,28%_100%,20%_78%,12%_100%,4%_78%,0_100%)] lg:col-span-7"
          >
            <div className="flex items-center gap-3">
              <AzulejoMotif
                variant="quadra"
                ink="var(--color-saffron-deep)"
                className="h-8 w-8 shrink-0"
              />
              <h3 className="font-display text-xl font-bold text-cobalt-deep">
                {maid.name}
              </h3>
            </div>
            <p className="mt-3 max-w-sm text-sm text-cobalt-deep/80">
              {maid.description}
            </p>
          </ScatterTile>
        </div>
      </div>
    </section>
  );
}
