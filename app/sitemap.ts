import { client } from '@/sanity/lib/client';
import { postPathsQuery } from '@/sanity/lib/querires';
import { MetadataRoute } from 'next';
import { PEACE_NGO_URL } from '@/data/ngo';

type Params = { params: { slug: string } };

const DEFAULT_SITEMAPS: MetadataRoute.Sitemap = [
	{
		url: `${PEACE_NGO_URL}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 1,
	},
	{
		url: `${PEACE_NGO_URL}/about`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${PEACE_NGO_URL}/blogs`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${PEACE_NGO_URL}/terms`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
	{
		url: `${PEACE_NGO_URL}/privacy`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	try {
		const posts = await client.fetch<Array<Params>>(postPathsQuery);
		const postsSitemap = posts.map((post) => {
			return {
				url: `${PEACE_NGO_URL}/blogs/${post.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.7,
			};
		});
		return [...DEFAULT_SITEMAPS, ...postsSitemap] as MetadataRoute.Sitemap;
	} catch (e) {
		return DEFAULT_SITEMAPS;
	}
}
