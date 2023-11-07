import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { programsQuery } from "@/sanity/lib/querires";
import Image from "next/image";

export default async function Programs() {
    const programs = await sanityFetch<Program[]>({ query: programsQuery });
    return (
        <main className="w-full h-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-12 lg:py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight capitalize">
                Programs
            </h1>
            <section className="mt-4 md:mt-8 lg:mt-16 flex flex-col gap-8 md:gap-16 lg:gap-32">
                {programs.map((program, idx) => (
                    <div
                        className={`w-full flex flex-col gap-4 md:gap-8 lg:gap-16 md:flex-row md:even:flex-row-reverse items-center`}
                        key={`program-${program._id}`}
                    >
                        <div className="md:w-2/6 lg:w-1/2">
                            <Image
                                src={program.image}
                                alt={program.alt}
                                unoptimized
                                width={100}
                                height={100}
                                className="aspect-square object-cover w-full rounded-md"
                            />
                        </div>
                        <div className="md:w-4/6 lg:w-1/2">
                            <h2 className="text-2xl lg:text-4xl font-medium">
                                {program.title}
                            </h2>
                            <p className="text-slate-500">
                                {program.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
