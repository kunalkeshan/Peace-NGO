import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Donate = () => {
	return (
		<section className='bg-white'>
			<section className='w-full h-full p-4 md:px-16 py-16 lg:py-32 lg:max-w-7xl lg:mx-auto'>
				<div className=' bg-app-primary p-4 md:p-8 lg:p-16 rounded-lg flex flex-col gap-6'>
					<div className='w-full'>
						<Image
							unoptimized
							className='rounded-lg w-full'
							src='/images/wed.jpg'
							alt='donate'
							width={100}
							height={100}
						/>
					</div>
					<div className='flex flex-col gap-6'>
						<p>Introducing you Lovelyacts</p>
						<h1>We create amazing digital products</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique. Duis cursus, mi quis viverra ornare.
						</p>
						<Button>Donate</Button>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Donate;
