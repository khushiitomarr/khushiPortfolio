import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
  FaRobot,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiRender,
  SiChartdotjs,
  SiAxios,
  SiJsonwebtokens,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "React Router", icon: <FaReact /> },
      { name: "Axios", icon: <SiAxios /> },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens /> },
      { name: "bcrypt", icon: <RiShieldKeyholeLine /> },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongodb /> },
      { name: "MongoDB Atlas", icon: <SiMongodb /> },
    ],
  },

  {
    title: "APIs & AI",
    skills: [
      { name: "Groq AI", icon: <FaRobot /> },
      { name: "SerpAPI", icon: <TbApi /> },
      { name: "Chart.js", icon: <SiChartdotjs /> },
      { name: "jsPDF", icon: <TbApi /> },
      { name: "html2canvas", icon: <TbApi /> },
    ],
  },

  {
    title: "Programming Languages",
    skills: [{ name: "C++", icon: <SiCplusplus /> }],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Vite", icon: <VscCode /> },
      { name: "npm", icon: <FaNodeJs /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen scroll-mt-24 px-6 py-20"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
        Skills
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-400 mb-12">
        Technologies and tools I use to build modern web applications.
      </p>

      <div className="max-w-6xl mx-auto space-y-10">
        {skillCategories.map((category, index) => (
          <div key={index}>
            {/* Category Heading */}
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="
                    flex flex-col items-center justify-center
                    gap-2 p-3 min-h-[90px]
                    bg-white/10 border border-white/20
                    rounded-xl backdrop-blur-md
                    hover:bg-white/15
                    hover:border-blue-400/50
                    hover:-translate-y-1
                    hover:shadow-lg hover:shadow-blue-500/20
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <div className="text-[clamp(1.5rem,5vw,2rem)] text-blue-400">
                    {skill.icon}
                  </div>

                  <p className="text-white text-xs sm:text-sm text-center font-medium">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills