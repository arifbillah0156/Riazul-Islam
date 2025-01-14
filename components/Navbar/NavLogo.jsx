import Image from "next/image";
import Link from "next/link";
import studioArch from "@/public/Images/Studio Architect.jpeg";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/" className="text-2xl">
        <Image
          src={studioArch}
          width={90}
          alt="Studio Architect"
          className=""
          priority
        />
      </Link>
      <Link href="/">
        <p className="text-xl md:text-2xl font-bold text-[#00A24F] animate-bounce mt-1 mr-1">
          Studio Architect
        </p>
      </Link>
      {/* text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
    </div>
  );
};

export default NavLogo;
