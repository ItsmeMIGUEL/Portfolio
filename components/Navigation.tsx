import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/90"
            : "bg-white/80 dark:bg-slate-900/80"
        } backdrop-blur-sm z-50 shadow-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
            onClick={handleLinkClick}
          >
            <span className="flex items-center">
              <Code className="w-6 h-6 mr-2" />
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="#about"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="#education"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Education
            </Link>
            <Link
              href="#skills"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Experience
            </Link>
            <Link
              href="#ojt"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
              onClick={handleLinkClick}
            >
              OJT
            </Link>
            <Link
              href="#hobbies"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Hobbies
            </Link>
            <Link
              href="#projects"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-200/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600">
                <X className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              </div>
            ) : (
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
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-64 bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex flex-col space-y-6 mt-16">
            <Link
              href="#about"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium py-2 border-b border-slate-200 dark:border-slate-800"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="#education"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium py-2 border-b border-slate-200 dark:border-slate-800"
              onClick={handleLinkClick}
            >
              Education
            </Link>
            <Link
              href="#skills"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium py-2 border-b border-slate-200 dark:border-slate-800"
              onClick={handleLinkClick}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium py-2 border-b border-slate-200 dark:border-slate-800"
              onClick={handleLinkClick}
            >
              Experience
            </Link>
            <Link
              href="#ojt"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium py-2 border-b border-slate-200 dark:border-slate-800"
              onClick={handleLinkClick}
            >
              OJT
            </Link>
            <Link
              href="#hobbies"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium py-2 border-b border-slate-200 dark:border-slate-800"
              onClick={handleLinkClick}
            >
              Hobbies
            </Link>
            <Link
              href="#projects"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium py-2 border-b border-slate-200 dark:border-slate-800"
              onClick={handleLinkClick}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors font-medium py-2"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
