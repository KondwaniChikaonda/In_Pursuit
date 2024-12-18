import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#222324] text-white py-10">
      <div className="container mx-auto flex flex-col items-center px-4">
        
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-4 mb-6 gap-6">
          <Image
              className=""
              src="/logo.png"
              alt="Logo"
              height={100}  
              width={600}  
            />
          
        </div>

        {/* Tagline Section */}
        <p className="mt-4 text-center text-3xl font-serif font-normal leading-8 text-white hover:opacity-100 transition-all duration-200 ease-in-out">
          Known by Him, known for Him and making Him known
        </p>

        {/* Navigation Section here */}
        <nav className="mt-6">
          <ul className="flex space-x-8 text-sm uppercase font-medium">
            <li className="hover:text-gray-400 transition-all duration-200 ease-in-out">
              <Link href="/">About</Link>
            </li>
            <li className="hover:text-gray-400 transition-all duration-200 ease-in-out">
              <Link href="/appstore">App Store</Link>
            </li>
            <li className="hover:text-gray-400 transition-all duration-200 ease-in-out">
              <Link href="/">Blog</Link>
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
