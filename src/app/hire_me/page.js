"use client";

import Sidebar from "../components/Sidebar";

export default function HireMe() {
  return (
    <div className="h-screen flex relative overflow-hidden">
      <Sidebar />

      <div className="flex-1 bg-amber-50 flex flex-col items-center justify-center p-10">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
            Hire Me
          </h2>

          <p className="text-gray-700 mb-6 text-center">
            I'm always excited to collaborate on new projects and opportunities!  
            If you’re looking for a passionate developer skilled in
            <span className="font-semibold"> React, Next.js, Tailwind CSS</span>, and
            <span className="font-semibold"> problem solving with C++/Python</span>,  
            let’s connect.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📧 <span className="font-semibold">Email:</span> souvikghosh7101@gmail.com
            </p>
            <p>
              📱 <span className="font-semibold">Phone:</span> +91 86375 18632
            </p>
            <p>
              🌐 <span className="font-semibold">Portfolio:</span>{" "}
              <a
                href="/My_CV.pdf"
                target="blank"
                className="text-blue-600 hover:underline"
              >
                View CV
              </a>
            </p>
            <p>
              💼 <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/souvik-ghosh-94374928a/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/myprofile
              </a>
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:yourmail@example.com"
              className="bg-blue-800 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              📩 Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
