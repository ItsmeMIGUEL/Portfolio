import { Cpu, Layers, Code, Terminal } from "lucide-react";

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-tl-full"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 md:mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            My professional journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-700"></div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {[
              {
                year: "2025 - Present",
                title: "Coming Soon...",
                company: "Campany",
                description:
                  "Innovation is loading… Prepare for a game-changing reveal that will redefine what’s possible.",
                icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />,
              },
              {
                year: "2020 - 2022",
                title: "Coming Soon...",
                company: "Campany",
                description:
                  "The countdown has begun. A new adventure, innovation, or masterpiece is about to unfold.",
                icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />,
              },
              {
                year: "2018 - 2020",
                title: "Coming Soon...",
                company: "Campany",
                description:
                  "We’re cooking up something spectacular, and we’re this close to pulling it out of the oven.",
                icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />,
              },
              {
                year: "2017 - 2018",
                title: "Coming Soon...",
                company: "Campany",
                description:
                  "Exciting things are on the horizon! We’re working hard to bring you an incredible new experience, and we can’t wait to share it with you.",
                icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />,
              },
            ].map((experience, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:items-center"
              >
                {/* Mobile header (icon + year) */}
                <div className="md:hidden flex items-center mb-2 pl-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-3">
                    {experience.icon}
                  </div>
                  <span className="text-primary font-semibold text-sm">
                    {experience.year}
                  </span>
                </div>

                {/* Left side content (desktop) */}
                <div className="hidden md:block w-full md:w-1/2 pr-12 text-right">
                  {index % 2 === 0 && (
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
                      <span className="text-primary font-semibold">
                        {experience.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold mt-2 text-slate-800 dark:text-white">
                        {experience.title}
                      </h3>
                      <h4 className="text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">
                        {experience.company}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                        {experience.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Icon dot (desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center z-10">
                    {experience.icon}
                  </div>
                </div>

                {/* Right side content (desktop) */}
                <div className="hidden md:block w-full md:w-1/2 pl-12 text-left">
                  {index % 2 !== 0 && (
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
                      <span className="text-primary font-semibold">
                        {experience.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold mt-2 text-slate-800 dark:text-white">
                        {experience.title}
                      </h3>
                      <h4 className="text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">
                        {experience.company}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                        {experience.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Mobile content */}
                <div className="md:hidden w-full pl-4">
                  <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                      {experience.title}
                    </h3>
                    <h4 className="text-slate-600 dark:text-slate-300 mb-3 text-sm">
                      {experience.company}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
