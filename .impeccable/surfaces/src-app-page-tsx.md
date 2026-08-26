---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

## Scope & mode

Full homepage (single-page marketing site), Persuade mode. Primary route `/`.

## Audience / job / action / proof / constraints

- Audience: East Bay CA homeowners/renters (Concord, Walnut Creek, San Ramon, Oakland, Dublin) comparing local cleaning services, often after a bad experience with a sloppy cleaner, or facing a specific trigger (move-out, deep clean overdue).
- Job: decide this crew is thorough/trustworthy enough to request a quote.
- Action: call (925) 876-1116 or submit a quote request.
- Proof: real 4.8★/122-review aggregate, five real curated review quotes, real founding story (2007, Mari & Eli combined solo businesses), real service list, real hours/address.
- Constraint: zero real photography of any kind (see PRODUCT.md). Entire identity is graphic/typographic/motion.

## Chosen direction: Azulejo Grid (approved comp: `.impeccable/mocks/hero/comp-1-scattered-field.png`)

World: an original, hand-designed azulejo (Brazilian/Portuguese glazed-tile) pattern language rendered as literal SVG tile modules. Page-wide grammar: tiles begin scattered/rotated/imperfect and spring into a perfectly registered grid as each section enters view — heritage motif + "restored to order" mechanic in one, with zero need for photography.

Sampled palette (from approved comp pixels, supersedes any earlier chip):
- Porcelain ground: `#F1F0E8`
- Cobalt (tile ink / primary): `#164A8C`
- Saffron (accent / CTA): `#E8AC28`
- Navy (UI chrome, nav text, deepest ink): `#0C2F72`
- Charcoal ink for grout-lines/structural hairlines on light ground: derive as a low-alpha navy, not a separate near-black (comp never shows a dark section)

Color strategy: Committed — porcelain neutral ground, cobalt tile pattern carrying 30–60% coverage, saffron reserved for CTA/stat/accent moments only.

Type: bold geometric/grotesk sans for display (avoid Fraunces/Playfair/Cormorant/Lora/etc. default list — no justification for a serif here). Candidate: a confident grotesk such as "Instrument Sans" or "Plus Jakarta Sans" for display, paired with "Inter" or "IBM Plex Sans" for body/UI — finalize by rendering a headline word against the comp before committing.

Memorable/signature moment: on load and at each scroll milestone, the tile grid for that section is scattered (random rotation ±8-20°, offset, slight opacity dip) and springs into perfect registration (Framer Motion spring, staggered by distance from a "keystone" tile) — never a plain fade/slide. Cursor proximity to a settled tile grid gives a very slight lift/settle (subtle, tactile, not neon-glow).

Donated raises folded into this world (from the concept-seed challenger round):
- **Registration discipline** (from film-cutting-bench + ukiyo-e challengers): every scatter→assemble motion snaps to an exact locked grid state, never a loose parallax drift — grout-lines must line up pixel-perfect at rest.
- **Asymmetric negative space** (from ikebana challenger): not every section is wall-to-wall tile; at least the hero and one mid-page section leave a deliberately large quiet field so the tile grid reads as composed, not wallpapered.
- **Poster-scale hero confidence** (from pulp-rocketship challenger): hero tile field is full-bleed/full-viewport, not a contained card.
- **Layered reveal for tiers** (from papercut challenger): the 4-service grid reveals as tiles laying down in sequence (regular clean = tile 1, ... maid service = tile 4), not a simultaneous fade-in of 4 identical cards.

Honest risk carried into build: an azulejo/tile motif for a *cleaning* company is a legible pun; craft is the only thing that keeps it from reading as a cliché — the tile pattern itself must be genuinely original (hand-drawn SVG geometry, several real motif variants) rather than a single repeated clipart unit, and the scatter/assemble motion must feel physical (spring, real stagger) not like a generic "fade up" wrapped in a tile shape.

## Implementation fidelity inventory (from approved comp)

| Region | Comp shows | Medium |
|---|---|---|
| Nav bar | Flat ivory bar, tile-pattern square logomark, 3 text links, pill "Call Now" button, thin cobalt double-line border | Semantic HTML/CSS; logomark as inline SVG (own azulejo motif, small) |
| Tile field (scattered + assembled) | Dozens of individually rotated/patterned square tiles, each a distinct floral/geometric motif, cobalt ink on porcelain, visible grout-line gaps | SVG tile components (3–4 hand-authored motif variants reused/rotated), positioned + animated via Framer Motion — not a raster background image, since it must scatter/reassemble as real DOM elements |
| Headline plaque | A "framed" sub-grid of tiles acting as a plaque border around the headline text | Semantic HTML text over the SVG tile grid, real heading levels, tile-grid used as backdrop only |
| Stat tile (4.8 · 122 reviews) | Distinct saffron tile, bordered, small icon + text | Component: saffron tile card, real text, small star icon (lucide-react or inline SVG) |
| CTA keystone tile | Saffron diamond/keystone shape, "Get a Free Quote" | Real `<button>`/`<a>`, styled as a keystone via clip-path or SVG shape — must remain a real interactive control, not a rasterized image |
| Grout lines / hairlines | Thin cobalt/porcelain seams between tiles | CSS borders / SVG stroke, not texture |

No photographic or illustrated-figure regions exist in the approved comp — nothing here requires raster/photo generation for the build itself (decorative background tiles are simple enough to be authored as SVG, not generated rasters).

## Unresolved / to decide during build

- Exact display/body font pair (render test against comp before locking).
- Whether the scatter/assemble plays once on load only, or re-triggers per-section on scroll-into-view (leaning: re-trigger per section via `useInView`, since that is the "site-wide grammar" requirement, not just a hero gimmick).
- Real service-area representation (map vs. text list) — default to a simple styled list of served cities (Concord + the cities real reviewers are writing from) rather than an embedded map, to stay inside the graphic/tile language.
