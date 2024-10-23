import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-300 text-blue-500 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Recipes Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recipes</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-white">Easy Meals</a></li>
            <li><a href="#" className="text-white hover:text-white">Healthy Recipes</a></li>
            <li><a href="#" className="text-white hover:text-white">Vegetarian Dishes</a></li>
            <li><a href="#" className="text-white hover:text-white">Desserts</a></li>
          </ul>
        </div>

        {/* Nutrition Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Nutrition Info</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-white">Calorie Guides</a></li>
            <li><a href="#" className="text-white hover:text-white">Vitamins & Supplements</a></li>
            <li><a href="#" className="text-white hover:text-white">Balanced Diet Tips</a></li>
            <li><a href="#" className="text-white hover:text-white">Nutritional Myths</a></li>
          </ul>
        </div>

        {/* Food Blogs Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Food Blogs</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-white">Top Chefs</a></li>
            <li><a href="#" className="text-white hover:text-white">Kitchen Tips</a></li>
            <li><a href="#" className="text-white hover:text-white">Trending Recipes</a></li>
            <li><a href="#" className="text-white hover:text-white">Food Photography</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-red-500">
        <hr className="border-gray-600 my-4" />
        <p>&copy; {new Date().getFullYear()} Foodlie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
