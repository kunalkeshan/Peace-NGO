import React from 'react';

const Blogs = () => {
	return (
		<section className='h-full flex flex-col items-start gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-16 lg:py-32'>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl lg:text-4xl leading-tight'>Blogs</h2>
				<p className='text-base lg:text-lg text-slate-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, voluptas.
				</p>
			</div>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{Array(3)
					.fill({
						title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
						body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare',
					})
					.map((blog, index) => (
						<li
							key={`landing-blog-${index}`}
							className='flex flex-col gap-4'
						>
							<div className='w-full h-72 bg-gray-300 rounded-lg'></div>
							<div className='flex flex-col gap-2'>
								<h3 className='text-xl font-semibold'>
									{blog.title}
								</h3>
								<p className='text-base text-slate-500'>
									{blog.body}
								</p>
							</div>
						</li>
					))}
			</ul>
		</section>
	);
};

export default Blogs;
