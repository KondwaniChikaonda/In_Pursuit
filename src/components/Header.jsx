import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#222324] text-white py-1">
      <div className="container mx-auto flex flex-col items-center px-4">
        
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
          Known by Him, known for Him and making Him known
        </p>

        {/* Navigation Section */}
        <nav className="mt-6">
          <ul className="flex space-x-8 text-sm uppercase font-medium">
            <li className="hover:text-gray-400 transition-all duration-200 ease-in-out">
              <Link href="/about">About</Link>
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
