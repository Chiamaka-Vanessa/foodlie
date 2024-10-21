// import { useState } from "react";

// import React from 'react'

// function App() {
//   const [first, setfirst] = useState([
//     { key:"A", 
//       Letter:"Apple", 
//       Image:"https://media.gettyimages.com/id/185071735/photo/red-apple-with-droplet.jpg?s=612x612&w=gi&k=20&c=0tybCsUgMrmbLja8UcKPrzm9XwLIAmxm8InbcmOYfhQ="
//     },
//       {key:"B", Letter:"Ball", Image:"https://t3.ftcdn.net/jpg/02/11/11/44/360_F_211114404_Etx3B5GYpJG9THGkLw22okquzxEYjA8o.jpg"},
//       {key:"C", Letter:"Cup", Image:"https://th.bing.com/th/id/OIP.WUIetuWKc66C__Hz4xwXBAHaHc?w=191&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
//       {key:"D", Letter:"Dog", Image:"http://ts2.mm.bing.net/th?id=OIP.8vzL0zb3nO36L6dnSJzzsgHaE6&pid=15.1"}
    
//   ]);

//   let iteration = 0;

//   function butt(){
//     setfirst (first[iteration])
//   }
//   function lick(){
//     // setfirst (first --)
//   }

//   return (
//     <div>
//       <div>
//         <img src={first.Image[iteration]} alt={first.Letter[iteration]}/>
        
//       </div>
//     <h1>{first.key[iteration]} for {first.Letter[iteration]}</h1>
//     <button onClick={butt}>Next</button>
//     <button onClick={lick}>Previous</button> 
//     </div>
//   )
// }

// export default App
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import all the components
import Navbar from "./COMPONENTS/Navbar";
import HomePage from "./COMPONENTS/HomePage";
import CategoryPage from "./COMPONENTS/CategoryPage";
import MealDetailsPage from "./COMPONENTS/Meal Details Page";
import Cart from "./COMPONENTS/Cart";
import OrderForm from "./COMPONENTS/OrderForm";

function App() {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart
  // const addToCart = (meal) => {
  //   setCartItems((prevItems) => [...prevItems, meal]);
  // };

  // Function to remove items from cart
  const removeFromCart = (mealId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.idMeal !== mealId));
  };

  // Function to handle order submission (e.g., send order to backend)
  const submitOrder = (formData) => {
    console.log("Order Submitted", formData, cartItems);
    // Reset cart after order submission
    setCartItems([]);
    alert("Order placed successfully!");
  };

  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          {/* HomePage - Display Meal Categories */}
          <Route path="/" element={<HomePage />} />

          {/* CategoryPage - Show meals under a specific category */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />

          {/* MealDetailsPage - Show details for a specific meal */}
          <Route path="/meal/:mealId" element={<MealDetailsPage />} />


          {/* Cart - Show items in the cart and allow removal */}
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />

          {/* OrderForm - Checkout page */}
          <Route path="/checkout" element={<OrderForm cartItems={cartItems} submitOrder={submitOrder} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
