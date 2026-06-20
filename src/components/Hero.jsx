import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaEye } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center px-4 pt-20"
    >
      <div className="max-w-3xl">

        {/* Typing Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <TypeAnimation
            sequence={["Hi, I'm Khushi Tomar 👋"]}
            speed={50}
            repeat={0}
          />
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          Full-Stack Developer specializing in
          <span className="text-blue-400 font-semibold">
            {" "}React, Node.js, and MongoDB
          </span>.
          Building modern, scalable, and user-focused web applications.
        </p>

        <p className="text-gray-400 text-sm md:text-base mb-10">
          Open to Full-Time, Internship, and Entry-Level Software Developer
          Opportunities.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 flex-wrap">

          {/* View Projects */}
          <button
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="
              w-48 h-14
              bg-blue-500 text-white
              rounded-xl font-medium
              hover:bg-blue-600
              hover:scale-105
              hover:shadow-lg hover:shadow-blue-500/30
              transition-all duration-300
            "
          >
            View Projects
          </button>

          {/* View Resume */}
          <a
            href="/KhushiTomar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-48 h-14
              flex items-center justify-center gap-2
              border border-blue-400
              text-blue-400
              rounded-xl font-medium
              hover:bg-blue-400 hover:text-white
              hover:scale-105
              transition-all duration-300
            "
          >
            <FaEye />
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/KhushiTomar.pdf"
            download
            className="
              w-48 h-14
              flex items-center justify-center gap-2
              border border-white
              text-white
              rounded-xl font-medium
              hover:bg-white hover:text-black
              hover:scale-105
              transition-all duration-300
            "
          >
            <FaDownload />
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero