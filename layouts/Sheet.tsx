/**
 * Sheet Menu Component
 */

'use client';

// Dependencies
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
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import DonateButton from '@/components/resusable/DonateButton';
import { NAVBAR_NAVIGATION } from '@/data/navigation';

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
						<Link
							href={'/'}
							onClick={handleCloseSheet}
							prefetch={false}
						>
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
										prefetch={false}
									>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
					<DonateButton className='mt-4 w-full' />
				</div>
				<SheetFooter className='mt-auto text-xs'>
					addrress herre addrress herre addrress herre
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default SheetComponent;
