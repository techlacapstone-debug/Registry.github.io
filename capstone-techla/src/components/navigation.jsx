import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from '../assets/1napp.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 mb-[64px] px-[80px]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Namayan Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#about"
              className="text-gray-700 hover:text-blue-600 transition">
              About
            </a>
            <a
              href="#officials"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Officials
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-2">
          <a
            href="#about"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            About
          </a>
          <a
            href="#officials"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Officials
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
