import type { SiteConfig, SiteContent } from "../types";


export const SITE_CONFIG: SiteConfig = {
  title: "Ashley Rounds - Designer",
  author: "Ashley Rounds",
  description:
    "Floral designer based in Dallas, Texas. Specializing in floral arrangements from small bouquets to grand floral scenes.",
  lang: "en",
  siteLogo: "/ashleyrounds_big.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
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

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ashley Rounds",
    specialty: "Designer",
    summary:
      "Floral designer based in Dallas, Texas. Specializing in floral arrangements from small bouquets to grand floral scenes.",
    email: "roundsashley@gmail.com",
  },
  experience: [
    {
      company: "Ashley Rounds Designs",
      position: "Designer",
      startDate: "January 2003",
      endDate: "Present",
      summary: [
        "My experience will be described here in the near future",
      ],
    },
    // {
    //   company: "Zalmart",
    //   position: "Lead Android Developer",
    //   startDate: "May 2018",
    //   endDate: "Sept 2020",
    //   summary: [
    //     "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
    //     "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
    //     "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
    //   ],
    // },
    // {
    //   company: "Bankit",
    //   position: "Mobile Developer",
    //   startDate: "Feb 2017",
    //   endDate: "May 2018",
    //   summary: [
    //     "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
    //     "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
    //   ],
    // },
    // {
    //   company: "Driveer",
    //   position: "Frontend Developer",
    //   startDate: "Jun 2015",
    //   endDate: "Oct 2016",
    //   summary:
    //     "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    // },
  ],
  projects: [
    // {
    //   name: "Spotifu Music",
    //   summary: "A music streaming app that emulates Spotify's core features.",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/spotifu.png",
    // },
    // {
    //   name: "Shopp App",
    //   summary: "An e-commerce platform that replicates Shopify's key features.",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/shopify-clon.png",
    // },
    // {
    //   name: "ClonTagram",
    //   summary: "A social network that replicates the features of Instagram",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/clone-ig.png",
    // },
  ],
  about: {
    description: `
      Hi, I’m Ashley Rounds, a passionate floral designer with a knack for crafting beautiful floral arrangements. 
    `,
    image: "/ashleyrounds_big.jpg",
  },
  photos: [
    {
      slug: "spring-centerpiece",
      title: "Spring Centerpiece",
      image: "/ashleyrounds_big.jpg",
      category: "Centerpieces",
      date: "March 2024",
      description:
        "A lush spring centerpiece featuring peonies, garden roses, and seasonal greenery — perfect for a bridal shower or intimate dinner party.",
    },
    {
      slug: "garden-bouquet",
      title: "Garden Bouquet",
      image: "/alejandro-big.jpg",
      category: "Bouquets",
      date: "February 2024",
      description:
        "A romantic hand-tied garden bouquet with soft blush ranunculus, dusty miller, and trailing jasmine vine.",
    },
    {
      slug: "wedding-arch",
      title: "Wedding Arch",
      image: "/ashleyrounds_big.jpg",
      category: "Installations",
      date: "January 2024",
      description:
        "A sweeping floral arch adorned with white orchids, eucalyptus, and garden roses for an outdoor ceremony backdrop.",
    },
    {
      slug: "tablescape",
      title: "Botanical Tablescape",
      image: "/alejandro-big.jpg",
      category: "Tablescapes",
      date: "December 2023",
      description:
        "A richly layered holiday tablescape with deep burgundy dahlias, cedar boughs, and candlelit votives.",
    },
    {
      slug: "bridal-bouquet",
      title: "Bridal Bouquet",
      image: "/ashleyrounds_big.jpg",
      category: "Bouquets",
      date: "November 2023",
      description:
        "A cascading bridal bouquet of garden roses, sweet peas, and trailing ivy — designed to complement a modern ballroom wedding.",
    },
    {
      slug: "floral-installation",
      title: "Grand Floral Installation",
      image: "/alejandro-big.jpg",
      category: "Installations",
      date: "October 2023",
      description:
        "A statement ceiling installation using thousands of blooms — suspended amaranthus, blush peonies, and hanging wisteria — for a grand gala entrance.",
    },
  ],
};

// #5755ff
