"use client";

import React from "react";
import architect from "@/public/Images/architect.gif";

// import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const images = [
    // "/1.jpeg",
    // "/2.jpeg",
    // "/3.jpeg",
    "/4.jpeg",
    // "/5.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div
      className="h-screen w-[100%] bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">
        <div className="text-center mt-[-30vh]">
          {/* auto type */}
          {/* <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            <h1>Hello Dear,</h1>
            <div className="text-yellow-500 text-2xl md:text-4xl">
              <Typewriter
                words={["I am Riazul Islam", "Architect Engineer"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div> */}
          {/*  */}
          <h1 className="mt-8 text-4xl md:text-6xl font-bold text-[#ffffff]">
            Studio Architect
          </h1>
          <br />
          <h3 className="text-xl md:text-4xl font-bold text-green-500 px-2 [text-shadow:_0_8px_8px_rgb(14_165_223_/_0.5)]">
            Best Building Design Architect In Bangladesh.
          </h3>
          <div className="mt-8 w-full flex justify-center">
            <Link
              href="/contact"
              className="ml-2 text-[22px] font-mono tracking-normal flex justify-center items-center gap-3 bg-green-700 w-max px-5 py-4 rounded-2xl hover:rounded-xl duration-75 hover:ring "
            >
              <Image
                src={architect}
                width={50}
                alt="Architect"
                className="rounded-full"
                priority
              />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
