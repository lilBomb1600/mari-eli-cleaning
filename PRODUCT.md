# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion, static export deployed to Vercel. This is Arman Digital's standard stack across every portfolio demo site (10 prior sites built this way); not a fresh decision for this project.

## Users

Homeowners and renters in Concord, CA and the surrounding East Bay (Walnut Creek, San Ramon, Oakland, Dublin — the actual cities Mari Eli's Yelp reviewers are writing from) who need their home cleaned and are comparing local cleaning services, usually while short on time or dreading a specific dirty/cluttered state (move-out, post-holiday, before guests, after neglecting deep-clean tasks like blinds/baseboards/ceiling fans). Secondary "user" of this specific artifact: Arman, showing the live site directly to Mari & Eli (the business owners) as a sales deliverable to close a real client relationship.

## Product Purpose

A marketing site for Mari Eli Cleaning Service that converts a visitor comparing local cleaning companies into a quote request/call. Success = the visitor trusts the crew's thoroughness and reliability enough to request pricing/availability.

## Positioning

Not the cheapest or the biggest — the one that treats your home like it's theirs. Founded 2007 by Mari and Eli, two Brazilian-born cleaners who each ran solo cleaning businesses before combining forces after meeting at a mutual friend's wedding in California. Their own tagline: "Mari & Eli will have your home Brazilian clean in no time." What repeat reviewers actually praise (not generic "great service" — specific, repeatable claims): they clean things you didn't ask about (blinds, window sills, ceiling fans, inside cabinets, baseboards), the crews are warm/personable in your home, and 4.8★ across 122 reviews is a real, large, durable sample — not a handful of curated quotes.

## Operating Context

Quote → in-home (or remote) walkthrough/estimate → scheduled cleaning by a crew (typically 2 people) → recurring or one-time visit. Services offered (verified via Yelp "Services Offered — Verified by Business"): Regular home cleaning, Deep cleaning, Move-in or move-out cleaning, Maid services. Payment accepted: Zelle, credit cards. Serves the greater Concord, CA area. Hours: Mon 8am-6pm, Tue 7am-6pm, Wed-Sun 8am-6pm (open all 7 days).

## Capabilities and Constraints

- Real business facts only (name, address, phone, hours, services, rating count) — sourced from Mari Eli Cleaning Service's Yelp listing (yelp.com/biz/mari-eli-cleaning-service-concord), verified 2026-08-25.
- **No real photography of any kind.** The business's only available photos are 26 Yelp-uploaded customer photos, and every one of them is a private-home snapshot (a child's personalized bedroom, a family bed with their dog, personal fridge photos, a screenshot of a private billing-dispute text thread) rather than the business's own marketing photography. Using them would expose strangers' private homes on a commercial site without their consent for that purpose. Confirmed with the site owner (Arman): build with zero real photos, zero stock photos, zero fabricated/AI "customer" or "crew" photos, zero fake people. The entire visual identity must be typographic/graphic/motion-driven (precedent: Feel Goods Barbershop, an earlier portfolio site with the same no-photo constraint).
- AI-generated imagery is allowed only as abstract/graphic material (textures, gradients, particle/light studies, non-figurative motifs) during comp exploration and, if it earns its place, in the final build — never photoreal people, homes, or "before/after" scenes standing in for real customers.
- No booking/payment backend — this is a static marketing demo site (matches every prior Arman Digital site); CTAs point to tel: link and a contact/quote form or mailto, not a live scheduling system.

## Brand Commitments

- Business name is "Mari Eli Cleaning Service" (no ampersand in the legal/Yelp name), though the owners' own bio copy uses "Mari & Eli" — both forms are real and in use; site can use "Mari & Eli" as the friendly/display form (matches their own "About the Business" copy) while keeping "Mari Eli Cleaning Service" for formal/legal mentions (footer, schema, etc).
- Real owner-written tagline to preserve verbatim somewhere prominent: "Mari & Eli will have your home Brazilian clean in no time!"

## Evidence on Hand

- Yelp listing: 4.8★ average, 122 reviews, established 2007. Real address (310 Park St, Concord, CA 94520), phone ((925) 876-1116), hours, services list, payment methods — all pulled live 2026-08-25.
- Five real review quotes selected as testimonials (positive only; negative reviews exist on the listing — e.g. a punctuality complaint — and are deliberately excluded from testimonial use, consistent with how every other Arman Digital site curates real reviews):
  1. Karla B., Oakland, CA (Yelp Elite) — praises depth of clean and organizing beyond expectations.
  2. Hanna L., San Ramon, CA (Yelp Elite) — praises the crew's warmth and efficiency.
  3. Emily I., Los Angeles, CA — praises thoroughness with a dog and young child in the house.
  4. Kumar S., Fort Worth, TX — praises thoroughness on a move-out clean (blinds, sills, ceiling fans, cabinets).
  5. Jay D., Walnut Creek, CA — praises a deep clean that tackled a shower he doubted could be saved.
- No case studies, press, or before/after documentation exist that are usable (see photo constraint above) — future work must not fabricate any.

## Product Principles

1. Real, specific proof over generic reassurance — lead with the things reviewers actually praise (unasked-for detail work, crew warmth, a large real rating sample), never invented claims.
2. The absence of photography is not a deficit to hide — it's the reason the whole page gets to be a motion/graphic showcase; the "grime → spotless" transformation the business actually sells is the visual spine, not a workaround.
3. Every real fact (address, hours, phone, rating) stays literally accurate; stylize the presentation, never the numbers.
4. This is a sales artifact for Arman as much as a site for Mari & Eli — it needs to visibly justify a premium, cutting-edge feel on first scroll, consistent with the rest of the portfolio's "pop and animation" bar.

## Accessibility & Inclusion

No user-specific requirement established. Standard target: respect `prefers-reduced-motion` given the animation-heavy brief (Arman's prior sites — G&M Landscape, Iron Therapy Gym — all gate cursor/scroll motion behind this, and it's expected here too).
