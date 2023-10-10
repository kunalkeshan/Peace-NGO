'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SheetComponent from './Sheet';
import { NAVBAR_NAVIGATION } from '@/data/navigation';
import { Button } from '@/components/ui/button';

const Navbar = () => {
	const [header, setHeader] = useState('bg-app-bg');
	const listenScrollEvent = () => {
		window.scrollY > 10 ? setHeader('bg-white') : setHeader('bg-app-bg');
	};
	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	});
	return (
		<nav
			className={`${header} fixed top-0 w-full transition-all duration-300 font-heading z-50`}
		>
			<div className='w-full h-[5rem] flex justify-between items-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto'>
				<div>
					<h1>PEACE NGO</h1>
				</div>
				<ul className='hidden lg:flex lg:gap-4'>
					{NAVBAR_NAVIGATION.map((item) => (
						<li key={`nav-${item.url}`}>
							<Link target={item.target} href={item.url}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
				<div>
					<Button className='hidden lg:block'>Donate</Button>
				</div>
				<div className='lg:hidden'>
					<SheetComponent />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
