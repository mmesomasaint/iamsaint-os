import { getBlogPosts } from "@/lib/notion";
import Link from "next/link";

export const revalidate = 60; // Re-check Notion for new content every 60 seconds

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="border-b border-system-border pb-6 mb-16 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Technical_Journal</h1>
          <p className="text-[10px] font-mono text-gray-500 mt-2 uppercase tracking-widest">
            Source: Headless_Notion_CMS // Status: Connected
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {posts.map((post) => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={post.id}
            className="group flex items-center gap-8 p-6 border border-transparent hover:border-system-border hover:bg-system-gray/30 transition-all"
          >
            <span className="text-[10px] font-mono text-gray-600 w-20">{post.date}</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold uppercase group-hover:text-system-green transition-colors tracking-tight">
                {post.title}
              </h3>
              <div className="flex gap-3 mt-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="text-[9px] font-mono border border-system-border px-2 py-0.5 text-gray-500 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}