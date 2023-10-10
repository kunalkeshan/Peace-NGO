import Image from 'next/image';
import { Button } from '../ui/button';

const Hero = () => {
	return (
		<section className='min-h-[calc(100vh-5rem)] mt-[5rem] flex flex-col lg:flex-row items-center gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto'>
			<div className='flex flex-col gap-4 lg:gap-8 lg:w-1/2'>
				<h1 className='text-4xl lg:text-6xl leading-tight'>
					Peace within{' '}
					<span className='text-app-primary'>humanity</span>, peace
					within <span className='text-app-primary'>nature</span>,
					peace within <span className='text-app-primary'>you</span>.
				</h1>
				<div>
					<p className='text-sm lg:text-lg '>
						How can you get involved?
					</p>
					<h1 className='text-base lg:text-xl text-slate-500'>
						Making a small difference in someone’s life adds meaning
						to every endeavor. Samaritans like you make us
						successful in our purpose, “Creating a Thriving
						Tomorrow, One Rural Youth at a Time”
					</h1>
				</div>
				<Button className='lg:w-fit'>Yes, I want to contribute</Button>
			</div>
			<div className='bg-red-200 lg:w-1/2'>
				<Image
					src={
						'https://free4kwallpapers.com/uploads/originals/2020/05/29/-peaceful-pier-wallpaper.jpg'
					}
					unoptimized
					width={100}
					height={100}
					className='w-full rounded-lg object-cover h-full'
					alt={'image'}
				/>
			</div>
		</section>
	);
};

export default Hero;
