import Image from "next/image";

const History = () => {
    return (
        <section className="w-full h-full bg-white py-12 md:py-16">
            <div className="h-full flex flex-col-reverse lg:flex-row items-start gap-8 justify-center">
                <div className="flex flex-col gap-4 lg:gap-8 lg:w-1/2">
                    <h2 className="text-2xl lg:text-4xl leading-tight">
                        <span className="text-app-secondary">History</span>
                    </h2>
                    <div className="flex flex-col gap-4 text-base lg:text-lg text-slate-500">
                        <p className="">
                            The seeds for peace were sown in 2017, with the
                            simple aim of spreading Climate change Awareness.
                            However, no sooner did the start of the covid-19
                            disillusion the humankind than the work evolved to
                            help spread awareness about the disease. Inspired by
                            the Karan Gupta Education foundation, our founder,
                            ____, made it the vision to help mankind and change
                            the world. Since then, the seeds sown have created a
                            full fledged tree with different leaves denoting its
                            breadth to divergent areas of the society. In 2020,
                            the health’s leaves touched the rural community with
                            branches further deepening to the anti-tobacco
                            campaign in 2021; With its roots strengthening, the
                            leaves further spread to education and establishment
                            of rural libraries. The leaves, hence delivered the
                            pencil’s promise by 2021. Climate change, was the
                            name written on seeds sown, with its manifestation
                            being in multiplication of plants planted and
                            removal of plastics. 2022 marked not only women
                            empowerment but also fastened the roots to more
                            social issues; expanding on these leaves, the tree
                            continues to thrive hoping to further its reach and
                            intensify its shade so as to protect the community
                            by the vices present in society.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:sticky top-32 z-0">
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

export default History;
