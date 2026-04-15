import { getBlogPosts, getPostContent } from "@/lib/notion";
import { notFound } from "next/navigation";

export const revalidate = 60; // Re-check Notion for new content every 60 seconds

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const posts = await getBlogPosts();
  
  // Find the specific post by its slug
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
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