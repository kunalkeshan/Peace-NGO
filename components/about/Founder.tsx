/**
 * About Page - Founder Component
 */

// Dependencies
import React from 'react';
import Image from 'next/image';
import {
	LucideIcon,
	Instagram,
	Twitter,
	Linkedin,
	Mail,
	Globe,
	Youtube,
} from 'lucide-react';
import Link from 'next/link';
import z from 'zod';

type FounderProps = React.ComponentProps<'section'> & {
	founder: TeamMember;
};

const userSocials = z
	.array(
		z.object({ Icon: z.custom<LucideIcon>(), url: z.string().or(z.null()) })
	)
	.transform((val) =>
		val.filter((social) => social.url !== null && social.url.length !== 0)
	);

type UserSocials = z.infer<typeof userSocials>;

const Founder: React.FC<FounderProps> = ({ founder }) => {
	const socials: UserSocials = userSocials.parse([
		{ Icon: Instagram, url: founder.instagram },
		{ Icon: Linkedin, url: founder.linkedin },
		{ Icon: Globe, url: founder.website },
		{ Icon: Youtube, url: founder.youtube },
		{ Icon: Twitter, url: founder.twitter },
		{ Icon: Mail, url: founder.email ? `mailto:${founder.email}` : null },
	]);
	return (
		<section className='min-h-[calc(100vh-5rem)] w-full flex flex-col lg:flex-row-reverse items-center gap-8 justify-between'>
			<div className='flex flex-col gap-4 lg:gap-8 lg:w-1/2'>
				<div className='relative'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl leading-tight'>
						<p className='text-2xl md:text-3xl lg:text-4xl'>
							{founder?.role || 'Founder & CEO'}
						</p>
						<p>{founder.name}</p>
					</h2>
				</div>
				<div>
					<p className='text-base lg:text-lg text-slate-500'>
						{founder?.bio}
					</p>
				</div>
				{/* <ul className='relative flex gap-4'>
					{socials.map((social) => (
						<li key={`founder-social-${social.url}`}>
							<Link href={social.url || '#'} prefetch={false}>
								<social.Icon />
							</Link>
						</li>
					))}
				</ul> */}
			</div>
			<div className='lg:w-1/2 h-full flex items-center justify-start'>
				<div className='lg:w-3/4'>
					<Image
						src={founder?.image}
						unoptimized
						width={100}
						height={400}
						className='w-full rounded-lg object-contain h-auto'
						alt={founder?.alt}
					/>
				</div>
			</div>
		</section>
	);
};

export default Founder;
