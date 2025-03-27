import { Music, Camera, Bike, Palette, Gamepad, Globe, Coffee, BookOpen } from "lucide-react"

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-tl-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Hobbies & Interests</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">What I enjoy doing in my free time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Photography",
              description:
                "Capturing moments and exploring visual storytelling through landscape and street photography.",
              icon: <Camera className="w-6 h-6 text-primary" />,
            },
            {
              title: "Music Production",
              description: "Creating electronic music and experimenting with different sounds and genres.",
              icon: <Music className="w-6 h-6 text-primary" />,
            },
            {
              title: "Cycling",
              description: "Exploring new trails and enjoying long-distance rides on weekends.",
              icon: <Bike className="w-6 h-6 text-primary" />,
            },
            {
              title: "Digital Art",
              description: "Creating illustrations and 3D models using various digital tools and software.",
              icon: <Palette className="w-6 h-6 text-primary" />,
            },
            {
              title: "Gaming",
              description: "Playing strategy and role-playing games that challenge problem-solving skills.",
              icon: <Gamepad className="w-6 h-6 text-primary" />,
            },
            {
              title: "Traveling",
              description: "Exploring different cultures, cuisines, and architectural wonders around the world.",
              icon: <Globe className="w-6 h-6 text-primary" />,
            },
            {
              title: "Coffee Brewing",
              description: "Experimenting with different brewing methods and beans from around the world.",
              icon: <Coffee className="w-6 h-6 text-primary" />,
            },
            {
              title: "Reading",
              description: "Diving into science fiction, technical books, and philosophical literature.",
              icon: <BookOpen className="w-6 h-6 text-primary" />,
            },
          ].map((hobby, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {hobby.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-slate-800 dark:text-white">{hobby.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-center">{hobby.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-white">Personal Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Photography Portfolio</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                A collection of my best landscape and urban photography shots from my travels around the world.
              </p>
              <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center">
                View Gallery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Music Compositions</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Electronic and ambient music tracks I've produced in my home studio during weekends.
              </p>
              <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center">
                Listen on SoundCloud
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

