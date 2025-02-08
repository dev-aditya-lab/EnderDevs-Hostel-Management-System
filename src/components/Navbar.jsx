import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border border-b w-full z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 md:py-4">
        {/* Logo */}
        <a href="#" className="text-black text-xl md:text-2xl font-bold hover:text-[#FED5E3] transition-colors flex items-center">Ender Devs</a>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none transition-transform duration-300 flex items-center"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-black hover:text-[#FED5E3] transition-colors">Home</a>
          <a href="#how-it-works" className="text-black hover:text-[#FED5E3] transition-colors">How It Works</a>
          <a href="#features" className="text-black hover:text-[#FED5E3] transition-colors">Features</a>
          <a href="#pricing" className="text-black hover:text-[#FED5E3] transition-colors">Pricing</a>
          <a href="#contact" className="text-black hover:text-[#FED5E3] transition-colors">Contact Us</a>
        </div>

        {/* Login / Sign Up */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#login" className="text-black hover:text-[#FED5E3] transition-colors">Login</a>
          <a href="#signup" className="bg-[#FED5E3] text-black px-4 py-2 rounded-lg hover:bg-[#BFF5DC] transition-all">Sign Up</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md py-2 px-6 transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <a href="#home" className="block text-black py-2 hover:text-[#FED5E3] transition-colors">Home</a>
        <a href="#how-it-works" className="block text-black py-2 hover:text-[#FED5E3] transition-colors">How It Works</a>
        <a href="#features" className="block text-black py-2 hover:text-[#FED5E3] transition-colors">Features</a>
        <a href="#pricing" className="block text-black py-2 hover:text-[#FED5E3] transition-colors">Pricing</a>
        <a href="#contact" className="block text-black py-2 hover:text-[#FED5E3] transition-colors">Contact Us</a>
        <hr className="my-2" />
        <a href="#login" className="block text-black py-2 hover:text-[#FED5E3] transition-colors">Login</a>
        <a href="#signup" className="block text-black py-2 bg-[#FED5E3] rounded-lg text-center hover:bg-[#BFF5DC] transition-all">Sign Up</a>
      </div>
    </nav>
  );
}
