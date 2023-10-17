import { User } from 'lucide-react';
import React from 'react';

const Stories = () => {
	return (
		<section className='w-full h-full bg-white py-16 lg:py-32'>
			<div className='h-full flex flex-col items-start gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto text-center'>
				<h2 className='text-2xl lg:text-4xl leading-tight mx-auto '>
					Stories
				</h2>
				<p className='text-base lg:text-xl text-slate-500'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Suspendisse varius enim in eros elementum tristique. Duis
					cursus, mi quis viverra ornare
				</p>
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
								<p className='text-base lg:text-lg text-slate-500'>
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
