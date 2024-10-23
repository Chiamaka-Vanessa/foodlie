import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetailsPage = ({ addToCart }) => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      setMeal(data.meals[0]);
    };

    fetchMealDetails();
  }, [mealId]);

  // Helper function to get ingredients and measurements
  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  if (!meal) return <p>Loading...</p>;

  const ingredients = getIngredients(meal); // Get the ingredients from the meal

  return (
//     <div className="meal-details p-4">
//       <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
//       <img
//   src={meal.strMealThumb}
//   alt={meal.strMeal}
//   className="my-4 rounded-lg shadow-md max-w-xs w-full drop-shadow-sm drop-shadow-[0_80px_30px_#0007] "
// />

//       <p className="text-lg mb-4">{meal.strInstructions}</p>

//       {/* Display ingredients */}
//       <h2 className="text-2xl font-semibold mb-3">Ingredients:</h2>
//       <ul className="list-disc list-inside">
//         {ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient}</li>
//         ))}
//       </ul>

//       {/* Add to Cart Button */}
//       <button
//         onClick={() => addToCart(mealId)}
//         className="bg-blue-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-yellow-300"
//       >
//         Add to Cart
//       </button>
//     </div>




     <div className="meal-details p-4">
     <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image my-4 rounded-lg shadow-md max-w-xs w-full drop-shadow-sm drop-shadow[0 80px 30px #0007]" />
     <div className="meal-info">
       <h2>{meal.strMeal}</h2>
       <p className="text-serif">{meal.strInstructions}</p>

       {/* Display ingredients */}
      <h2 className="text-2xl font-semibold mb-3"></h2>
      <ul className="list-disc list-inside ">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
     
    ))}
     </ul>
       {/* Add to Cart Button */}
       <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-yellow-300" onClick={() => addToCart(meal)}>
        
         Add to Cart
       </button>

       
       </div>
       </div>
  );
};

export default MealDetailsPage;
