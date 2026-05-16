import fs from "fs";
import path from "path";
import Link from "next/link";

// 1. Content folder-la irukura folders (courses) thedi edukkum
function getAvailableCourses() {
  const contentDir = path.join(process.cwd(), "content");
  if (!fs.existsSync(contentDir)) return [];

  // Folder-a mattum filter panni edukkurathu
  return fs.readdirSync(contentDir).filter((file) => {
    return fs.statSync(path.join(contentDir, file)).isDirectory();
  });
}

// 2. Custom Descriptions (Neenga ezhuthuna content inga irukku)
// Pudhusa oru course-ku custom description venumna inga add pannikalam
const courseDetails: Record<string, { title: string; desc: string }> = {
  algorithms: {
    title: "Algorithms",
    desc: "Step-by-step guides for arrays, sorting, searching, dynamic programming, and graph algorithms.",
  },
  os: {
    title: "OS",
    desc: "Process management, memory allocation, deadlocks, and concurrency explained simply.",
  },
  dbms: {
    title: "DBMS",
    desc: "Master SQL queries, normalization, ACID properties, and database design principles.",
  },
  cn: {
    title: "Computer Networks",
    desc: "Learn OSI model, TCP/IP, routing protocols, and network security concepts.",
  }
};

export default function Home() {
  const courses = getAvailableCourses();

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 px-6 sm:px-8">
      
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-mono">
          Welcome to <span className="text-purple-500">CSE_Hub</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 leading-relaxed px-2">
          Master core Computer Science concepts with crystal-clear explanations. Build your foundation and level up your coding journey.
        </p>
      </div>

      {/* Dynamic Subject Cards Section */}
      {/* lg:grid-cols-3 potrukom, so 3 cards per row azhaga ukkarum */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
        
        {courses.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 italic p-10 border border-dashed border-gray-700 rounded-xl bg-gray-900/50">
            No modules found. Create your first course in the Content Studio!
          </div>
        ) : (
          courses.map((courseSlug) => {
            // Course dictionary-la iruntha edukku, illana default text set pannidum
            const info = courseDetails[courseSlug] || {
              title: courseSlug.toUpperCase(),
              desc: `Explore study materials, concepts, and detailed notes for ${courseSlug.toUpperCase()}.`,
            };

            return (
              <Link 
                key={courseSlug}
                href={`/${courseSlug}`} 
                className="group p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] flex flex-col h-full"
              >
                <h2 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-purple-400 font-mono">
                  {info.title} &rarr;
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base flex-grow">
                  {info.desc}
                </p>
              </Link>
            );
          })
        )}

      </div>
    </div>
  );
}