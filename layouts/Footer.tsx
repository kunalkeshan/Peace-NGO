import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
	return (
		<footer id='contact' className='bg-[#f6f7fc]'>
			<div className='lg:mx-auto lg:max-w-[1440px] p-4 md:px-16'>
				<div className='flex flex-col items-stretch justify-start'>
					<div className='w-full border-b p-2 md:p-4'>
						<div className='flex flex-col items-center justify-between md:items-start lg:flex-row'>
							<Link href='/' className='flex items-center'>
								<Link
									href={'/'}
									className='mb-[40px] leading-none lg:mb-0 font-semibold text-lg md:text-2xl'
								>
									<span className='text-app-secondary'>
										Peace
									</span>{' '}
									NGO
								</Link>
							</Link>
							<div className='flex w-full flex-col items-center justify-between md:flex-row lg:justify-end'>
								<div className='mb-4 flex flex-col items-stretch justify-start text-center md:flex-row'>
									{/* <a className='p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 '>
										How we work
									</a>
									<a className='p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 '>
										Services
									</a>
									<a className='p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 '>
										Solution
									</a>
									<a className='p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 '>
										FAQs
									</a> */}
								</div>
								<div className='mb-4 flex items-center justify-start lg:ml-[64px]'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.linkedin.com/company/codelance-devs/'
										className='mx-[2px] p-3 transition-all duration-300 hover:text-app-secondary'
									>
										<Linkedin />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://twitter.com/CodelanceDevs'
										className='mx-[2px] p-3 transition-all duration-300 hover:text-app-secondary'
									>
										<Twitter />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.instagram.com/codelancedevs/'
										className='mx-[2px] p-3 transition-all duration-300 hover:text-app-secondary'
									>
										<Instagram />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='mailto:contact@codelancedevs.com'
										className='mx-[2px] p-3 transition-all duration-300 hover:text-app-secondary'
									>
										<Mail />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='w-full p-2 md:p-4'>
						<div className='flex flex-col items-center justify-start md:flex-row md:justify-between'>
							<div className='mb-4 flex flex-col items-stretch justify-center text-center md:flex-row'>
								<Link
									href='/terms-and-conditions'
									className='py-2 text-[14px] text-[#777a85] md:mr-[24px]'
								>
									Terms and Conditions
								</Link>
								<Link
									href='/privacy-policy'
									className='py-2 text-[14px] text-[#777a85] md:mr-[24px]'
								>
									Privacy Policy
								</Link>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://blog.codelancedevs.com'
									className='py-2 text-[14px] text-[#777a85] md:mr-[24px]'
								>
									Blog
								</a>
							</div>
							<p className='mb-4 text-[12px] text-[#777a85]'>
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
