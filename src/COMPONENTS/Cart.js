const Cart = ({ cartItems, removeFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price || 10), 0); // Assuming price for each item is 10
  
    return (
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.idMeal} className="flex justify-between items-center border-b py-4">
                  <p>{item.strMeal}</p>
                  <button
                    onClick={() => removeFromCart(item.idMeal)}
                    className="bg-red-500 text-white py-1 px-2 rounded-md"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 mt-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Cart;
  