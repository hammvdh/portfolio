import type { APIRoute } from 'astro';
import { iconSvg, pngResponse, svgToPng } from '../lib/brand';

// iOS rounds the corners itself, so the icon is a full square.
export const GET: APIRoute = () => pngResponse(svgToPng(iconSvg(180, { rounded: false })));
