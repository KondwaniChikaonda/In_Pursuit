import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#222324] text-white py-1">
      <div className="container mx-auto flex flex-col items-center px-4">
        
<<<<<<< HEAD
        <div className="flex justify-between space-x-4 items-center gap-5">
          <Image
          className="rounded-full bg-white"
            src=""
            alt="Logo"
            height={100}
            width={100}
          />
          <h1 className=" font-bold text-6xl leading-4 font-sans">IN PURSUIT</h1>
        </div>

        <p className="mt-4 text-center text-2xl font-serif font-normal leading-8 text-[#fff] ">
=======
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex justify-center items-center bg-gray-400 rounded-full p-2 hover:bg-gray-500 transition-all duration-200 ease-in-out">
            <Image
              className="rounded-full"
              src="/file.svg"
              alt="Logo"
              height={50}  // Increased size for visibility
              width={50}   // Increased size for visibility
            />
          </div>
          <h1 className="text-3xl font-serif font-semibold text-gray-100 hover:text-gray-300 transition-all duration-200 ease-in-out">
            IN PURSUIT
          </h1>
        </div>

        {/* Tagline Section */}
        <p className="mt-4 text-center text-lg font-serif font-normal leading-8 text-[#fff] opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out">
>>>>>>> cb32577a5e3bab6e1741cd927e7ea17f1785564e
          Known by Him, known for Him and making Him known
        </p>

        {/* Navigation Section */}
        <nav className="mt-6">
<<<<<<< HEAD
          <ul className="flex space-x-8 text-sm uppercase">
            <li className="hover:text-gray-400">
              <Link href="/">About</Link>
=======
          <ul className="flex space-x-8 text-sm uppercase font-medium">
            <li className="hover:text-gray-400 transition-all duration-200 ease-in-out">
              <Link href="/about">About</Link>
>>>>>>> cb32577a5e3bab6e1741cd927e7ea17f1785564e
            </li>
            <li className="hover:text-gray-400 transition-all duration-200 ease-in-out">
              <Link href="/appstore">App Store</Link>
            </li>
            <li className="hover:text-gray-400 transition-all duration-200 ease-in-out">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-gray-400 transition-all duration-200 ease-in-out">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
