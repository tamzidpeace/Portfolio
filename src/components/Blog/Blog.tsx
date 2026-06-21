import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Particle from "../Particle.tsx";
import BlogList from "./BlogList.tsx";
import type { BlogPostMeta } from "@/types/blog";

const MANIFEST_URL = "/blogs/manifest.json";

function Blog(): React.ReactElement {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(MANIFEST_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load blog manifest (${res.status})`);
        }
        return res.json() as Promise<BlogPostMeta[]>;
      })
      .then((data) => {
        if (cancelled) return;
        const sorted = [...data].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(sorted);
        setError(null);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load posts");
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const tags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [posts]);

  return (
    <section className="relative min-h-screen py-20">
      <Particle />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <strong className="text-gradient">Blog</strong>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Thoughts on software engineering, side projects, and lessons learned along the way.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-20">
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-white font-medium transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-300 text-lg">No posts yet. Check back soon!</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <>
            {tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <BlogList posts={posts} />
          </>
        )}
      </div>
    </section>
  );
}

export default Blog;
