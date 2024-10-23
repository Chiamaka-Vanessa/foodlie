import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const data = await response.json();
      setCategories(data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Food Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            key={category.idCategory}
            to={`/category/${category.strCategory}`}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl "
          >
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="w-40 h-40 object-cover mb-4"
            />
            <p className="text-lg font-bold text-gray-800 text-center mb-10">
              {category.strCategory}
            </p>
            <p className="text-gray-600 text-sm text-center mb-4">
              {category.strCategoryDescription.slice(0, 100)}...
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
