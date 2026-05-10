export interface NowSnippet {
  lastUpdated: string;
  summary: string;
  available: boolean;
}

// Update this file every 1-3 months. The Hero pulls `summary` for the home pill.
// The /now page renders the long-form body in src/pages/now.mdx.
export const nowSnippet: NowSnippet = {
  lastUpdated: '2026-05-01',
  summary: 'Building Requset · Engineering at HT Works · Open to short consulting',
  available: true,
};
