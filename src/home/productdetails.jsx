import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  // step 2 - fetch the details of the product using product Id
  useEffect(() => {
    const getproductdetails = async () => {
      const response = await getProductById(productId);
      setProduct(response);
    };
    getproductdetails();
  }, [productId]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (e) => {
    e.preventDefault();

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const toggleSizeChart = () => {
    setShowSizeChart(!showSizeChart);
  };

  console.log(cart);

  return (
    <main>
      <div className="container mx-auto my-10 rounded-lg bg-white p-6 shadow-lg">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="md:flex-1">
            <img
              src={product?.productImage ?? "/Shopimg1.webp"}
              alt="Stylish suit jacket with intricate black and white pattern design."
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-6 pt-0 md:flex-1">
            <h1 className="mb-3 text-4xl font-bold">{product?.name}</h1>
            <p className="mb-5 text-gray-700">{product?.description}</p>
            <p className="mb-5 text-lg font-semibold text-green-600">
              ${product?.price}
            </p>
            <div className="mb-5">
              <label
                htmlFor="size"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Size:
              </label>
              <select
                id="size"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
              >
                <option value="small">Extra Small</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="large">Extra Large</option>
              </select>
              <button
                onClick={toggleSizeChart}
                className="mb-4 text-sm text-green-600 hover:underline"
              >
                View Size Chart
              </button>
            </div>
            <div className="mb-5">
              <label
                htmlFor="color"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Color:
              </label>
              <select
                id="color"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
              >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="quantity"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value="1"
                min="1"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Optionally, include a remove button if the product is in the cart */}
            {cart.find((item) => item.id === productId) ? (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the link from being triggered
                  handleRemoveFromCart(productId, e);
                }}
                className="mt-2 rounded bg-red-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-red-700"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-full rounded bg-green-600 px-6 py-3 text-lg font-bold text-white transition duration-300 hover:bg-green-700"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        id="sizeChartModal"
        className={`fixed inset-0 z-10 pt-16 ${
          showSizeChart ? "" : "hidden"
        } overflow-y-auto`}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Size Chart
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Please refer to the measurements below to find your
                      correct size:
                    </p>
                    <div className="mt-3 overflow-x-auto">
                      <table className="min-w-full table-fixed divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Size
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Chest (in)
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Waist (in)
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Hips (in)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                              Extra Small
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              30-32
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              24-26
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              31-33
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                              Small
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              34-36
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              28-30
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              35-37
                            </td>
                          </tr>

                          <tr>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                              Medium
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              38-40
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              32-34
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              39-41
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                              Large
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              42-44
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              36-38
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              43-45
                            </td>
                          </tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Extra Large
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            46-48
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            40-42
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            47-49
                          </td>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
              <button
                onClick={toggleSizeChart}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
