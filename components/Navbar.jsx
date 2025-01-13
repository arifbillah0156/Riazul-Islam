"use client";
import Link from "next/link";
import { useState } from "react";
import architect from "@/public/Images/architect.gif";
import Image from "next/image";

const NavbarWithDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  return (
    <div>
      {/* Nav Links */}
      <nav className="text-[#00a24f] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="text-2xl">
                <Image
                  src={architect}
                  width={60}
                  alt="Architect"
                  className="rounded-full"
                  priority
                />
              </Link>
              <Link href="/">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
                  Riazul Islam
                </span>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex  font-bold tracking-wide">
              <Link href="/">
                <span className="linkDropdownMainText">Home</span>
              </Link>
              <Link href="/about">
                <span className="linkDropdownMainText">About</span>
              </Link>
              {/* Dropdown Menu */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <button className="linkDropdownMainText mt-[-6px]  mb-1">
                  Projects <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-[#00a24f] text-white ring-2 rounded-[6px] shadow-lg">
                    <Link href="/projects/residential">
                      <span className="block px-4 py-2 linkDropdownText">
                        Residential
                      </span>
                    </Link>
                    <Link href="/projects/commercial">
                      <span className="block px-4 py-2 linkDropdownText">
                        Commercial
                      </span>
                    </Link>
                    <Link href="/projects/interior">
                      <span className="block px-4 py-2 linkDropdownText">
                        Interior
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              {/* Dropdown Menu 2*/}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen2(true)}
                onMouseLeave={() => setIsDropdownOpen2(false)}
                onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
              >
                <button className="linkDropdownMainText mt-[-6px]  mb-1">
                  Gallery <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen2 && (
                  <div className="absolute bg-[#00a24f] text-white ring-2 rounded-[6px] shadow-lg w-max">
                    <Link href="/projects/residential">
                      <span className="block px-4 py-2 linkDropdownText">
                        Duplex Home
                      </span>
                    </Link>
                    <Link href="/projects/commercial">
                      <span className="block px-4 py-2 linkDropdownText">
                        Interior Design
                      </span>
                    </Link>
                    <Link href="/projects/interior">
                      <span className="block px-4 py-2 linkDropdownText">
                        Park/Resort Design
                      </span>
                    </Link>
                    <Link href="/projects/interior">
                      <span className="block px-4 py-2 linkDropdownText">
                        4 Storied Building
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/services">
                <span className="linkDropdownMainText">Services</span>
              </Link>
              <Link href="/contact">
                <span className="linkDropdownMainText">Contact</span>
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#00a24f] border p-1 rounded-md mr-3"
              >
                <svg
                  className="h-7 w-7"
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
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden font-bold tracking-wide">
            <div className="space-y-2 py-4 px-6 mobileNavMenubar">
              <Link href="/">
                <span className="block px-4 py-2 text-sm linkDropdownText">
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="block px-4 py-2 text-sm linkDropdownText">
                  About
                </span>
              </Link>
              {/* Mobile Dropdown Menu */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="block w-full text-left px-4 py-2 text-sm linkDropdownText"
                >
                  Projects <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="pl-4">
                    <Link href="/projects/residential">
                      <span className="block px-4 py-2 text-sm linkDropdownText_M">
                        Residential
                      </span>
                    </Link>
                    <Link href="/projects/commercial">
                      <span className="block px-4 py-2 text-sm linkDropdownText_M">
                        Commercial
                      </span>
                    </Link>
                    <Link href="/projects/interior">
                      <span className="block px-4 py-2 text-sm linkDropdownText_M">
                        Interior
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              {/* Mobile Dropdown Menu */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                  className="block w-full text-left px-4 py-2 text-sm linkDropdownText"
                >
                  Gallery <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen2 && (
                  <div className="pl-4">
                    <Link href="/projects/residential">
                      <span className="block px-4 py-2 text-sm linkDropdownText_M">
                        Duplex Home
                      </span>
                    </Link>
                    <Link href="/projects/commercial">
                      <span className="block px-4 py-2 text-sm linkDropdownText_M">
                        Interior Design
                      </span>
                    </Link>
                    <Link href="/projects/interior">
                      <span className="block px-4 py-2 text-sm linkDropdownText_M">
                        Park/Resort Design
                      </span>
                    </Link>
                    <Link href="/projects/interior">
                      <span className="block px-4 py-2 text-sm linkDropdownText_M">
                        4 Storied Building
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/services">
                <span className="block px-4 py-2 text-sm linkDropdownText">
                  Services
                </span>
              </Link>
              <Link href="/contact">
                <span className="block px-4 py-2 text-sm linkDropdownText">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>{" "}
      <hr />
    </div>
  );
};

export default NavbarWithDropdown;
