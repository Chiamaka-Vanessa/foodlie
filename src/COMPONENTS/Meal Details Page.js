// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const MealDetailsPage = ({ addToCart }) => {
//   const { mealId } = useParams();
//   const [meal, setMeal] = useState(null);

//   useEffect(() => {
//     const fetchMealDetails = async () => {
//       const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
//       );
//       const data = await response.json();
//       setMeal(data.meals[0]);
//     };

//     fetchMealDetails();
//   }, [mealId]);

//   // Helper function to get ingredients and measurements
//   const getIngredients = (meal) => {
//     const ingredients = [];
//     for (let i = 1; i <= 20; i++) {
//       const ingredient = meal[`strIngredient${i}`];
//       const measure = meal[`strMeasure${i}`];
//       if (ingredient && ingredient.trim()) {
//         ingredients.push(`${measure} ${ingredient}`);
//       }
//     }
//     return ingredients;
//   };

//   if (!meal) return <p>Loading...</p>;

//   const ingredients = getIngredients(meal); // Get the ingredients from the meal

//   const pricesList = [
//     34, 50, 90, 40, 110, 130, 324, 150, 320, 
//     34, 50, 90, 40, 110, 130, 324, 150, 320,
//     34, 50, 90, 40, 110, 130, 324, 150, 320,
//   ];
//   //   { idMeal: '52772', price: 45 },
//   //   { idMeal: '52773', price: 175 },
//   //   { idMeal: '52774', price: 145 },
//   //   { idMeal: '52775', price: 102 },
//   //   { idMeal: '52776', price: 75 },
//   //   { idMeal: '52777', price: 200 },
//   //   { idMeal: '52778', price: 130 },
//   //   { idMeal: '52779', price: 190 },
//   //   { idMeal: '52780', price: 124 },
//   //   { idMeal: '52781', price: 222 },
//   //   { idMeal: '52782', price: 75 },
//   //   { idMeal: '52783', price: 89 },
//   //   { idMeal: '52784', price: 100 },
//   //   { idMeal: '52785', price: 68 },
//   //   { idMeal: '52786', price: 150 },
//   //   { idMeal: '52787', price: 160 },
//   //   { idMeal: '52788', price: 99 },
//   //   { idMeal: '52789', price: 250 },
//   //   { idMeal: '52790', price: 110 },
//   //   { idMeal: '52791', price: 210 },
//   //   { idMeal: '52792', price: 95 },
//   //   { idMeal: '52793', price: 140 },
//   //   { idMeal: '52794', price: 80 },
//   //   { idMeal: '52795', price: 125 },
//   //   { idMeal: '52796', price: 135 },
//   // ];

//   return (
// //     <div className="meal-details p-4">
// //       <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
// //       <img
// //   src={meal.strMealThumb}
// //   alt={meal.strMeal}
// //   className="my-4 rounded-lg shadow-md max-w-xs w-full drop-shadow-sm drop-shadow-[0_80px_30px_#0007] "
// // />

// //       <p className="text-lg mb-4">{meal.strInstructions}</p>

// //       {/* Display ingredients */}
// //       <h2 className="text-2xl font-semibold mb-3">Ingredients:</h2>
// //       <ul className="list-disc list-inside">
// //         {ingredients.map((ingredient, index) => (
// //           <li key={index}>{ingredient}</li>
// //         ))}
// //       </ul>

// //       {/* Add to Cart Button */}
// //       <button
// //         onClick={() => addToCart(mealId)}
// //         className="bg-blue-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-yellow-300"
// //       >
// //         Add to Cart
// //       </button>
// //     </div>




//      <div className="meal-details p-4">
//      <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image my-4 rounded-lg shadow-md max-w-xs w-full drop-shadow-sm drop-shadow[0 80px 30px #0007]" />
//       <h1>${pricesList}</h1>
//      <div className="meal-info">
//        <h2 className="font-extrabold text-2xl">{meal.strMeal}</h2>
//        <p className="text-serif">{meal.strInstructions}</p>

