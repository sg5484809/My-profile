"use client";

import Sidebar from "../components/Sidebar";
import { Briefcase, Calendar, MapPin } from "lucide-react"; 

export default function Experience() {
  const experiences = [
    {
      role: "Machine learning Intern",
      company: "IEDC LAB",
      duration: "Jun 2025 - Jul 2025",
      location: "Kolkata, India",
      description:
        "Worked on ML project using pyhton , COCO dataset , YOLO V5 & V8 model.",
    },
    {
      role: "Frontend Developer Intern",
      company: "PearlThoughts Pvt. Ltd.",
      duration: "Jul 2025 - Aug 2025",
      location: "Remote",
      description:
        "Built and optimized user-friendly web pages for doctor and patient onboarding using React.js, Next.js, and Tailwind CSS.",
    }
  ];

  return (
    <div className="h-screen flex relative overflow-hidden">
      <Sidebar />

      <div className="flex-1 bg-amber-50 flex flex-col items-center justify-start p-10 overflow-y-auto">
        <div className="max-w-4xl w-full">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-8 text-blue-800">My Experience</h2>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition duration-300"
              >
                {/* Role & Company */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-1 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-blue-700" />
                  {exp.role}
                </h3>
                <p className="text-lg font-medium text-blue-600 mb-3">
                  {exp.company}
                </p>

                {/* Duration & Location */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
