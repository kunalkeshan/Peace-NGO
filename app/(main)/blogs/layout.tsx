/**
 * Blogs Layout
 */

// Dependencies
import { PEACE_NGO_URL } from '@/data/ngo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blogs | Peace NGO',
	description:
		'Our non-profit organization works to empower local communities by educating them about climate change, promoting environmental stewardship, and providing affordable healthcare services.',
	openGraph: {
		images: ['/opengraph-image.png'],
		type: 'website',
		title: 'Blogs | Peace NGO',
		description:
			'Our non-profit organization works to empower local communities by educating them about climate change, promoting environmental stewardship, and providing affordable healthcare services.',
		url: `${PEACE_NGO_URL}/blogs`,
	},
	twitter: {
		images: ['/twitter-image.png'],
		title: 'Blogs | Peace NGO',
		description:
			'Our non-profit organization works to empower local communities by educating them about climate change, promoting environmental stewardship, and providing affordable healthcare services.',
	},
};

export default function BlogsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
