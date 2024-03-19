import { Link } from "react-router-dom";
export const Shop = () => (
  <main>
    <div className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-6">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-full border px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="absolute right-0 top-0 mr-4 mt-3">
            <i className="fas fa-search text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>

    <div className="container mx-auto mt-8 flex">
      <aside className="w-1/5 pt-4">
        <nav
          className="space-y-4
"
        >
          <Link
            to="/new-arrivals"
            className="block rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            New Arrivals
          </Link>
          <Link
            to="/women"
            className="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Women
          </Link>
          <Link
            to="/men"
            className="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Men
          </Link>
          <Link
            to="/jewellery"
            className="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Jewellery
          </Link>
        </nav>
      </aside>

      <section className="w-3/4 pl-8">
        <h2 className="mb-6 text-3xl font-semibold">New Arrivals</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div
            className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onClick="window.location.href='/product-details';"
          >
            <img
              src="/Shopimg1.webp"
              alt="Product Name"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-sm text-gray-600">Product Description</p>
            <p className="text-lg text-green-600">$Price</p>
            <button
              onClick="addToCart(); event.stopPropagation();"
              className="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>

          <div
            className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onClick="window.location.href='/product-details';"
          >
            <img
              src="/Shopimg2.webp"
              alt="Product Name"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-sm text-gray-600">Product Description</p>
            <p className="text-lg text-green-600">$Price</p>
            <button
              onClick="addToCart(); event.stopPropagation();"
              className="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>

          <div
            className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onClick="window.location.href='/product-details';"
          >
            <img
              src="/Shopimg3.webp"
              alt="Product Name"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-sm text-gray-600">Product Description</p>
            <p className="text-lg text-green-600">$Price</p>
            <button
              onClick="addToCart(); event.stopPropagation();"
              className="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>

          <div
            className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onClick="window.location.href='/product-details';"
          >
            <img
              src="/Shopimg4.webp"
              alt="Product Name"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-sm text-gray-600">Product Description</p>
            <p className="text-lg text-green-600">$Price</p>
            <button
              onClick="addToCart(); event.stopPropagation();"
              className="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
          <div
            className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onClick="window.location.href='/product-details';"
          >
            <img
              src="/Shopimg4.webp"
              alt="Product Name"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-sm text-gray-600">Product Description</p>
            <p className="text-lg text-green-600">$Price</p>
            <button
              onClick="addToCart(); event.stopPropagation();"
              className="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
          <div
            className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onClick="window.location.href='/product-details';"
          >
            <img
              src="/Shopimg3.webp"
              alt="Product Name"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-sm text-gray-600">Product Description</p>
            <p className="text-lg text-green-600">$Price</p>
            <button
              onClick="addToCart(); event.stopPropagation();"
              className="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
          <div
            className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onClick="window.location.href='/product-details';"
          >
            <img
              src="/Shopimg2.webp"
              alt="Product Name"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-sm text-gray-600">Product Description</p>
            <p className="text-lg text-green-600">$Price</p>
            <button
              onClick="addToCart(); event.stopPropagation();"
              className="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
          <div
            className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onClick="window.location.href='/product-details';"
          >
            <img
              src="/Shopimg1.webp"
              alt="Product Name"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-sm text-gray-600">Product Description</p>
            <p className="text-lg text-green-600">$Price</p>
            <button
              onClick="addToCart(); event.stopPropagation();"
              className="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
);
