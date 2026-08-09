import { Link } from "react-router-dom";
import { BsArrowRight, BsClock } from "react-icons/bs";
import type { BlogPostMeta } from "@/types/blog";

interface BlogListProps {
  posts: BlogPostMeta[];
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function BlogList({ posts }: BlogListProps): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          to={`/blogs/${post.slug.toLowerCase()}`}
          className="blog-card-link group h-full flex flex-col bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative h-32 overflow-hidden bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-indigo-600/30">
            {post.thumbnail ? (
              <>
                <img
                  src={post.thumbnail}
                  alt={`${post.title} cover`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/30" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-500">
                  {post.title.charAt(0)}
                </span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/80 to-transparent" />
          </div>

          {/* Card content */}
          <div className="flex flex-col flex-grow p-6 relative z-20">
            <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
              <span>{formatDate(post.date)}</span>
              {post.readingTime && (
                <span className="flex items-center gap-1">
                  <BsClock className="text-[0.7rem]" />
                  {post.readingTime}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
              {post.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-grow">
              {post.excerpt}
            </p>

            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[0.7rem] font-medium bg-white/5 border border-white/10 text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <span className="inline-flex items-center space-x-2 py-2.5 px-5 rounded-xl bg-white/5 group-hover:bg-purple-600 border border-white/10 group-hover:border-purple-500 text-white font-medium transition-all duration-300 mt-auto self-start">
              <span>Read more</span>
              <BsArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogList;
