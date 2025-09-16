import { getBlogPostBySlug } from "../../../lib/sanity";
import { urlFor } from "../../../lib/imageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type { TypedObject } from "@portabletext/types";

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return <div className="text-center py-24 text-gray-500">No se encontró la noticia.</div>;
  }
  return (
    <main className="w-full min-h-screen bg-[#F5F6F7] py-12 px-4 pt-24 flex flex-col items-center">
      <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 max-w-2xl w-full">
        {/* Título */}
  <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0A2540] leading-tight">{post.title}</h1>
        {/* Autor (solo nombre) */}
        {post.author && (
          <div className="text-sm font-medium text-gray-700 mb-2">{post.author.name}</div>
        )}
        {/* Fecha */}
        <div className="text-xs text-gray-500 mb-4">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}</div>
        {/* Foto principal */}
        {post.mainImage && (
          <div className="mb-6 rounded overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(800).height(400).url()}
              alt={post.alternativeText || post.title}
              width={800}
              height={400}
              className="w-full h-[300px] object-cover"
            />
          </div>
        )}
        {/* Texto general */}
        {post.body && (
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <PortableText
              value={post.body}
              components={{
                types: {},
                block: {
                  h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-2 text-[#2A2C2E]">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-[#2A2C2E]">{children}</h3>,
                  normal: ({ children }) => <p className="mb-4 text-gray-800">{children}</p>,
                },
              }}
            />
          </div>
        )}
        {/* Autor (foto y/o descripción) */}
        {post.author && (post.author.image || post.author.bio) && (
          <div className="flex items-center gap-4 mt-8 p-4 bg-gray-50 rounded">
            {post.author.image && (
              <Image
                src={urlFor(post.author.image).width(64).height(64).url()}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full border border-gray-200"
              />
            )}
            <div>
              <div className="text-base font-semibold text-gray-700">{post.author.name}</div>
              {post.author.bio && (
                <div className="text-sm text-gray-500 mt-1"><PortableText value={post.author.bio} /></div>
              )}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
