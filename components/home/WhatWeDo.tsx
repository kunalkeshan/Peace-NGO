import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
    return (
        <section className="w-full h-full relative bg-white">
            <Image
                src={"/doodles/star2.svg"}
                unoptimized
                width={100}
                height={100}
                className="w-12 lg:w-16 object-contain right-8 lg:right-12 top-12 absolute h-auto"
                alt={"star2"}
            />
            <div className="py-16 lg:py-32 flex flex-col justify-center lg:flex-row gap-6 p-4 md:px-16 lg:max-w-7xl lg:mx-auto">
                <div className="flex flex-col gap-4 lg:w-1/2">
                    <h2 className="text-2xl lg:text-4xl">What we do</h2>
                    <p className="text-base lg:text-lg text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero consectetur veritatis explicabo quas quae.
                        Laborum, tempore ullam impedit quia omnis sit, excepturi
                        cumque perspiciatis culpa eaque voluptates dicta modi
                        voluptatibus!
                    </p>
                    <div className="bg-app-secondary/50 relative text-black rounded-lg p-4 flex items-center justify-between w-full md:mx-auto lg:mx-0 md:w-fit">
                        <Image
                            src={"/doodles/arrow.svg"}
                            unoptimized
                            width={100}
                            height={100}
                            className="w-20 lg:w-28 object-contain absolute bottom-8 lg:-bottom-20 hidden md:block -left-24 -rotate-[120deg] lg:rotate-180 h-auto"
                            alt={"arrow"}
                        />
                        <div className="w-1/4">
                            <Image
                                src={
                                    "https://free4kwallpapers.com/uploads/originals/2020/05/29/-peaceful-pier-wallpaper.jpg"
                                }
                                unoptimized
                                width={100}
                                height={100}
                                className="w-12 rounded-xl object-cover h-12"
                                alt={"image"}
                            />
                        </div>
                        <div className="w-3/4">
                            <p className="text-sm lg:text-base">
                                &quot;Make big change and help the world.&quot;
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6 lg:w-1/2 h-fit">
                    <div className="p-4 flex md:flex-col items-center gap-4 border rounded-lg shadow">
                        <div className="w-16 h-16 bg-app-primary/50 flex justify-center items-center rounded-full">
                            <Image
                                unoptimized
                                src={
                                    "https://img.icons8.com/quill/000000/greenhouse-effect.png"
                                }
                                alt="icon"
                                width={50}
                                height={50}
                                className="w-12 h-12"
                            />
                        </div>
                        <p className="font-semibold">Climate Change</p>
                    </div>
                    <div className="p-4 flex md:flex-col items-center gap-4 border rounded-lg shadow">
                        <div className="w-16 h-16 bg-app-primary/50 flex justify-center items-center rounded-full">
                            <Image
                                unoptimized
                                src={
                                    "https://img.icons8.com/quill/50/female.png"
                                }
                                alt="icon"
                                width={50}
                                height={50}
                                className="w-12 h-12"
                            />
                        </div>
                        <p className="font-semibold">Women Empowerment</p>
                    </div>
                    <div className="p-4 flex md:flex-col items-center gap-4 border rounded-lg shadow">
                        <div className="w-16 h-16 bg-app-primary/50 flex justify-center items-center rounded-full">
                            <Image
                                unoptimized
                                src={
                                    "https://img.icons8.com/quill/50/education.png"
                                }
                                alt="icon"
                                width={50}
                                height={50}
                                className="w-12 h-12"
                            />
                        </div>
                        <p className="font-semibold">Education</p>
                    </div>
                    <div className="p-4 flex md:flex-col items-center gap-4 border rounded-lg shadow">
                        <div className="w-16 h-16 bg-app-primary/50 flex justify-center items-center rounded-full">
                            <Image
                                unoptimized
                                src={
                                    "https://img.icons8.com/quill/50/trust.png"
                                }
                                alt="icon"
                                width={50}
                                height={50}
                                className="w-12 h-12"
                            />
                        </div>
                        <p className="font-semibold">Health</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
