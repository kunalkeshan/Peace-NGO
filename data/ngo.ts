// Peace NGO Constants

// Dependencies
import { Linkedin, Instagram, LucideIcon, X, Mail } from 'lucide-react';

type SocialsList = ReadonlyArray<{
	name: string;
	url: string;
	Icon: LucideIcon;
}>;

export const PEACE_NGO_EMAIL = '' as const;

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
];
