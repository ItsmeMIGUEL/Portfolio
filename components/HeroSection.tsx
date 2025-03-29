"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Mail,
  Linkedin,
  ChevronDown,
  Code,
  ArrowRight,
  Menu,
} from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";

export default function HeroSection() {
  // State for animated code particles
  const [isClient, setIsClient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-10 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            <span className="flex items-center">
              <Code className="w-6 h-6 mr-2" />
              Portfolio
            </span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="#about"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#education"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors"
            >
              Education
            </Link>
            <Link
              href="#skills"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
          <button
            className="md:hidden text-slate-700 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-slate-900 z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
              <Link href="/" className="text-xl font-bold text-primary">
                <span className="flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Portfolio
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-200"
                aria-label="Close menu"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col space-y-6 text-lg">
                {[
                  { name: "About", href: "#about" },
                  { name: "Education", href: "#education" },
                  { name: "Skills", href: "#skills" },
                  { name: "Experience", href: "#experience" },
                  { name: "OJT", href: "#ojt" },
                  { name: "Hobbies", href: "#hobbies" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors py-2 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Hero Section */}
      {!isMobile && (
        <section className="px-20 min-h-screen relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>

            {/* Animated gradient blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 blur-3xl opacity-60 animate-pulse"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-slate-200/20 dark:bg-grid-slate-700/20 bg-[size:30px_30px] opacity-20"></div>

            {/* Animated code particles */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
              {isClient && (
                <>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-primary font-mono text-xs"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.8 + 0.2,
                        transform: `scale(${Math.random() * 0.5 + 0.5})`,
                        animation: `float ${
                          Math.random() * 10 + 10
                        }s linear infinite`,
                      }}
                    >
                      {
                        [
                          "<div>",
                          "</div>",
                          "<span>",
                          "{data}",
                          "function()",
                          "return",
                          "const",
                          "let",
                          "import",
                          "export",
                          "</>",
                        ][Math.floor(Math.random() * 11)]
                      }
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content - Profile Info */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="inline-block mb-4 px-6 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-medium">
                  Web Developer
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 dark:text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block">
                    JM Arcuino
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
                  I build exceptional digital experiences with modern
                  technologies. Specializing in creating robust, scalable
                  applications that solve real-world problems.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                  <a
                    href="#projects"
                    className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span className="flex items-center">
                      View My Work
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="flex gap-6 justify-center lg:justify-start">
                  <a
                    href="#"
                    className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors transform hover:scale-110 duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors transform hover:scale-110 duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors transform hover:scale-110 duration-200"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Right Content - Visual Element */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-xl"></div>

                  {/* Profile image with frame - Updated with lighter styling */}
                  <div className="relative z-10 bg-white/80 dark:bg-slate-800/80 p-2 rounded-2xl shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300 backdrop-blur-sm">
                    <div className="relative rounded-xl overflow-hidden border-2 border-slate-200/50 dark:border-slate-700/50 w-80 h-80 lg:w-96 lg:h-96">
                      {/* Reduced opacity on gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/15 dark:to-secondary/15 z-10"></div>
                      <Image
                        src="/s1.png"
                        alt="JM Arcuino - Software Engineer"
                        width={384}
                        height={384}
                        className="object-cover relative z-0 brightness-110 contrast-105" // Added brightness and contrast
                        priority
                        style={{
                          filter:
                            "brightness(1.1) contrast(1.05) saturate(1.1)",
                        }}
                      />
                    </div>

                    {/* Tech stack badges - made lighter */}
                    <div className="absolute -bottom-5 -left-5 bg-white/90 dark:bg-slate-800/90 px-4 py-2 rounded-lg shadow-lg border border-slate-200/50 dark:border-slate-700/50 rotate-6 backdrop-blur-sm">
                      <div className="flex gap-2">
                        <span className="text-xl">⚛️</span>
                        <span className="text-xl">🔷</span>
                        <span className="text-xl">🚀</span>
                      </div>
                    </div>

                    {/* Experience badge - made lighter */}
                    <div className="absolute -top-4 -right-4 bg-white/90 dark:bg-slate-800/90 px-4 py-2 rounded-lg shadow-lg border border-slate-200/50 dark:border-slate-700/50 -rotate-6 backdrop-blur-sm">
                      <div className="text-sm font-medium text-slate-800 dark:text-white">
                        0+ Years Experience
                      </div>
                    </div>
                  </div>

                  {/* Code snippet decoration */}
                  <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 rotate-6 hidden md:block">
                    <pre className="text-xs text-slate-800 dark:text-slate-200 font-mono">
                      const developer = 'passionate';
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <a
              href="#about"
              className="text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-primary transition-colors"
              aria-label="Scroll to About section"
            >
              <ChevronDown className="w-8 h-8" />
            </a>
          </div>
        </section>
      )}

      {/* Mobile Hero Section */}
      {isMobile && (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>

            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 blur-3xl opacity-60"></div>
          </div>
          <div className="relative z-10 pt-20 pb-10 px-4">
            <div className="relative mx-auto mb-8 w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-md"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
                <Image
                  src="/s1.png"
                  alt="JM Arcuino - Software Engineer"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>

              {/* Mobile tech badge */}
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-xs font-medium">
                <div className="flex items-center gap-1">
                  <span>⚛️</span>
                  <span className="text-slate-800 dark:text-white">
                    React Dev
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="text-center mb-8">
              <div className="inline-block mb-3 px-4 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium">
                Web Developer
              </div>

              <h1 className="text-3xl font-bold mb-3 text-slate-800 dark:text-white">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  JM Arcuino
                </span>
              </h1>

              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xs mx-auto">
                Building exceptional digital experiences with modern
                technologies
              </p>

              {/* Mobile Social Links */}
              <div className="flex justify-center gap-4 mb-8">
                <a
                  href="#"
                  className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: "Projects", value: "4+" },
                { label: "Experience", value: "0 Years" },
                { label: "Clients", value: "3+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center shadow-md border border-slate-200 dark:border-slate-700"
                >
                  <div className="text-xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="space-y-3">
              <a
                href="#projects"
                className="block w-full bg-gradient-to-r from-primary to-primary/90 text-white py-3 px-4 rounded-lg font-medium text-center shadow-md"
              >
                <span className="flex items-center justify-center">
                  View My Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="block w-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 py-3 px-4 rounded-lg font-medium text-center shadow-md"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Expertise Tags */}
            <div className="mt-8">
              <div className="text-center text-sm text-slate-600 dark:text-slate-400 mb-3">
                My Expertise
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {["React", "Next.js", "TypeScript", "UI/UX"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
              <a
                href="#about"
                className="flex flex-col items-center text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-primary transition-colors"
                aria-label="Scroll to About section"
              >
                <span className="text-xs mb-1">Scroll</span>
                <ChevronDown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
