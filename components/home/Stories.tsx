import { User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Stories = () => {
	return (
		<section className='w-full h-full bg-white py-16 lg:py-32 relative'>
			<Image
				src={'/doodles/flower.svg'}
				unoptimized
				width={100}
				height={100}
				className='w-8 md:w-16 lg:w-28 object-contain absolute bottom-0 right-0 lg:right-10 h-auto'
				alt={'flower'}
			/>
			<Image
				src={'/doodles/star2.svg'}
				unoptimized
				width={100}
				height={100}
				className='w-12 object-contain absolute bottom-4 lg:bottom-12 left-0 md:left-4 lg:left-16 h-auto'
				alt={'star2'}
			/>
			<div className='h-full flex flex-col items-start gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto text-center'>
				<div className='relative'>
					<Image
						src={'/doodles/star2.svg'}
						unoptimized
						width={100}
						height={100}
						className='w-16 object-contain absolute -top-12 right-0 md:-right-6 lg:-top-24 h-auto'
						alt={'star2'}
					/>
					<Image
						src={'/doodles/star.svg'}
						unoptimized
						width={100}
						height={100}
						className='w-20 md:w-24 lg:w-28 object-contain absolute -top-16 rotate-90 left-0 md:-left-6 lg:-top-24 h-auto'
						alt={'star'}
					/>
					<h2 className='text-2xl lg:text-4xl leading-tight mx-auto '>
						Our <span className='text-app-secondary'>Stories</span>
					</h2>
					<p className='text-base lg:text-lg text-slate-500'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse varius enim in eros elementum tristique.
						Duis cursus, mi quis viverra ornare
					</p>
				</div>
				<ul className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
					{Array(5)
						.fill({
							person: 'Jacob Pierce',
							story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare',
						})
						.map((story, index) => (
							<li
								key={`story-${index}`}
								className='bg-app-bg rounded-md flex flex-col items-center p-4 gap-4'
							>
								<div className='mt-4 rounded-md overflow-hidden bg-white p-4'>
									<User size={44} strokeWidth={1.5} />
								</div>
								<p className='font-medium text-xl '>
									{story.person}
								</p>
								<p className='text-base text-slate-500'>
									&quot;{story.story}&quot;
								</p>
							</li>
						))}
				</ul>
			</div>
		</section>
	);
};

export default Stories;
