import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

type DonateButtonProps = React.ComponentPropsWithRef<'button'>;

const DonateButton: React.FC<DonateButtonProps> = ({ className, ...props }) => {
	return (
		<Button className={cn(className)} {...props}>
			Donate{' '}
			<Heart className='ml-2 h-4 w-4 text-inherit' strokeWidth={1.5} />
		</Button>
	);
};

export default DonateButton;
