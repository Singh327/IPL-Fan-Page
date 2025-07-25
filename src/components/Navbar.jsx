import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Players", path: "/players" },
    { name: "Schedule", path: "/schedule" },
    { name: "Stats", path: "/stats" },
    { name: "News", path: "/news" },
    { name: "Fan Zone", path: "/fanzone" },
  ];

  return (
      <nav
      className={`w-full py-2 px-6 fixed top-0 left-0 z-50 transition-all duration-700 ease-in-out shadow-md ${
        darkMode
          ? "bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-white"
          : "bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 ${
            darkMode ? "text-violet-500" : "text-blue-900"
          }`}
        >
          🦁 CSK Fan Hub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-semibold transition-colors duration-300 ${
                  darkMode
                    ? isActive
                      ? "underline text-white"
                      : "text-violet-300"
                    : isActive
                    ? "underline text-gray-950"
                    : "text-blue-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded-md font-medium border transition-all duration-300 hover:scale-105
              border-current text-sm"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            darkMode ? "text-white" : "text-blue-900"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`md:hidden px-6 pb-4 flex flex-col space-y-3 transition-all duration-300 ${
            darkMode ? "bg-[#1e1e1e]" : "bg-yellow-300"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block font-semibold transition-colors duration-300 ${
                  darkMode
                    ? isActive
                      ? "underline text-white"
                      : "text-violet-300"
                    : isActive
                    ? "underline text-black"
                    : "text-blue-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Theme Toggle inside Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 w-fit px-3 py-1 rounded-md font-medium border border-current text-sm self-end"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
