import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage when the component mounts
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  const handleRemoveFromCart = (productId) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems)); // Update local storage
  };

  // Calculate total cost
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <main>
      <style>
        {`/* Additional styles to ensure icons are visible */
      .nav-icon {
        width: 24px; /* Icon size */
        height: 24px; /* Icon size */
        color: #4A5568; /* Icon color */
      }
      /* Highlight for current page link */
      .active-link {
        color: #38a169 !important; /* Green color to match your brand */
        background-color: #ebf5ee; /* Light green background */
      }`}
      </style>
      <section className="bg-green-600 py-10 text-center text-white lg:py-20">
        <div className="container mx-auto">
          <h1 className="mb-2 text-4xl font-bold lg:text-5xl">Shopping Cart</h1>
          <p className="text-lg lg:text-xl">
            Review your selections before checkout.
          </p>
        </div>
      </section>

      {cartItems?.length > 0 ? (
        <section className="container mx-auto px-6 py-8">
          <div className="mb-8 w-full overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md border-b border-gray-600 bg-gray-100 text-left font-semibold uppercase tracking-wide text-gray-900">
                    <th className="px-4 py-3">Item Description</th>
                    <th className="px-4 py-3">Quantity</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Total</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {cartItems.map((item) => (
                    <tr key={item.id} className="text-gray-700">
                      <td className="border px-4 py-3">
                        {/* Item details */}
                        <div className="flex items-center text-sm">
                          {/* Image and product details */}
                          <img
                            className="mr-3 h-10 w-10 rounded-full object-cover"
                            src={item.productImage}
                            alt={item.name}
                          />
                          <div>
                            <p className="font-semibold text-black">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-ms border px-4 py-3 font-semibold">
                        {item.quantity || 1}
                      </td>
                      <td className="text-ms border px-4 py-3 font-semibold">
                        ${item.price}
                      </td>
                      <td className="text-ms border px-4 py-3 font-semibold">
                        ${(item.quantity || 1) * item.price}
                      </td>
                      <td className="border px-4 py-3 text-sm">
                        <button
                          className="text-red-500 hover:text-red-600"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary section */}
          <div className="mt-6 flex justify-end">
            <div className="w-full max-w-xs">
              <div className="rounded-lg bg-white p-4 shadow-lg">
                <h2 className="text-xl font-medium text-gray-800">
                  Cart Summary
                </h2>
                <div className="mt-6 flex justify-between">
                  <span className="text-sm font-medium text-gray-800">
                    Subtotal
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    ${totalCost.toFixed(2)}
                  </span>
                </div>
                <div className="mt-6">
                  <Link
                    to="/checkout"
                    className="w-full rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500 focus:outline-none"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="container mx-auto px-6 py-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Your cart is empty
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            You have no items in your cart.{" "}
            <Link to="/shop" className="text-green-600 hover:text-green-700">
              Continue shopping
            </Link>
          </p>
        </section>
      )}
    </main>
  );
};
