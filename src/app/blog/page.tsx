
import { getBlogPosts } from "../../lib/sanity";
import { urlFor } from "../../lib/imageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type { TypedObject } from "@portabletext/types";

type BlogPost = {
  _id: string;
  title: string;
  mainImage?: {
    asset?: {
      _ref?: string;
      _type?: string;
    };
    [key: string]: unknown;
  };
  author?: string;
  body?: TypedObject[];
  _createdAt: string;
};

export const revalidate = 60; // ISR: Regenera cada 60 segundos

export default async function BlogPage() {
  const posts: BlogPost[] = await getBlogPosts();
  return (
    <main className="w-full min-h-screen bg-[#F5F6F7] py-12 px-4 pt-24">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-[#0A2540]">Blog</h1>
      <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-700 text-center">
        Explora tendencias, aprendizajes y casos sobre innovación, tecnología y transformación organizacional.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts && posts.length > 0 ? (
          posts.map((post: BlogPost) => (
            <article key={post._id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col">
              {post.mainImage && (() => {
                const imageUrl = urlFor(post.mainImage).width(800).height(400).url();
                if (imageUrl) {
                  return (
                    <div className="mb-4">
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="rounded w-full object-cover"
                      />
                    </div>
                  );
                }
                return null;
              })()}
              <h2 className="text-xl font-bold mb-2 text-[#00CFE8]">{post.title}</h2>
              {post.author && (
                <div className="text-sm text-gray-600 mb-2">Por {post.author}</div>
              )}
              {post.body && <PortableText value={post.body} />}
              <div className="text-sm text-gray-500 mt-4">{new Date(post._createdAt).toLocaleDateString()}</div>
            </article>
          ))
        ) : (
          <p className="text-center text-gray-500">No hay publicaciones disponibles.</p>
        )}
      </div>
    </main>
  );
}