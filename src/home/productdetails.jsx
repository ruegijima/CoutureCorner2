export const ProductDetails = () => (
  <main>
    <div class="container mx-auto my-10 rounded-lg bg-white p-6 shadow-lg">
      <div class="flex flex-wrap md:flex-nowrap">
        <div class="md:flex-1">
          <img
            src="/Shopimg1.webp"
            alt="Stylish suit jacket with intricate black and white pattern design."
            class="h-full w-full object-contain"
          />
        </div>
        <div class="p-6 md:flex-1">
          <h1 class="mb-3 text-4xl font-bold">Product Name</h1>
          <p class="mb-5 text-gray-700">
            A detailed description of the product. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <p class="mb-5 text-lg font-semibold text-green-600">$Price</p>
          <div class="mb-5">
            <label
              for="size"
              class="mb-2 block text-sm font-medium text-gray-700"
            >
              Size:
            </label>
            <select
              id="size"
              class="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="small">Extra Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="large">Extra Large</option>
            </select>
            <button
              onclick="document.getElementById('sizeChartModal').classList.toggle('hidden')"
              class="mb-4 text-sm text-green-600 hover:underline"
            >
              View Size Chart
            </button>
          </div>
          <div class="mb-5">
            <label
              for="color"
              class="mb-2 block text-sm font-medium text-gray-700"
            >
              Color:
            </label>
            <select
              id="color"
              class="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div class="mb-5">
            <label
              for="quantity"
              class="mb-2 block text-sm font-medium text-gray-700"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value="1"
              min="1"
              class="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button class="w-full rounded bg-green-600 px-6 py-3 text-lg font-bold text-white transition duration-300 hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div id="sizeChartModal" class="fixed inset-0 z-10 hidden overflow-y-auto">
      <div class="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  class="text-lg font-medium leading-6 text-gray-900"
                  id="modal-title"
                >
                  Size Chart
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Please refer to the measurements below to find your correct
                    size:
                  </p>
                  <div class="mt-3 overflow-x-auto">
                    <table class="min-w-full table-fixed divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Size
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Chest (in)
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Waist (in)
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Hips (in)
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Extra Small
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            30-32
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            24-26
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            31-33
                          </td>
                        </tr>
                        <tr>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Small
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            34-36
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            28-30
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            35-37
                          </td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Medium
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            38-40
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            32-34
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            39-41
                          </td>
                        </tr>
                        <tr>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Large
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            42-44
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            36-38
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            43-45
                          </td>
                        </tr>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          Extra Large
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          46-48
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          40-42
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          47-49
                        </td>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
            <button
              onclick="document.getElementById('sizeChartModal').classList.add('hidden')"
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
);
