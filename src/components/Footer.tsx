import { business } from "@/data/business";
import { AzulejoMotif } from "./tiles/AzulejoMotif";

export function Footer() {
  return (
    <footer className="border-t-2 border-cobalt/15 bg-porcelain px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <span className="block h-5 w-5">
            <AzulejoMotif variant="estrela" className="h-full w-full" />
          </span>
          <span className="text-sm font-medium text-cobalt-deep/70">
            {business.name} · {business.address.city}, {business.address.state}
          </span>
        </div>
        <p className="text-xs text-cobalt-deep/50">
          &copy; {new Date().getFullYear()} {business.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
