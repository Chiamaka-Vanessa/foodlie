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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.idMeal} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span className="text-lg font-semibold">{item.strMeal}</span>
                  <span className="text-lg font-semibold">Price: ${item.price}</span>
                </div>
                <div className="flex items-center space-x-2">
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
          <div className="mt-4 font-bold">
            Total: ${totalPrice} {/* Directly display the calculated total price */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
