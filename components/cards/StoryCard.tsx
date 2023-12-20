import React from 'react';
import Image from 'next/image';

type StoryCardProps = React.ComponentProps<'li'> & {
	story: Story;
};

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
	return (
		<div className='bg-app-bg rounded-md flex flex-col items-center p-4 gap-4 max-w-xs h-fit'>
			{/* <div className='mt-4 rounded-md overflow-hidden max-w-[60%] mx-auto w-32 h-32 '>
				<Image
					src={story.image}
					alt={story.name}
					width={100}
					height={100}
					className='w-full h-auto object-cover aspect-square'
					unoptimized
				/>
			</div> */}
			<p className='font-medium text-xl '>{story.name}</p>
			<p className='text-base text-justify text-slate-500'>
				&quot;{story.story}&quot;
			</p>
		</div>
	);
};

export default StoryCard;
