import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-secondary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-tr-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">My academic journey and qualifications</p>
        </div>

        <div className="space-y-12">
          {[
            {
              degree: "Master of Science in Computer Science",
              institution: "Stanford University",
              location: "Stanford, CA",
              period: "2018 - 2020",
              description:
                "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Deep Learning Approaches for Natural Language Processing'.",
              achievements: [
                "GPA: 3.9/4.0",
                "Research Assistant in NLP Lab",
                "Published 2 papers in top-tier conferences",
              ],
              icon: <GraduationCap className="w-6 h-6 text-white" />,
            },
            {
              degree: "Bachelor of Science in Computer Engineering",
              institution: "Massachusetts Institute of Technology",
              location: "Cambridge, MA",
              period: "2014 - 2018",
              description:
                "Comprehensive program covering both hardware and software aspects of computing systems. Minor in Mathematics.",
              achievements: [
                "Graduated with Honors",
                "Dean's List all semesters",
                "Senior Project: IoT-based Smart Home System",
              ],
              icon: <BookOpen className="w-6 h-6 text-white" />,
            },
            {
              degree: "High School Diploma",
              institution: "Phillips Exeter Academy",
              location: "Exeter, NH",
              period: "2010 - 2014",
              description: "College preparatory curriculum with focus on STEM subjects.",
              achievements: ["Valedictorian", "President of Computer Science Club", "National Merit Scholar"],
              icon: <Award className="w-6 h-6 text-white" />,
            },
          ].map((education, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                    {education.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-primary">{education.period}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{education.location}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{education.degree}</h3>
                  <h4 className="text-xl text-slate-600 dark:text-slate-300 mb-4">{education.institution}</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{education.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      {education.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
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
            className="inline-flex items-center bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-primary px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <Award className="w-5 h-5 mr-2" />
            View Certificates
          </a>
        </div>
      </div>
    </section>
  )
}

