// src/components/Cart.jsx
// src/components/Cart.jsx
// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateCartItemQuantity }) => {
  // Calculate total price directly in the Cart component
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity);
    return total + (isNaN(price) ? 0 : price) * (isNaN(quantity) ? 0 : quantity);
  }, 0);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.idMeal} className="flex flex-col md:flex-row justify-between items-center border-b pb-2">
                <div className="flex flex-col md:flex-row items-center space-x-4">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-24 h-24 md:w-16 md:h-16 object-cover rounded-md"
                  />
                  <div className="mt-2 md:mt-0">
                    <span className="block text-lg font-semibold">{item.strMeal}</span>
                    <span className="block text-lg font-semibold">Price: ${item.price}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <button
                    onClick={() => updateCartItemQuantity(item.idMeal, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="bg-blue-900 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateCartItemQuantity(item.idMeal, item.quantity + 1)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.idMeal)}
                    className="bg-blue-900 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xl font-bold text-right md:text-left">
            Total: ${totalPrice.toFixed(2)} {/* Directly display the calculated total price */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
