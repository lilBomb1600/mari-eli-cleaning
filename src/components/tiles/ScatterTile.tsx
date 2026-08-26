"use client";

import {
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { scatterFor } from "@/lib/scatter";

const SPRING = { type: "spring" as const, stiffness: 220, damping: 22, mass: 0.9 };

export function ScatterTile({
  index,
  delay = 0,
  strength = 1,
  once = true,
  className,
  children,
}: {
  index: number;
  delay?: number;
  strength?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-8% 0px -8% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const scatter = scatterFor(index, strength);

  // The element always renders as the same `motion.div` (server and client,
  // before and after mount) so useInView's observer never loses its node.
  // No `initial` prop is used — that would make framer-motion compute a
  // transform/opacity style string during SSR that its client runtime later
  // reformats with different float precision, tripping React's attribute
  // hydration check. Instead the scattered starting pose is applied
  // imperatively, client-only, after mount.
  useEffect(() => {
    if (prefersReducedMotion) return;
    controls.set({ x: scatter.x, y: scatter.y, rotate: scatter.rotate, opacity: 0.35 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (inView) {
      controls.start({ x: 0, y: 0, rotate: 0, opacity: 1, transition: { ...SPRING, delay } });
    } else if (!once) {
      controls.start({ ...scatter, opacity: 0.35, transition: { ...SPRING, delay: 0 } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      whileHover={{ y: -3, transition: { type: "spring", stiffness: 300, damping: 18 } }}
    >
      {children}
    </motion.div>
  );
}
