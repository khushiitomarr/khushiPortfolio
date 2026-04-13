import React from "react";

const Experience = () => {
  return (
    <section className="min-h-screen px-6 py-24">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
        Experience
      </h2>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative border-l border-white/20">
        
        <div className="mb-10 ml-6">
          
          {/* Dot */}
          <span className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5"></span>

          {/* Card */}
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 transition">
            
            <h3 className="text-xl font-semibold text-white">
              Frontend Developer Intern
            </h3>

            <p className="text-blue-400 text-sm">
              Prodesk IT • Noida, India
            </p>

            <p className="text-gray-400 text-sm mb-3">
              Jun 2025 - Sep 2025
            </p>

            <ul className="text-gray-300 text-sm list-disc pl-5 space-y-2">
              <li>
                Developed responsive web interfaces using React.js, HTML, CSS, and JavaScript.
              </li>
              <li>
                Built an end-to-end Tip Calculator using React.js and Redux for state management.
              </li>
              <li>
                Created reusable UI components to improve performance and maintainability.
              </li>
              <li>
                Fixed frontend bugs and improved cross-browser compatibility.
              </li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;