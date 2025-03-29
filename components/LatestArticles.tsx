import Image from "next/image";
import { Calendar, BookOpen } from "lucide-react";

export default function LatestArticles() {
  return (
    <section
      id="blog"
      className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-tr-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            Thoughts, tutorials and insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Building Scalable React Applications",
              date: "June 15, 2023",
              category: "Frontend",
              image: "/placeholder.svg?height=200&width=400&text=React",
              excerpt:
                "Learn how to structure large-scale React applications for maintainability and performance.",
            },
            {
              title: "Microservices vs Monoliths: A Practical Guide",
              date: "May 22, 2023",
              category: "Architecture",
              image: "/placeholder.svg?height=200&width=400&text=Architecture",
              excerpt:
                "Comparing architectural approaches and when to choose each for your next project.",
            },
            {
              title: "Advanced TypeScript Patterns for Better Code",
              date: "April 10, 2023",
              category: "TypeScript",
              image: "/placeholder.svg?height=200&width=400&text=TypeScript",
              excerpt:
                "Discover powerful TypeScript patterns to improve type safety and developer experience.",
            },
          ].map((article, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </p>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center"
                >
                  Read More
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
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-primary px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
