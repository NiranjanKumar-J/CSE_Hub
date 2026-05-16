import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

// Search logic: Content folder-la irukkura ella md files-um thedi result edukkum
function getSearchResults(query: string) {
  if (!query) return [];
  
  const contentDir = path.join(process.cwd(), "content");
  if (!fs.existsSync(contentDir)) return [];

  let results: { course: string; topic: string; title: string; desc: string }[] = [];

  const courses = fs.readdirSync(contentDir).filter((file) => {
    return fs.statSync(path.join(contentDir, file)).isDirectory();
  });

  courses.forEach((course) => {
    const coursePath = path.join(contentDir, course);
    const files = fs.readdirSync(coursePath).filter((file) => file.endsWith(".md"));

    files.forEach((file) => {
      const filePath = path.join(coursePath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      const searchString = `${data.title} ${data.description} ${content}`.toLowerCase();
      
      if (searchString.includes(query.toLowerCase())) {
        results.push({
          course,
          topic: file.replace(".md", ""),
          title: data.title || file.replace(".md", ""),
          desc: data.description || "Click to read more about this topic.",
        });
      }
    });
  });

  return results;
}

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || "";
  const results = getSearchResults(query);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 font-mono min-h-[75vh]">
      
      {/* 🔙 Back Button */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 mb-8 transition-colors font-mono group bg-gray-900/50 px-4 py-2 rounded-md border border-gray-800 hover:border-purple-500/50 w-fit"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-white mb-2">Search Results</h1>
      <p className="text-gray-400 mb-8 pb-4 border-b border-gray-800">
        Showing results for: <span className="text-purple-400 font-bold px-2 py-1 bg-purple-900/20 rounded">"{query}"</span>
      </p>

      {/* Search Results List */}
      {results.length === 0 ? (
        <div className="text-gray-500 bg-gray-900/50 p-10 rounded-xl border border-dashed border-gray-700 text-center flex flex-col items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <p>No matching topics found. Try searching with a different keyword!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {results.map((res, index) => (
            <Link key={index} href={`/${res.course}/${res.topic}`}>
              <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-purple-500 hover:bg-gray-800/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors">
                    {res.title}
                  </h2>
                  <span className="text-xs font-bold px-3 py-1 bg-gray-800 text-gray-400 rounded-full uppercase tracking-wider border border-gray-700">
                    {res.course}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {res.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
      
    </div>
  );
}