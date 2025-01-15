"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/public/1.jpeg";
import img2 from "@/public/2.jpeg";
import img3 from "@/public/3.jpeg";

const HomeSection2 = () => {
  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    const totalImg = [
      {
        imgUrl: img1,
        imgTxt: "Modern Duplex House",
      },
      {
        imgUrl: img2,
        imgTxt: "Residential High-rise Building",
      },
      {
        imgUrl: img3,
        imgTxt: "Residential 4-Story Building",
      },
    ];
    setImgData(totalImg);
  }, []);

  return (
    <div>
      <div>
        <div className="mt-8 md:mt-16 mb-2 text-center">
          <h1 className="text-3xl md:text-5xl  textGradient font-bold tracking-wide ">
            A Full Service Experience
          </h1>
        </div>
        {/*  */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {imgData
            ? imgData.map((img) => {
                return (
                  <div
                    key={img.imgTxt}
                    className="bg-gray-200 rounded-lg shadow p-2 text-center textGradient"
                  >
                    <Image
                      src={img.imgUrl}
                      alt="Image"
                      placeholder="blur"
                      className="h-[300px]"
                    />
                    <p className="text-2xl mt-3 mb-2">{img.imgTxt}</p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
