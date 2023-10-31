import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { galleryImagesQuery } from '@/sanity/lib/querires';

export default async function Gallery() {
	const galleryImages = await sanityFetch<GalleryImage[]>({
		query: galleryImagesQuery,
	});
	return <main></main>;
}
