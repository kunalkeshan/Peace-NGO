/**
 * Individual Blog Post Component
 */

// Dependencies
import React from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';

type PostProps = React.ComponentProps<'main'> & {
	post: BlogPost;
};

const Post: React.FC<PostProps> = ({ post }) => {
	return (
		<main className='h-full grid grid-cols-1 lg:grid-cols-2 p-4 md:px-16 lg:max-w-9xl gap-8 lg:mx-auto py-8 lg:py-16'>
			<PostHeader {...post} />
			<PostBody post={post} />
		</main>
	);
};

export default Post;
