import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/pudieswana-logo.png"
            alt="Pudieswana"
            className="h-8 w-8 object-contain"
          />
          <h1 className="text-xl font-bold text-purple-500">
            Pudieswana Engineering & Mining
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-400">
            About
          </Link>
          <Link to="/services" className="hover:text-green-400">
            Services
          </Link>
          <Link to="/projects" className="hover:text-green-400">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-green-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <Link
            to="/"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
