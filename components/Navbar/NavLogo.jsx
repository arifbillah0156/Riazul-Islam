import Image from "next/image";
import Link from "next/link";
import studioArch from "@/public/Images/Studio Architect.jpeg";
import { Typewriter } from "react-simple-typewriter";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="text-2xl">
        <Image
          src={studioArch}
          width={80}
          alt="Studio Architect"
          className=""
          priority
        />
      </Link>
      <Link href="/">
        <div className="text-xl md:text-2xl font-bold text-[#00A24F] mt-1 mr-1">
          <Typewriter
            words={["Studio Architect"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </Link>
      {/* text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
    </div>
  );
};

export default NavLogo;
