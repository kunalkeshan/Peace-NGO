/**
 * Impact Card Component
 */

// Dependencies
import React from 'react';
import Counter from '../resusable/Counter';

type ImpactCardProps = React.ComponentProps<'li'> & {
	impact: Impact;
};

const ImpactCard: React.FC<ImpactCardProps> = ({ impact }) => {
	return (
		<li className=''>
			<Counter
				from={0}
				to={impact.number}
				className='text-app-secondary font-medium text-2xl lg:text-4xl'
			/>
			<span className='font-medium'>{impact.title}</span>
		</li>
	);
};

export default ImpactCard;
