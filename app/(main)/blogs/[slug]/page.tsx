import { client } from '@/sanity/lib/client';
import { postPathsQuery, postQuery } from '@/sanity/lib/querires';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import Post from '@/components/blog/Post';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateStaticParams() {
	const posts = await client.fetch(postPathsQuery);
	return posts;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const post = await client.fetch<BlogPost>(postQuery, params);

	return {
		title: `${post.title} | Peace NGO`,
		description: post.description,
		openGraph: {
			...(post.image && { images: [post.image] }),
			type: 'website',
			title: `${post.title} | Peace NGO`,
			description: post.description,
		},
		twitter: {
			...(post.image && { images: [post.image] }),
			card: 'summary_large_image',
			title: `${post.title} | Peace NGO`,
			description: post.description,
		},
	};
}

export default async function Blog({ params }: Props) {
	const post = await sanityFetch<BlogPost>({ query: postQuery, params });
	if (!post) {
		redirect('/blogs');
	}
	return <Post post={post} />;
}
