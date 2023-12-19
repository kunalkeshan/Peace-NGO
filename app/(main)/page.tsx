/**
 * Home Page
 */

// Dependencies
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import Approach from "@/components/home/Approach";
import Impact from "@/components/home/Impact";
import Stories from "@/components/home/Stories";
import Donate from "@/components/resusable/Donate";
import Blogs from "@/components/home/Blogs";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import {
    featuredPostsQuery,
    impactsQuery,
    storiesQuery,
} from "@/sanity/lib/querires";

export default async function Home() {
    const impacts = await sanityFetch<Impact[]>({ query: impactsQuery });
    const stories = await sanityFetch<Story[]>({ query: storiesQuery });
    const posts = await sanityFetch<BlogPost[]>({ query: featuredPostsQuery });

    return (
        <main className="bg-app-bg ">
            <Hero />
            <WhatWeDo />
            <Donate />
            <Approach />
            <Impact impacts={impacts} />
            <Stories stories={stories} />
            <Blogs posts={posts} />
        </main>
    );
}
