/**
 * Home Page - Stories/Testimonials Component
 */

'use client';

// Dependencies
import React from 'react';
import Image from 'next/image';
import StoryCard from '../cards/StoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type StoriesProps = React.ComponentProps<'section'> & {
	stories: Story[];
};

const Stories: React.FC<StoriesProps> = ({ stories }) => {
	return (
		<section className='w-full h-full bg-white py-8 md:py-12 lg:py-16 relative'>
			<Image
				src={'/doodles/flower.svg'}
				unoptimized
				width={100}
				height={100}
				className='w-8 md:w-16 lg:w-28 object-contain absolute bottom-0 right-0 lg:right-10 h-auto'
				alt={'flower'}
			/>
			<Image
				src={'/doodles/star2.svg'}
				unoptimized
				width={100}
				height={100}
				className='w-12 object-contain absolute bottom-4 lg:bottom-12 left-0 md:left-4 lg:left-16 h-auto'
				alt={'star2'}
			/>
			<div className='h-full flex flex-col items-start gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto text-center w-full'>
				<div className='relative'>
					<Image
						src={'/doodles/star2.svg'}
						unoptimized
						width={100}
						height={100}
						className='w-16 object-contain absolute -top-12 right-0 md:-right-6 lg:-top-24 h-auto'
						alt={'star2'}
					/>
					<Image
						src={'/doodles/star.svg'}
						unoptimized
						width={100}
						height={100}
						className='w-20 md:w-24 lg:w-28 object-contain absolute -top-16 rotate-90 left-0 md:-left-6 lg:-top-24 h-auto'
						alt={'star'}
					/>
					<h2 className='text-2xl lg:text-4xl leading-tight mx-auto '>
						Our <span className='text-app-secondary'>Stories</span>
					</h2>
					<p className='text-base lg:text-lg text-slate-500'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse varius enim in eros elementum tristique.
						Duis cursus, mi quis viverra ornare
					</p>
				</div>
			</div>
			<Swiper
				slidesPerView={'auto'}
				centeredSlides={true}
				initialSlide={1}
				spaceBetween={30}
				grabCursor={true}
				navigation={true}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				modules={[Pagination, Navigation]}
				className='mySwiper lg:max-w-7xl lg:mx-auto mt-8 mx-4'
			>
				{/* <ul className='grid grid-cols-1 lg:grid-cols-3 gap-6'> */}
				{stories.map((story) => (
					<SwiperSlide key={`story-${story._id}`}>
						<StoryCard story={story} />
					</SwiperSlide>
				))}
				{/* </ul> */}
			</Swiper>
		</section>
	);
};

export default Stories;
