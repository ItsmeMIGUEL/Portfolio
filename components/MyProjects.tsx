"use client";
import { ExternalLink, Github, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProjectsData } from "../lib/ProjectsData";
import { useState, useEffect } from "react";

export default function MyProjects() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(ProjectsData);

  // Get all unique tags for the filter tabs
  const allTags = [
    "All",
    ...new Set(ProjectsData.flatMap((project) => project.tags)),
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (activeTab === "All") {
      setFilteredProjects(ProjectsData);
    } else {
      setFilteredProjects(
        ProjectsData.filter((project) => project.tags.includes(activeTab))
      );
    }
  }, [activeTab]);

  const handleViewDetails = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-primary/5 to-secondary/5 rounded-bl-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            Check out some of my recent work
          </p>
        </div>

        {/* Filter tabs - shown only on mobile */}
        {isMobile && (
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTab(tag)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                    activeTab === tag
                      ? "bg-primary text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700 cursor-pointer"
              onClick={() => handleViewDetails(index)}
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl || "#", "_blank");
                      }}
                      className="bg-white text-primary p-3 rounded-full hover:bg-slate-100 transition-colors transform hover:scale-110 duration-200"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl || "#", "_blank");
                      }}
                      className="bg-white text-primary p-3 rounded-full hover:bg-slate-100 transition-colors transform hover:scale-110 duration-200"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 pt-20 md:pt-0 md:items-center">
            <div
              className="relative bg-white dark:bg-slate-900 rounded-xl max-w-4xl w-full max-h-[80vh] md:max-h-[90vh] overflow-y-auto shadow-2xl mt-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-50"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </button>

              {selectedProject !== null && (
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Column - Project Image and Links */}
                    <div className="md:w-1/3">
                      <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                          {ProjectsData[selectedProject].icon}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="mt-4 flex flex-col space-y-3">
                        {ProjectsData[selectedProject].liveUrl && (
                          <a
                            href={ProjectsData[selectedProject].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                        {ProjectsData[selectedProject].githubUrl && (
                          <a
                            href={ProjectsData[selectedProject].githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        )}
                      </div>

                      {/* Project Tags */}
                      <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                        {ProjectsData[selectedProject].tags.map(
                          (tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Right Column - Project Details */}
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">
                        {ProjectsData[selectedProject].title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        {ProjectsData[selectedProject].description}
                      </p>

                      {ProjectsData[selectedProject].longDescription && (
                        <div className="mb-6">
                          <p className="text-slate-600 dark:text-slate-300">
                            {ProjectsData[selectedProject].longDescription}
                          </p>
                        </div>
                      )}

                      {ProjectsData[selectedProject].features && (
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {ProjectsData[selectedProject].features.map(
                              (feature, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-slate-600 dark:text-slate-300">
                                    {feature}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Additional Mobile Close Button */}
                      <div className="mt-8 md:hidden">
                        <button
                          onClick={closeModal}
                          className="w-full py-3 bg-primary text-white rounded-lg font-medium"
                        >
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/projects")}
            className="inline-flex items-center bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20"
          >
            View All Projects
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
          </button>
        </div>
      </div>
    </section>
  );
}
