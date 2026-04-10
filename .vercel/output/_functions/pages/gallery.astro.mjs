import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderComponent, b as renderTemplate, d as createAstro, f as renderScript } from '../chunks/astro/server_C4tXrvrL.mjs';
import 'piccolore';
import { S as SITE_CONTENT, $ as $$Layout } from '../chunks/Layout_CMmjrIb9.mjs';
import { $ as $$Image } from '../chunks/_astro_assets__lZc9KEq.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$GalleryGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalleryGrid;
  const { photos } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Photo gallery"> ${photos.map((photo) => renderTemplate`<li${addAttribute(photo.category, "data-category")}> <a${addAttribute(`/gallery/${photo.slug}`, "href")} class="group relative block overflow-hidden rounded-xl border border-neutral/20 bg-black transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"${addAttribute(`View ${photo.title}${photo.category ? ` \u2014 ${photo.category}` : ""}`, "aria-label")}> <div class="overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": photo.image, "alt": photo.title, "width": 400, "height": 300, "class": "h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" })} </div> <!-- Always-visible bottom strip --> <div class="border-t border-neutral/10 px-4 py-3"> ${photo.category && renderTemplate`<span class="text-xs font-medium text-primary"> ${photo.category} </span>`} <p class="font-serif text-base font-semibold text-white"> ${photo.title} </p> ${photo.date && renderTemplate`<p class="mt-0.5 text-xs text-neutral/70">${photo.date}</p>`} </div> <!-- Hover overlay --> <div class="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-2 ring-primary transition-opacity duration-300 group-hover:opacity-100"></div> </a> </li>`)} </ul>`;
}, "/Users/zmetteer/GitHub/ashley_rounds/src/components/GalleryGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { photos } = SITE_CONTENT;
  const categories = [...new Set(photos.map((p) => p.category).filter(Boolean))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "wide": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-24"> <div class="mb-14"> <a href="/" class="mb-6 inline-flex items-center gap-1.5 text-sm text-neutral transition-colors hover:text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="m15 18-6-6 6-6"></path> </svg>
Back to Home
</a> <h1 class="font-serif text-5xl font-bold tracking-tighter text-white md:text-6xl">
Gallery
</h1> ${categories.length > 0 && renderTemplate`<div class="mt-6 flex flex-wrap gap-2" id="filter-container"> <button data-filter="all" class="filter-btn active rounded-full border border-primary bg-primary/20 px-3 py-1 text-xs font-medium text-primary transition-all hover:bg-primary/30 cursor-pointer">
All
</button> ${categories.map((cat) => renderTemplate`<button${addAttribute(cat, "data-filter")} class="filter-btn rounded-full border border-neutral/30 px-3 py-1 text-xs font-medium text-neutral transition-all hover:border-neutral/50 hover:text-white cursor-pointer"> ${cat} </button>`)} </div>`} </div> ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "photos": photos })} </section> ` })} ${renderScript($$result, "/Users/zmetteer/GitHub/ashley_rounds/src/pages/gallery/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zmetteer/GitHub/ashley_rounds/src/pages/gallery/index.astro", void 0);

const $$file = "/Users/zmetteer/GitHub/ashley_rounds/src/pages/gallery/index.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
