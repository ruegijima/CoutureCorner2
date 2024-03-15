export const Shop = () => (
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
          <a href="Main.html" class="text-gray-600 hover:text-green-600 ">
            Home
          </a>
          <a
            href="shop.html"
            class="bg-green-50 text-gray-600 text-green-700 hover:text-green-600"
          >
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
          <a href="cart.html" class="mx-2 text-gray-600 hover:text-green-600">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </nav>
    <div class="bg-white py-4 shadow-md">
      <div class="container mx-auto px-6">
        <div class="relative">
          <input
            type="search"
            placeholder="Search..."
            class="w-full rounded-full border px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button class="absolute right-0 top-0 mr-4 mt-3">
            <i class="fas fa-search text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto mt-8 flex">
      <aside class="w-1/5 pt-4">
        <nav
          class="space-y-4
"
        >
          <a
            href="/new-arrivals"
            class="block rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            New Arrivals
          </a>
          <a
            href="/women"
            class="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Women
          </a>
          <a
            href="/men"
            class="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Men
          </a>
          <a
            href="/jewellery"
            class="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Jewellery
          </a>
        </nav>
      </aside>

      <section class="w-3/4 pl-8">
        <h2 class="mb-6 text-3xl font-semibold">New Arrivals</h2>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div
            class="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onclick="window.location.href='/productdetails.html';"
          >
            <img
              src="/Shopimg1.webp"
              alt="Product Name"
              class="mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold">Product Name</h3>
            <p class="text-sm text-gray-600">Product Description</p>
            <p class="text-lg text-green-600">$Price</p>
            <button
              onclick="addToCart(); event.stopPropagation();"
              class="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>

          <div
            class="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onclick="window.location.href='/productdetails.html';"
          >
            <img
              src="/Shopimg2.webp"
              alt="Product Name"
              class="mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold">Product Name</h3>
            <p class="text-sm text-gray-600">Product Description</p>
            <p class="text-lg text-green-600">$Price</p>
            <button
              onclick="addToCart(); event.stopPropagation();"
              class="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>

          <div
            class="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onclick="window.location.href='/productdetails.html';"
          >
            <img
              src="/Shopimg3.webp"
              alt="Product Name"
              class="mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold">Product Name</h3>
            <p class="text-sm text-gray-600">Product Description</p>
            <p class="text-lg text-green-600">$Price</p>
            <button
              onclick="addToCart(); event.stopPropagation();"
              class="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>

          <div
            class="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onclick="window.location.href='/productdetails.html';"
          >
            <img
              src="/Shopimg4.webp"
              alt="Product Name"
              class="mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold">Product Name</h3>
            <p class="text-sm text-gray-600">Product Description</p>
            <p class="text-lg text-green-600">$Price</p>
            <button
              onclick="addToCart(); event.stopPropagation();"
              class="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
          <div
            class="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onclick="window.location.href='/productdetails.html';"
          >
            <img
              src="/Shopimg4.webp"
              alt="Product Name"
              class="mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold">Product Name</h3>
            <p class="text-sm text-gray-600">Product Description</p>
            <p class="text-lg text-green-600">$Price</p>
            <button
              onclick="addToCart(); event.stopPropagation();"
              class="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
          <div
            class="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onclick="window.location.href='/productdetails.html';"
          >
            <img
              src="/Shopimg3.webp"
              alt="Product Name"
              class="mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold">Product Name</h3>
            <p class="text-sm text-gray-600">Product Description</p>
            <p class="text-lg text-green-600">$Price</p>
            <button
              onclick="addToCart(); event.stopPropagation();"
              class="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
          <div
            class="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onclick="window.location.href='/productdetails.html';"
          >
            <img
              src="/Shopimg2.webp"
              alt="Product Name"
              class="mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold">Product Name</h3>
            <p class="text-sm text-gray-600">Product Description</p>
            <p class="text-lg text-green-600">$Price</p>
            <button
              onclick="addToCart(); event.stopPropagation();"
              class="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
          <div
            class="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
            onclick="window.location.href='/productdetails.html';"
          >
            <img
              src="/Shopimg1.webp"
              alt="Product Name"
              class="mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold">Product Name</h3>
            <p class="text-sm text-gray-600">Product Description</p>
            <p class="text-lg text-green-600">$Price</p>
            <button
              onclick="addToCart(); event.stopPropagation();"
              class="mt-4 rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>

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
