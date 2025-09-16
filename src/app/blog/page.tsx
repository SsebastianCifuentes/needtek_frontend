
import { getBlogPosts } from "../../lib/sanity";
// Revalida la página cada 60 segundos para mostrar posts nuevos automáticamente
export const revalidate = 60;
import { urlFor } from "../../lib/imageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type { TypedObject } from "@portabletext/types";

type BlogPost = {
  _id: string;
  title: string;
  slug?: { current: string };
  mainImage?: {
    asset?: {
      _ref?: string;
      _type?: string;
    };
    [key: string]: unknown;
  };
  alternativeText?: string;
  categories?: Array<{
    title: string;
    slug: { current: string };
    description?: string;
  }>;
  publishedAt?: string;
  body?: TypedObject[];
  author?: {
    name: string;
    slug?: { current: string };
    image?: {
      asset?: {
        _ref?: string;
        _type?: string;
      };
      [key: string]: unknown;
    };
    bio?: TypedObject[];
  };
};

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
            <article key={post._id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col max-w-md mx-auto">
              {/* Imagen principal */}
              {post.mainImage && (
                <div className="mb-3 rounded overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).width(400).height(200).url()}
                    alt={post.alternativeText || post.title}
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              )}
              {/* Título como enlace seleccionable */}
              {post.slug && post.slug.current ? (
                <a
                  href={`/blog/${post.slug.current}`}
                  className="text-xl md:text-2xl font-bold mb-1 text-[#0A2540] leading-tight line-clamp-2 transition hover:underline hover:underline-offset-2 hover:text-[#00CFE8] cursor-pointer"
                  style={{ textDecoration: 'none', borderBottom: 'none' }}
                >
                  {post.title}
                </a>
              ) : (
                <span className="text-xl md:text-2xl font-bold mb-1 text-[#0A2540] leading-tight line-clamp-2">{post.title}</span>
              )}
              {/* Categoría */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.map((cat) => (
                    <span key={cat.slug.current} className="bg-[#FF6B35] text-white text-xs px-2 py-1 rounded-full font-semibold">{cat.title}</span>
                  ))}
                </div>
              )}
              {/* Resumen del cuerpo (primeras 3 líneas) */}
              {post.body && (
                <div className="text-gray-700 text-sm mb-2 line-clamp-3">
                  <PortableText value={post.body} />
                </div>
              )}
              {/* ...eliminado el botón Ver más... */}
            </article>
          ))
        ) : (
          <p className="text-center text-gray-500">No hay publicaciones disponibles.</p>
        )}
      </div>
    </main>
  );
}