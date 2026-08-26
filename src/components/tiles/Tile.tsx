import { AzulejoMotif, motifForIndex } from "./AzulejoMotif";
import { cn } from "@/lib/cn";

export function DecorativeTile({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "aspect-square border border-cobalt/25 bg-porcelain p-2",
        className
      )}
      aria-hidden="true"
    >
      <AzulejoMotif variant={motifForIndex(index)} className="h-full w-full" />
    </div>
  );
}
