import { c as createComponent, r as renderComponent, b as renderTemplate, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_C4tXrvrL.mjs';
import 'piccolore';
import { $ as $$Layout, S as SITE_CONTENT } from '../../chunks/Layout_CMmjrIb9.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets__lZc9KEq.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return SITE_CONTENT.photos.map((photo, index) => ({
    params: { slug: photo.slug },
    props: {
      photo,
      index,
      total: SITE_CONTENT.photos.length
    }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { photo, index, total } = Astro2.props;
  const photos = SITE_CONTENT.photos;
  const prevPhoto = index > 0 ? photos[index - 1] : null;
  const nextPhoto = index < total - 1 ? photos[index + 1] : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16"> <!-- Breadcrumb --> <nav class="mb-8 flex items-center gap-2 text-sm text-neutral" aria-label="Breadcrumb"> <a href="/" class="transition-colors hover:text-white">Home</a> <span aria-hidden="true">/</span> <a href="/gallery" class="transition-colors hover:text-white">Gallery</a> <span aria-hidden="true">/</span> <span class="text-white">${photo.title}</span> </nav> <!-- Photo --> <div class="mb-8 overflow-hidden rounded-2xl border border-neutral/20"> ${renderComponent($$result2, "Image", $$Image, { "src": photo.image, "alt": photo.title, "width": 800, "height": 600, "class": "w-full object-cover" })} </div> <!-- Meta --> <div class="mb-12"> ${photo.category && renderTemplate`<span class="mb-3 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary"> ${photo.category} </span>`} <h1 class="mb-2 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl"> ${photo.title} </h1> ${photo.date && renderTemplate`<p class="mb-4 text-sm text-neutral/70">${photo.date}</p>`} ${photo.description && renderTemplate`<p class="text-base text-neutral">${photo.description}</p>`} </div> <!-- Photo counter --> <p class="mb-8 text-center text-xs text-neutral/60" aria-live="polite"> ${index + 1} / ${total} </p> <!-- Prev / Next navigation --> <div class="flex items-center justify-between border-t border-neutral/20 pt-8"> ${prevPhoto ? renderTemplate`<a${addAttribute(`/gallery/${prevPhoto.slug}`, "href")} class="group flex items-center gap-2 text-neutral transition-colors hover:text-white"${addAttribute(`Previous: ${prevPhoto.title}`, "aria-label")}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="m15 18-6-6 6-6"></path> </svg> <span class="max-w-[140px] truncate text-sm">${prevPhoto.title}</span> </a>` : renderTemplate`<a href="/gallery" class="flex items-center gap-2 text-sm text-neutral transition-colors hover:text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="m15 18-6-6 6-6"></path> </svg>
All Photos
</a>`} ${nextPhoto ? renderTemplate`<a${addAttribute(`/gallery/${nextPhoto.slug}`, "href")} class="group flex items-center gap-2 text-neutral transition-colors hover:text-white"${addAttribute(`Next: ${nextPhoto.title}`, "aria-label")}> <span class="max-w-[140px] truncate text-sm">${nextPhoto.title}</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="m9 18 6-6-6-6"></path> </svg> </a>` : renderTemplate`<a href="/gallery" class="flex items-center gap-2 text-sm text-neutral transition-colors hover:text-white">
All Photos
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="m9 18 6-6-6-6"></path> </svg> </a>`} </div> </section> ` })}`;
}, "/Users/zmetteer/GitHub/ashley_rounds/src/pages/gallery/[slug].astro", void 0);

const $$file = "/Users/zmetteer/GitHub/ashley_rounds/src/pages/gallery/[slug].astro";
const $$url = "/gallery/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
