import React from 'react';
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

const SheetComponent = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Are you sure absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently
						delete your account and remove your data from our
						servers.
					</SheetDescription>
				</SheetHeader>
				<SheetFooter>address</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default SheetComponent;
