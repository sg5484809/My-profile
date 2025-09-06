"use client";
import Image from "next/image";
import Sidebar from "./components/Sidebar";



export default function Home() {
  return (
    <div className="h-screen flex relative overflow-hidden">
      <Sidebar/>
      <div className="flex-1 bg-amber-50 relative z-20 flex items-center justify-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-500">
              Hello, I’m <span className="text-blue-800">Souvik</span>
            </h2>
            <p className="text-gray-700 mb-6">
              I’m a Freelance <span className="font-semibold">Web Designer , Developer </span> 
              and <span className="font-semibold"> Programmer</span>. I strive to build 
              immersive and beautiful web applications through carefully crafted code 
              and user-centric design.
            </p>
            <button className="px-6 py-3 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-900">
              Say Hello!
            </button>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-blue-200">
              <Image
                src="/my_photo.jpg"
                alt="Profile"
                width={350}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
