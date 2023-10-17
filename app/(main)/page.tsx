import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import Approach from '@/components/home/Approach';
import Impact from '@/components/home/Impact';
import Stories from '@/components/home/Stories';
import Donate from '@/components/resusable/Donate';
import Blogs from '@/components/home/Blogs';

export default function Home() {
	return (
		<main className='bg-app-bg '>
			<Hero />
			<WhatWeDo />
			<Donate />
			<Approach />
			<Impact />
			<Stories />
			<Blogs />
		</main>
	);
}
