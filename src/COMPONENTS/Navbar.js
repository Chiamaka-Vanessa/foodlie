import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="bg-blue-700 p-4 shadow-lg">
      <ul className="flex justify-between items-center space-x-10">
      <h1 className='font-serif text-4xl text-white' style={{ textShadow: '3px 4px 5px pink' }}>Foodlie</h1>

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
            className="text-white font-semibold hover:text-yellow-300 transition duration-300 "
          >
            Cart
            <FaShoppingCart />
          </Link>
          <span className='absolute top-1/5 right-2/3 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>
            {cartItemCount}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
