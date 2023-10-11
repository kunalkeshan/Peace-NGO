import React from 'react';
import {
	GraduationCap,
	HeartPulse,
	LucideIcon,
	Scale,
	Trees,
} from 'lucide-react';

interface ImpactData {
	title: string;
	Icon: LucideIcon;
	data: Array<{
		title: string;
		quantity: number;
	}>;
}

const Impact = () => {
	const IMPACTS: ImpactData[] = [
		{
			title: 'Education',
			Icon: GraduationCap,
			data: [
				{ title: 'Students Impacted', quantity: 1200 },
				{ title: 'Rural Libraries opened', quantity: 2 },
			],
		},
		{
			title: 'Trees',
			Icon: Trees,
			data: [
				{
					title: 'Planted till now',
					quantity: 2000,
				},
			],
		},
		{
			title: 'Health',
			Icon: HeartPulse,
			data: [
				{
					title: 'Villagers impacted',
					quantity: 5000,
				},
				{
					title: 'Villages impacted',
					quantity: 30,
				},
			],
		},
		{
			title: 'Women Empowerment',
			Icon: Scale,
			data: [
				{
					title: 'Educated & Employed',
					quantity: 100,
				},
			],
		},
	];

	return (
		<section className='h-full flex flex-col items-start gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto text-center py-16 lg:py-32'>
			<h2 className='text-2xl lg:text-4xl leading-tight mx-auto'>
				Impact Created by us
			</h2>
			<p className='text-base lg:text-xl text-slate-500'>
				Making a small difference in someone&apos;s life adds meaning to
				every endeavor. Samaritans like you make us successful in our
				purpose, “Creating a Thriving Tomorrow, One Rural Youth at a
				Time”
			</p>
			<ul className='grid grid-cols-1 lg:grid-cols-4 gap-6 mx-auto'>
				{IMPACTS.map((impact) => (
					<li
						key={`impact-${impact.title.toLowerCase()}`}
						className='flex items-center flex-col gap-4'
					>
						<div className='rounded-full bg-white p-4 w-fit'>
							<impact.Icon size={44} strokeWidth={1.5} />
						</div>
						<ul className='flex items-center gap-4'>
							{impact.data.map((data) => (
								<li
									key={`impact-data-${data.title.toLowerCase()}`}
									className='flex flex-col'
								>
									<span className='font-medium text-2xl'>
										{data.quantity}
									</span>
									<span>{data.title}</span>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Impact;
