"use client";
import { useState } from "react";
import NavHead from "./NavHead";
import NavLogo from "./NavLogo";
import NavDropdownDesktop from "./NavDropdownDesktop";
import NavDropdownDesktop2 from "./NavDropdownDesktop2";
import NavDropdownMobile from "./NavDropdownMobile";
import NavDropdownMobile2 from "./NavDropdownMobile2";
import NavLinksDesktop from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";

const NavbarWithDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  return (
    <div>
      <NavHead />
      {/* Nav Links */}
      <nav className="text-[#00a24f] py-2">
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLogo />
            {/* Desktop Menu */}
            <div className="hidden md:flex  font-bold tracking-wider">
              <NavLinksDesktop href="/" text="Home" />
              <NavLinksDesktop href="/about" text="About" />

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
                    <NavDropdownDesktop href="/" text="Residential" />
                    <NavDropdownDesktop href="/" text="Commercial" />
                    <NavDropdownDesktop href="/" text="Interior" />
                  </div>
                )}
              </div>
              {/* Dropdown Menu Gallery*/}
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
                    <NavDropdownDesktop2 href="/" text="Duplex Home" />
                    <NavDropdownDesktop2 href="/" text="Interior Design" />
                    <NavDropdownDesktop2 href="/" text="Park/Resort Design" />
                    <NavDropdownDesktop2 href="/" text="4 Storied Building" />
                  </div>
                )}
              </div>
              <NavLinksDesktop href="/services" text="Services" />
              <NavLinksDesktop href="/contact" text="Contact" />
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#00a24f] border p-1 mr-1 rounded-md"
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
          <div className="md:hidden font-bold tracking-wider">
            <div className="space-y-2 py-4 px-6 mobileNavMenubar">
              <NavLinksMobile href="/" text="Home" />
              <NavLinksMobile href="/about" text="About" />

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
                    <NavDropdownMobile href="/" text="Residential" />
                    <NavDropdownMobile href="/" text="Commercial" />
                    <NavDropdownMobile href="/" text="Interior" />
                  </div>
                )}
              </div>
              {/* Mobile Dropdown Menu Gallery */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                  className="block w-full text-left px-4 py-2 text-sm linkDropdownText"
                >
                  Gallery <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen2 && (
                  <div className="pl-4">
                    <NavDropdownMobile2 href="/" text="Duplex Home" />
                    <NavDropdownMobile2 href="/" text="Interior Design" />
                    <NavDropdownMobile2 href="/" text="Park/Resort Design" />
                    <NavDropdownMobile2 href="/" text="4 Storied Building" />
                  </div>
                )}
              </div>
              <NavLinksMobile href="/services" text="Services" />
              <NavLinksMobile href="/contact" text="Contact" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarWithDropdown;
