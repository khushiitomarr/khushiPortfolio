import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Finance Dashboard",
    description:
      "Built a responsive finance dashboard to track income, expenses, and financial insights with interactive charts and modern UI.",
    tech: ["React", "Tailwind", "Charts"],
    github: "https://github.com/khushiitomarr/finance-dashboard",
    live: "https://finance-dashboard-one-ebon.vercel.app/",
    image: "/finance.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a modern personal portfolio showcasing projects, skills, and experience with smooth animations and responsive UI.",
    tech: ["React", "Tailwind", "Vercel"],
    github: "https://github.com/khushiitomarr/khushiPortfolio",
    live: "https://khushi-portfolio-tau-eight.vercel.app/",
    image: "/portfolio.png",
  },
  {
    title: "GitHub User Search App",
    description:
      "Developed a web app to search GitHub users and explore their profiles using GitHub API with clean UI.",
    tech: ["JavaScript", "API", "CSS"],
    github: "https://github.com/khushiitomarr/github-user-search-app",
    live: "https://github-user-search-app-eta-pied.vercel.app/",
    image: "/github.png",
  },
  {
    title: "To-Do App",
    description:
      "A simple and responsive task management app to add, delete, and manage daily tasks efficiently.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/khushiitomarr/to-do-app",
    live: "https://to-do-app-ruddy-theta.vercel.app/",
    image: "/todo.png",
  },
];

const Projects = () => {
  return (

    <section id="projects" className="min-h-screen px-6 py-24">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
        Projects
      </h2>

      {/* Grid */}
      <div className="max-w-lgl mx-auto grid grid-cols-2 gap-8">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 rounded-xl overflow-hidden backdrop-blur-md
            hover:scale-105 transition duration-300"
          >
            
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 text-sm">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 text-lg">
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition flex items-center gap-2"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Live
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