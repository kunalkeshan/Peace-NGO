import './globals.css';
import localFont from 'next/font/local';

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
