import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft, BsClock, BsTag } from "react-icons/bs";
import Particle from "../Particle.tsx";
import BlogMarkdown from "./BlogMarkdown.tsx";
import type { BlogPostMeta } from "@/types/blog";

const MANIFEST_URL = "/blogs/manifest.json";

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPost(): React.ReactElement {
  const { slug } = useParams<{ slug: string }>();
  const [meta, setMeta] = useState<BlogPostMeta | null>(null);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("No post specified.");
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);
    setContent("");
    setMeta(null);

    fetch(MANIFEST_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load manifest (${res.status})`);
        return res.json() as Promise<BlogPostMeta[]>;
      })
      .then((manifest) => {
        const normalizedSlug = slug.toLowerCase();
        const found = manifest.find((p) => p.slug.toLowerCase() === normalizedSlug);
        if (!found) throw new Error("Post not found");
        if (cancelled) return;
        setMeta(found);
        return fetch(found.file);
      })
      .then((res) => {
        if (!res) return undefined;
        if (!res.ok) throw new Error(`Failed to load post (${res.status})`);
        return res.text();
      })
      .then((text) => {
        if (cancelled || text === undefined) return;
        setContent(text);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load post");
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <section className="relative min-h-screen py-20 mt-20">
      <Particle />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-3">
              {error === "Post not found" ? "404 — Post not found" : "Something went wrong"}
            </h2>
            <p className="text-slate-300 mb-6">{error}</p>
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-white font-medium transition-all duration-300"
            >
              Back to Blog
            </Link>
          </div>
        )}

        {!loading && !error && meta && (
          <article>
            {/* Back to all posts — left-aligned above title */}
            <div className="flex justify-start mb-8">
              <Link
                to="/blogs"
                className="inline-flex items-center space-x-2 py-2.5 px-6 rounded-full bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <BsArrowLeft className="text-lg" />
                <span>Back to all posts</span>
              </Link>
            </div>

            {/* Post header */}
            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                {meta.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span>{formatDate(meta.date)}</span>
                {meta.readingTime && (
                  <span className="flex items-center gap-1.5">
                    <BsClock />
                    {meta.readingTime}
                  </span>
                )}
              </div>

              {meta.tags?.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <BsTag className="text-slate-500 text-sm" />
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Markdown content */}
            <BlogMarkdown content={content} />

            {/* Back to all posts — bottom, centered, button style */}
            <div className="mt-16 pt-8 border-t border-white/10 flex justify-center">
              <Link
                to="/blogs"
                className="inline-flex items-center space-x-2 py-3 px-8 rounded-full bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <BsArrowLeft className="text-lg" />
                <span>Back to all posts</span>
              </Link>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export default BlogPost;
