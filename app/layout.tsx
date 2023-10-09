import './globals.css';
import { Poppins, Open_Sans } from 'next/font/google';

const heading = Poppins({
	style: ['italic', 'normal'],
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-heading',
});

const body = Open_Sans({
	style: ['italic', 'normal'],
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '600', '700', '800'],
	variable: '--font-body',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${heading.variable} ${body.variable} font-body`}>
				{children}
			</body>
		</html>
	);
}
