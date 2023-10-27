import Image from "next/image";
import { Button } from "../ui/button";
import {
    ArrowRightCircle,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Founder = () => {
    return (
        <section className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center gap-8 justify-center">
            <div className="flex flex-col gap-4 lg:gap-8 lg:w-1/2">
                <div className="relative">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Founder & CEO
                    </h1>
                </div>
                <div>
                    <p className="text-base lg:text-lg text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi nulla excepturi quasi necessitatibus error?
                        Harum, cupiditate magni eveniet similique quasi iure!
                        Maiores adipisci, ipsa dolore laborum ea vero ipsum
                        deserunt? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Impedit ratione aut voluptas unde,
                        odio dolor, culpa vero id quasi mollitia ipsa obcaecati
                        odit quae, perferendis harum cum pariatur dolorem ex.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Maxime aliquid possimus, necessitatibus fugiat
                        perferendis labore aspernatur fugit sit nemo deleniti
                        reiciendis veniam ratione iusto, nesciunt assumenda iure
                        dicta. Nulla, est! Lorem ipsum dolor sit amet
                        consectetur.
                    </p>
                </div>
                <div className="relative flex gap-4">
                    <Link href={"/"}>
                        <InstagramIcon />
                    </Link>
                    <Link href={"/"}>
                        <LinkedinIcon />
                    </Link>
                    <Link href={"/"}>
                        <TwitterIcon />
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2 h-full flex items-center justify-end">
                <div className="lg:w-3/4">
                    <Image
                        src={"/images/profile.jpg"}
                        unoptimized
                        width={100}
                        height={400}
                        className="w-full rounded-lg object-contain h-auto"
                        alt={"hero image"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Founder;
