/**
 * Navbar Component
 */

'use client';

// Dependencies
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SheetComponent from './Sheet';
import { NAVBAR_NAVIGATION } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import DonateButton from '@/components/resusable/DonateButton';

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
	const pathname = usePathname();
	return (
		<nav
			className={`${header} sticky top-0 w-full transition-all duration-300 ${
				pathname !== '/' && 'bg-white'
			} z-50`}
		>
			<div className='w-full h-[5rem] flex justify-between items-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto'>
				<Link href='/' prefetch={false}>
					<h1 className='font-semibold text-lg md:text-2xl'>
						<span className='text-app-secondary'>PEACE</span> NGO
					</h1>
				</Link>
				<div className='hidden lg:flex gap-4 items-center justify-center'>
					<div className=' lg:flex lg:gap-4'>
						{NAVBAR_NAVIGATION.map((item) => (
							<Button
								asChild
								key={`nav-${item.url}`}
								variant={'ghost'}
							>
								<Link
									target={item.target}
									href={item.url}
									className='w-full'
									prefetch={false}
								>
									{item.name}
								</Link>
							</Button>
						))}
					</div>
					<DonateButton />
				</div>
				<div className='lg:hidden'>
					<SheetComponent />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
