import { Music, Camera, Bike, Palette, Gamepad, Globe } from "lucide-react";

export default function HobbiesSection() {
  return (
    <section
      id="hobbies"
      className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-tl-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Hobbies & Interests
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            What I enjoy doing in my free time
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Photography",
              description:
                "Capturing moments and exploring visual storytelling through landscape and street photography.",
              icon: <Camera className="w-6 h-6 text-primary" />,
            },
            {
              title: "Gaming",
              description:
                "Playing strategy and role-playing games that challenge problem-solving skills.",
              icon: <Gamepad className="w-6 h-6 text-primary" />,
            },
            {
              title: "Music Production",
              description:
                "Listening to music with different sounds and genres.",
              icon: <Music className="w-6 h-6 text-primary" />,
            },
            {
              title: "Traveling",
              description:
                "Exploring different cultures, cuisines, and architectural wonders around the world.",
              icon: <Globe className="w-6 h-6 text-primary" />,
            },
            {
              title: "Cycling",
              description:
                "Exploring new trails and enjoying long-distance rides on weekends.",
              icon: <Bike className="w-6 h-6 text-primary" />,
            },
            {
              title: "Digital Art",
              description:
                "Creating illustrations and 3D models using various digital tools and software.",
              icon: <Palette className="w-6 h-6 text-primary" />,
            },
          ].map((hobby, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {hobby.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-slate-800 dark:text-white">
                {hobby.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-center">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
