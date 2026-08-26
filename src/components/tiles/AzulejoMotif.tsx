export type MotifVariant = "estrela" | "quadra" | "losango" | "flor";

const VARIANTS: MotifVariant[] = ["estrela", "quadra", "losango", "flor"];

export function motifForIndex(index: number): MotifVariant {
  return VARIANTS[index % VARIANTS.length];
}

function Estrela() {
  const petals = Array.from({ length: 8 }, (_, i) => (
    <path
      key={i}
      d="M50,50 C58,38 58,20 50,6 C42,20 42,38 50,50 Z"
      transform={`rotate(${i * 45} 50 50)`}
    />
  ));
  return (
    <>
      {petals}
      <circle cx="50" cy="50" r="7" />
      <circle cx="50" cy="50" r="7" fill="var(--color-porcelain)" opacity="0.55" />
    </>
  );
}

function Quadra() {
  const corners = [0, 90, 180, 270];
  return (
    <>
      {corners.map((deg) => (
        <path
          key={deg}
          d="M0,0 L26,0 A26,26 0 0 1 0,26 Z"
          transform={`rotate(${deg} 50 50) translate(-50 -50)`}
        />
      ))}
      <rect x="42" y="42" width="16" height="16" transform="rotate(45 50 50)" />
    </>
  );
}

function Losango() {
  return (
    <>
      <rect
        x="22"
        y="22"
        width="56"
        height="56"
        transform="rotate(45 50 50)"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
      />
      <rect x="38" y="38" width="24" height="24" transform="rotate(45 50 50)" />
      <path d="M0,0 L16,0 L0,16 Z" />
      <path d="M100,0 L84,0 L100,16 Z" />
      <path d="M0,100 L16,100 L0,84 Z" />
      <path d="M100,100 L84,100 L100,84 Z" />
    </>
  );
}

function Flor() {
  const petals = [
    [50, 30],
    [70, 50],
    [50, 70],
    [30, 50],
  ];
  return (
    <>
      {petals.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="17" />
      ))}
      <circle cx="50" cy="50" r="9" fill="var(--color-porcelain)" opacity="0.6" />
      <circle cx="50" cy="50" r="4.5" />
    </>
  );
}

const MOTIF_COMPONENTS: Record<MotifVariant, () => React.ReactElement> = {
  estrela: Estrela,
  quadra: Quadra,
  losango: Losango,
  flor: Flor,
};

export function AzulejoMotif({
  variant,
  className,
  ink = "var(--color-cobalt)",
}: {
  variant: MotifVariant;
  className?: string;
  ink?: string;
}) {
  const Motif = MOTIF_COMPONENTS[variant];
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ color: ink }}
      fill="currentColor"
      aria-hidden="true"
    >
      <Motif />
    </svg>
  );
}
