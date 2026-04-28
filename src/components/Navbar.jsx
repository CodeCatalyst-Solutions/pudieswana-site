import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-purple-500">
          Pudieswana
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Services</a>
          <a href="#" className="hover:text-green-400">Projects</a>
          <a href="#" className="hover:text-green-400">Contact</a>
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">
          Request Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <a href="#" className="block hover:text-green-400">Home</a>
          <a href="#" className="block hover:text-green-400">About</a>
          <a href="#" className="block hover:text-green-400">Services</a>
          <a href="#" className="block hover:text-green-400">Projects</a>
          <a href="#" className="block hover:text-green-400">Contact</a>
        </div>
      )}
    </nav>
  );
}