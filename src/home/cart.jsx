export const Cart = () => (
  <main>
    <nav class="sticky top-0 z-50 bg-white shadow-lg">
      <div class="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="index.html" class="flex items-center">
          <img src="/LOGO.webp" alt="Logo" class="mr-1" style="height: 50px;" />
          <span
            class="text-xl font-bold text-green-600"
            style="margin-left: 0;"
          >
            CoutureCorner
          </span>
        </a>
        <div class="flex items-center space-x-4">
          <a href="Main.html" class="text-gray-600 hover:text-green-600">
            Home
          </a>
          <a href="shop.html" class="text-gray-600 hover:text-green-600">
            Shop
          </a>
          <a href="Designers.html" class="text-gray-600 hover:text-green-600">
            Designers
          </a>
          <a href="events.html" class="text-gray-600 hover:text-green-600">
            Events
          </a>
          <a href="about.html" class="text-gray-600 hover:text-green-600">
            About Us
          </a>
          <a href="contact.html" class="text-gray-600 hover:text-green-600">
            Contact Us
          </a>
          <a href="resources.html" class="text-gray-600 hover:text-green-600">
            Resources
          </a>
          <a href="community.html" class="text-gray-600 hover:text-green-600">
            Community
          </a>
          <a href="blog.html" class="text-gray-600 hover:text-green-600">
            Blog
          </a>
          <a
            href="DesignerProfileCreate.html"
            class="rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            Become A Designer
          </a>
        </div>
        <div class="flex items-center">
          <a
            href="profile.html"
            class="mx-2 text-gray-600 hover:text-green-600"
          >
            <i class="fas fa-user"></i>
          </a>
          <a href="cart.html" class="nav-icon active-link mx-2">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </nav>
    <section class="bg-green-600 py-10 text-center text-white lg:py-20">
      <div class="container mx-auto">
        <h1 class="mb-2 text-4xl font-bold lg:text-5xl">Shopping Cart</h1>
        <p class="text-lg lg:text-xl">
          Review your selections before checkout.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-8">
      <div class="mb-8 w-full overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-md border-b border-gray-600 bg-gray-100 text-left font-semibold uppercase tracking-wide text-gray-900">
                <th class="px-4 py-3">Item Description</th>
                <th class="px-4 py-3">Quantity</th>
                <th class="px-4 py-3">Price</th>
                <th class="px-4 py-3">Total</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr class="text-gray-700">
                <td class="border px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative mr-3 h-8 w-8 rounded-full md:block">
                      <img
                        class="h-full w-full rounded-full object-cover"
                        src="/Cart1.webp"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold text-black">Product Name</p>
                      <p class="text-xs text-gray-600">Product Details</p>
                    </div>
                  </div>
                </td>
                <td class="text-ms border px-4 py-3 font-semibold">2</td>
                <td class="text-ms border px-4 py-3 font-semibold">$40.00</td>
                <td class="text-ms border px-4 py-3 font-semibold">$80.00</td>
                <td class="border px-4 py-3 text-sm">
                  <button
                    class="text-red-500 hover:text-red-600"
                    onclick="removeItem(this)"
                  >
                    Remove
                  </button>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="border px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative mr-3 h-8 w-8 rounded-full md:block">
                      <img
                        class="h-full w-full rounded-full object-cover"
                        src="/Cart1.webp"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold text-black">Product Name</p>
                      <p class="text-xs text-gray-600">Product Details</p>
                    </div>
                  </div>
                </td>
                <td class="text-ms border px-4 py-3 font-semibold">2</td>
                <td class="text-ms border px-4 py-3 font-semibold">$40.00</td>
                <td class="text-ms border px-4 py-3 font-semibold">$80.00</td>
                <td class="border px-4 py-3 text-sm">
                  <button
                    class="text-red-500 hover:text-red-600"
                    onclick="removeItem(this)"
                  >
                    Remove
                  </button>
                </td>
              </tr>

              <tr class="text-gray-700">
                <td class="border px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative mr-3 h-8 w-8 rounded-full md:block">
                      <img
                        class="h-full w-full rounded-full object-cover"
                        src="/Cart1.webp"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold text-black">Product Name</p>
                      <p class="text-xs text-gray-600">Product Details</p>
                    </div>
                  </div>
                </td>
                <td class="text-ms border px-4 py-3 font-semibold">2</td>
                <td class="text-ms border px-4 py-3 font-semibold">$40.00</td>
                <td class="text-ms border px-4 py-3 font-semibold">$80.00</td>
                <td class="border px-4 py-3 text-sm">
                  <button
                    class="text-red-500 hover:text-red-600"
                    onclick="removeItem(this)"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mt-6 w-full lg:mt-0 lg:w-1/4 lg:px-4 lg:py-3">
        <div class="rounded-lg bg-white p-4 shadow-lg">
          <h2 class="text-xl font-medium text-gray-800">Cart Summary</h2>
          <div class="mt-6 flex justify-between">
            <span class="text-sm font-medium text-gray-800">Subtotal</span>
            <span class="text-sm font-medium text-gray-600">$160.00</span>
          </div>
          <div class="mt-6">
            <button class="w-full rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500 focus:bg-green-500 focus:outline-none">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer class="border-t-2 border-green-200 bg-white">
      <div class="container mx-auto px-6 py-10">
        <div class="flex flex-col items-center justify-between md:flex-row">
          <div class="mb-6 md:mb-0">
            <a
              href="index.html"
              class="text-lg font-bold text-green-600 hover:text-green-700"
            >
              CoutureCorner
            </a>
            <p class="mt-2 text-xs text-gray-600">
              Fashion Showcase & Collaboration Platform
            </p>
          </div>

          <nav class="mb-6 flex flex-wrap items-center justify-center text-sm md:mb-0">
            <a
              href="about.html"
              class="m-2 text-green-600 hover:text-green-700 hover:underline"
            >
              About Us
            </a>
            <a
              href="privacy-policy.html"
              class="m-2 text-green-600 hover:text-green-700 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="terms-of-service.html"
              class="m-2 text-green-600 hover:text-green-700 hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="contact.html"
              class="m-2 text-green-600 hover:text-green-700 hover:underline"
            >
              Contact
            </a>
            <a
              href="faq.html"
              class="m-2 text-green-600 hover:text-green-700 hover:underline"
            >
              FAQ
            </a>
          </nav>

          <div class="flex items-center justify-center">
            <a
              href="https://twitter.com/CoutureCorner"
              class="mx-2 text-gray-600 hover:text-green-600"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com/CoutureCorner"
              class="mx-2 text-gray-600 hover:text-green-600"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com/CoutureCorner"
              class="mx-2 text-gray-600 hover:text-green-600"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div class="mt-10 py-8 text-center">
          <p class="text-sm text-gray-600">
            © 2024 CoutureCorner. All Rights Reserved. Content may not be
            reproduced without permission.
          </p>
        </div>
      </div>
    </footer>
  </main>
);
