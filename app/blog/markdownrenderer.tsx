import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { createHighlighter, bundledLanguages, bundledThemes, type Highlighter } from 'shiki';

// Initialize highlighter once
const highlighterPromise = createHighlighter({
    themes: ['one-dark-pro'],
    langs: Object.keys(bundledLanguages),
});

interface CodeBlockProps {
    language?: string;
    children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language = 'text', children }) => {
    const [html, setHtml] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const highlight = async () => {
            try {
                const highlighter = await highlighterPromise;
                const highlighted = await highlighter.codeToHtml(String(children), {
                    lang: language,
                    theme: 'one-dark-pro' // Must match the theme configured in highlighterPromise
                });

                if (isMounted) {
                    setHtml(highlighted);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'Failed to highlight code');
                    setHtml(String(children)); // Fallback to plain text
                }
            }
        };

        highlight();

        return () => {
            isMounted = false;
        };
    }, [children, language]);

    if (error) {
        return <pre className="my-4 p-4 bg-red-100 text-red-600">{children}</pre>;
    }

    return (
        <div
            className="my-4 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

interface MarkdownRendererProps {
    markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={{
                code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <CodeBlock language={match[1]}>
                            {String(children).trim()}
                        </CodeBlock>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {markdown}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
