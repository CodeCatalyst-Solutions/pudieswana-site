import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-gray-950/85 text-white shadow-md backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/pudieswana-logo.png"
            alt="Pudieswana"
            className="h-9 w-9 flex-none object-contain"
          />
          <span className="truncate text-lg font-bold text-purple-500 sm:text-xl">
            <span className="sm:hidden">Pudieswana</span>
            <span className="hidden sm:inline">
              Pudieswana Engineering & Mining
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-8 md:flex">
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
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-3 border-t border-white/10 px-6 pb-5 pt-4 text-left md:hidden">
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
