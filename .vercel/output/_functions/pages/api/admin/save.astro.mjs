import fs from 'node:fs';
import nodePath from 'node:path';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const text = await request.text();
    if (!text) {
      throw new Error("Empty request body");
    }
    const data = JSON.parse(text);
    const { hero, about, photos } = data;
    const photosPath = nodePath.resolve(process.cwd(), "src/config/photos.ts");
    const photosContent = `import type { PhotoProps } from "../types";

export const PHOTOS: PhotoProps[] = ${JSON.stringify(photos, null, 2)};
`;
    fs.writeFileSync(photosPath, photosContent, "utf-8");
    const indexPath = nodePath.resolve(process.cwd(), "src/config/index.ts");
    const currentIndexContent = fs.readFileSync(indexPath, "utf-8");
    const splitMarker = 'import { PHOTOS } from "./photos";';
    const splitIndex = currentIndexContent.indexOf(splitMarker);
    let indexHeader = currentIndexContent;
    if (splitIndex !== -1) {
      indexHeader = currentIndexContent.substring(0, splitIndex);
    }
    const indexContent = `${indexHeader}${splitMarker}

export const SITE_CONTENT: SiteContent = {
  hero: ${JSON.stringify(hero, null, 2)},
  about: ${JSON.stringify(about, null, 2)},
  photos: PHOTOS,
};
`;
    fs.writeFileSync(indexPath, indexContent, "utf-8");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error saving admin content:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
