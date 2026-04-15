import { getBlogPosts, getPostContent } from "@/lib/notion";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
 
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Ensure the page stays fresh
export const revalidate = 60;

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const posts = await getBlogPosts();
  
  // LOGIC CHECK: Find the post matching the slug from the URL
  const post = posts.find((p) => p.slug.trim() === params.slug.trim());

  if (!post) {
    console.error(`Post not found for slug: ${params.slug}`);
    notFound();
  }

  // Fetch the body content (Blocks)
  const content = await getPostContent(post.id);

  return (
    <article className="max-w-3xl mx-auto py-20 px-4">
      {/* Header Section */}
      <header className="border-l-4 border-system-green pl-6 mb-12">
        <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">
          {post.date} // {post.tags.join(" // ")}
        </div>
        <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
          {post.title}
        </h1>
      </header>

      {/* Industrial Content View */}
      <div className="prose prose-invert prose-green max-w-none font-sans leading-relaxed">
        <div className="whitespace-pre-wrap text-gray-300">
          {content}
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="mt-20 pt-8 border-t border-system-border">
        <a href="/blog" className="text-xs font-mono text-system-green hover:text-white transition-colors">
          [ RETURN_TO_JOURNAL ]
        </a>
      </footer>
    </article>
  );
}