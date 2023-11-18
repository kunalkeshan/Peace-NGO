import React from 'react';
import { Button } from '../ui/button';

const Hero = () => {
	return (
		<section className='text-center py-12 md:py-8 md:py-12 lg:py-16 flex flex-col items-center gap-8'>
			<h2 className='font-semibold text-app-secondary text-xl'>
				Learn more About Us
			</h2>
			<h1 className='text-4xl md:text-5xl leading-tight lg:text-6xl font-medium'>
				Our mission is to help all the people in need{' '}
			</h1>
			<p className='text-slate-500 text-base lg:text-lg'>
				Our non-profit organization works to empower local communities
				by educating them about climate change, promoting environmental
				stewardship, and providing affordable healthcare services. We
				envision a peaceful future for rural India. Together, we see
				resilient, educated, and healthy rural areas where
				sustainability and peace coexist together.
			</p>
			<Button className='w-fit'>Donate</Button>
		</section>
	);
};

export default Hero;
