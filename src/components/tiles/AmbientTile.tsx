"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { scatterFor } from "@/lib/scatter";

/**
 * A permanently-scattered decorative tile: it fades/scales in once, but its
 * rotation never resolves to 0. The approved comp's resting state keeps the
 * field imperfect around a clean assembled plaque — only content tiles
 * (ScatterTile) get the full scatter-to-registered assemble treatment.
 */
export function AmbientTile({
  index,
  delay = 0,
  className,
  children,
}: {
  index: number;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px -5% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const scatter = scatterFor(index, 1);
  const rotateStyle = { transform: `rotate(${scatter.rotate.toFixed(2)}deg)` };

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className} style={rotateStyle}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={rotateStyle} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
