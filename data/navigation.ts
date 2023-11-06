// Navigation Data

interface Navdata {
	name: string;
	url: string;
	target: '_blank' | '_self';
}

type NavdataCollection = ReadonlyArray<Navdata>;

const COMMON_NAVIGATION: NavdataCollection = [
	{
		name: 'Home',
		url: '/',
		target: '_self',
	},
	{
		name: 'About',
		url: '/about',
		target: '_self',
	},
	{
		name: 'Programs',
		url: '/programs',
		target: '_self',
	},
	{
		name: 'Gallery',
		url: '/gallery',
		target: '_self',
	},
];

export const NAVBAR_NAVIGATION = [...COMMON_NAVIGATION];

export const FOOTER_NAVIGATION = [
	...COMMON_NAVIGATION,
	{
		name: 'Terms & Conditions',
		url: '/terms-and-conditions',
		target: '_self',
	},
	{
		name: 'Privacy Policy',
		url: '/privacy-policy',
		target: '_self',
	},
];
