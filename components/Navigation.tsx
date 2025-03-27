import Link from "next/link";
import { Code } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 shadow-sm border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          <span className="flex items-center">
            <Code className="w-6 h-6 mr-2" />
            Portfolio
          </span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link
            href="#about"
            className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="#education"
            className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
          >
            Education
          </Link>
          <Link
            href="#skills"
            className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
          >
            Experience
          </Link>
          <Link
            href="#ojt"
            className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
          >
            OJT
          </Link>
          <Link
            href="#hobbies"
            className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
          >
            Hobbies
          </Link>
          <Link
            href="#projects"
            className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
