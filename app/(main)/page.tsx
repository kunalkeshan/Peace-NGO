/**
 * Home Page
 */

// Dependencies
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import Approach from '@/components/home/Approach';
import Impact from '@/components/home/Impact';
import Stories from '@/components/home/Stories';
import Donate from '@/components/resusable/Donate';
import Blogs from '@/components/home/Blogs';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { storiesQuery } from '@/sanity/lib/querires';

export default async function Home() {
	const stories = await sanityFetch<Story[]>({ query: storiesQuery });
	return (
		<main className='bg-app-bg '>
			<Hero />
			<WhatWeDo />
			<Donate />
			<Approach />
			<Impact />
			<Stories stories={stories} />
			<Blogs />
		</main>
	);
}
