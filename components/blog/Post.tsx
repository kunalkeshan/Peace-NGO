'use client';

import React, { useMemo } from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/resusable/SanityImage';
import PostHeader from './PostHeader';

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

type PostProps = React.ComponentProps<'main'> & {
	post: BlogPost;
};

const Post: React.FC<PostProps> = ({ post }) => {
	const readingTime = useMemo(() => {
		const AVERAGE_READING_TIME = 200;
		let totalWords = 0;
		post.body?.forEach((item: { children: { text?: string }[] }) => {
			if (item.children) {
				item.children.forEach((child) => {
					if (child?.text) {
						totalWords += child.text.length;
					}
				});
			}
		});
		return Math.round(totalWords / AVERAGE_READING_TIME);
	}, [post]);

	return (
		<main className='h-full grid grid-cols-1 lg:grid-cols-2 p-4 md:px-16 lg:max-w-9xl gap-8 lg:mx-auto py-8 lg:py-16'>
			<PostHeader {...post} readingTime={readingTime} />
			<section className='prose'>
				{post.body && (
					<PortableText
						value={post.body}
						components={portableTextComponents}
					/>
				)}
			</section>
		</main>
	);
};

export default Post;
