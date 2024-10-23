import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; // Add icons for the hamburger menu

const Navbar = ({ cartItemCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className='font-serif text-4xl text-white' style={{ textShadow: '3px 4px 5px pink' }}>Foodlie</h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-white text-3xl md:hidden" // Visible only on mobile (md:hidden)
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <Link
              to="/"
              className="text-white font-semibold hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="text-white font-semibold hover:text-yellow-300 transition duration-300"
            >
              Categories
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/cart"
              className="text-white font-semibold hover:text-yellow-300 transition duration-300"
            >
              Cart
              <FaShoppingCart className="inline-block ml-6" />
            </Link>
            <span className='absolute top-1/2 right-2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center transform -translate-y-1/2'>
              {cartItemCount}
            </span>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <li>
            <Link
              to="/"
              className="text-white font-semibold hover:text-yellow-300 transition duration-300"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="text-white font-semibold hover:text-yellow-300 transition duration-300"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Categories
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/cart"
              className="text-white font-semibold hover:text-yellow-300 transition duration-300"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Cart
              <FaShoppingCart className="inline-block ml-1" />
            </Link>
            <span className='absolute top-1/2 right-2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center transform -translate-y-1/2'>
              {cartItemCount}
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

