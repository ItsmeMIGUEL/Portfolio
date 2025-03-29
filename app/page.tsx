"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Github, Mail, Linkedin, ChevronDown, Code } from "lucide-react";

// Import new components
import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import CodeSamples from "@/components/CodeSamples";
import MySkills from "@/components/MySkills";
import WorkExperience from "@/components/WorkExperience";
import Testimonials from "@/components/Testimonials";
import LatestArticles from "@/components/LatestArticles";
import MyProjects from "@/components/MyProjects";
import GitHubStats from "@/components/GitHubStats";
import ContactForm from "@/components/ContactForm";
import EducationSection from "@/components/EducationSection";
import HobbiesSection from "@/components/HobbiesSection";
import OJTSection from "@/components/OjtSection";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/Gallery";

import { db } from "@/lib/firebase";

export default function Portfolio() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 mx-20">
      <Navigation />
      <HeroSection />
      <AboutMe />
      <EducationSection />
      <CodeSamples />
      <MySkills />
      <WorkExperience />
      <OJTSection />
      <HobbiesSection />
      <Testimonials />
      <MyProjects />
      <GitHubStats />
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-br-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-slate-600 dark:text-slate-300">
              Have a project in mind or want to work together? Feel free to
              contact me!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />

            <div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 mb-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-800 dark:text-white">
                        Email
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        josemiguelarcuino.basc@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-800 dark:text-white">
                        Phone
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        09677389755
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-800 dark:text-white">
                        Location
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        Las Piñas City
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg text-primary transition-colors transform hover:scale-110 duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg text-primary transition-colors transform hover:scale-110 duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg text-primary transition-colors transform hover:scale-110 duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-\6.5 1.511-6.5 6.5 1.511 6.5 6.5 6.5 6.5-1.511 6.5-6.5-1.511-6.5-6.5-6.5zm0 11c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg text-primary transition-colors transform hover:scale-110 duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 text-6xl font-mono">
            {"{"}
          </div>
          <div className="absolute top-1/2 right-1/4 text-6xl font-mono">
            {"}"}
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-6xl font-mono">
            {"<"}
          </div>
          <div className="absolute bottom-1/3 right-1/3 text-6xl font-mono">
            {">"}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                Portfolio
              </h3>
              <p className="mb-4">
                A showcase of my skills, projects, and professional journey.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-primary transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-primary transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Certifications
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                  <span>josemiguelarcuino.basc@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 mt-0.5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>09677389755</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 mt-0.5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Las Piñas City</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-slate-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} Jose Miguel Arcuino. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
