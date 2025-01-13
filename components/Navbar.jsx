"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-yellow-400">
                Riazul Islam
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/">
              <span className="hover:text-yellow-400">Home</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-yellow-400">About</span>
            </Link>
            <Link href="/projects">
              <span className="hover:text-yellow-400">Projects</span>
            </Link>
            <Link href="/services">
              <span className="hover:text-yellow-400">Services</span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-yellow-400">Contact</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="space-y-2 py-4">
            <Link href="/">
              <span className="block px-4 py-2 text-sm hover:bg-gray-600">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="block px-4 py-2 text-sm hover:bg-gray-600">
                About
              </span>
            </Link>
            <Link href="/projects">
              <span className="block px-4 py-2 text-sm hover:bg-gray-600">
                Projects
              </span>
            </Link>
            <Link href="/services">
              <span className="block px-4 py-2 text-sm hover:bg-gray-600">
                Services
              </span>
            </Link>
            <Link href="/contact">
              <span className="block px-4 py-2 text-sm hover:bg-gray-600">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
