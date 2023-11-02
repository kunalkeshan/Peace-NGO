import { postsQuery } from '@/sanity/lib/querires';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import BlogsSection from '@/components/home/Blogs';

export default async function Blogs() {
	const posts = await sanityFetch<BlogPost[]>({ query: postsQuery });
	return (
		<main>
			<BlogsSection posts={posts} />
		</main>
	);
}
