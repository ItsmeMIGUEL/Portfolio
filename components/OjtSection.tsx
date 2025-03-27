import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react"

export default function OJTSection() {
  return (
    <section id="ojt" className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-tl-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">On-the-Job Training</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">My internships and practical training experiences</p>
        </div>

        <div className="space-y-12">
          {[
            {
              position: "Software Engineering Intern",
              company: "Google",
              location: "Mountain View, CA",
              period: "Summer 2019",
              description:
                "Worked with the Chrome DevTools team to improve performance profiling tools. Implemented new features for memory leak detection and visualization.",
              achievements: [
                "Developed a new algorithm for detecting memory leaks that improved accuracy by 35%",
                "Created interactive visualizations for memory usage patterns",
                "Contributed to open-source projects related to performance monitoring",
                "Presented findings at an internal tech talk with 100+ attendees",
              ],
              technologies: ["JavaScript", "TypeScript", "React", "D3.js", "Chrome DevTools API"],
            },
            {
              position: "Data Science Intern",
              company: "Microsoft",
              location: "Redmond, WA",
              period: "Summer 2018",
              description:
                "Worked with the Azure Machine Learning team to develop predictive models for cloud resource optimization. Analyzed large datasets to identify patterns in resource usage.",
              achievements: [
                "Built a prediction model that reduced resource allocation costs by 22%",
                "Processed and analyzed over 10TB of cloud usage data",
                "Implemented automated data pipelines for continuous model training",
                "Created interactive dashboards for visualizing prediction results",
              ],
              technologies: ["Python", "TensorFlow", "Azure ML", "SQL", "Power BI"],
            },
            {
              position: "Web Development Intern",
              company: "Adobe",
              location: "San Jose, CA",
              period: "Summer 2017",
              description:
                "Assisted in developing new features for Adobe's Creative Cloud web applications. Focused on improving user experience and accessibility.",
              achievements: [
                "Implemented responsive design improvements that increased mobile usage by 18%",
                "Conducted accessibility audits and implemented WCAG 2.1 compliance fixes",
                "Optimized front-end performance, reducing load time by 40%",
                "Participated in user testing sessions and incorporated feedback into designs",
              ],
              technologies: ["HTML/CSS", "JavaScript", "React", "Redux", "Webpack"],
            },
          ].map((ojt, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{ojt.position}</h3>
                      <h4 className="text-xl text-primary">{ojt.company}</h4>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <Calendar className="w-5 h-5 mr-2 text-primary/70" />
                      {ojt.period}
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <MapPin className="w-5 h-5 mr-2 text-primary/70" />
                      {ojt.location}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h5 className="font-semibold text-slate-800 dark:text-white mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {ojt.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{ojt.description}</p>
                  <div>
                    <h5 className="font-semibold text-slate-800 dark:text-white mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {ojt.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20"
          >
            View Recommendation Letters
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

