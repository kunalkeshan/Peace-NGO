import { groq } from 'next-sanity';

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, "image": mainImage.asset->url, "alt": mainImage.alt, body, author, categories, publishedAt
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    _id, slug, title, "image": mainImage.asset->url, "alt": mainImage.alt, body, author, categories, publishedAt
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all stories
export const storiesQuery = groq`*[_type == "story"]{
  _id, name, story, "image": image.asset->url, "alt": image.alt, role, instagram, twitter, linkedin, website, email, youtube
}`;
