// // src/COMPONENTS/OrderForm.jsx
// import React, { useState } from 'react';

// const OrderForm = ({ cartItems, submitOrder }) => {
//   const [formData, setFormData] = useState({ name: '', address: '', phone: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     submitOrder(formData); // Call the submitOrder function
//   };

//   return (
//     <div className="container mx-auto my-10">
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="mb-4 p-2 border border-gray-300 rounded-md"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={formData.address}
//           onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//           className="mb-4 p-2 border border-gray-300 rounded-md"
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//           className="mb-4 p-2 border border-gray-300 rounded-md"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
//         >
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default OrderForm;
