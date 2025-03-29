import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Comming Soon...",
      role: "Product Manager",
      company: "None",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      name: "Comming Soon...",
      role: "CTO",
      company: "None",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      name: "Comming Soon...",
      role: "UI/UX Designer",
      company: "None",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-br-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-white">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 md:mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
            What people say about working with me
          </p>
        </div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl shadow-md border border-blue-100 dark:border-blue-800/50 relative">
                      <div className="absolute top-0 right-0 -mt-4 -mr-4 text-6xl text-blue-400/30 dark:text-blue-300/20">
                        "
                      </div>
                      <p className=" dark:text-blue-100 mb-6 relative z-10 italic">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-200 dark:border-blue-700">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-blue-600/80 dark:text-blue-300/80">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 bg-blue-100 dark:bg-blue-800 p-2 rounded-full shadow-md hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 bg-blue-100 dark:bg-blue-800 p-2 rounded-full shadow-md hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-blue-500 dark:bg-blue-400 w-4"
                      : "bg-blue-200 dark:bg-blue-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Grid
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100 dark:border-blue-800/50 hover:border-blue-200 dark:hover:border-blue-700 relative group"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 text-6xl text-blue-400/30 dark:text-blue-300/20 group-hover:text-blue-400/40 transition-colors">
                  "
                </div>
                <p className=" dark:text-blue-100 mb-6 relative z-10 italic group-hover:text-blue-900 dark:group-hover:text-white transition-colors">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-200 dark:border-blue-700 group-hover:border-blue-300 transition-colors">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600/80 dark:text-blue-300/80 group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
