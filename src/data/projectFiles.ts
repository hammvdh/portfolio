// How each project appears as a "file" in the workspace (sidebar tree and tabs).
const extensions: Record<string, string> = { requester: 'tsx', prayr: 'tsx', vital: 'py', onco: 'py' };

export const projectFileName = (slug: string) => `${slug}.${extensions[slug] ?? 'md'}`;
