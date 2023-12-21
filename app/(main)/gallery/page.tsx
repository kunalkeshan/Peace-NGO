/**
 * Gallery Page
 */

// Dependencies
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { galleryImagesQuery } from '@/sanity/lib/querires';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import GalleryImageItem from '@/components/cards/GalleryImage';

export default async function Gallery() {
	const galleryImages = await sanityFetch<GalleryImage[]>({
		query: galleryImagesQuery,
	});
	return (
		<main className=''>
			<div className='w-full lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]'>
				<div className='md:hidden'>
					<Box sx={{ width: '100%', height: '100%' }}>
						<ImageList variant='masonry' cols={1} gap={8}>
							{galleryImages.map((item) => (
								<GalleryImageItem
									key={`item-list-1-${item._id}`}
									image={item}
								/>
							))}
						</ImageList>
					</Box>
				</div>
				<div className='hidden md:block lg:hidden'>
					<Box sx={{ width: '100%', height: '100%' }}>
						<ImageList variant='masonry' cols={2} gap={8}>
							{galleryImages.map((item) => (
								<GalleryImageItem
									key={`item-list-2-${item._id}`}
									image={item}
								/>
							))}
						</ImageList>
					</Box>
				</div>
				<div className='hidden lg:block'>
					<Box sx={{ width: '100%', height: '100%' }}>
						<ImageList variant='masonry' cols={3} gap={8}>
							{galleryImages.map((item) => (
								<GalleryImageItem
									key={`item-list-3-${item._id}`}
									image={item}
								/>
							))}
						</ImageList>
					</Box>
				</div>
			</div>
		</main>
	);
}