//        {/* Display ingredients */}
//       <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
//       <ul className="list-disc list-inside ">
//         {ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient}</li>
     
//     ))}
//      </ul>
//        {/* Add to Cart Button */}
//        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-yellow-300" onClick={() => addToCart(meal)}>
        
//          Add to Cart
//        </button>

       
//        </div>
//        </div>
//   );
// };

// export default MealDetailsPage;



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const MealDetailsPage = ({ addToCart }) => {
//   const { mealId } = useParams();
//   const [meal, setMeal] = useState(null);
//   const [price, setPrice] = useState(0);

//   const pricesList = [
//     34, 50, 90, 40, 110, 130, 324, 150, 320, 
//     34, 50, 90, 40, 110, 130, 324, 150, 320,
//     34, 50, 90, 40, 110, 130, 324, 150, 320,
//   ];

//   useEffect(() => {
//     const fetchMealDetails = async () => {
//       const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
//       );
//       const data = await response.json();
//       const fetchedMeal = data.meals[0];
//       setMeal(fetchedMeal);

//       // Calculate price using the index of the mealId (or a fallback random price)
//       const mealIndex = parseInt(mealId) % pricesList.length; // Ensure within bounds
//       setPrice(pricesList[mealIndex]);
//     };

//     fetchMealDetails();
//   }, [mealId]);

//   // Helper function to get ingredients and measurements
//   const getIngredients = (meal) => {
//     const ingredients = [];
//     for (let i = 1; i <= 20; i++) {
//       const ingredient = meal[`strIngredient${i}`];
//       const measure = meal[`strMeasure${i}`];
//       if (ingredient && ingredient.trim()) {
//         ingredients.push(`${measure} ${ingredient}`);
//       }
//     }
//     return ingredients;
//   };

//   if (!meal) return <p>Loading...</p>;

//   const ingredients = getIngredients(meal);

//   return (
//     <div className="meal-details p-4">
//       <img
//         src={meal.strMealThumb}
//         alt={meal.strMeal}
//         className="meal-image my-4 rounded-lg shadow-md max-w-xs w-full drop-shadow-sm drop-shadow[0 80px 30px #0007]"
//       />
//       <h1 className="text-3xl font-bold mb-2">{meal.strMeal}</h1>
//       <h2 className="text-xl text-green-600 font-bold">Price: ${price}</h2>
//       <p className="text-serif">{meal.strInstructions}</p>

//       {/* Display ingredients */}
//       <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
//       <ul className="list-disc list-inside">
//         {ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient}</li>
//         ))}
//       </ul>

//       {/* Add to Cart Button */}
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-yellow-300"
//         onClick={() => addToCart({ ...meal, price })}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default MealDetailsPage;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetailsPage = ({ addToCart }) => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);
  const [price, setPrice] = useState(0);

  const pricesList = [
    34, 50, 90, 40, 110, 130, 324, 150, 320,
    34, 50, 90, 40, 110, 130, 324, 150, 320,
    34, 50, 90, 40, 110, 130, 324, 150, 320,
  ];

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      const fetchedMeal = data.meals[0];
      setMeal(fetchedMeal);

      // Set price using the mealId index
      const mealIndex = parseInt(mealId) % pricesList.length;
      setPrice(pricesList[mealIndex]);
    };

    fetchMealDetails();
  }, [mealId]);

  // Extract ingredients
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

  const ingredients = getIngredients(meal);

  return (
    <div className="meal-details p-4">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="meal-image my-4 rounded-lg shadow-md max-w-xs w-full"
      />
      <h1 className="text-3xl font-bold mb-2">{meal.strMeal}</h1>
      <h2 className="text-xl text-green-600 font-bold">Price: ${price}</h2>
      <p className="text-serif">{meal.strInstructions}</p>

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Add to Cart Button */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-yellow-300"
        onClick={() => addToCart({ ...meal, price })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MealDetailsPage;
