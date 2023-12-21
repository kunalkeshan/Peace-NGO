/**
 * Privacy Policy Page
 */

// Dependencies
import { PEACE_NGO_PRIVACY_POLICY } from '@/data/legal';

const PrivacyPolicy = () => {
	return (
		<main className='w-full h-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto'>
			<section className='w-full'>
				<h1 className='text-4xl md:text-5xl leading-tight lg:text-6xl font-medium'>
					Privacy Policy
				</h1>
				<p className='text-slate-500 text-base lg:text-lg mt-4'>
					Effective Date: 21st Dec. 2023
				</p>
				<h2 className='text-slate-500 text-base lg:text-lg'>
					At Peace NGO, your privacy is of utmost importance to us.
					This Privacy Policy outlines how we collect, use, disclose,
					and protect your personal information when you visit our
					website or interact with us through our contact form. By
					using our website and providing your information, you
					consent to the practices described in this policy.
				</h2>
			</section>
			<section className='w-full mt-8'>
				<ul className='list-disc ml-4'>
					{PEACE_NGO_PRIVACY_POLICY.map((pp, index) => (
						<li key={`pp-${index} block`}>
							<h3 className='font-medium'>{pp.title}</h3>
							<ul className='ml-4'>
								{pp.descriptions.map((desc, index2) => (
									<li key={`pp-${index}-${index2}`}>
										{desc}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<p className='mt-4'>
					By using our website, you acknowledge that you have read,
					understood, and agreed to these Privacy Policies. If you do
					not agree to these terms, please do not use our website.
				</p>
			</section>
		</main>
	);
};

export default PrivacyPolicy;
