/**
 * Blog Post Body
 */

// Dependencies
import React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/resusable/SanityImage';

type PostBodyProps = React.ComponentProps<'section'> & {
	post: BlogPost;
};

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

const PostBody: React.FC<PostBodyProps> = ({ post }) => {
	return (
		<section className='prose'>
			{post.body && (
				<PortableText
					value={post.body}
					components={portableTextComponents}
				/>
			)}
		</section>
	);
};

export default PostBody;
