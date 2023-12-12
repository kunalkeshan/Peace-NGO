import React from 'react';
import TeamMemberCard from '../cards/TeamMember';

type TeamsProps = React.ComponentProps<'section'> & {
	teamMembers: TeamMember[];
};

const Teams: React.FC<TeamsProps> = ({ teamMembers }) => {
	return teamMembers.length > 0 ? (
		<section className='w-full h-full bg-white py-12 md:py-16'>
			<div className=''>
				<h2 className='text-2xl lg:text-4xl leading-tight capitalize'>
					Meet Our <span className='text-app-secondary'>Team</span>
				</h2>
				<div className='mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 lg:max-w-none'>
					{teamMembers.map((member) => (
						<TeamMemberCard
							key={`team-member-${member._id}`}
							member={member}
						/>
					))}
				</div>
			</div>
		</section>
	) : null;
};

export default Teams;
