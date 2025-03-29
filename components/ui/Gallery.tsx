"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

// Define the gallery item type
type GalleryItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  largeImage?: string;
};

export default function GallerySection() {
  // Gallery items data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "Web Design",
      description:
        "A modern dashboard for an e-commerce platform with analytics and inventory management.",
      image: "/placeholder.svg?height=600&width=800&text=E-Commerce+Dashboard",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile App",
      description:
        "A secure and user-friendly mobile banking application with transaction history and bill payments.",
      image: "/placeholder.svg?height=600&width=800&text=Mobile+Banking+App",
    },
    {
      id: 3,
      title: "Travel Blog Website",
      category: "Web Design",
      description:
        "A responsive travel blog with dynamic content loading and interactive maps.",
      image: "/placeholder.svg?height=600&width=800&text=Travel+Blog",
    },
    {
      id: 4,
      title: "Fitness Tracker",
      category: "Mobile App",
      description:
        "A comprehensive fitness tracking app with workout plans and progress visualization.",
      image: "/placeholder.svg?height=600&width=800&text=Fitness+Tracker",
    },
    {
      id: 5,
      title: "Restaurant Ordering System",
      category: "Web App",
      description:
        "An online ordering system for restaurants with real-time order tracking and payment processing.",
      image: "/placeholder.svg?height=600&width=800&text=Restaurant+Ordering",
    },
    {
      id: 6,
      title: "Smart Home Control",
      category: "IoT",
      description:
        "A smart home control interface with device management and automation rules.",
      image: "/placeholder.svg?height=600&width=800&text=Smart+Home+Control",
    },
    {
      id: 7,
      title: "Educational Platform",
      category: "Web App",
      description:
        "An interactive learning platform with course management and progress tracking.",
      image: "/placeholder.svg?height=600&width=800&text=Educational+Platform",
    },
    {
      id: 8,
      title: "Social Media Dashboard",
      category: "Web Design",
      description:
        "A comprehensive dashboard for managing multiple social media accounts and analytics.",
      image:
        "/placeholder.svg?height=600&width=800&text=Social+Media+Dashboard",
    },
  ];

  // State for filtering and modal
  const [filter, setFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Get unique categories for filter buttons
  const categories = [
    "All",
    ...Array.from(new Set(galleryItems.map((item) => item.category))),
  ];

  // Filter gallery items based on selected category
  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  // Check if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Modal navigation functions
  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setCurrentIndex(galleryItems.findIndex((i) => i.id === item.id));
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const navigateModal = (direction: "next" | "prev") => {
    if (!selectedItem) return;

    let newIndex = currentIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }

    setCurrentIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
  };

  // Handle keyboard navigation
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="gallery"
      className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-secondary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-tr-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            My Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            Explore my latest projects and creative work
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => openModal(item)}
                  className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-slate-900"
                  aria-label="View project"
                >
                  <ZoomIn className="w-5 h-5 text-primary" />
                </button>
              </div>
              <div className="p-4">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-1 text-slate-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => openModal(item)}
                  className="mt-3 text-primary hover:text-primary/80 text-sm font-medium flex items-center"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
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
          ))}
        </div>

        {/* "View All Projects" button */}
        <div className="text-center mt-12">
          <a
            href="#"
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
          </a>
        </div>
      </div>

      {/* Modal for project details */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
          ref={modalRef}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                {selectedItem.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-auto">
              <div className="relative h-[40vh] md:h-[50vh]">
                <Image
                  src={selectedItem.largeImage || selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />

                {/* Navigation arrows */}
                {!isMobile && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateModal("prev");
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 dark:bg-slate-900/30 p-2 rounded-full hover:bg-white/50 dark:hover:bg-slate-900/50 transition-colors"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateModal("next");
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 dark:bg-slate-900/30 p-2 rounded-full hover:bg-white/50 dark:hover:bg-slate-900/50 transition-colors"
                      aria-label="Next project"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full">
                    Project #{selectedItem.id}
                  </span>
                </div>

                <h4 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">
                  Project Description
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {selectedItem.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg font-medium transition-colors hover:bg-primary/90"
                  >
                    View Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    View Source Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile navigation */}
            {isMobile && (
              <div className="flex border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => navigateModal("prev")}
                  className="flex-1 py-3 text-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 inline-block mr-1" />
                  Previous
                </button>
                <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                <button
                  onClick={() => navigateModal("next")}
                  className="flex-1 py-3 text-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Next
                  <ChevronRight className="w-5 h-5 inline-block ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
