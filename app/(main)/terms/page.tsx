/**
 * Terms And Conditions Page
 */

// Dependencies
import { PEACE_NGO_TERMS_AND_CONDITIONS } from '@/data/legal';

const TermsAndConditions = () => {
	return (
		<main className='w-full h-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto'>
			<section className='w-full'>
				<h1 className='text-4xl md:text-5xl leading-tight lg:text-6xl font-medium'>
					Terms & Conditions
				</h1>
				<p className='text-slate-500 text-base lg:text-lg mt-4'>
					Effective Date: 21st Dec. 2023
				</p>
				<h2 className='text-slate-500 text-base lg:text-lg'>
					Welcome to Peace NGO&apos;s website. By accessing and using
					this website, you agree to comply with and be bound by these
					Terms and Conditions. Please read the following terms
					carefully.
				</h2>
			</section>
			<section className='w-full mt-8'>
				<ul className='list-disc ml-4'>
					{PEACE_NGO_TERMS_AND_CONDITIONS.map((toc, index) => (
						<li key={`toc-${index} block`}>
							<h3 className='font-medium'>{toc.title}</h3>
							<ul className='ml-4'>
								{toc.descriptions.map((desc, index2) => (
									<li key={`toc-${index}-${index2}`}>
										{desc}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<p className='mt-4'>
					By using our website, you acknowledge that you have read,
					understood, and agreed to these Terms and Conditions. If you
					do not agree to these terms, please do not use our website.
				</p>
			</section>
		</main>
	);
};

export default TermsAndConditions;
