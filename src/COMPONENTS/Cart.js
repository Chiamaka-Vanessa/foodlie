// src/components/Cart.jsx
// src/components/Cart.jsx
// src/components/Cart.jsx
// import React from 'react';

// const Cart = ({ cartItems, removeFromCart, updateCartItemQuantity }) => {
//   // Array of Object for prices
//   const pricesList = [
//     // { idMeal: '52772', price: 45 },
//     // { idMeal: '52773', price: 175 },
//     // { idMeal: '52774', price: 145 },
//     // { idMeal: '52775', price: 102 },
//     // { idMeal: '52776', price: 75 },
//     // { idMeal: '52777', price: 200 },
//     // { idMeal: '52778', price: 130 },
//     // { idMeal: '52779', price: 190 },
//     // { idMeal: '52780', price: 124 },
//     // { idMeal: '52781', price: 222 },
//     // { idMeal: '52782', price: 75 },
//     // { idMeal: '52783', price: 89 },
//     // { idMeal: '52784', price: 100 },
//     // { idMeal: '52785', price: 68 },
//     // { idMeal: '52786', price: 150 },
//     // { idMeal: '52787', price: 160 },
//     // { idMeal: '52788', price: 99 },
//     // { idMeal: '52789', price: 250 },
//     // { idMeal: '52790', price: 110 },
//     // { idMeal: '52791', price: 210 },
//     // { idMeal: '52792', price: 95 },
//     // { idMeal: '52793', price: 140 },
//     // { idMeal: '52794', price: 80 },
//     // { idMeal: '52795', price: 125 },
//     // { idMeal: '52796', price: 135 },
//   ];
  

//   // Calculate total price by matching each item with its price
//   const totalPrice = cartItems.reduce((total, item) => {
//     const itemPriceObj = pricesList.find(priceObj => priceObj.idMeal === item.price);
//     const price = itemPriceObj ? itemPriceObj.price : 0;
//     return total + price * item.quantity;
//   }, 0);

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cartItems.map((item) => {
//               const itemPriceObj = pricesList.find(priceObj => priceObj.idMeal === item.idMeal);
//               const price = itemPriceObj ? itemPriceObj.price : 0;
              
//               return (
//                 <li key={item.idMeal} className="flex flex-col md:flex-row justify-between items-center border-b pb-2">
//                   <div className="flex flex-col md:flex-row items-center space-x-4">
//                     <img
//                       src={item.strMealThumb}
//                       alt={item.strMeal}
//                       className="w-24 h-24 md:w-16 md:h-16 object-cover rounded-md"
//                     />
//                     <div className="mt-2 md:mt-0">
//                       <span className="block text-lg font-semibold">{item.strMeal}</span>
//                       <span className="block text-lg font-semibold">Price: ${price}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-2 mt-4 md:mt-0">
//                     <button
//                       onClick={() => updateCartItemQuantity(item.idMeal, item.quantity - 1)}
//                       disabled={item.quantity === 1}
//                       className="bg-blue-900 text-white px-2 py-1 rounded hover:bg-red-600 transition"
//                     >
//                       -
//                     </button>
//                     <span className="text-lg">{item.quantity}</span>
//                     <button
//                       onClick={() => updateCartItemQuantity(item.idMeal, item.quantity + 1)}
//                       className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
//                     >
//                       +
//                     </button>
//                     <button
//                       onClick={() => removeFromCart(item.idMeal)}
//                       className="bg-blue-900 text-white px-2 py-1 rounded hover:bg-red-600 transition"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//           <div className="mt-6 text-xl font-bold text-right md:text-left">
//             Total: ${totalPrice.toFixed(2)}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;




import React from "react";

const Cart = ({ cartItems, removeFromCart, updateCartItemQuantity }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.idMeal}
                className="flex flex-col md:flex-row justify-between items-center border-b pb-2"
              >
                <div className="flex flex-col md:flex-row items-center space-x-4">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-24 h-24 md:w-16 md:h-16 object-cover rounded-md"
                  />
                  <div className="mt-2 md:mt-0">
                    <span className="block text-lg font-semibold">
                      {item.strMeal}
                    </span>
                    <span className="block text-lg font-semibold">
                      Price: ${item.price}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <button
                    onClick={() =>
                      updateCartItemQuantity(item.idMeal, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                    className="bg-blue-900 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateCartItemQuantity(item.idMeal, item.quantity + 1)
                    }
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.idMeal)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xl font-bold text-right md:text-left">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
