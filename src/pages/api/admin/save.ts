import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const text = await request.text();
    if (!text) {
      throw new Error('Empty request body');
    }
    
    const data = JSON.parse(text);
    const { hero, about, photos } = data;

    // 1. Update src/config/photos.ts
    const photosPath = path.resolve(process.cwd(), 'src/config/photos.ts');
    const photosContent = `import type { PhotoProps } from "../types";

export const PHOTOS: PhotoProps[] = ${JSON.stringify(photos, null, 2)};
`;
    fs.writeFileSync(photosPath, photosContent, 'utf-8');

    // 2. Update src/config/index.ts
    const indexPath = path.resolve(process.cwd(), 'src/config/index.ts');
    const currentIndexContent = fs.readFileSync(indexPath, 'utf-8');
    
    // Find where SITE_CONTENT starts or where PHOTOS is imported
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
    fs.writeFileSync(indexPath, indexContent, 'utf-8');

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving admin content:', error);
    return new Response(JSON.stringify({ success: false, error: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
