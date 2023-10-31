'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetFooter,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Heart, Menu } from 'lucide-react';
import { NAVBAR_NAVIGATION } from '@/data/navigation';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const SheetComponent = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const handleCloseSheet = () => {
		setOpen(false);
	};

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger>
				<Menu />
			</SheetTrigger>
			<SheetContent
				side={'top'}
				className='h-full flex flex-col justify-between'
			>
				<SheetHeader className='!text-center'>
					<SheetTitle className='font-semibold text-lg md:text-2xl'>
						<Link href={'/'} onClick={handleCloseSheet}>
							<span className='text-app-secondary'>PEACE</span>{' '}
							NGO
						</Link>
					</SheetTitle>
					<SheetDescription>
						Peace within humanity, peace within nature, peace within
						you.
					</SheetDescription>
				</SheetHeader>
				<div>
					<ul className='flex gap-4 flex-col font-heading'>
						{NAVBAR_NAVIGATION.map((link) => {
							const isActive = pathname === link.url;
							return (
								<li
									key={`nav-${link.name}`}
									className='font-medium w-fit'
									onClick={handleCloseSheet}
								>
									<Link
										href={link.url}
										target={link.target}
										className={`${
											isActive
												? 'text-primary-clinic'
												: ''
										} w-full hover:text-primary-clinic transition-all`}
									>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
					<Button className='w-full mt-4'>
						Donate{' '}
						<Heart className='ml-2 h-4 w-4' strokeWidth={1.5} />
					</Button>
				</div>
				<SheetFooter className='mt-auto text-xs'>
					addrress herre addrress herre addrress herre
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default SheetComponent;
