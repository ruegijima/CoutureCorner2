export const Resources = () => (
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
          <a href="about.html" class="text-gray-600 hover:text-green-600 ">
            About Us
          </a>
          <a href="contact.html" class="text-gray-600 hover:text-green-600 ">
            Contact Us
          </a>
          <a
            href="resources.html"
            class="bg-green-50 text-gray-600 text-green-700 hover:text-green-600"
          >
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
    <section class="bg-green-600 py-10 text-center text-white lg:py-20">
      <div class="container mx-auto">
        <h1 class="mb-2 text-4xl font-bold lg:text-5xl">
          Educational Resources
        </h1>
        <p class="text-lg lg:text-xl">
          Explore our curated resources for learning and development in the
          world of fashion.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-8">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-lg bg-white p-6 shadow-lg">
          <h2 class="mb-4 text-xl font-semibold">Fashion Design</h2>
          <p class="mb-4 text-gray-700">
            Dive into our comprehensive tutorials and workshops that cover the
            essentials of fashion design, from sketching to garment
            construction.
          </p>
          <a href="#" class="text-green-600 hover:text-green-700">
            Learn More
          </a>
        </div>

        <div class="rounded-lg bg-white p-6 shadow-lg">
          <h2 class="mb-4 text-xl font-semibold">Marketing</h2>
          <p class="mb-4 text-gray-700">
            Discover strategies and tips for marketing your fashion brand,
            including digital marketing, branding, and customer engagement
            techniques.
          </p>
          <a href="#" class="text-green-600 hover:text-green-700">
            Learn More
          </a>
        </div>

        <div class="rounded-lg bg-white p-6 shadow-lg">
          <h2 class="mb-4 text-xl font-semibold">Trend Analysis</h2>
          <p class="mb-4 text-gray-700">
            Stay ahead of the curve with our trend analysis resources that
            provide insights into the latest fashion trends and forecasts.
          </p>
          <a href="#" class="text-green-600 hover:text-green-700">
            Learn More
          </a>
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
