/**
 * Home Page - Hero CTA Component
 */

'use client';

// Dependencies
import { ArrowRightCircle } from 'lucide-react';
import DonateButton from '../resusable/DonateButton';

const HeroCTA = () => {
	return (
		<DonateButton
			textCta='Yes, I want to contribute'
			Icon={ArrowRightCircle}
			iconClassName='ml-2 h-5 w-5 group-hover:ml-3 transition-all duration-300'
			className='mt-4'
		/>
	);
};

export default HeroCTA;
