import { Button } from '@/components/ui/button';

const Donate = () => {
	return (
		<section className='bg-white'>
			<section className='w-full h-full p-4 md:px-16 py-16 lg:py-32 lg:max-w-7xl lg:mx-auto'>
				<div className=' bg-app-primary p-4 md:p-8 lg:p-16 rounded-lg flex flex-col items-center justify-center gap-6'>
					<p className='font-heading text-2xl text-center lg:text-4xl'>
						Our mission is to help all the people in need.
					</p>
					<p className='text-sm lg:text-lg text-center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent gravida tempus viverra. Sed non pretium nibh,
						in tristique diam.
					</p>
					<Button>Donate</Button>
				</div>
			</section>
		</section>
	);
};

export default Donate;
