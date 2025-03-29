import { Code, Server, Database, Globe, Cpu, Layers, Zap } from "lucide-react";

export default function MySkills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-secondary/5 rounded-bl-full hidden md:block"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                Frontend
              </h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                JavaScript/TypeScript
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                React.js
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                HTML5/CSS3
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Tailwind/SCSS
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Bootstrap
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                Backend
              </h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                PHP
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Python
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                RESTful APIs
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                Database
              </h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                PostgreSQL
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                MySQL
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Firebase
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                SQL/NoSQL
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                DevOps
              </h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                GitHub
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack Visualization */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-800 dark:text-white">
            My Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "JavaScript", icon: "📜" },
              { name: "TypeScript", icon: "🔷" },
              { name: "React", icon: "⚛️" },
              { name: "Python", icon: "🐍" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Github", icon: "📊" },
              { name: "HTML5", icon: "🌐" },
              { name: "CSS3", icon: "🎨" },
              { name: "Tailwind", icon: "💨" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-24 h-24"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 text-center">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
