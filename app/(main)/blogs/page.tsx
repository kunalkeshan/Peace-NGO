import { postsQuery } from '@/sanity/lib/querires';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function Blogs() {
	const posts = await sanityFetch<BlogPost[]>({ query: postsQuery });
	return <main></main>;
}
