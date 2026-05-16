import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-purple-500/20 bg-gray-950/80 pt-10 pb-6 font-mono text-sm">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Section 1: Brand & About */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold tracking-wider">
            <span className="text-purple-500">&lt;</span>
            <span className="text-gray-200">CSE_Hub</span>
            <span className="text-purple-500"> /&gt;</span>
          </p>
          <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
            A comprehensive knowledge base for Computer Science Engineering students. 
            Focused on delivering clear, concise, and exam-ready concepts.
          </p>
        </div>

        {/* Section 2: Resources (Generic Info) */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-200 font-semibold uppercase tracking-widest text-xs mb-1">Resources</h3>
          <span className="text-gray-500 hover:text-purple-400 transition-colors w-fit cursor-pointer">Help Center</span>
          <span className="text-gray-500 hover:text-purple-400 transition-colors w-fit cursor-pointer">Documentation</span>
          <span className="text-gray-500 hover:text-purple-400 transition-colors w-fit cursor-pointer">Community Guidelines</span>
          <span className="text-gray-500 hover:text-purple-400 transition-colors w-fit cursor-pointer">FAQ</span>
        </div>

        {/* Section 3: Legal & General Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-200 font-semibold uppercase tracking-widest text-xs mb-1">Information</h3>
          <span className="text-gray-500 hover:text-purple-400 transition-colors w-fit cursor-pointer">About Us</span>
          <span className="text-gray-500 hover:text-purple-400 transition-colors w-fit cursor-pointer">Privacy Policy</span>
          <span className="text-gray-500 hover:text-purple-400 transition-colors w-fit cursor-pointer">Terms of Service</span>
          <span className="text-gray-500 hover:text-purple-400 transition-colors w-fit cursor-pointer">Contact Support</span>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs text-center md:text-left">
          © {currentYear} CSE_Hub. All rights reserved.
        </p>
        
        <p className="text-gray-600 text-xs text-center md:text-right flex items-center gap-1 justify-center">
          Crafted for <span className="text-purple-500 font-bold">CSE</span> Students
        </p>
      </div>
    </footer>
  );
}