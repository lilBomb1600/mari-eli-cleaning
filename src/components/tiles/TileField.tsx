import { DecorativeTile } from "./Tile";
import { AmbientTile } from "./AmbientTile";
import { distanceDelay } from "@/lib/scatter";
import { cn } from "@/lib/cn";

export function TileField({
  cols,
  rows,
  keystoneCol,
  keystoneRow,
  className,
  seedOffset = 0,
}: {
  cols: number;
  rows: number;
  keystoneCol?: number;
  keystoneRow?: number;
  className?: string;
  seedOffset?: number;
}) {
  const kc = keystoneCol ?? Math.floor(cols / 2);
  const kr = keystoneRow ?? Math.floor(rows / 2);
  const cells = Array.from({ length: cols * rows }, (_, i) => i);

  return (
    <div
      className={cn("grid gap-2 sm:gap-3", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {cells.map((i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const delay = distanceDelay(col, row, kc, kr);
        return (
          <AmbientTile key={i} index={i + seedOffset} delay={delay}>
            <DecorativeTile index={i + seedOffset} />
          </AmbientTile>
        );
      })}
    </div>
  );
}
