import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-24 flex items-center justify-center px-6 text-center"
    >
      
      <div className="max-w-3xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
          About Me
        </h2>

        {/* Main Text */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          I'm <span className="text-white font-semibold">Khushi Tomar</span>, a Computer Science graduate and
          <span className="text-blue-400 font-semibold"> Full-Stack Developer, </span>passionate about building modern, responsive, and user-friendly web applications.
        </p>

        <p className="text-gray-400 text-md md:text-lg mb-6">
         I enjoy transforming ideas into real-world solutions using React.js, JavaScript, Node.js, Express.js, MongoDB, and Tailwind CSS. Through internships and personal projects, I've gained hands-on experience creating interactive interfaces, integrating APIs, and developing scalable web applications.
        </p>

        <p className="text-gray-400 text-md  mb-6 md:text-lg">
          Driven by curiosity and continuous learning, I enjoy building real-world applications, solving complex problems, and turning innovative ideas into meaningful digital experiences.
        </p>
        
        <p className="text-gray-400 text-md md:text-lg">
          I'm constantly learning new technologies, improving my problem-solving skills, and exploring better ways to build impactful digital experiences. My goal is to grow as a software developer and contribute to products that make a meaningful difference.
        </p>


      </div>
    </section>
  );
};

export default About;