import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { course, title, description, content } = await req.json();

    // Title-a vachu automatic ah file name (slug) create pandrathu (e.g., "SQL Joins" -> "sql-joins")
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    // Entha folder nu kandu pudikrathu
    const folderPath = path.join(process.cwd(), `content/${course}`);

    // Folder illana pudhusa create pannidum
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Markdown content-a format pandrathu
    const mdContent = `---\ntitle: ${title}\ndescription: ${description}\n---\n\n${content}`;
    const filePath = path.join(folderPath, `${slug}.md`);

    // File-a save pandrathu
    fs.writeFileSync(filePath, mdContent, "utf8");

    return NextResponse.json({ message: "Topic Saved Successfully!", slug }, { status: 200 });
  } catch (error) {
    console.error("Error saving file:", error);
    return NextResponse.json({ message: "Failed to save topic" }, { status: 500 });
  }
}