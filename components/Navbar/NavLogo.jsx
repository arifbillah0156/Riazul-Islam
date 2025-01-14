import Image from "next/image";
import Link from "next/link";
import architect from "@/public/Images/architect.gif";

const NavLogo = () => {
  return (
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
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce">
          Riazul Islam
        </p>
      </Link>
    </div>
  );
};

export default NavLogo;
