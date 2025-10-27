import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    title: "Smart Attendance System",
    description:
      "A facial recognition-based smart attendance system for automated classroom management.",
    tech: ["Django", "Sqlite", "Tailwind", "OpenCV", "Deep Learning"],
    link: "https://github.com/Prakashp24/Smart-Attendance-System",
  },
  {
    id: 2,
    title: "Driver Drowsiness Detection",
    description:
      "A computer vision-powered system to detect drowsiness and prevent road accidents.",
    tech: ["Django", "OpenCV", "MediaPipe", "Pygame"],
    link: "https://github.com/Prakashp24/Driver-Drowsiness-Detection-System",
  },
  {
    id: 3,
    title: "Travel Website",
    description:
      "A complete travel planning website with booking and itinerary assistance.",
    tech: ["Django", "React", "Tailwind"],
    link: "https://github.com/Prakashp24/Travel-website",
  },
  {
    id: 4,
    title: "Calculator App",
    description:
      "A clean and responsive calculator application for basic operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Prakashp24/Calculator",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-12 drop-shadow-xl tracking-wide">
          Featured Projects 🚀
        </h2>

        {/* Project Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-6 bg-[#0d1b2a]/60 backdrop-blur-md border border-cyan-500/20 
              hover:border-cyan-400 hover:shadow-[0_0_25px_#22D3EE]
              transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5 justify-center">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-1 rounded-full tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-cyan-400 hover:text-white
                transition duration-300 underline underline-offset-4"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {projectData.length > 3 && (
          <div className="mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-lg font-semibold 
              bg-cyan-400 text-[#0d1b2a]
              hover:bg-cyan-300 hover:shadow-[0_0_15px_#22D3EE] 
              active:scale-95 transition-all"
            >
              {showAll ? "Show Less" : "See More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
