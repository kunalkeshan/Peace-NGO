/**
 * Donate Button Component
 */

'use client';

// Dependencies
import React from 'react';
import Link from 'next/link';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, Phone, Mail, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
	PEACE_NGO_ADDRESS,
	PEACE_NGO_EMAIL,
	PEACE_NGO_PHONE,
	PEACE_NGO_SOCIALS,
} from '@/data/ngo';

type DonateButtonProps = React.ComponentPropsWithRef<'button'> & {
	textCta?: string;
	Icon?: LucideIcon;
	iconClassName?: string;
};

const donateButtonDefaultProps = {
	textCta: 'Donate',
	Icon: Heart,
	iconClassName: 'ml-2 h-4 w-4 text-inherit',
};

const DonateButton: React.FC<DonateButtonProps> = ({
	textCta = donateButtonDefaultProps.textCta,
	Icon = donateButtonDefaultProps.Icon,
	iconClassName = donateButtonDefaultProps.iconClassName,
	className,
	...props
}) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className={cn(className)} {...props}>
					{textCta}{' '}
					<Icon
						className={cn(
							'ml-2 h-4 w-4 text-inherit',
							iconClassName
						)}
						strokeWidth={1.5}
					/>
				</Button>
			</DialogTrigger>
			<DialogContent className='max-w-sm md:max-w-lg'>
				<DialogHeader>
					<DialogTitle className='text-center'>
						Feel free to get in touch with us!
					</DialogTitle>
				</DialogHeader>
				<DialogDescription className='flex flex-col gap-2 items-center justify-center'>
					<p className='text-center'>{PEACE_NGO_ADDRESS}</p>
					<Link
						href={`tel:${PEACE_NGO_PHONE}`}
						className='flex items-center gap-2 hover:text-app-secondary mt-4'
						prefetch={false}
					>
						<Phone strokeWidth={1.5} size={20} /> {PEACE_NGO_PHONE}
					</Link>
					<Link
						href={`tel:${PEACE_NGO_EMAIL}`}
						className='flex items-center gap-2 hover:text-app-secondary'
						prefetch={false}
					>
						<Mail strokeWidth={1.5} size={20} /> {PEACE_NGO_EMAIL}
					</Link>
					<div className='flex items-center justify-start mt-4 gap-4'>
						{PEACE_NGO_SOCIALS.map((social) => (
							<Link
								key={`donate-btn-social-${social.name}`}
								target='_blank'
								rel='noopener noreferrer'
								href={social.url}
								title={social.name}
								className='transition-all duration-300 hover:text-app-secondary'
								prefetch={false}
							>
								<social.Icon size={20} strokeWidth={1.5} />
							</Link>
						))}
					</div>
				</DialogDescription>
			</DialogContent>
		</Dialog>
	);
};

export default DonateButton;
