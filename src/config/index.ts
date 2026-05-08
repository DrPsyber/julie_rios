import type { SiteConfig, SiteContent } from "../types";


export const SITE_CONFIG: SiteConfig = {
  title: "Julie Rios - Artist",
  author: "Julie Rios",
  description:
    "Artist based in Dallas, Texas. Specializing in unique style and vision laid down on canvas.",
  lang: "en",
  siteLogo: "/julierios.jpeg",
  navLinks: [
    { text: "Gallery", href: "/gallery" },
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
  "name": "Julie Rios",
  "specialty": "Artist",
  "summary": "Unique style and vison laid down on canvas. Made in Dallas, Texas. ",
  "email": "julie.rios@gmail.com"
},
  about: {
  "description": "Hi, I’m Julie Rios, an artist who turns ideas into visual art. With a sharp eye for design and a deep love for creativity, I create pieces that are anything but ordinary. ",
  "image": "/julierios.jpeg"
},
  photos: PHOTOS,
};
