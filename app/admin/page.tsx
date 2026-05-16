"use client";
import { useState } from "react";

export default function AdminPage() {
  const [course, setCourse] = useState("dbms");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Saving...");

    const res = await fetch("/api/add-topic", {
      method: "POST",
      body: JSON.stringify({ course, title, description, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("Success! File Created.");
      setTitle(""); setDescription(""); setContent(""); // Form clear
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("Error saving file.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 font-mono text-gray-200">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">⚙️ Content Creator Studio</h1>
      
      <form onSubmit={handleSave} className="bg-gray-900 p-6 rounded-xl border border-gray-700 space-y-4">
        
        {/* Course Selection */}
        <div>
          <label className="block text-gray-400 text-sm mb-1">Course Folder</label>
          <input 
            type="text" value={course} onChange={(e) => setCourse(e.target.value)}
            className="w-full bg-gray-950 border border-gray-700 rounded p-2 text-white outline-none focus:border-purple-500" 
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-gray-400 text-sm mb-1">Topic Title</label>
          <input 
            type="text" value={title} onChange={(e) => setTitle(e.target.value)} required
            placeholder="e.g., ACID Properties"
            className="w-full bg-gray-950 border border-gray-700 rounded p-2 text-white outline-none focus:border-purple-500" 
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-400 text-sm mb-1">Short Description</label>
          <input 
            type="text" value={description} onChange={(e) => setDescription(e.target.value)} required
            placeholder="e.g., Learn about Atomicity, Consistency, Isolation, Durability."
            className="w-full bg-gray-950 border border-gray-700 rounded p-2 text-white outline-none focus:border-purple-500" 
          />
        </div>

        {/* Markdown Content */}
        <div>
          <label className="block text-gray-400 text-sm mb-1">Main Content (Markdown)</label>
          <textarea 
            value={content} onChange={(e) => setContent(e.target.value)} required
            placeholder="# Write your content here..." rows={12}
            className="w-full bg-gray-950 border border-gray-700 rounded p-2 text-white outline-none focus:border-purple-500 font-mono text-sm" 
          />
        </div>

        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded transition-colors">
          Save & Publish Topic
        </button>

        {status && <p className="text-center text-green-400 mt-2">{status}</p>}
      </form>
    </div>
  );
}