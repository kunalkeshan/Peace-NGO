'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SheetComponent from './Sheet';
import { NAVBAR_NAVIGATION } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Navbar = () => {
	const [header, setHeader] = useState('bg-app-bg');
	const listenScrollEvent = () => {
		window.scrollY > 10
			? setHeader('bg-white border-b border-slate-200')
			: setHeader('bg-app-bg');
	};
	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	});
	return (
		<nav
			className={`${header} fixed top-0 w-full transition-all duration-300  z-50`}
		>
			<div className='w-full h-[5rem] flex justify-between items-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto'>
				<div>
					<h1 className='font-semibold text-lg md:text-2xl'>
						<span className='text-app-secondary'>PEACE</span> NGO
					</h1>
				</div>
				<div className='hidden lg:flex gap-4 items-center justify-center'>
					<ul className=' lg:flex lg:gap-4'>
						{NAVBAR_NAVIGATION.map((item) => (
							<Button
								asChild
								key={`nav-${item.url}`}
								variant={'ghost'}
							>
								<li>
									<Link target={item.target} href={item.url}>
										{item.name}
									</Link>
								</li>
							</Button>
						))}
					</ul>
					<Button className=''>
						Donate{' '}
						<Heart className='ml-2 h-4 w-4' strokeWidth={1.5} />
					</Button>
				</div>
				<div className='lg:hidden'>
					<SheetComponent />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
