// Obtener un post por su slug
export async function getBlogPostBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    alternativeText,
    categories[]->{
      title,
      slug,
      description
    },
    publishedAt,
    body,
    author->{
      name,
      slug,
      image,
      bio
    }
  }`, { slug });
}
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'fwtfmezg', // Project ID real de Sanity
  dataset: 'production', // O el nombre de tu dataset
  apiVersion: '2023-09-15',
  useCdn: true,
});

// Ejemplo de consulta: obtener posts
export async function getBlogPosts() {
  return sanityClient.fetch(`*[_type == "post"] | order(_createdAt desc){
    _id,
    title,
    slug,
    mainImage,
    alternativeText,
    categories[]->{
      title,
      slug,
      description
    },
    publishedAt,
    body,
    author->{
      name,
      slug,
      image,
      bio
    }
  }`);
}
