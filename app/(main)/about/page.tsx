import Hero from "@/components/about/Hero"
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";

export default function About() {
    return (
        <main className="w-full h-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto">
            <Hero/>
            <Vision/>
            <Mission/>
        </main>
    );
}
