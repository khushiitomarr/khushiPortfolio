import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institute: "Bharat Institute of Technology, Meerut",
    score: "CGPA: 7.23",
    duration: "2022 - 2026",
  },
  {
    degree: "Class XII (CBSE)",
    field: "Senior Secondary Education",
    institute: "Translam Academy International, Meerut",
    score: "80%",
    duration: "2021 - 2022",
  },
  {
    degree: "Class X (CBSE)",
    field: "Secondary Education",
    institute: "Translam Academy International, Meerut",
    score: "83%",
    duration: "2019 - 2020",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen scroll-mt-24 px-6 py-20"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-14">
        Education
      </h2>

      <div className="max-w-4xl mx-auto">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="relative pl-10 pb-10"
          >
            {/* Timeline Line */}
            {index !== educationData.length - 1 && (
              <div className="absolute left-4 top-10 w-[2px] h-full bg-blue-400/40"></div>
            )}

            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <FaGraduationCap className="text-white text-sm" />
            </div>

            {/* Card */}
            <div
              className="
                bg-white/10
                border border-white/20
                rounded-2xl
                backdrop-blur-md
                p-6
                hover:border-blue-400/50
                hover:shadow-lg hover:shadow-blue-500/20
                transition-all duration-300
              "
            >
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {item.degree}
              </h3>

              <p className="text-blue-400 mt-1">
                {item.field}
              </p>

              <p className="text-gray-300 mt-2">
                {item.institute}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                  {item.score}
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm">
                  {item.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education
