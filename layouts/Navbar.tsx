import React from 'react';
import Link from 'next/link';
import SheetComponent from './Sheet';
import { NAVBAR_NAVIGATION } from '@/data/navigation';

const Navbar = () => {
	return (
		<nav className='w-full h-[5rem] flex justify-between items-center'>
			<div>
				<h1>PEACE NGO</h1>
			</div>
			<div className='hidden'>
				{NAVBAR_NAVIGATION.map((item) => (
					<Link
						key={`nav-${item.url}`}
						target={item.target}
						href={item.url}
					>
						{item.name}
					</Link>
				))}
			</div>
			<div>
				<SheetComponent />
			</div>
		</nav>
	);
};

export default Navbar;
