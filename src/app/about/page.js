"use client";

import Sidebar from "../components/Sidebar";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      name: "React.js",
      icon: "/icons/react.png", 
    },
    {
      name: "Next.js",
      icon: "/icons/next.png", 
    },
    {
      name: "Tailwind CSS",
      icon: "/icons/Tailwind.png", 
    },
    {
      name: "C++",
      icon: "/icons/Cpp.png", 
    },
    {
      name: "Python",
      icon: "/icons/python.png", 
    },
    {
      name: "VLSI Design",
      icon: "/icons/cadence.jpg",
    }
  ];

  return (
    <div className="h-screen flex relative overflow-hidden">
      <Sidebar />

      <div className="flex-1 bg-amber-50 flex flex-col items-center justify-start p-10 overflow-y-auto">
        <div className="max-w-3xl w-full">
          {/* About Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">About Me</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I am currently pursuing{" "}
              <span className="font-semibold">
                B.Tech in Electronics and Communication Engineering (ECE)
              </span>{" "}
              at{" "}
              <span className="font-semibold">
                University Of Engineering and Management, Kolkata
              </span>. 
              Now I am in{" "} 
              <span className="font-semibold">
                3rd year 
              </span>{" "}
              and{" "}
              <span className="font-semibold">
                CGPA is 8.8.
              </span>
            </p>
          </div>

          {/* Hobbies Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">🎯 Hobbies</h3>
            <p className="text-gray-700 leading-relaxed">
              I love <span className="font-semibold">coding</span>, exploring
              <span className="font-semibold"> new technologies</span>, and playing
              <span className="font-semibold"> cricket</span>.
            </p>
          </div>

          {/* Skills Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">⚡ Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((v, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 relative mb-2">
                    <Image
                      src={v.icon}
                      alt={v.name}
                      width={64}
                      height={64}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-gray-700 font-medium">{v.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
