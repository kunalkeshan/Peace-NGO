import { MetadataRoute } from 'next';
import { PEACE_NGO_URL } from '@/data/ngo';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/studio/'],
		},
		sitemap: `${PEACE_NGO_URL}/sitemap.xml`,
	};
}
