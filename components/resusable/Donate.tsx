import { Button } from '@/components/ui/button';

const Donate = () => {
	return (
		<section className='w-full h-full'>
			<div className='lg:max-w-7xl lg:mx-auto py-16 lg:py-32 flex flex-col items-center justify-center gap-6'>
				<p className='font-heading text-2xl lg:text-4xl'>
					Our mission is to help all the people in need.
				</p>
				<p className='text-sm lg:text-lg text-slate-500'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Praesent gravida tempus viverra. Sed non pretium nibh, in
					tristique diam.
				</p>
				<Button>Donate</Button>
			</div>
		</section>
	);
};

export default Donate;
