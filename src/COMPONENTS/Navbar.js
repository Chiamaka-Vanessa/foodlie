import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-lg flex justify-between items-center">
      <ul className="flex justify-between items-center space-x-10">
        <li>
          <Link
            to="/"
            className="text-white font-semibold  hover:text-yellow-300 transition duration-300"
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
    className="text-white font-semibold hover:text-yellow-300 transition duration-300 flex items-center justify-end" // Using Flexbox here
    style={{ position: 'relative', paddingRight: '40px' }} // Add padding to prevent overlap with the cart count
  >
    Cart
    <FaShoppingCart className="ml-2" /> {/* Space between the Cart text and icon */}
  </Link>
  <span
    className="absolute top-0 right-0 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center"
    style={{ transform: 'translateX(50%)' }} // Moves the cart count further to the right
  >
    0
  </span>
</li>

        <li>
          <Link
            to="/order"
            className="text-white font-semibold hover:text-yellow-300 transition duration-300"
          >
            Order
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
