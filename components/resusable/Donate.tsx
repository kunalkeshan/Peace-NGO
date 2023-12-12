import Image from 'next/image';
import DonateButton from './DonateButton';

const Donate = () => {
	return (
		<section className='bg-white w-full h-full'>
			<section className='w-full h-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto'>
				<div className=' bg-app-secondary p-8 md:p-12 lg:p-16 rounded-lg flex flex-col lg:flex-row gap-8'>
					<div className='w-full'>
						<Image
							unoptimized
							className='rounded-lg object-cover w-full h-full'
							src='/images/wed.jpg'
							alt='donate'
							width={100}
							height={100}
						/>
					</div>
					<div className='flex flex-col gap-4 text-white'>
						<p className='text-base lg:text-lg'>
							Introducing you Peace NGO
						</p>
						<h2 className='text-4xl'>
							We create amazing digital products
						</h2>
						<p className='text-base lg:text-lg'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique. Duis cursus, mi quis viverra ornare.
						</p>
						<DonateButton className='bg-white hover:bg-slate-200 text-black lg:w-fit' />
					</div>
				</div>
			</section>
		</section>
	);
};

export default Donate;
