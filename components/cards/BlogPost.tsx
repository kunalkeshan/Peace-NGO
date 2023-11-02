import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type BlogPostProps = React.ComponentProps<'li'> & {
	post: BlogPost;
};

const BlogPostCard: React.FC<BlogPostProps> = ({ post }) => {
	return (
		<li className='group'>
			<Link href={`/blogs/${post.slug}`} className='flex flex-col gap-4'>
				<div className='w-full h-72 overflow-hidden rounded-lg'>
					<Image
						src={post.image || ''}
						alt={post.alt || ''}
						width={100}
						height={100}
						className='w-full h-auto object-cover aspect-square group-hover:scale-105 transition-all duration-300'
						unoptimized
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className='text-xl font-semibold'>{post.title}</h3>
					<p className='text-base text-slate-500'>
						{post.description}
					</p>
				</div>
			</Link>
		</li>
	);
};

export default BlogPostCard;
