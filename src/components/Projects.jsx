import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "QueryX",
    type: "Team Project",
    description:
      "AI-powered search engine featuring AI answers, voice search, quiz mode, exam mode, search history, and offline caching.",
    tech: ["React", "Node.js", "MongoDB", "Groq AI", "SerpAPI"],
    github: "https://github.com/khushiitomarr/QueryX1.git",
    live: "https://query-x1.vercel.app/",
    image: "/queryx.png",
  },

  {
    title: "Finance Dashboard",
    description:
      "Responsive finance dashboard for tracking income, expenses, and financial insights.",
    tech: ["React", "Tailwind", "Chart.js"],
    github: "https://github.com/khushiitomarr/finance-dashboard",
    live: "https://finance-dashboard-one-ebon.vercel.app/",
    image: "/finance.png",
  },

  {
    title: "Portfolio Website",
    description:
      "Modern portfolio showcasing projects, skills, and experience.",
    tech: ["React", "Tailwind", "Vercel"],
    github: "https://github.com/khushiitomarr/khushiPortfolio",
    live: "https://khushi-portfolio-tau-eight.vercel.app/",
    image: "/portfolio.png",
  },

  {
    title: "GitHub User Search App",
    description:
      "Search GitHub users and explore profiles using GitHub API.",
    tech: ["JavaScript", "GitHub API", "CSS"],
    github: "https://github.com/khushiitomarr/github-user-search-app",
    live: "https://github-user-search-app-eta-pied.vercel.app/",
    image: "/github.png",
  },

  {
    title: "To-Do App",
    description:
      "Simple task management application for organizing daily tasks.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/khushiitomarr/to-do-app",
    live: "https://to-do-app-ruddy-theta.vercel.app/",
    image: "/todo.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
        Featured Projects
      </h2>

      <p className="text-center text-gray-400 mb-10">
        A collection of projects showcasing my frontend and full-stack
        development skills.
      </p>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              flex flex-col h-full
              bg-white/10
              border border-white/20
              rounded-xl
              overflow-hidden
              backdrop-blur-md
              hover:border-blue-400/50
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-blue-500/20
              transition-all duration-300
            "
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-28 object-cover"
            />

            {/* Content */}
            <div className="flex flex-1 flex-col p-3">
              {project.type && (
                <span className="inline-block mb-2 text-[10px] px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
                  {project.type}
                </span>
              )}

              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-base font-semibold text-white leading-tight">
                  {project.title}
                </h3>

                {project.title === "QueryX" && (
                  <span className="text-[10px] px-2 py-1 bg-blue-500 text-white rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-gray-300 text-xs mb-3 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      text-[10px]
                      px-2 py-[2px]
                      bg-blue-500/20
                      text-blue-300
                      rounded-full
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex justify-between items-center text-xs sm:text-sm">
                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white hover:text-blue-400 transition"
                  >
                    <FaGithub />
                    Code
                  </a>
                ) : (
                  <span className="text-gray-500 text-xs">
                    Team Repository
                  </span>
                )}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white hover:text-blue-400 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
