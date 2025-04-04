import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-linear-to-bl from-gray-1 to-gray-2 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="text-white text-2xl hover:text-celeste transition-colors duration-300 ease-in-out transform">
  <Link to="/">Pierluigi Papa</Link>
</div>


        <div className="md:hidden relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="text-white p-2"
          >
            <Menu size={24} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 divide-y bg-linear-to-bl from-gray-1 to-gray-2 divide-gray-100 rounded-lg shadow-lg">
              <ul className="py-2 text-sm text-white">
                <li>
                  <Link to="/" className="block px-4 py-2 hover:text-celeste transition-colors duration-300 ease-in-out transform">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/chisono" className="block px-4 py-2 hover:text-celeste transition-colors duration-300 ease-in-out transform">
                    Chi sono
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="block px-4 py-2 hover:text-celeste transition-colors duration-300 ease-in-out transform">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/progetti" className="block px-4 py-2 hover:text-celeste transition-colors duration-300 ease-in-out transform">
                    Progetti
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="hidden md:block md:w-auto">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-white md:p-0 md:hover:text-celeste transition-colors duration-300 ease-in-out transform">
                Home
              </Link>
            </li>
            <li>
              <Link to="/chi-sono" className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-celeste transition-colors duration-300 ease-in-out transform md:p-0">
                Chi sono
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-celeste transition-colors duration-300 ease-in-out transform md:p-0">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/progetti" className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-celeste transition-colors duration-300 ease-in-out transform md:p-0">
                Progetti
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
