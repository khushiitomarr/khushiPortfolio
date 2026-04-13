import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <FaPython /> },
];

const Skills = () => {
  return (
    <section className="min-h-screen px-6 py-20">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
        Skills
      </h2>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
        
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-6 
            bg-white/10 border border-white/20 rounded-xl backdrop-blur-md
            hover:bg-white/20 hover:scale-105 transition duration-300 cursor-pointer"
          >
            <div className="text-3xl text-blue-400">
              {skill.icon}
            </div>
            <p className="text-white text-sm">{skill.name}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;