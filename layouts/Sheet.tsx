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
import { Menu } from 'lucide-react';
import { NAVBAR_NAVIGATION } from '@/data/navigation';

const SheetComponent = () => {
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
				<SheetHeader>
					<SheetTitle>Are you sure absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently
						delete your account and remove your data from our
						servers.
					</SheetDescription>
				</SheetHeader>
				<ul className=''>
					{NAVBAR_NAVIGATION.map((item) => (
						<li key={`nav-sheet-${item.url}`}>
							<Link target={item.target} href={item.url}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
				<SheetFooter>address</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default SheetComponent;
