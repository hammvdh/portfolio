import type { ImageMetadata } from 'astro';

// Everything dropped into src/assets/elitepsd/ shows up on the home page, sorted by filename.
const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/elitepsd/*.{png,jpg,jpeg,webp,avif}', { eager: true });

export const elitepsdImages = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => ({ name: path.split('/').pop()!, image: mod.default }));
