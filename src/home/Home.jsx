export const Home = () => (
  <main>
    <nav class="sticky top-0 z-50 bg-white shadow-lg">
      <div class="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="index.html" class="flex items-center">
          <img src="/LOGO.webp" alt="Logo" class="mr-1" style={{height: "50px"}} />
          <span
            class="text-xl font-bold text-green-600"
            style={{marginLeft: 0}}
          >
            CoutureCorner
          </span>
        </a>
        <div class="flex items-center space-x-4">
          <a
            href="Main.html"
            class="bg-green-50 text-gray-600 text-green-700 hover:text-green-600"
          >
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
          <a href="cart.html" class="mx-2 text-gray-600 hover:text-green-600">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </nav>

    <section
      id="introduction"
      class="bg-cover bg-center py-12 text-center"
      style="background-image: url('BKgrndMain2.webp');"
    >
      <div class="container mx-auto px-6">
        <h1 class="mb-4 text-4xl font-bold text-white">
          Uncover the Art of Fashion
        </h1>
        <p class="mb-8 text-lg text-white opacity-90">
          CoutureCorner is where creativity meets craftsmanship. Dive into our
          world of curated fashion and find your next statement piece.
        </p>
        <a
          href="#featured"
          class="inline-block rounded bg-white px-6 py-2 font-bold text-green-600 transition duration-300 hover:bg-green-100 hover:text-green-700"
        >
          Explore Collections
        </a>
      </div>
    </section>

    <main class="container mx-auto mt-8 px-4">
      <section id="featured" class="mb-12">
        <h2 class="mb-6 text-4xl font-semibold">Featured Collections</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/SpringCollection.webp"
              alt="Collection 1"
              class="h-64 w-full object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Spring Collection</h3>
              <p>
                Discover the vibrant colors and patterns of our new spring
                collection.
              </p>
            </div>
          </div>
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/EcoFriendlyLine.webp"
              alt="Collection 2"
              class="h-64 w-full object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Eco-Friendly Line</h3>
              <p>Ethically sourced and environmentally conscious designs.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/SpringCollection.webp"
              alt="Collection 1"
              class="h-64 w-full object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Spring Collection</h3>
              <p>
                Discover the vibrant colors and patterns of our new spring
                collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="spotlights" class="mb-12">
        <h2 class="mb-6 text-4xl font-semibold">Designer Spotlights</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/DS1.webp"
              alt="Designer 1"
              class="h-64 w-full object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Patience Sithole</h3>
              <p>Innovative designs with a modern twist.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/DS2.webp"
              alt="Designer 2"
              class="h-64 w-full object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Allan Moyo</h3>
              <p>Luxurious and timeless pieces for every occasion.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/DS1.webp"
              alt="Designer 1"
              class="h-64 w-full object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Patience Sithole</h3>
              <p>Innovative designs with a modern twist.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="news" class="mb-12">
        <h2 class="mb-6 text-4xl font-semibold">Latest News</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article class="flex flex-col overflow-hidden rounded-lg bg-white shadow md:flex-row">
            <img
              src="/latestnews1.webp"
              alt="Fashion Week Highlights"
              class="w-full object-cover md:w-1/2"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Fashion Week Highlights</h3>
              <p>
                Recapping the most memorable moments from this year's fashion
                week.
              </p>
            </div>
          </article>
          <article class="flex flex-col overflow-hidden rounded-lg bg-white shadow md:flex-row">
            <img
              src="/latestnews2.webp"
              alt="Designer Collaboration Announced"
              class="w-full object-cover md:w-1/2"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">
                Designer Collaboration Announced
              </h3>
              <p>
                Two leading fashion icons team up for an exclusive collection.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="testimonials" class="bg-gray-100 py-8">
        <div class="container mx-auto px-6">
          <h2 class="mb-6 text-center text-4xl font-semibold">
            What Our Customers Say
          </h2>
          <div class="grid gap-4 text-center md:grid-cols-2">
            <div class="rounded bg-white p-6 shadow-lg">
              <blockquote class="italic text-gray-600">
                "The spring collection added a fresh burst of color and design
                to my wardrobe. Exceptional quality and style!"
              </blockquote>
              <div class="mt-4">
                <p class="font-bold">Amanda Lee</p>
                <p class="text-sm text-gray-500">Fashion Enthusiast</p>
              </div>
            </div>
            <div class="rounded bg-white p-6 shadow-lg">
              <blockquote class="italic text-gray-600">
                "I'm thrilled with the eco-friendly line. It feels good to wear
                stylish clothes that are also kind to the planet."
              </blockquote>
              <div class="mt-4">
                <p class="font-bold">Michael Johnson</p>
                <p class="text-sm text-gray-500">Environmentalist & Blogger</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="text-center">
        <h2 class="mb-6 text-4xl font-semibold">Join Our Community</h2>
        <p class="mb-6">
          Explore, connect, and stay up-to-date with the latest in fashion.
        </p>
        <a
          href="/signup"
          class="inline-block rounded bg-green-600 px-6 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
        >
          Sign Up
        </a>
      </section>
    </main>
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
