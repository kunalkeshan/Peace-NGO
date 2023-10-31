import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { programsQuery } from '@/sanity/lib/querires';

export default async function Programs() {
	const programs = await sanityFetch<Program[]>({ query: programsQuery });
	return <main></main>;
}
