import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import { PEACE_NGO_URL } from '@/data/ngo';
import { Metadata } from 'next';

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
		<>
			<TooltipProvider>
				<Navbar />
				{children}
				<Footer />
			</TooltipProvider>
		</>
	);
}
