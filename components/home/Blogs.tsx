import React from 'react';
import BlogPostCard from '../cards/BlogPost';

type BlogsProps = React.ComponentProps<'section'> & {
	posts: BlogPost[];
};

const Blogs: React.FC<BlogsProps> = ({ posts }) => {
	return (
		<section className='h-full flex flex-col items-start gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-12 lg:py-16'>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl lg:text-4xl leading-tight'>Blogs</h2>
				<p className='text-base lg:text-lg text-slate-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, voluptas.
				</p>
			</div>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{posts.map((post) => (
					<BlogPostCard
						post={post}
						key={`landing-blog-${post._id}`}
					/>
				))}
			</ul>
		</section>
	);
};

export default Blogs;
