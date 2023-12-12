import Image from "next/image";
import React from "react";

const Mission = () => {
    const CONTENT = [
        {
            image: "/images/climate-change.png",
            title: "Educate and Empower",
        },
        {
            image: "/images/women-empowerment.png",
            title: "Greening Future, Saving Lives",
        },
        {
            image: "/images/education.png",
            title: "Empowering Change, Ensuring Peace",
        },
        {
            image: "/images/health.png",
            title: "Caring for earth, nurturing lives",
        },
    ];

    return (
        <section className="w-full h-full relative bg-white">
            <div className="py-12 md:py-16 text-center flex flex-col justify-center items-center gap-6">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl lg:text-4xl">
                        <span className="text-app-secondary">Mission</span>
                    </h2>
                    <p className="text-base lg:text-lg text-slate-500">
                        Via our mission, we aim to Empower the Rural Youth for
                        Sustainable Futures.
                    </p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-fit">
                    {CONTENT.map((item, index) => (
                        <li
                            key={`what-we-do-${index}`}
                            className="p-4 flex md:flex-col items-center gap-4 border rounded-lg shadow"
                        >
                            <div className="w-16 h-16 bg-app-secondary/50 flex justify-center items-center rounded-full">
                                <Image
                                    unoptimized
                                    src={item.image}
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    className="w-12 h-12"
                                />
                            </div>
                            <p className="font-semibold text-center">
                                {item.title}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Mission;
