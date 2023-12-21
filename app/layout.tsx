import './globals.css';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import { PEACE_NGO_URL } from '@/data/ngo';

const maax = localFont({
	src: [
		{
			path: '../fonts/maax/Maax.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/maax/Maax-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../fonts/maax/Maax-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../fonts/maax/Maax-Black.ttf',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../fonts/maax/Maax-Italic.ttf',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../fonts/maax/Maax-Mediumitalic.ttf',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../fonts/maax/Maax-BoldItalic.ttf',
			weight: '700',
			style: 'italic',
		},
	],
	variable: '--font-maax',
});

export const metadata: Metadata = {
	metadataBase: new URL(PEACE_NGO_URL),
	title: 'Peace NGO',
	description:
		"Making a small difference in someone's life adds meaning to every endeavor. Samaritans like you make us successful in our purpose, “Creating a Thriving Tomorrow, One Rural Youth at a Time”",
	openGraph: {
		type: 'website',
		title: 'Peace NGO',
		description:
			"Making a small difference in someone's life adds meaning to every endeavor. Samaritans like you make us successful in our purpose, “Creating a Thriving Tomorrow, One Rural Youth at a Time”",
		url: `${PEACE_NGO_URL}`,
	},
	twitter: {
		title: 'Peace NGO',
		description:
			"Making a small difference in someone's life adds meaning to every endeavor. Samaritans like you make us successful in our purpose, “Creating a Thriving Tomorrow, One Rural Youth at a Time”",
		card: 'summary_large_image',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${maax.variable} font-maax`}>{children}</body>
		</html>
	);
}
