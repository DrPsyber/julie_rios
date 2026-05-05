# Carousel as Full-Screen Background — Design

## Goal

Move the home page carousel from a framed gallery preview at the top of the page to a full-viewport ambient background that persists during scroll. The hero area at the top of the page becomes visually empty so the photos read as a cinematic backdrop. The existing Hero text component (name, specialty, summary, CTA) and About section remain, sitting on transparent backgrounds above the carousel.

## Page Structure (`src/pages/index.astro`)

```
<Layout>
  <Carousel ... />                    ← position: fixed, z-index: -2
  <div class="dim-overlay">           ← position: fixed, z-index: -1, scroll-driven opacity
  <section class="open-hero">         ← h-screen, empty, anchors "View All Photos" link
    <a href="/gallery">View All Photos</a>
  </section>
  <Hero ... />                        ← unchanged
  <About ... />                       ← unchanged
</Layout>
```

The Carousel and dim overlay are siblings of the page sections, rendered before them in DOM order, fixed-positioned with negative z-index so all flowing content stacks above.

## Carousel Component (`src/components/Carousel.astro`)

**Architecture changes from the existing component:**

- Container is `position: fixed; inset: 0; z-index: -2;` (full viewport, persistent during scroll).
- `items_per_slide` prop becomes irrelevant — render one full-viewport photo at a time. Prop kept in signature for backwards compatibility but ignored.
- Each slide: `width: 100vw; height: 100vh;` flex child of the track.
- Image: `object-cover`, fills the full slide.
- Photo titles: removed from rendered output.
- Prev/next buttons: removed.
- Tilt/scale-down logic for inactive slides: removed (not applicable with stacked single-photo display).

**Seamless feathered seam:**

- The track has `mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);` (with `-webkit-mask-image` for Safari).
- This makes the leftmost and rightmost ~8% of the viewport feathered transparent. As photos slide horizontally, the hard rectangle seam between adjacent photos passes through these feather zones and becomes invisible — a soft visual handoff rather than a crisp edge.

**Slide motion:**

- Existing `translateX` infinite-loop logic kept (cloned-edge approach for seamless wraparound).
- Slide transition duration: 1500ms ease-in-out (slowed from current 700ms so the feathered handoff reads).
- Autoplay interval: 6000ms (slowed from 4000ms to suit ambient pacing).
- Resize handler: kept, snaps to current position without animation.

**No interaction:**

- The carousel is purely ambient. Drop hover-to-pause, keyboard arrow handlers, button handlers — autoplay only.

## Dim Overlay

A sibling div, `position: fixed; inset: 0; z-index: -1; background: black;` with opacity controlled by JS.

```js
window.addEventListener("scroll", () => {
  const o = Math.min(0.8, window.scrollY / window.innerHeight * 0.8);
  overlay.style.opacity = String(o);
}, { passive: true });
```

At top of page: opacity 0, carousel reads at full vibrance.
After scrolling one viewport height: opacity 0.8, photos dimmed enough for white text on top to be legible.

## Open Hero Section

`<section class="relative h-screen flex items-end justify-center pb-12">` — empty viewport-height block. The "View All Photos" link sits at the bottom-center as a small white anchor with hover affordance, the only foreground element in the otherwise empty space.

## Layout (`src/layouts/Layout.astro`)

The existing `<main class="mx-auto max-w-3xl px-5">` sets a centered narrow column. The fixed carousel sits behind it on negative z-index, so no change is strictly required to the main element — but adding `relative` to `<main>` (or `body`) ensures predictable stacking context. Confirm during implementation.

## Files Touched

- `src/pages/index.astro` — restructured top section, carousel moved out of flow, dim overlay div added, View All Photos link relocated.
- `src/components/Carousel.astro` — significant rewrite of template + script.
- `src/layouts/Layout.astro` — small stacking-context tweak if needed.

## Out of Scope

- Mobile-specific tuning of feather percentage (default works adequately on phones).
- Reduced-motion preference handling for autoplay (can add later).
- Lazy loading of carousel images beyond Astro's default behavior.
