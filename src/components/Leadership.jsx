import React from "react";
import { FaMedal, FaTrophy } from "react-icons/fa";

const leadershipData = [
  {
    role: "Sports Coordinator",
    organization: "Bharat Institute of Technology",
    icon: FaMedal,
    points: [
      "Coordinated sports events and managed logistics for 50+ participants.",
      "Worked with multiple teams to ensure smooth event execution.",
    ],
  },
  {
    role: "Captain - Table Tennis & Kho-Kho Teams",
    organization: "AKTU Zonal Sports Fest",
    icon: FaTrophy,
    points: [
      "Led college teams during the AKTU Zonal Sports Fest.",
      "Helped the teams secure 2nd position through coordination and strategy.",
    ],
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="scroll-mt-24 px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
        Leadership
      </h2>

      <p className="text-center text-gray-400 mb-10">
        Roles where I led teams, coordinated events, and contributed to
        successful sports outcomes.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {leadershipData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.role}
              className="
                bg-white/10
                border border-white/20
                rounded-2xl
                backdrop-blur-md
                p-6
                hover:border-blue-400/50
                hover:-translate-y-1
                hover:shadow-lg hover:shadow-blue-500/20
                transition-all duration-300
              "
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                  <Icon className="text-xl" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="text-blue-400 mt-1">
                    {item.organization}
                  </p>
                </div>
              </div>

              <ul className="text-gray-300 text-sm list-disc pl-5 space-y-2">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Leadership;
