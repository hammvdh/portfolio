import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: 'Hammadh Arquil — Writing',
    description: 'Notes on engineering, design, and the messy place they meet.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description,
      link: `/blog/${p.slug}/`,
      categories: p.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
