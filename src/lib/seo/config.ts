/**
 * SEO kit config for Mari Eli Cleaning Service (the only kit file edited for this project).
 *
 * Every value is read from src/data/business.ts (their Yelp listing, see PRODUCT.md "Evidence on Hand"). Nothing is
 * typed here as a new fact. Left out on purpose: the Yelp rating and review count (self-serving stars,
 * LAUNCH-STANDARD.md B5), the street address (they clean at the customer's home: service-area business, city + state
 * only), price range and email (not in the data file).
 */
import { business, services as businessServices } from "@/data/business";
import type { BusinessFacts, DayOfWeek, Locale, OgImage, PageEntry, ServiceFact } from "./types";

/** The preview URL. On launch: NEXT_PUBLIC_SITE_URL=https://www.their-domain.com in Vercel instead of editing this. */
export const FALLBACK_URL = "https://mari-eli-cleaning.vercel.app";

/** One URL, English only. */
export const LOCALES: Locale[] = ["en"];
export const DEFAULT_LOCALE: Locale = "en";

/**
 * public/og.jpg: the site's own azulejo tile motif with the name, city, founding year and phone from business.ts.
 * The site has no photography on purpose (PRODUCT.md: the only photos are customers' private homes).
 */
export const OG_IMAGE: OgImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: `${business.displayName}: house cleaning in ${business.address.city}, ${business.address.state}, on blue and saffron azulejo tiles`,
};

const { city, state } = business.address;

/** The name already says the trade, so brand first (LAUNCH-STANDARD.md A). Name as on the Yelp listing. */
export const HOME_TITLE = `${business.name} | House Cleaning in ${city}, ${state}`;
/** Their own tagline + the services, city and year the page already states (Hero, Services) + how to book. */
export const HOME_DESCRIPTION =
  `${business.tagline} Regular, deep and move-in/move-out cleaning in ${city}, ${state} since ${business.founded}. ` +
  `Call ${business.phone}.`;

/** "8:00 AM" -> "08:00" */
function to24h(t: string) {
  const [, h, m, mer] = t.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i) ?? [];
  if (!h) return undefined;
  const hour = (Number(h) % 12) + (mer.toUpperCase() === "PM" ? 12 : 0);
  return `${String(hour).padStart(2, "0")}:${m}`;
}

export const facts: BusinessFacts = {
  name: business.name,
  // House cleaning has no closer true schema.org type (LAUNCH-STANDARD.md B5).
  type: "LocalBusiness",
  description: business.tagline,
  telephone: business.phoneHref.replace(/^tel:/, ""),
  // Service-area business: city + state only, no street.
  address: { locality: city, region: state },
  // The cities the data file lists as served.
  serviceArea: business.citiesServed.map((c) => `${c}, ${state}`),
  image: [OG_IMAGE.url],
  // Posted hours (business.hours), in schema.org 24h form.
  hours: business.hours.flatMap((h) => {
    const [open, close] = h.hours.split("–").map(to24h);
    return open && close ? [{ days: [h.day as DayOfWeek], opens: open, closes: close }] : [];
  }),
  sameAs: [business.yelpUrl],
  paymentAccepted: business.paymentMethods.join(", "),
};

/** The four services on their listing, named and described the way the page does. */
export const services: ServiceFact[] = businessServices.map((s) => ({
  name: s.name,
  description: s.description,
  path: "/#services",
}));

/** One page. */
export const pages: PageEntry[] = [{ path: "/" }];
