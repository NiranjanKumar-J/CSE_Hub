import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function getTopicContent(course: string, topic: string) {
  const filePath = path.join(process.cwd(), `content/${course}/${topic}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export default async function TopicPage({ params }: { params: { course: string; topic: string } }) {
  const resolvedParams = await params;
  const course = resolvedParams.course;
  const topic = resolvedParams.topic;
  
  const topicContent = getTopicContent(course, topic);

  if (!topicContent) {
    return <div className="text-white text-center mt-20 text-xl font-mono">Topic not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 font-mono">
      {/* Back Button */}
      <Link href={`/${course}`} className="text-purple-500 hover:text-purple-400 mb-8 inline-block transition-colors">
        &lt;- Back to {course.toUpperCase()} Modules
      </Link>

      <h1 className="text-4xl font-bold text-white mb-2">{topicContent.data.title}</h1>
      <p className="text-gray-400 mb-8 pb-4 border-b border-gray-800">{topicContent.data.description}</p>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Table styling
            table: ({children}) => <div className="overflow-x-auto w-full my-6"><table className="min-w-full border-collapse border border-gray-700">{children}</table></div>,
            thead: ({children}) => <thead className="bg-gray-800/80">{children}</thead>,
            th: ({children}) => <th className="border border-gray-700 px-4 py-3 text-left text-purple-400 font-bold uppercase text-sm tracking-wider">{children}</th>,
            td: ({children}) => <td className="border border-gray-700 px-4 py-3 text-gray-300">{children}</td>,
            
            // Text styling
            h1: ({children}) => <h1 className="text-3xl font-bold text-white mt-8 mb-4 break-words">{children}</h1>,
            h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-100 mt-6 mb-3 break-words">{children}</h2>,
            h3: ({children}) => <h3 className="text-xl font-medium text-gray-200 mt-5 mb-2 break-words">{children}</h3>,
            p: ({children}) => <p className="text-gray-200 leading-relaxed mb-4 text-[1.05rem] break-words">{children}</p>,
            ul: ({children}) => <ul className="list-disc list-inside text-gray-200 mb-4 text-[1.05rem] break-words">{children}</ul>,
            ol: ({children}) => <ol className="list-decimal list-inside text-gray-200 mb-4 text-[1.05rem] break-words">{children}</ol>,
            li: ({children}) => <li className="mb-2 break-words">{children}</li>,
            strong: ({children}) => <strong className="text-white-1000 font-bold">{children}</strong>,

            // Code blocks
            code({ node, inline, className, children, ...props }: any) {
              return !inline ? (
                <div className="bg-gray-950 border border-gray-700 rounded-md p-4 my-4 overflow-x-auto w-full">
                  <code className="text-green-400 whitespace-pre-wrap break-words" {...props}>{children}</code>
                </div>
              ) : (
                <code className="bg-purple-900/30 text-purple-300 px-1.5 py-0.5 rounded break-words" {...props}>{children}</code>
              );
            },
          }}
        >
          {topicContent.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}