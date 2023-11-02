import { client } from '@/sanity/lib/client';
import { postPathsQuery, postQuery } from '@/sanity/lib/querires';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

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
			title: `${post.title} | Bellania`,
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
	return (
		<main className='h-full grid grid-cols-1 lg:grid-cols-2 p-4 md:px-16 lg:max-w-9xl gap-8 lg:mx-auto py-16 lg:pb-32'>
			<section className='flex flex-col gap-4 h-fit lg:sticky lg:top-32 text-center lg:text-left'>
				{post.image ? (
					<div className='rounded overflow-hidden'>
						<Image
							src={post.image}
							alt={post.alt || ''}
							width={100}
							height={100}
							className='w-full h-auto object-cover aspect-video'
							unoptimized
						/>
					</div>
				) : null}
				<h1 className='text-4xl font-medium'>{post.title}</h1>
				<h2 className='text-xl'>{post.description}</h2>
				{/* Add Author & Pulication Date Information Here */}
			</section>
			<section className='h-[200vh]'>
				<PortableText value={post.body} />
			</section>
		</main>
	);
}
