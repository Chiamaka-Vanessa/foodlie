// src/components/ATC.jsx
// src/components/ATC.jsx
// src/components/ATC.jsx
// src/components/ATC.jsx
// src/components/ATC.jsx
import React, { useState } from "react";
import Cart from "./Cart"; // Ensure the path is correct

const ATC = () => {
  const [cartItems, setCartItems] = useState([]);

  const meal = {
    idMeal: "52772",
    strMeal: "Pizza",
    strMealThumb: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    price: 10, // Static price for each meal
  };

  const addToCart = (meal) => {
    const existingItem = cartItems.find((item) => item.idMeal === meal.idMeal);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.idMeal === meal.idMeal
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...meal, quantity: 1 }]);
    }
  };

  const removeFromCart = (idMeal) => {
    setCartItems(cartItems.filter((item) => item.idMeal !== idMeal));
  };

  const updateCartItemQuantity = (idMeal, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCartItems(
      cartItems.map((item) =>
        item.idMeal === idMeal ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div>
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "150px" }} />
      <p>Price: ${meal.price}</p>
      <button onClick={() => addToCart(meal)}>Add to Cart</button>

      {/* Render Cart directly here, passing cartItems and related functions */}
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateCartItemQuantity={updateCartItemQuantity}
      />
    </div>
  );
};

export default ATC;

