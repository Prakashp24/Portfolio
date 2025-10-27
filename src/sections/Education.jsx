import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "B.E - Computer Science and Engineering",
      institution: "University College of Engineering, Dindigul",
      year: "2021 - 2025",
      description:
        "Gained strong foundation in software development, database systems, networking, and full stack development.",
    },
    {
      degree: "HSC - Mathematics & Biology",
      institution: "St. Mary’s Higher Secondary School, Dindigul",
      year: "2019 - 2021",
      description:
        "Developed analytical mindset with strong fundamentals in mathematics and problem-solving.",
    },
  ];

  return (
    <section className="py-20 px-6" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-12 drop-shadow-lg">
          Education 🎓
        </h2>

        <div className="relative border-l-4 border-cyan-500/50 ml-6 space-y-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#0d1b2a]/60 backdrop-blur-xl border border-cyan-500/20
              rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-[0_0_18px_#22D3EE] duration-300"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-4 top-6 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#22D3EE]"></span>

              <h3 className="text-xl font-semibold text-cyan-300">{item.degree}</h3>
              <p className="text-gray-400 text-sm font-medium mt-1">
                {item.institution} • {item.year}
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

export default Education;
