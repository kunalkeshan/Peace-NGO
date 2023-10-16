import React from 'react'

const Blogs = () => {
    return (
        <section className="h-full flex flex-col items-start gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-16 lg:py-32">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl lg:text-4xl leading-tight">
                    Blogs
                </h1>
                <p className="text-base lg:text-xl text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptas.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <div className="w-full h-72 bg-gray-300 rounded-lg"></div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptas.
                        </h1>
                        <p className="text-base text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptas.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-full h-72 bg-gray-300 rounded-lg"></div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptas.
                        </h1>
                        <p className="text-base text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptas.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-full h-72 bg-gray-300 rounded-lg"></div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptas.
                        </h1>
                        <p className="text-base text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blogs