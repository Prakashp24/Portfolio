import React from "react";

const Experience = () => {
  const experienceData = [
    {
      role: "Intern - Python Full Stack Developer",
      company: "Codepilot Technologies Pvt. Ltd",
      duration: "Jun 2025 - Oct 2025",
      description:
        "Developing scalable applications using Django, REST APIs, and React with state management.",
    },
    {
      role: "Intern - UI/UX Developer",
      company: "Mita Technologies Pvt. Ltd",
      duration: "May 2024 - Jun 2025",
      description:
        "Designed intuitive UI for web applications and collaborated with developers for implementation.",
    },
  ];

  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-12 tracking-wide drop-shadow-lg">
          Experience 💼
        </h2>

        <div className="relative border-l-4 border-cyan-500/50 ml-6 space-y-10">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#0d1b2a]/60 backdrop-blur-xl border border-cyan-500/20
              rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-[0_0_15px_#22D3EE] duration-300"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-4 top-6 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22D3EE]"></span>

              <h3 className="text-xl font-semibold text-cyan-300">
                {item.role}
              </h3>
              <p className="text-gray-400 text-sm font-medium mt-1">
                {item.company} • {item.duration}
              </p>

              <p className="text-gray-200 mt-4 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
