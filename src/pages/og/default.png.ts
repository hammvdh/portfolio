import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import { html } from 'satori-html';
import { BRAND, LOGO_POINTS, LOGO_VIEWBOX, pngResponse, svgToPng } from '../../lib/brand';

// Default Open Graph / Twitter card (1200×630), used by any page that doesn't pass its own image.
// Drawn as the workspace: window chrome, an open identity.md tab, and the name as the document.

// Satori needs static (non-variable) woff/ttf fonts, hence @fontsource/geist rather than the
// variable package the site itself uses.
const font = (pkg: string, file: string) => readFile(join(process.cwd(), 'node_modules/@fontsource', pkg, 'files', file));

export const GET: APIRoute = async () => {
  const [sans400, sans600, mono400] = await Promise.all([
    font('geist', 'geist-latin-400-normal.woff'),
    font('geist', 'geist-latin-600-normal.woff'),
    font('geist-mono', 'geist-mono-latin-400-normal.woff'),
  ]);

  // Satori only loads base64 data URIs for <img>.
  const logo = `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LOGO_VIEWBOX.width} ${LOGO_VIEWBOX.height}"><polygon fill="${BRAND.accent}" points="${LOGO_POINTS}"/></svg>`
  ).toString('base64')}`;
  const lines = Array.from({ length: 9 }, (_, i) => `<div style="display:flex">${i + 1}</div>`).join('');

  const markup = html(`
    <div style="display:flex;flex-direction:column;width:1200px;height:630px;background:${BRAND.bg};color:${BRAND.fg};font-family:Geist">
      <div style="display:flex;align-items:center;height:56px;background:${BRAND.panel};border-bottom:1px solid ${BRAND.line}">
        <div style="display:flex;gap:10px;padding:0 24px">
          <div style="display:flex;width:14px;height:14px;border-radius:7px;background:#ff5f57"></div>
          <div style="display:flex;width:14px;height:14px;border-radius:7px;background:#febc2e"></div>
          <div style="display:flex;width:14px;height:14px;border-radius:7px;background:#28c840"></div>
        </div>
        <div style="display:flex;align-items:center;height:56px;padding:0 24px;background:${BRAND.bg};border-top:3px solid ${BRAND.accent};font-family:'Geist Mono';font-size:20px">identity.md</div>
        <div style="display:flex;align-items:center;height:56px;padding:0 24px;color:${BRAND.muted};font-family:'Geist Mono';font-size:20px">work/</div>
        <div style="display:flex;align-items:center;height:56px;padding:0 24px;color:${BRAND.muted};font-family:'Geist Mono';font-size:20px">experience.md</div>
      </div>

      <div style="display:flex;flex:1">
        <div style="display:flex;flex-direction:column;align-items:flex-end;width:88px;padding:66px 22px 0 0;color:${BRAND.faint};font-family:'Geist Mono';font-size:20px;line-height:1.95">${lines}</div>
        <div style="display:flex;flex-direction:column;flex:1;padding:62px 72px 0 8px">
          <div style="display:flex;color:${BRAND.muted};font-family:'Geist Mono';font-size:22px"># identity.md</div>
          <div style="display:flex;align-items:flex-end;margin-top:22px;font-size:112px;font-weight:600;letter-spacing:-5px;line-height:1">
            Hammadh Arquil<div style="display:flex;width:10px;height:92px;margin:0 0 8px 8px;background:${BRAND.accent}"></div>
          </div>
          <div style="display:flex;margin-top:26px;font-size:36px;color:${BRAND.muted}">Software Engineer & Product Designer</div>
          <div style="display:flex;margin-top:40px;gap:18px;font-family:'Geist Mono';font-size:22px">
            <div style="display:flex;color:${BRAND.key}">building</div>
            <div style="display:flex;color:${BRAND.fg}">Requester · Prayr</div>
          </div>
        </div>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;height:64px;padding:0 40px;border-top:1px solid ${BRAND.line};background:${BRAND.panel};font-family:'Geist Mono';font-size:20px;color:${BRAND.muted}">
        <div style="display:flex;align-items:center;gap:14px">
          <img src="${logo}" style="width:40px;height:28px" />
          <div style="display:flex;color:${BRAND.fg}">hammadh.dev</div>
        </div>
        <div style="display:flex">Colombo, LK · 6°55′N 79°51′E</div>
      </div>
    </div>
  `);

  const svg = await satori(markup as any, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Geist', data: sans400, weight: 400, style: 'normal' },
      { name: 'Geist', data: sans600, weight: 600, style: 'normal' },
      { name: 'Geist Mono', data: mono400, weight: 400, style: 'normal' },
    ],
  });
  return pngResponse(svgToPng(svg));
};
