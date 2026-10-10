import type { APIRoute, GetStaticPaths } from 'astro';
import { iconSvg, pngResponse, svgToPng } from '../lib/brand';

// Builds /favicon-16.png and /favicon-32.png from the brand mark.
export const getStaticPaths = (() => [{ params: { size: '16' } }, { params: { size: '32' } }]) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const size = Number(params.size);
  // Draw large and downscale: resvg antialiases small renders better from a bigger canvas.
  return pngResponse(svgToPng(iconSvg(256), size));
};
