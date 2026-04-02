import { useState } from "react";

const Navbar = ({ cart = [] }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const navItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  const toggleMobileMenu = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="text-white bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="logo">
          <h1 className="text-2xl font-bold text-purple-500">
            Digi<span className="text-white">Tools</span>
          </h1>
        </div>

        <div className="hidden gap-6 font-medium text-gray-300 md:flex">
          {navItems.map((link) => (
            <a key={link} href="#" className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-xl cursor-pointer bg-transparent border-none">
            <span role="img" aria-label="cart">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </button>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-300 hover:text-white px-2">Login</button>
            <button className="px-4 py-2 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>

          <button
            className="text-2xl md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={isNavOpen}
          >
            {isNavOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isNavOpen && (
        <div className="flex flex-col gap-4 px-6 pb-4 text-gray-300 md:hidden bg-gray-900">
          {navItems.map((link) => (
            <a key={link} href="#" className="hover:text-white py-1">
              {link}
            </a>
          ))}
          <hr className="border-gray-700" />
          <button className="text-left hover:text-white py-1">Login</button>
          <button className="px-4 py-2 text-white bg-purple-600 rounded-full w-fit hover:bg-purple-700">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;