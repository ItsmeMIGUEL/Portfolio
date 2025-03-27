import Image from "next/image";
import { Users } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-tr-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-lg transition-all duration-300 group-hover:-top-6 group-hover:-left-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="About Me"
                width={500}
                height={600}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white flex items-center">
              <span className="bg-primary/10 p-2 rounded-full mr-3">
                <Users className="w-5 h-5 text-primary" />
              </span>
              Who am I?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a passionate software engineer with expertise in building
              robust, scalable applications. With a strong foundation in
              computer science and 5+ years of hands-on development experience,
              I specialize in creating efficient solutions to complex problems.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              My technical journey spans from low-level systems programming to
              modern web development. I'm committed to writing clean,
              maintainable code and continuously expanding my technical
              knowledge across different programming paradigms and
              architectures.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <p className="text-slate-800 dark:text-white font-medium">
                  Name:
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Jose Miguel Arcuino
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <p className="text-slate-800 dark:text-white font-medium">
                  Email:
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  josemiguelarcuino.basc@gmail.com
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <p className="text-slate-800 dark:text-white font-medium">
                  Location:
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Las Piñas City
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <p className="text-slate-800 dark:text-white font-medium">
                  Availability:
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Freelance & Full-time
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20"
              >
                Download CV
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
