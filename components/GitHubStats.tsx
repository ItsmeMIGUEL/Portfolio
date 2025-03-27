import { Code, Zap, Globe, Award } from "lucide-react";
import { Github } from "lucide-react";

export default function GitHubStats() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-tl-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            GitHub Stats
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            My open source contributions and coding activity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Repositories",
              value: "120+",
              icon: <Code className="w-6 h-6 text-primary" />,
            },
            {
              label: "Contributions",
              value: "450+",
              icon: <Zap className="w-6 h-6 text-primary" />,
            },
            {
              label: "Open Source Projects",
              value: "25+",
              icon: <Globe className="w-6 h-6 text-primary" />,
            },
            {
              label: "Stars Received",
              value: "1.2k+",
              icon: <Award className="w-6 h-6 text-primary" />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700 text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
