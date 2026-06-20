import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center px-4 pt-20">
      
      <div className="max-w-3xl">
        
        {/* Typing Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <TypeAnimation
            sequence={[
              "Hi, I'm Khushi Tomar👋",]}
            speed={50}
            repeat={0}
          />
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-8">
         Full-Stack Developer specializing in 
         <span className="text-blue-400 font-semibold"> React, Node.js, and MongoDB</span>. Building modern, scalable, and user-focused web applications.
        </p>
         <p className="text-gray-100 text-sm md:text-m mb-8">Open to Full-Time, Internship, and Entry-Level Software Developer Opportunities.</p>

        {/* Button */}

<div className="flex justify-center items-center gap-4 mt-6 flex-wrap">
  
  {/* View Projects */}
<button
  onClick={() => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="bg-blue-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-blue-300 transition duration-300"
>
  View Projects
</button>

  {/* Download Resume */}
  <a
    href="/khushitomar.pdf"
    download
    className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition duration-300 w-fit"
  >
    <FaDownload /> Download Resume
  </a>
</div>
      </div>
    </section>
  );
};

export default Hero;