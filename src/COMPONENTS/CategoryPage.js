import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category name from URL
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      const data = await response.json();
      setMeals(data.meals);
    };

    fetchMeals();
  }, [categoryName]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 my-10">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="meal-item">
          <Link to={`/meal/${meal.idMeal}`}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-48 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <h3 className="text-center text-lg font-semibold mt-4">
              {meal.strMeal}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
