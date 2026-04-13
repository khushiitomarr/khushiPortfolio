import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-sm">
      
      <div className="w-full flex justify-between items-center px-8 py-4">
        
        {/* Left */}
        <h1 className="text-4xl md:text-3xl font-semibold text-white tracking-wide">
          Welcome !
        </h1>

        {/* Right */}
        <div className="flex items-center gap-6 text-xl">
          
          <a
            href="https://linkedin.com/in/khushiitomarrr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin size={34}/>
          </a>

          <a
            href="https://github.com/khushiitomarr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaGithub size={34}/>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;