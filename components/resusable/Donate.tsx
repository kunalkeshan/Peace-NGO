import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';

const Donate = () => {
	return (
        <section className="">
            <section className="w-full h-full p-4 md:px-16 py-16 lg:py-32 lg:max-w-7xl lg:mx-auto">
                <div className=" bg-app-primary p-8 md:p-12 lg:p-16 rounded-lg flex flex-col lg:flex-row gap-8">
                    <div className="w-full">
                        <Image
                            unoptimized
                            className="rounded-lg w-full"
                            src="/images/wed.jpg"
                            alt="donate"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-col gap-4 text-white">
                        <p className="text-base">Introducing you Lovelyacts</p>
                        <h1 className="text-4xl">
                            We create amazing digital products
                        </h1>
                        <p className="text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                        <Button className="bg-white text-black lg:w-fit">
                            Donate{" "}
                            <Heart className="ml-2 h-4 w-4" strokeWidth={1.5} />
                        </Button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Donate;
