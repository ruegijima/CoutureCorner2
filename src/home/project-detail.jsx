export const Project_Detail = () => (
  <main>
    <main className="container mx-auto p-6">
      <div className="mb-6 rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Project Title</h2>
          <p className="text-sm text-gray-600">
            Detailed description of the project...
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Products</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded border p-4">
              <img
                src="/product-image-1.webp"
                alt="Product Name"
                className="mb-4 h-64 w-full rounded object-cover"
              />
              <h4 className="text-lg font-semibold">Product Name</h4>
              <p className="text-sm text-gray-600">Product description...</p>
              <p className="text-lg text-green-600">$Price</p>
            </div>

            <div className="rounded border p-4">
              <img
                src="/product-image-3.webp"
                alt="Product Name"
                className="mb-4 h-64 w-full rounded object-cover"
              />
              <h4 className="text-lg font-semibold">Product Name</h4>
              <p className="text-sm text-gray-600">Product description...</p>
              <p className="text-lg text-green-600">$Price</p>
            </div>
            <div className="rounded border p-4">
              <img
                src="/product-image-2.webp"
                alt="Product Name"
                className="mb-4 h-64 w-full rounded object-cover"
              />
              <h4 className="text-lg font-semibold">Product Name</h4>
              <p className="text-sm text-gray-600">Product description...</p>
              <p className="text-lg text-green-600">$Price</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </main>
);
