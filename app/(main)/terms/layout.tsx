/**
 * Terms and Conditions Layout
 */

// Dependencies
import type { Metadata } from 'next';
import { PEACE_NGO_URL } from '@/data/ngo';

export const metadata: Metadata = {
	title: 'Terms & Conditions | Peace NGO',
	description:
		"Welcome to Peace NGO's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
	openGraph: {
		images: ['/opengraph-image.png'],
		type: 'website',
		title: 'Terms & Conditions | Peace NGO',
		description:
			"Welcome to Peace NGO's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
		url: `${PEACE_NGO_URL}/terms`,
	},
	twitter: {
		images: ['/twitter-image.png'],
		title: 'Terms & Conditions | Peace NGO',
		description:
			"Welcome to Peace NGO's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
	},
};

export default function TermsAndConditionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
