import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealDetailsPage = () => {
  const { mealId } = useParams();  // Get the mealId from the URL
  const [meal, setMeal] = useState(null);  // State to hold the meal details

  // Fetch meal details when component loads
  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        setMeal(data.meals[0]);  // Set the first meal object (the API returns an array)
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    fetchMealDetails();
  }, [mealId]);  // Re-run when mealId changes

  if (!meal) {
    return <p>Loading...</p>;
  }

  return (
    <div className="meal-details">
      <h2 className="text-3xl font-bold my-4">{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-96 my-4" />
      <p className="text-lg">{meal.strInstructions}</p>
      <ul className="my-4">
        <h3 className="text-2xl font-bold">Ingredients:</h3>
        {Array.from({ length: 20 }).map((_, index) => {
          const ingredient = meal[`strIngredient${index + 1}`];
          const measure = meal[`strMeasure${index + 1}`];
          return (
            ingredient && (
              <li key={index}>
                {ingredient} - {measure}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default MealDetailsPage;
