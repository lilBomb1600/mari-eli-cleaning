export const business = {
  name: "Mari Eli Cleaning Service",
  displayName: "Mari & Eli",
  tagline: "Mari & Eli will have your home Brazilian clean in no time!",
  founded: 2007,
  phone: "(925) 876-1116",
  phoneHref: "tel:+19258761116",
  address: {
    street: "310 Park St",
    city: "Concord",
    state: "CA",
    zip: "94520",
  },
  rating: 4.8,
  reviewCount: 122,
  yelpUrl: "https://www.yelp.com/biz/mari-eli-cleaning-service-concord",
  hours: [
    { day: "Monday", hours: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "7:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
    { day: "Friday", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "8:00 AM – 6:00 PM" },
  ],
  paymentMethods: ["Zelle", "Credit Cards"],
  citiesServed: [
    "Concord",
    "Walnut Creek",
    "San Ramon",
    "Oakland",
    "Dublin",
  ],
} as const;

export type Service = {
  id: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "regular",
    name: "Regular Home Cleaning",
    description:
      "A standing crew that knows your home, on a schedule that fits your week.",
  },
  {
    id: "deep",
    name: "Deep Cleaning",
    description:
      "Blinds, baseboards, ceiling fans, inside the cabinets — the pass that catches everything a regular clean skips.",
  },
  {
    id: "move",
    name: "Move-In / Move-Out Cleaning",
    description:
      "Handed over spotless, or inherited spotless. Built for the deadline a lease actually gives you.",
  },
  {
    id: "maid",
    name: "Maid Services",
    description:
      "Ongoing upkeep for a household that doesn't have time to fall behind.",
  },
];

export type Review = {
  quote: string;
  name: string;
  location: string;
  elite?: boolean;
};

export const reviews: Review[] = [
  {
    quote:
      "I'd give them 10 stars if I could. This is more than a deep cleaning — this is organizing, and wow, these ladies are skilled! It is so, so clear that they are thorough. The best part is running into areas of my house that they cleaned that I hadn't even thought about tidying up.",
    name: "Karla B.",
    location: "Oakland, CA",
    elite: true,
  },
  {
    quote:
      "The three ladies came to visit our house with big smiles, which was a good relief, especially when having someone in your house. Efficient, quick, and delightful crew! We've used many other companies before, and I'm happy I found this company.",
    name: "Hanna L.",
    location: "San Ramon, CA",
    elite: true,
  },
  {
    quote:
      "They were timely, efficient and left my house spotless after a much needed deep cleaning. I also have a large dog and young child and they seamlessly navigated around these distractions while cleaning. We will definitely be using them again.",
    name: "Emily I.",
    location: "Los Angeles, CA",
  },
  {
    quote:
      "They cleaned everything including the blinds, window sills, ceiling fans, inside the cabinets. There was no need to look over their shoulder. Very thorough with their job, good communication skills.",
    name: "Kumar S.",
    location: "Fort Worth, TX",
  },
  {
    quote:
      "They did SUCH a good job!! We were definitely overdue for a real deep clean and they tackled it all — including our master shower that I wasn't sure could be saved.",
    name: "Jay D.",
    location: "Walnut Creek, CA",
  },
];

export const detailWork = [
  "Blinds, slat by slat",
  "Baseboards & window sills",
  "Ceiling fans",
  "Inside the cabinets",
  "Behind the shower glass",
  "The corners a mop skips",
];
