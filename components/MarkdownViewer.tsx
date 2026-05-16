'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function MarkdownViewer({ content }: { content: string }) {
  // Copy button-kaka thani component
  const CodeBlock = ({ inline, className, children, ...props }: any) => {
    const [copied, setCopied] = useState(false);
    const match = /language-(\w+)/.exec(className || '');
    const codeString = String(children).replace(/\n$/, '');

    const handleCopy = () => {
      navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 seconds kalichu reset aagum
    };

    if (!inline && match) {
      return (
        <div className="relative group my-4">
          <button
            onClick={handleCopy}
            className="absolute right-2 top-2 bg-gray-800 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all z-10"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={match[1]}
            PreTag="div"
            className="rounded-lg border border-purple-500/30 !mt-0 !pt-8"
            {...props}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      );
    }
    return (
      <code className="bg-gray-800 text-purple-400 px-1.5 py-0.5 rounded-md" {...props}>
        {children}
      </code>
    );
  };

  return (
    <div className="prose prose-invert max-w-none font-mono">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
          h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-gray-100 border-b border-gray-800 pb-2 mb-4 mt-8" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gray-200 mt-8 mb-4" {...props} />,
          p: ({node, ...props}) => <p className="text-gray-300 leading-relaxed mb-4" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc list-inside text-gray-300 mb-4" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}