import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface BlogMarkdownProps {
  content: string;
}

function BlogMarkdown({ content }: BlogMarkdownProps): React.ReactElement {
  const components = useMemo(
    () => ({
      a: ({ node, ...props }: any) => (
        <a {...props} target="_blank" rel="noopener noreferrer" />
      ),
      img: ({ node, ...props }: any) => (
        <img {...props} loading="lazy" className="blog-content-img" />
      ),
    }),
    []
  );

  return (
    <div className="blog-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default BlogMarkdown;
