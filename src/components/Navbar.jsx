import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50
backdrop-blur-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Khushi<span className="text-blue-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-white/80 hover:text-blue-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://linkedin.com/in/khushiitomarrr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/khushiitomarr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaGithub size={28} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            ))}

            <div className="flex gap-6 text-2xl">
              <a
                href="https://linkedin.com/in/khushiitomarrr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/khushiitomarr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
