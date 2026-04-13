import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      
      <div className="max-w-3xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
          About Me
        </h2>

        {/* Main Text */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          I'm <span className="text-white font-semibold">Khushi Tomar</span>, a passionate 
          <span className="text-blue-400 font-semibold"> Frontend Developer</span> who loves building 
          modern, responsive, and user-friendly web applications.
        </p>

        <p className="text-gray-400 text-md md:text-lg mb-6">
          I enjoy transforming ideas into reality using clean, efficient code and continuously improving my skills.
        </p>

        <p className="text-gray-400 text-md md:text-lg">
          Currently focused on mastering 
          <span className="text-blue-400"> React</span>, strengthening problem-solving with 
          <span className="text-blue-400"> C++</span>, and exploring full-stack development.
        </p>

      </div>
    </section>
  );
};

export default About;