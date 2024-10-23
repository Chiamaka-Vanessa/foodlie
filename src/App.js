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
import HomePage from "./COMPONENTS/HomePage";
import CategoryPage from "./COMPONENTS/CategoryPage";
import MealDetailsPage from "./COMPONENTS/Meal Details Page";
import ATC from "./COMPONENTS/ATC";
import Cart from "./COMPONENTS/Cart";
import Navbar from "./COMPONENTS/Navbar";
import Footer from "./COMPONENTS/Footer";


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
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
    setCartItems(
      cartItems.map((item) =>
        item.idMeal === idMeal ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
        <Navbar cartItemCount={cartItemCount} />
        
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route
          path="/meal/:mealId"
          element={<MealDetailsPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateCartItemQuantity={updateCartItemQuantity}
            />
          }
        />
        {/* Add a route to use the ATC component, if needed */}
        <Route
          path="/add-to-cart"
          element={<ATC addToCart={addToCart} />}
        />
           
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;