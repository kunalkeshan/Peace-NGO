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
			<div className='w-full h-full'>
				<Image
					unoptimized
					loading='lazy'
					src={image?.image ?? ''}
					className='object-cover rounded-lg border-b border-black'
					alt={image?.alt}
					width={200}
					height={160}
					style={{ width: '100%', height: '100%' }}
					sizes='(max-width: 768px) 100vw,
						(max-width: 1200px) 50vw,
							33vw'
					placeholder='blur'
					blurDataURL={image.blurDataURL}
				/>
			</div>
		</ImageListItem>
	);
};

export default GalleryImageItem;
