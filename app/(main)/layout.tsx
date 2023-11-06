import type { Metadata } from 'next';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
	title: 'Peace NGO',
	description: '',
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
