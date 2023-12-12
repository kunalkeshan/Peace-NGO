import Image from 'next/image';

const Approach = () => {
	return (
        <section className="w-full h-full bg-white py-8 md:py-12 lg:py-16">
            <div className="h-full flex flex-col-reverse lg:flex-row-reverse items-start gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto">
                <div className="flex flex-col gap-4 lg:gap-8 lg:w-1/2">
                    <h2 className="text-2xl lg:text-4xl leading-tight">
                        Our <span className="text-app-secondary">Approach</span>
                    </h2>
                    <div className="flex flex-col gap-4 text-base lg:text-lg text-slate-500">
                        <p className="">
                            With a focus on rural youth, our NGO is dedicated to
                            fostering peace within humanity, nature, and the
                            individual. We address critical issues of climate
                            change, education, and health through a holistic
                            approach.
                        </p>
                        <p className="">
                            Collaborating closely with local communities and
                            experts, we conduct thorough needs assessments to
                            understand the unique challenges faced by rural
                            youth. Our interventions target areas most
                            vulnerable to climate change, with limited access to
                            education and healthcare.
                        </p>
                        <p className="">
                            Our success is rooted in strong partnerships with
                            regional governments, educational institutions, and
                            healthcare providers. We empower rural youth by
                            educating them about climate change, enabling them
                            to adapt and mitigate its impacts.
                        </p>
                        <p className="">
                            Embracing technology as a cornerstone, our future
                            vision is to integrate innovative tech solutions
                            into all program dimensions, ensuring a brighter
                            future for rural youth.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:sticky top-32 z-0">
                    <Image
                        src={"/images/ourapproach.jpg"}
                        unoptimized
                        width={100}
                        height={100}
                        className="w-full rounded-lg object-cover h-full"
                        alt={"image"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Approach;
