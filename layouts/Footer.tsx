/**
 * Footer Component
 */

// Dependencies
import Link from 'next/link';
import { FOOTER_NAVIGATION } from '@/data/navigation';
import { PEACE_NGO_SOCIALS } from '@/data/ngo';

const Footer = () => {
	return (
		<footer id='contact' className='bg-[#f6f7fc]'>
			<div className='lg:mx-auto lg:max-w-[1440px] p-4 md:px-16'>
				<div className='flex flex-col items-stretch justify-start'>
					<div className='w-full border-b p-2 md:p-4'>
						<div className='flex flex-col items-center justify-between md:items-start lg:flex-row'>
							<Link
								href='/'
								className='flex items-center'
								prefetch={false}
							>
								<p className='mb-[40px] leading-none lg:mb-0 font-semibold text-lg md:text-2xl'>
									<span className='text-app-secondary'>
										Peace
									</span>{' '}
									<span>NGO</span>
								</p>
							</Link>
							<div className='flex w-full flex-col items-center justify-between md:flex-row lg:justify-end'>
								<div className='mb-4 flex items-center justify-start lg:ml-[64px]'>
									{PEACE_NGO_SOCIALS.map((social) => (
										<Link
											key={`footer-social-${social.name}`}
											target='_blank'
											rel='noopener noreferrer'
											href={social.url}
											title={social.name}
											className='mx-[2px] p-3 transition-all duration-300 hover:text-app-secondary'
											prefetch={false}
										>
											<social.Icon />
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className='w-full p-2 md:p-4'>
						<div className='flex flex-col items-center justify-start md:flex-row md:justify-between'>
							<div className='mb-4 flex flex-wrap items-stretch justify-center text-center gap-8'>
								{FOOTER_NAVIGATION.map((link) => (
									<Link
										key={`footer-link-${link.url}`}
										href={link.url}
										target={link.target}
										className='py-2 text-[14px] text-slate-500 hover:text-slate-800 transition-all duration-300'
										prefetch={false}
									>
										{link.name}
									</Link>
								))}
							</div>
							<p className='mb-4 text-[12px] text-slate-500'>
								Copyright &copy; 2023 Peace NGO
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
