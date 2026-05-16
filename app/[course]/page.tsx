import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

// 1. Entha course-o antha folder-a thedi padikkum
function getTopics(course: string) {
  const folder = path.join(process.cwd(), `content/${course}`);
  
  if (!fs.existsSync(folder)) return [];

  const files = fs.readdirSync(folder);
  return files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const fileContents = fs.readFileSync(path.join(folder, filename), "utf8");
      const matterResult = matter(fileContents);
      return {
        slug: filename.replace(".md", ""),
        title: matterResult.data.title || "Untitled",
        description: matterResult.data.description || "No description",
      };
    });
}

// 2. Master Dashboard Component
export default async function CoursePage({ params }: { params: { course: string } }) {
  const resolvedParams = await params;
  const course = resolvedParams.course; // URL la irunthu course name edukkuthu
  const topics = getTopics(course);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 font-mono">
      
      {/* 🔙 GLOBAL BACK BUTTON SECTION */}
      <Link 
        href="/" 
        className="inline-flex items-center text-purple-500/70 hover:text-purple-400 mb-8 transition-colors text-sm uppercase tracking-wider font-bold group"
      >
        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&lt;-</span> 
        Return to Main Base
      </Link>

      <div className="mb-12 border-b border-purple-500/30 pb-6 uppercase">
        <h1 className="text-4xl font-bold text-purple-400 mb-4 tracking-wider">
          &lt; {course} /&gt;
        </h1>
        <p className="text-gray-400 text-lg capitalize">
          Master the concepts of {course}. Select a topic below to start learning.
        </p>
      </div>

      {topics.length === 0 ? (
        <div className="text-gray-500 italic">No topics found in {course}.!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link href={`/${course}/${topic.slug}`} key={topic.slug}>
              <div className="bg-gray-950 border border-purple-500/20 p-6 rounded-xl hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all cursor-pointer h-full flex flex-col group">
                <h2 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-purple-400 transition-colors">
                  {topic.title}
                </h2>
                <p className="text-gray-500 text-sm flex-grow leading-relaxed">
                  {topic.description}
                </p>
                <div className="mt-6 text-purple-500 text-sm font-bold flex items-center">
                  Access Module <span className="ml-2 group-hover:translate-x-2 transition-transform">-&gt;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}