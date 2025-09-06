"use client";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 text-3xl z-50 text-blue-800"
        >
          <HiMenuAlt3 />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white p-6 transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      > 
        <Link href="/">
          <h1 className="text-2xl font-bold mb-6">Souvik</h1>
        </Link>
        <nav>
          <ul className="space-y-4">
            <li className="hover:text-blue-800 cursor-pointer hover:bg-amber-50">
              <Link href="/about">About Me</Link>
            </li> 
            <li className="hover:text-blue-800 cursor-pointer hover:bg-amber-50">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-blue-800 cursor-pointer hover:bg-amber-50">
              <Link href="/experience">Experience</Link>
            </li>
            <li className="hover:text-blue-800 cursor-pointer hover:bg-amber-50">
              <Link href="/hire_me">Hire me</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(229,231,235,0.3)] bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
