"use client";

import Sidebar from "../components/Sidebar";
import { Code, Globe, Cpu, ExternalLink } from "lucide-react";

export default function Projects() {
  const projectSections = [
    {
      title: "C++ Projects",
      icon: <Code className="w-6 h-6 text-blue-700" />,
      projects: [
        {
          name: "Car Parking Management System",
          description:
            "A C++ project to manage cars details using mathematical algorithm.",
          show: "https://github.com/sg5484809/car_parking",
        },
        {
          name: "Matrix Problems",
          description:
            "Students can calculate any matrix problems by giving their choice and value",
          show: "https://github.com/sg5484809/Matrix_problems",
        },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6 text-green-700" />,
      projects: [
        {
          name: "Doctor Portal",
          description:
            "A Next.js , TailwindCSS app for doctor-patient appointment booking.",
          show: "https://doctor-web-sigma.vercel.app/",
        },
        {
          name: "Weather Web",
          description: "Weather app for geting real time information of weather using React.js , Bootstrap.",
          show: "https://github.com/sg5484809/Weather_App",
        },
      ],
    },
    {
      title: "VLSI Design",
      icon: <Cpu className="w-6 h-6 text-purple-700" />,
      projects: [
        {
          name: "2 input NOR Gate",
          description: "Designed and simulated a 2 input NOR Gate.",
          show: "/NOR_Gate.pdf",
        },
        {
          name: "2 input NAND Gate",
          description: "Designed and simulated a 2 input NAND Gate.",
          show: "/NAND_Gate.pdf",
        },
      ],
    },
  ];

  return (
    <div className="h-screen flex relative overflow-hidden">
      <Sidebar />

      <div className="flex-1 bg-amber-50 flex flex-col items-center justify-start p-10 overflow-y-auto">
        <div className="max-w-5xl w-full">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-8 text-blue-800">My Projects</h2>

          {/* Sections */}
          <div className="space-y-10">
            {projectSections.map((section, index) => (
              <div key={index}>
                {/* Section Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </h3>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {section.projects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition duration-300"
                    >
                      <h4 className="text-xl font-medium text-blue-700 mb-2">
                        {proj.name}
                      </h4>
                      <p className="text-gray-600 mb-3">{proj.description}</p>

                      {proj.show && (
                        <a
                          href={proj.show}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                        >
                          Show <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
