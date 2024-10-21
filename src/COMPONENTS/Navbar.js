import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
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
        <li>
          <Link
            to="/cart"
            className="text-white font-semibold hover:text-yellow-300 transition duration-300"
          >
            Cart
          </Link>
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
