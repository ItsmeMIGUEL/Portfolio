import { Cpu, Layers, Code, Terminal } from "lucide-react";

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-tl-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            My professional journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-700"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {[
              {
                year: "2022 - Present",
                title: "Senior Software Engineer",
                company: "Tech Innovations Inc.",
                description:
                  "Leading the development of scalable microservices architecture. Mentoring junior developers and implementing best practices for code quality and performance optimization.",
                icon: <Cpu className="w-6 h-6 text-white" />,
              },
              {
                year: "2020 - 2022",
                title: "Full Stack Developer",
                company: "Digital Solutions Ltd.",
                description:
                  "Developed and maintained multiple web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and containerized applications with Docker.",
                icon: <Layers className="w-6 h-6 text-white" />,
              },
              {
                year: "2018 - 2020",
                title: "Frontend Developer",
                company: "WebCraft Studios",
                description:
                  "Created responsive user interfaces with React and Redux. Collaborated with designers to implement pixel-perfect designs and improve user experience.",
                icon: <Code className="w-6 h-6 text-white" />,
              },
              {
                year: "2017 - 2018",
                title: "Junior Developer",
                company: "StartUp Ventures",
                description:
                  "Assisted in developing web applications using JavaScript and PHP. Participated in code reviews and learned industry best practices.",
                icon: <Terminal className="w-6 h-6 text-white" />,
              },
            ].map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-left" : "pl-15"
                  }`}
                >
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
                    <span className="text-primary font-semibold">
                      {experience.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-slate-800 dark:text-white">
                      {experience.title}
                    </h3>
                    <h4 className="text-slate-600 dark:text-slate-300 mb-4">
                      {experience.company}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {experience.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center z-10">
                    {experience.icon}
                  </div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
