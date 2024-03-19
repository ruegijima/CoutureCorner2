export const Cart = () => (
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
              <tr className="text-gray-700">
                <td className="border px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative mr-3 h-8 w-8 rounded-full md:block">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="/Cart1.webp"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Product Name</p>
                      <p className="text-xs text-gray-600">Product Details</p>
                    </div>
                  </div>
                </td>
                <td className="text-ms border px-4 py-3 font-semibold">2</td>
                <td className="text-ms border px-4 py-3 font-semibold">
                  $40.00
                </td>
                <td className="text-ms border px-4 py-3 font-semibold">
                  $80.00
                </td>
                <td className="border px-4 py-3 text-sm">
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick="removeItem(this)"
                  >
                    Remove
                  </button>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="border px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative mr-3 h-8 w-8 rounded-full md:block">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="/Cart1.webp"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Product Name</p>
                      <p className="text-xs text-gray-600">Product Details</p>
                    </div>
                  </div>
                </td>
                <td className="text-ms border px-4 py-3 font-semibold">2</td>
                <td className="text-ms border px-4 py-3 font-semibold">
                  $40.00
                </td>
                <td className="text-ms border px-4 py-3 font-semibold">
                  $80.00
                </td>
                <td className="border px-4 py-3 text-sm">
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick="removeItem(this)"
                  >
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="text-gray-700">
                <td className="border px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative mr-3 h-8 w-8 rounded-full md:block">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="/Cart1.webp"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Product Name</p>
                      <p className="text-xs text-gray-600">Product Details</p>
                    </div>
                  </div>
                </td>
                <td className="text-ms border px-4 py-3 font-semibold">2</td>
                <td className="text-ms border px-4 py-3 font-semibold">
                  $40.00
                </td>
                <td className="text-ms border px-4 py-3 font-semibold">
                  $80.00
                </td>
                <td className="border px-4 py-3 text-sm">
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick="removeItem(this)"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 w-full lg:mt-0 lg:w-1/4 lg:px-4 lg:py-3">
        <div className="rounded-lg bg-white p-4 shadow-lg">
          <h2 className="text-xl font-medium text-gray-800">Cart Summary</h2>
          <div className="mt-6 flex justify-between">
            <span className="text-sm font-medium text-gray-800">Subtotal</span>
            <span className="text-sm font-medium text-gray-600">$160.00</span>
          </div>
          <div className="mt-6">
            <button className="w-full rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500 focus:bg-green-500 focus:outline-none">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
);
