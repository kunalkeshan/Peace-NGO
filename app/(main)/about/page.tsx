import Founder from "@/components/about/Founder";
import Hero from "@/components/about/Hero"
import History from "@/components/about/History";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";

export default function About() {
    return (
        <main className="w-full h-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto">
            <Hero/>
            <Vision/>
            <Mission/>
            <History/>
            <Founder/>
        </main>
    );
}
