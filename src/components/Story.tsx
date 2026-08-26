import { AzulejoMotif } from "./tiles/AzulejoMotif";
import { ScatterTile } from "./tiles/ScatterTile";
import { business } from "@/data/business";

function MonogramTile({
  letter,
  variant,
  index,
}: {
  letter: string;
  variant: "estrela" | "flor";
  index: number;
}) {
  return (
    <ScatterTile index={index} className="relative aspect-square w-28 border-2 border-cobalt bg-porcelain sm:w-36">
      <AzulejoMotif
        variant={variant}
        ink="var(--color-cobalt-soft)"
        className="absolute inset-0 h-full w-full opacity-40"
      />
      <span className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-cobalt-deep sm:text-6xl">
        {letter}
      </span>
    </ScatterTile>
  );
}

export function Story() {
  return (
    <section id="story" className="bg-porcelain px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="col-span-1 flex items-center justify-center gap-4 lg:col-span-5">
          <MonogramTile letter="M" variant="estrela" index={11} />
          <span className="font-display text-3xl font-bold text-saffron-deep">
            +
          </span>
          <MonogramTile letter="E" variant="flor" index={17} />
        </div>

        <div className="col-span-1 lg:col-span-7">
          <h2 className="font-display text-3xl font-bold leading-tight text-cobalt-deep sm:text-4xl">
            Two cleaning businesses.
            <br />
            One wedding. One company.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cobalt/80 sm:text-lg">
            Mari and Eli, both born in Brazil, met in California at a mutual
            friend&rsquo;s wedding. At the time, they each ran their own solo
            cleaning business. Rather than compete for the same houses, they
            combined forces in {business.founded} and built Mari Eli Cleaning
            Service around the same idea: two sets of eyes on every room
            catch what one set misses.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cobalt/80 sm:text-lg">
            Nearly two decades later, that&rsquo;s still the whole method.
          </p>
        </div>
      </div>
    </section>
  );
}
