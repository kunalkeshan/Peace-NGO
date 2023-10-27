import React from 'react';
import ImpactCard from '../cards/ImpactCard';

type ImpactProps = React.ComponentProps<'section'> & {
	impacts: Impact[];
};

const ImpactCreated: React.FC<ImpactProps> = ({ impacts }) => {
	return (
		<section className='h-full flex flex-col items-start gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto text-center py-16 lg:py-32'>
			<h2 className='text-2xl lg:text-4xl leading-tight mx-auto'>
				<span className='text-app-secondary'>Impact</span> Created by us
			</h2>
			<p className='text-base lg:text-lg text-slate-500'>
				Making a small difference in someone&apos;s life adds meaning to
				every endeavor. Samaritans like you make us successful in our
				purpose, “Creating a Thriving Tomorrow, One Rural Youth at a
				Time”
			</p>
			<ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mx-auto'>
				{impacts.map((data) => (
					<ImpactCard impact={data} key={`impact-${data._id}`} />
				))}
			</ul>
		</section>
	);
};

export default ImpactCreated;
