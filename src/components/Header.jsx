import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#222324] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        
        <div className="flex justify-between space-x-4">
          <Image
          className="rounded-lg bg-gray-400"
            src="/file.svg"
            alt="Logo"
            height={30}
            width={30}
          />
          <h1 className=" font-normal text-lg leading-4 font-serif">IN PURSUIT</h1>
        </div>

        <p className="mt-4 text-center text-lg font-serif font-normal leading-8 text-[#fff] ">
          Known by Him, known for Him and making Him known
        </p>

        <nav className="mt-6">
          <ul className="flex space-x-8 text-sm uppercase">
            <li className="hover:text-gray-400">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/appstore">App Store</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
