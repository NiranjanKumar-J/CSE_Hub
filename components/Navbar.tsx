"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [time, setTime] = useState<Date | null>(null);
  const router = useRouter();

  // Live Clock Logic (Runs only on client side)
  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
      setSearchQuery(""); 
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-purple-500/20 bg-gray-950/80 backdrop-blur-md z-50 font-mono">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left Side: Brand Logo */}
        <Link href="/" className="text-xl font-bold tracking-wider group">
          <span className="text-purple-500">&lt;</span>
          <span className="text-gray-200 group-hover:text-purple-400 transition-colors">CSE_Hub</span>
          <span className="text-purple-500"> /&gt;</span>
        </Link>

        {/* Center: Live Time Widget (12-Hour Format) */}
        <div className="hidden md:flex items-center gap-3 px-4 py-1.5 bg-gray-900 border border-gray-800 rounded-lg text-xs font-semibold shadow-inner">
          {/* Calendar Icon + Date */}
          <div className="flex items-center gap-1.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            <span>
              {time ? time.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }).toUpperCase() : "-- ---"}
            </span>
          </div>
          
          <span className="text-gray-700">|</span>
          
          {/* Clock Icon + Live Time (Updated to 12-hour format) */}
          <div className="flex items-center gap-1.5 text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {/* w-[105px] is important here to prevent layout shift with AM/PM */}
            <span className="tracking-widest w-[105px] text-center">
              {time ? time.toLocaleTimeString('en-US', { hour12: true }) : "--:--:-- --"}
            </span>
          </div>
        </div>

        {/* Right Side: Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-gray-900 border border-gray-700 text-sm rounded-md py-1.5 pl-4 pr-10 text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 w-28 sm:w-40 md:w-56 transition-all"
            />
            <button 
              type="submit" 
              className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-purple-400 transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </form>

      </div>
    </nav>
  );
}