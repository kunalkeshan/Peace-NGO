import Image from "next/image";

const Vision = () => {
    return (
        <section className="w-full h-full bg-white py-12 md:py-16">
            <div className="h-full flex flex-col-reverse lg:flex-row-reverse items-start gap-8 justify-center">
                <div className="flex flex-col gap-4 lg:gap-8 lg:w-1/2">
                    <h2 className="text-2xl lg:text-4xl leading-tight font-medium">
                        <span className="text-app-secondary">Vision</span>
                    </h2>
                    <div className="flex flex-col gap-4 text-base lg:text-lg text-slate-500">
                        <p className="">
                            Our non-profit organization works to empower local
                            communities by educating them about climate change,
                            promoting environmental stewardship, and providing
                            affordable healthcare services. We envision a
                            peaceful future for rural India. Together, we see
                            resilient, educated, and healthy rural areas where
                            sustainability and peace coexist together.
                        </p>
                    </div>
                </div>
                <div className="bg-red-200 lg:w-1/2 lg:sticky top-32 z-0">
                    <Image
                        src={
                            "https://free4kwallpapers.com/uploads/originals/2020/05/29/-peaceful-pier-wallpaper.jpg"
                        }
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

export default Vision;
