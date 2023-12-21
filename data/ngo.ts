// Peace NGO Constants

// Dependencies
import { Linkedin, Instagram, LucideIcon, X, Mail, Phone } from 'lucide-react';

type SocialsList = ReadonlyArray<{
	name: string;
	url: string;
	Icon: LucideIcon;
}>;

export const PEACE_NGO_EMAIL = 'test@gmail.com' as const;

export const PEACE_NGO_ADDRESS =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nulla non dapibus malesuada. Aenean ac tincidunt eros. Integer tempor euismod maximus.' as const;

export const PEACE_NGO_PHONE = '+919876543210' as const;

export const PEACE_NGO_URL = 'https://projectpeace.in';

export const PEACE_NGO_SOCIALS: SocialsList = [
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/',
		Icon: Instagram,
	},
	{
		name: 'X',
		url: 'https://twitter.com/',
		Icon: X,
	},
	{
		name: 'LinkedIn',
		url: 'https://www.instagram.com/',
		Icon: Linkedin,
	},
	{
		name: 'Mail',
		url: `mailto:${PEACE_NGO_EMAIL}`,
		Icon: Mail,
	},
	{
		name: 'Phone',
		url: `tel:${PEACE_NGO_PHONE}`,
		Icon: Phone,
	},
];
