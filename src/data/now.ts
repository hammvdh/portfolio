export interface NowSnippet {
  lastUpdated: string;
  summary: string;
  available: boolean;
}

// Update this file every 1-3 months. The Hero pulls `summary` for the home pill.
// The /now page renders the long-form body in src/pages/now.astro.
export const nowSnippet: NowSnippet = {
  lastUpdated: '2026-09-03',
  summary: 'Running Requester · Engineering at HT Works · Open to short consulting',
  available: true,
};
