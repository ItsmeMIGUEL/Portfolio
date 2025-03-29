import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function OJTSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ojtData = [
    {
      position: "DevOps Intern",
      company: "Endsofttech",
      location: "Las Pinas City",
      period: "2025",
      description:
        "As a DevOps Intern at Endsofttech, I collaborated with cross-functional teams to streamline development workflows and optimize cloud infrastructure. My role involved bridging the gap between software development and IT operations, with a focus on automation, continuous integration, and infrastructure optimization. I worked extensively with the React development team to implement CI/CD pipelines and monitoring solutions that improved deployment efficiency by 40%.",
      achievements: [
        "Designed and built a predictive scaling model that reduced cloud resource allocation costs by 22% through intelligent auto-scaling",
        "Developed interactive dashboards with React for real-time visualization of system metrics and prediction results",
        "Containerized 15+ applications, reducing deployment times from hours to minutes",
        "Configured monitoring alerts that decreased incident response time by 35%",
        "Collaborated on security improvements that reduced vulnerability findings by 60% in quarterly audits",
      ],
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Shadcn",
        "Tailwind",
        "Python",
      ],
      methodologies: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Agile Development",
        "Site Reliability Engineering",
        "Data Analysis",
      ],
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === ojtData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? ojtData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  if (!isClient) {
    return null; // Or return a loading state if preferred
  }

  return (
    <section
      id="ojt"
      className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1/4 h-1/4 md:w-1/4 md:h-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/6 h-1/6 md:w-1/3 md:h-1/3 bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-tl-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            On-the-Job Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            My internships and practical training experiences
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block space-y-12">
          {ojtData.map((ojt, index) => (
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
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        {ojt.position}
                      </h3>
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
                    <h5 className="font-semibold text-slate-800 dark:text-white mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {ojt.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {ojt.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        {ojtData.length > 1 && (
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {ojtData.map((ojt, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-3">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                              {ojt.position}
                            </h3>
                            <h4 className="text-lg text-primary">
                              {ojt.company}
                            </h4>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-slate-600 dark:text-slate-400">
                            <Calendar className="w-4 h-4 mr-2 text-primary/70" />
                            <span className="text-sm">{ojt.period}</span>
                          </div>
                          <div className="flex items-center text-slate-600 dark:text-slate-400">
                            <MapPin className="w-4 h-4 mr-2 text-primary/70" />
                            <span className="text-sm">{ojt.location}</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
                          <h5 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm">
                            Technologies:
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {ojt.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                          {ojt.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {ojtData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeIndex === index
                      ? "bg-primary"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 p-2 rounded-full bg-white dark:bg-slate-700 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 p-2 rounded-full bg-white dark:bg-slate-700 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
        {/* Show simple card if only one item */}
        {ojtData.length === 1 && (
          <div className="lg:hidden">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col gap-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-3">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {ojtData[0].position}
                    </h3>
                    <h4 className="text-lg text-primary">
                      {ojtData[0].company}
                    </h4>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Calendar className="w-4 h-4 mr-2 text-primary/70" />
                    <span className="text-sm">{ojtData[0].period}</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <MapPin className="w-4 h-4 mr-2 text-primary/70" />
                    <span className="text-sm">{ojtData[0].location}</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
                  <h5 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm">
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {ojtData[0].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {ojtData[0].description}
                </p>
              </div>
            </div>
          </div>
        )}
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
    </section>
  );
}
