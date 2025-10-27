import React from "react";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker
} from "react-icons/fa";
import {
  SiDjango,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiSqlite,
  SiMysql,
  SiPostgresql
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-transparent" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold tracking-wide mb-12 text-cyan-400 drop-shadow-lg">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          <SkillItem icon={<FaPython size={45} />} label="Python" />
          <SkillItem icon={<SiDjango size={45} />} label="Django" />
          <SkillItem icon={<FaReact size={45} />} label="React" />
          <SkillItem icon={<SiTailwindcss size={45} />} label="Tailwind CSS" />
          <SkillItem icon={<SiJavascript size={45} />} label="JavaScript" />
          <SkillItem icon={<FaHtml5 size={45} />} label="HTML5" />
          <SkillItem icon={<FaCss3Alt size={45} />} label="CSS3" />
          <SkillItem icon={<SiSqlite size={45} />} label="SQLite" />
          <SkillItem icon={<SiMysql size={45} />} label="MySQL" />
          <SkillItem icon={<SiPostgresql size={45} />} label="PostgreSQL" />
          <SkillItem icon={<FaGithub size={45} />} label="GitHub" />
          <SkillItem icon={<FaDocker size={45} />} label="Docker" />
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, label }) => (
  <div className="group flex flex-col items-center gap-3 
      bg-[#0d1a24]/60 backdrop-blur-md px-6 py-6 rounded-xl border border-cyan-500/20
      hover:border-cyan-400 hover:shadow-[0_0_18px_#22D3EE]
      transition-all duration-300 ease-in-out
      hover:scale-110 cursor-pointer">
      
    <div className="text-cyan-400 group-hover:text-white transition-all duration-300">
      {icon}
    </div>

    <p className="text-gray-200 text-lg font-semibold group-hover:text-cyan-400 transition-all">
      {label}
    </p>
  </div>
);

export default Skills;
