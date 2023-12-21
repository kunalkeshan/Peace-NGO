/**
 * About Page
 */

// Dependencies
import Founder from '@/components/about/Founder';
import Hero from '@/components/about/Hero';
import History from '@/components/about/History';
import Mission from '@/components/about/Mission';
import Teams from '@/components/about/Teams';
import Vision from '@/components/about/Vision';
import { parulKhannaDocument, teamMembersQuery } from '@/sanity/lib/querires';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function About() {
	const founder = await sanityFetch<TeamMember>({
		query: parulKhannaDocument,
	});
	const teamMembers = await sanityFetch<TeamMember[]>({
		query: teamMembersQuery,
	});
	return (
		<main className='w-full h-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto'>
			<Hero />
			<Vision />
			<Mission />
			<History />
			<Founder founder={founder} />
			<Teams teamMembers={teamMembers} />
		</main>
	);
}
