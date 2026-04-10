import type { SiteConfig, SiteContent } from "../types";


export const SITE_CONFIG: SiteConfig = {
  title: "Ashley Rounds - Designer",
  author: "Ashley Rounds",
  description:
    "Floral designer based in Dallas, Texas. Specializing in floral arrangements from small bouquets to grand floral scenes.",
  lang: "en",
  siteLogo: "/ashleyrounds_big.jpg",
  navLinks: [
    { text: "Gallery", href: "/gallery" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    // { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    // { text: "Github", href: "https://github.com/immois/astro-zen" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

import { PHOTOS } from "./photos";

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ashley Rounds",
    specialty: "Designer",
    summary:
      "Floral designer based in Dallas, Texas. Specializing in floral arrangements from small bouquets to grand floral scenes.",
    email: "roundsashley@gmail.com",
  },

  about: {
    description: `
      Hi, I’m Ashley Rounds, a passionate floral designer with a knack for crafting beautiful floral arrangements. 
    `,
    image: "/ashleyrounds_big.jpg",
  },
  photos: PHOTOS,
};

// #5755ff
