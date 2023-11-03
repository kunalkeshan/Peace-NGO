import { client } from '@/sanity/lib/client';
import { postPathsQuery, postQuery } from '@/sanity/lib/querires';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { Book } from 'lucide-react';

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
			<Header {...post} />
			<section className='h-[200vh] prose'>
				<PortableText value={post.body} />
			</section>
		</main>
	);
}

interface BlogSubSectionProps {
	HeaderProps: React.ComponentProps<'header'> & {
		title: BlogPost['title'];
		description: BlogPost['description'];
		image?: BlogPost['image'];
		alt?: BlogPost['alt'];
		author: BlogPost['author'];
		publishedAt: BlogPost['publishedAt'];
	};
}

const Header: React.FC<BlogSubSectionProps['HeaderProps']> = ({
	image,
	alt,
	title,
	description,
	author,
	publishedAt,
}) => {
	console.log(author);
	return (
		<header className='flex flex-col gap-4 h-fit lg:sticky lg:top-32 text-center lg:text-left'>
			{image ? (
				<div className='rounded overflow-hidden'>
					<Image
						src={image}
						alt={alt || ''}
						width={100}
						height={100}
						className='w-full h-auto object-cover aspect-video'
						unoptimized
					/>
				</div>
			) : null}
			<h1 className='text-2xl lg:text-4xl leading-tight'>{title}</h1>
			<h2 className='text-base lg:text-lg text-slate-500'>
				{description}
			</h2>
			<section className='flex items-center gap-4 mt-4 text-left'>
				{author ? (
					<div className='flex items-center gap-2'>
						<div className='rounded-full overflow-hidden w-16 h-16'>
							<Image
								src={author.image}
								alt={author.alt || ''}
								width={100}
								height={100}
								className='w-full h-auto object-cover'
								unoptimized
							/>
						</div>
						<p className='flex flex-col'>
							<span className='text-lg font-medium'>
								{author.name}
							</span>
							<span>
								{new Intl.DateTimeFormat('en-US', {
									dateStyle: 'medium',
								}).format(new Date(publishedAt))}
							</span>
						</p>
					</div>
				) : null}
				<div>•</div>
				<div className='flex gap-2'>
					<Book /> <span>12 min read</span>
				</div>
			</section>
		</header>
	);
};
