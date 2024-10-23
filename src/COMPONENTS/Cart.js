import { useState } from "react";
import Cart from "./Cart"; // Adjust the path as needed

const ATC = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (meal) => {
    const existingItem = cartItems.find((item) => item.idMeal === meal.idMeal);
    if (existingItem) {
      // If item already in cart, increase quantity
      setCartItems(
        cartItems.map((item) =>
          item.idMeal === meal.idMeal
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If item not in cart, add with quantity 1
      setCartItems([...cartItems, { ...meal, quantity: 1 }]);
    }
  };

  const removeFromCart = (idMeal) => {
    setCartItems(cartItems.filter((item) => item.idMeal !== idMeal));
  };

  const updateCartItemQuantity = (idMeal, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.idMeal === idMeal ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div>
      {/* Render Cart component */}
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateCartItemQuantity={updateCartItemQuantity}
      />

      {/* Add to Cart logic can go into the Meal list or details page */}
      {/* Example button to add to cart (you will replace with actual meal data) */}
      <button onClick={() => addToCart({ idMeal: "52772", strMeal: "Pizza", price: 10 })}>
        Add Pizza to Cart
      </button>
    </div>
  );
};

export default ATC;
