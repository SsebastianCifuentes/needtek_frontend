import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'fwtfmezg', // Project ID real de Sanity
  dataset: 'production', // O el nombre de tu dataset
  apiVersion: '2023-09-15',
  useCdn: true,
});

// Ejemplo de consulta: obtener posts
export async function getBlogPosts() {
  return sanityClient.fetch(`*[_type == "post"] | order(_createdAt desc)`);
}
