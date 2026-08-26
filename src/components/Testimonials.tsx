import { reviews, business } from "@/data/business";
import { ScatterTile } from "./tiles/ScatterTile";
import { cn } from "@/lib/cn";

const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-porcelain px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl font-display text-3xl font-bold leading-tight text-cobalt-deep sm:text-4xl">
            {business.rating} stars. {business.reviewCount} reviews. Real
            ones.
          </h2>
          <a
            href={business.yelpUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-cobalt underline underline-offset-4 hover:text-cobalt-deep"
          >
            Read them all on Yelp →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {reviews.map((review, i) => (
            <ScatterTile
              key={review.name}
              index={i + 80}
              delay={i * 0.07}
              className={cn(
                "flex flex-col justify-between border-2 border-cobalt/30 bg-white/40 p-6",
                SPANS[i]
              )}
            >
              <p
                className={cn(
                  "leading-relaxed text-cobalt-deep/90",
                  i === 0 ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                )}
              >
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="font-display text-sm font-bold text-cobalt-deep">
                  {review.name}
                </span>
                <span className="text-xs text-cobalt/60">
                  {review.location}
                </span>
                {review.elite && (
                  <span className="border border-saffron-deep bg-saffron px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cobalt-deep">
                    Yelp Elite
                  </span>
                )}
              </div>
            </ScatterTile>
          ))}
        </div>
      </div>
    </section>
  );
}
