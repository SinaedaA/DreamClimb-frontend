"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  // State for menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // ref to menu for click outside detection

  // Handler function to toggle menu
  function toggleMenu() {
    setMenuOpen(!menuOpen); // flip to true / false depending on state
  }

  // Listen for clicks outside of the menu, to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // close menu if click is outside
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Cleanup: remove listener when component unmounts or menu closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])
    
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* make a big banner section with the menu button, then logo, then title */}
      <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <span className="text-xl font-bold text-gray-800">DreamClimb</span>
            </div>
            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded">
              <RxHamburgerMenu size={30} color="black"/>
            </button>
          </div>
      </header>
      
        <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-left">
          {/* Use state and handlers here */}
            {/* Conditionally render menu based on state */}
            {menuOpen && (
              <div ref = {menuRef} className="absolute top-16 right-4 bg-black rounded p-4">
                <a href="/explore" className="block px-4 py-2 hover:bg-gray-500 rounded">🧗 Explore Boulders</a>
                <a href="/about" className="block px-4 py-2 hover:bg-gray-500 rounded">📖 About</a>
                <a href="/contact" className="block px-4 py-2 hover:bg-gray-500 rounded">✉️ Contact</a>
              </div>
            )}
            {/* Logo and Title */}
            <h1 className="text-4xl font-bold mt-4">Welcome to DreamClimb</h1>
      </div>
      {/* Hero Section */}
          <p className="text-xl text-gray-600 mb-8">
            Find the perfect boulder for you in Fontainebleau !
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <a href="/explore" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">🧗 Explore Boulders</h2>
            <p className="text-gray-600">Filter by sector, grade, and style</p>
          </a>

          <a href="/about" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">📖 About</h2>
            <p className="text-gray-600">Learn about the project</p>
          </a>

          <a href="/contact" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">✉️ Contact</h2>
            <p className="text-gray-600">Get in touch</p>
          </a>

        </div>
      </div>
    </div>
  );
}