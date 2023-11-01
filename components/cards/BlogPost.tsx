import React from 'react';

type BlogPostProps = React.ComponentProps<'li'> & {
	post: BlogPost;
};

const BlogPostCard: React.FC<BlogPostProps> = ({ post }) => {
	return (
		<li className='flex flex-col gap-4'>
			<div className='w-full h-72 bg-gray-300 rounded-lg'></div>
			<div className='flex flex-col gap-2'>
				<h3 className='text-xl font-semibold'>{post.title}</h3>
				<p className='text-base text-slate-500'>{post.description}</p>
			</div>
		</li>
	);
};

export default BlogPostCard;
