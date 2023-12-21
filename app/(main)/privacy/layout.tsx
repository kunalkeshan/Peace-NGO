/**
 * Privacy Policy Layout
 */

// Dependencies
import type { Metadata } from 'next';
import { PEACE_NGO_URL } from '@/data/ngo';

export const metadata: Metadata = {
	title: 'Privacy Policy | Peace NGO',
	description:
		'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
	openGraph: {
		images: ['/opengraph-image.png'],
		type: 'website',
		title: 'Privacy Policy | Peace NGO',
		description:
			'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
		url: `${PEACE_NGO_URL}/privacy`,
	},
	twitter: {
		images: ['/twitter-image.png'],
		title: 'Privacy Policy | Peace NGO',
		description:
			'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
	},
};

export default function PrivacyPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
