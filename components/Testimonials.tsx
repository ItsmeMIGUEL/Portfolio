import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-br-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            What people say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Product Manager",
              company: "Tech Innovations Inc.",
              image: "/placeholder.svg?height=80&width=80",
              quote:
                "John is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him an invaluable asset to any team.",
            },
            {
              name: "Michael Chen",
              role: "CTO",
              company: "Digital Solutions Ltd.",
              image: "/placeholder.svg?height=80&width=80",
              quote:
                "Working with John was a pleasure. He has a deep understanding of modern web technologies and always finds elegant solutions to complex problems.",
            },
            {
              name: "Emily Rodriguez",
              role: "UI/UX Designer",
              company: "WebCraft Studios",
              image: "/placeholder.svg?height=80&width=80",
              quote:
                "John has an incredible ability to translate designs into flawless code. His collaborative approach and technical expertise made our projects successful.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700 relative"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 text-6xl text-primary opacity-20">
                "
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
