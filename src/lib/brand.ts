import { Resvg } from '@resvg/resvg-js';

// The H/A brand mark (same polygon as the sidebar logo), drawn in a 1282.84 × 900 box.
export const LOGO_VIEWBOX = { width: 1282.84, height: 900 };
export const LOGO_POINTS =
  '441.42 400 441.42 700 1182.84 700 1282.84 600 1141.42 600 1141.42 0 500 0 400 100 1041.42 100 1041.42 600 541.42 600 541.42 500 941.41 500 941.41 200 300 200 0 500 241.42 500 241.42 900 982.84 900 1082.84 800 341.42 800 341.42 400 241.42 400 341.42 300 841.41 300 841.41 400 441.42 400';

export const BRAND = {
  bg: '#0a0b0d',
  panel: '#0f1013',
  line: '#1f2127',
  fg: '#e8e9ec',
  muted: '#80848e',
  faint: '#3a3d45',
  accent: '#c4e069',
  key: '#7aa2f7',
};

/**
 * Square app icon: the mark in accent on the workspace background.
 * `rounded` suits browser favicons; iOS applies its own mask, so apple-touch-icon is square.
 */
export function iconSvg(size: number, { rounded = true } = {}) {
  const pad = size * 0.18;
  const w = size - pad * 2;
  const h = (w * LOGO_VIEWBOX.height) / LOGO_VIEWBOX.width;
  const scale = w / LOGO_VIEWBOX.width;
  const radius = rounded ? size * 0.22 : 0;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${radius}" fill="${BRAND.bg}"/>
  <g transform="translate(${pad} ${(size - h) / 2}) scale(${scale})">
    <polygon points="${LOGO_POINTS}" fill="${BRAND.accent}"/>
  </g>
</svg>`;
}

export const svgToPng = (svg: string, width?: number) =>
  new Resvg(svg, width ? { fitTo: { mode: 'width', value: width } } : undefined).render().asPng();

export const pngResponse = (png: Uint8Array) =>
  new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' } });
