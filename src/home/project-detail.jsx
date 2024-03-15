export const Project_Detail = () => (
  <main>
    <nav class="sticky top-0 z-50 bg-white shadow-lg">
      <div class="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="index.html" class="flex items-center">
          <img src="/LOGO.webp" alt="Logo" class="mr-1" style="height: 50px" />
          <span class="text-xl font-bold text-green-600" style="margin-left: 0">
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
          <a
            href="Designers.html"
            class="bg-green-50 text-gray-600 text-green-700 hover:text-green-600"
          >
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

    <main class="container mx-auto p-6">
      <div class="mb-6 rounded-lg bg-white p-6 shadow-lg">
        <div class="mb-4">
          <h2 class="text-2xl font-semibold">Project Title</h2>
          <p class="text-sm text-gray-600">
            Detailed description of the project...
          </p>
        </div>

        <div>
          <h3 class="mb-4 text-xl font-semibold">Products</h3>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div class="rounded border p-4">
              <img
                src="/product-image-1.webp"
                alt="Product Name"
                class="mb-4 h-64 w-full rounded object-cover"
              />
              <h4 class="text-lg font-semibold">Product Name</h4>
              <p class="text-sm text-gray-600">Product description...</p>
              <p class="text-lg text-green-600">$Price</p>
            </div>

            <div class="rounded border p-4">
              <img
                src="/product-image-3.webp"
                alt="Product Name"
                class="mb-4 h-64 w-full rounded object-cover"
              />
              <h4 class="text-lg font-semibold">Product Name</h4>
              <p class="text-sm text-gray-600">Product description...</p>
              <p class="text-lg text-green-600">$Price</p>
            </div>
            <div class="rounded border p-4">
              <img
                src="/product-image-2.webp"
                alt="Product Name"
                class="mb-4 h-64 w-full rounded object-cover"
              />
              <h4 class="text-lg font-semibold">Product Name</h4>
              <p class="text-sm text-gray-600">Product description...</p>
              <p class="text-lg text-green-600">$Price</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-white">
      <div class="container mx-auto px-6 py-10">
        <div class="flex items-center justify-between">
          <div class="text-green-600">
            <h2 class="text-lg font-bold">CoutureCorner</h2>
            <p class="text-xs">Fashion Showcase & Collaboration Platform</p>
          </div>

          <nav class="flex flex-wrap items-center justify-center text-sm">
            <a href="#" class="m-2 text-green-600 hover:underline">
              About Us
            </a>
            <a href="#" class="m-2 text-green-600 hover:underline">
              Privacy Policy
            </a>
            <a href="#" class="m-2 text-green-600 hover:underline">
              Terms of Service
            </a>
            <a href="#" class="m-2 text-green-600 hover:underline">
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

        <div class="mt-10 border-t-2 border-green-200 py-8 text-center">
          <p class="text-sm font-semibold text-green-600">
            © 2024 CoutureCorner. All Rights Reserved.Content may not be
            reproduced without permission.
          </p>
        </div>
      </div>
    </footer>
  </main>
);
