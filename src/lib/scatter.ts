// Deterministic pseudo-random so server and client render the same
// "scattered" starting transform for a given tile index (no hydration mismatch).
function seeded(index: number): number {
  const x = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export type ScatterTransform = {
  x: number;
  y: number;
  rotate: number;
};

/** The tile's "before" state: rotated, offset, mid-assembly. */
export function scatterFor(index: number, strength = 1): ScatterTransform {
  const a = seeded(index);
  const b = seeded(index + 101);
  const c = seeded(index + 202);
  const angle = (a - 0.5) * 36 * strength; // ±18deg
  const dx = (b - 0.5) * 64 * strength;
  const dy = (c - 0.5) * 64 * strength;
  return { x: dx, y: dy, rotate: angle };
}

/** Stagger delay by distance from a keystone point, not just index order. */
export function distanceDelay(
  col: number,
  row: number,
  keystoneCol: number,
  keystoneRow: number,
  step = 0.045
) {
  const d = Math.hypot(col - keystoneCol, row - keystoneRow);
  return d * step;
}
