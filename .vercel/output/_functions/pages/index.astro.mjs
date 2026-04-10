import { c as createComponent, m as maybeRenderHead, a as addAttribute, b as renderTemplate, d as createAstro, g as renderSlot, r as renderComponent, f as renderScript } from '../chunks/astro/server_C4tXrvrL.mjs';
import 'piccolore';
import { $ as $$Layout, S as SITE_CONTENT } from '../chunks/Layout_CMmjrIb9.mjs';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets__lZc9KEq.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, specialty, summary, email } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 md:py-32" id="#hero"> <h1 class="mb-1.5 font-serif text-7xl font-bold tracking-tightest text-white sm:text-8xl md:mb-0 md:text-9xl"> ${name} </h1> <p class="mb-9 font-serif text-4xl leading-[46px] font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl"> ${specialty} </p> <p class="mb-16 text-base font-normal text-neutral md:text-lg"> ${summary} </p> <a class="inline-block rounded-full bg-primary px-8 py-5 text-sm leading-5 font-medium text-[#fff]"${addAttribute(`mailto:${email}`, "href")}>Get in Touch</a> </section>`;
}, "/Users/zmetteer/GitHub/ashley_rounds/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(href, "id")} class="py-24"> <h2 class="mb-14 font-serif text-4xl font-bold tracking-tighter text-white md:text-5xl"> ${text} </h2> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/zmetteer/GitHub/ashley_rounds/src/components/Section.astro", void 0);

const $$Astro$1 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  const { description, image, name } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "About Me", "href": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center gap-12 md:flex-row md:gap-8"> <p class="w-auto text-base text-neutral md:pr-5">${description}</p> <div class="h-80 w-64 flex-shrink-0 rotate-[5deg] bg-white p-4 md:rotate-[7deg]"> ${renderComponent($$result2, "Image", $$Image, { "class": "object-cover", "src": image, "width": "260", "height": "260", "alt": name })} </div> </div> ` })}`;
}, "/Users/zmetteer/GitHub/ashley_rounds/src/components/About.astro", void 0);

const $$Astro = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { photos, items_per_slide = 7 } = Astro2.props;
  const extendedPhotos = [
    ...photos.slice(-items_per_slide),
    ...photos,
    ...photos.slice(0, items_per_slide)
  ];
  const tilts = extendedPhotos.map(
    () => (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 9 + 1)
  );
  return renderTemplate`${maybeRenderHead()}<div class="relative" id="carousel"${addAttribute(items_per_slide, "data-items-per-slide")}${addAttribute(photos.length, "data-total-original")} aria-roledescription="carousel" aria-label="Photo gallery carousel"> <!-- Track --> <div class="flex transition-transform duration-700 ease-in-out py-20" id="carousel-track" aria-live="polite"> ${extendedPhotos.map((photo, i) => renderTemplate`<div class="carousel-slide relative shrink-0 transition-all duration-700 ease-in-out"${addAttribute(`width: ${100 / items_per_slide}%`, "style")} role="group"${addAttribute(tilts[i], "data-tilt")} aria-roledescription="slide"${addAttribute(`${i % photos.length + 1} of ${photos.length}: ${photo.title}`, "aria-label")}> <a${addAttribute(`/gallery/${photo.slug}`, "href")} tabindex="-1" class="carousel-content block transition-all duration-700 ease-in-out origin-center bg-white p-4 pb-20 shadow-2xl rounded-sm max-w-lg mx-auto"> <div class="relative overflow-hidden aspect-square bg-neutral-100"> ${renderComponent($$result, "Image", $$Image, { "src": photo.image, "alt": photo.title, "width": 400, "height": 400, "class": "h-full w-full object-cover" })} </div> <div class="absolute bottom-6 left-0 right-0 px-4 text-center"> <h3 class="text-2xl font-bold text-neutral-800 tracking-tight" style="font-family: 'Caveat', cursive;"> ${photo.title} </h3> </div> </a> </div>`)} </div> <!-- Prev button --> <button type="button" id="carousel-prev" class="absolute left-3 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Previous photo"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="m15 18-6-6 6-6"></path> </svg> </button> <!-- Next button --> <button type="button" id="carousel-next" class="absolute right-3 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Next photo"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="m9 18 6-6-6-6"></path> </svg> </button> </div> ${renderScript($$result, "/Users/zmetteer/GitHub/ashley_rounds/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zmetteer/GitHub/ashley_rounds/src/components/Carousel.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="gallery-preview" class="py-24"> <!-- <div class="mb-14 flex flex-wrap items-end justify-between gap-4">
      <h2
        class="font-serif text-4xl font-bold tracking-tighter text-white md:text-5xl"
      >
        Gallery
      </h2>
    </div> --> ${renderComponent($$result2, "Carousel", $$Carousel, { "photos": SITE_CONTENT.photos.filter((photo) => photo.featured).sort((a, b) => (a.index ?? 0) - (b.index ?? 0)), "items_per_slide": 2 })} <a href="/gallery" class="flex items-center gap-1.5 text-sm text-neutral transition-colors hover:text-white">
View All Photos
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="m9 18 6-6-6-6"></path> </svg> </a> </section> ${renderComponent($$result2, "Hero", $$Hero, { ...SITE_CONTENT.hero })} ${renderComponent($$result2, "About", $$About, { ...SITE_CONTENT.about, "name": SITE_CONTENT.hero.name })} ` })}`;
}, "/Users/zmetteer/GitHub/ashley_rounds/src/pages/index.astro", void 0);

const $$file = "/Users/zmetteer/GitHub/ashley_rounds/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
