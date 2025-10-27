import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hello = () => {
  return (
    <main
      id="hello"
      className="min-h-screen w-full flex items-center justify-center px-6 py-10 relative"
    >
      {/* Content */}
      <div className="text-center max-w-xl animate-fadeIn space-y-6">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#CCD6F6] drop-shadow">
          Hi, I'm <span className="text-[#64FFDA]">Prakash</span> 👋
        </h1>

        {/* Role */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#64FFDA] tracking-wide drop-shadow">
          Full Stack Developer (Python | Django | React)
        </h2>

        {/* Description */}
        <p className="text-[#E2E8F0] text-sm sm:text-lg lg:text-xl leading-relaxed">
          Passionate about crafting scalable backend solutions and
          intuitive web interfaces that deliver exceptional user experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-3">
          <a
            href="#projects"
            className="bg-[#64FFDA] text-[#0A192F] px-7 py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-md"
          >
            🚀 Projects
          </a>
          <a
            href="#contact"
            className="border border-[#64FFDA] text-[#64FFDA] px-7 py-3 rounded-lg font-semibold transition transform hover:bg-[#64FFDA] hover:text-[#0A192F] hover:scale-105"
          >
            📩 Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-2">
          <a
            href="https://github.com/Prakashp24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] text-2xl hover:scale-125 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/prakash-p-b3194229b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] text-2xl hover:scale-125 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pks.prakashpandiyan@gmail.com"
            className="text-[#64FFDA] text-2xl hover:scale-125 transition-transform"
          >
            <SiGmail />
          </a>
        </div>
      </div>

      {/* Fade Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn .9s ease-in-out;
        }
      `}</style>
    </main>
  );
};

export default Hello;
