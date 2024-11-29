import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#222324] text-white py-6">
      <div className="container mx-auto text-center md:text-left">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">IN PURSUIT</h2>
            <p className="mt-2 text-gray-400">
              Known by Him, known for Him, and making Him known.
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 IN PURSUIT. All rights reserved.
          </p>
          <nav className="flex space-x-4 text-sm mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
