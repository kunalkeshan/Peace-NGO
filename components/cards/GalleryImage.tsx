/**
 * Gallery Image Component
 */

// Dependencies
import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';

type GalleryImageProps = React.ComponentProps<'li'> & {
	image: GalleryImage & { blurDataURL: string };
};

const GalleryImageItem: React.FC<GalleryImageProps> = ({ image }) => {
	return (
		<ImageListItem>
			<div>
				<Image
					unoptimized
					loading='lazy'
					src={image?.image ?? ''}
					className='w-full rounded-lg border-b border-black'
					alt={image?.alt}
					width={100}
					height={100}
					placeholder='blur'
					blurDataURL={image.blurDataURL}
				/>
			</div>
		</ImageListItem>
	);
};

export default GalleryImageItem;
