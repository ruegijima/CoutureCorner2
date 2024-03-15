export const Blog = () => (
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
          <a href="resources.html" class="text-gray-600 hover:text-green-600">
            Resources
          </a>
          <a href="community.html" class="text-gray-600 hover:text-green-600 ">
            Community
          </a>
          <a
            href="blog.html"
            class="bg-green-50 text-gray-600 text-green-700 hover:text-green-600"
          >
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
        <h1 class="mb-2 text-4xl font-bold lg:text-5xl">CoutureCorner Blog</h1>
        <p class="text-lg lg:text-xl">
          Latest insights and trends from the fashion world.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-8">
      <h2 class="mb-6 text-3xl font-semibold">Fashion Articles</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article class="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-4 text-xl font-semibold">
            The Evolution of Streetwear
          </h3>
          <p class="mb-4 text-gray-700">
            Explore the journey of streetwear fashion and how it has shaped the
            industry over the years.
          </p>
          <a href="#" class="text-green-600 hover:text-green-700">
            Read More
          </a>
        </article>

        <article class="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-4 text-xl font-semibold">
            Exclusive Interview with Designer XYZ
          </h3>
          <p class="mb-4 text-gray-700">
            A sit-down with the renowned designer XYZ to discuss their latest
            collection and future plans.
          </p>
          <a href="#" class="text-green-600 hover:text-green-700">
            Read More
          </a>
        </article>

        <article class="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-4 text-xl font-semibold">
            Analyzing Fashion Week Trends
          </h3>
          <p class="mb-4 text-gray-700">
            A detailed analysis of the standout trends from this year's Fashion
            Week and what to expect next season.
          </p>
          <a href="#" class="text-green-600 hover:text-green-700">
            Read More
          </a>
        </article>
      </div>
    </section>

    <section class="container mx-auto px-6 py-8">
      <h2 class="mb-6 text-3xl font-semibold">How-to Guides</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article class="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-4 text-xl font-semibold">
            Starting Your Fashion Brand
          </h3>
          <p class="mb-4 text-gray-700">
            A step-by-step guide on launching your own fashion label, from
            concept to execution.
          </p>
          <a href="#" class="text-green-600 hover:text-green-700">
            Read Guide
          </a>
        </article>

        <article class="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-4 text-xl font-semibold">
            Sewing Techniques for Beginners
          </h3>
          <p class="mb-4 text-gray-700">
            Master the basics of sewing with these essential techniques for
            starting your fashion creations.
          </p>
          <a href="#" class="text-green-600 hover:text-green-700">
            Read Guide
          </a>
        </article>

        <article class="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-4 text-xl font-semibold">Sustainable Fabrics 101</h3>
          <p class="mb-4 text-gray-700">
            Understand the importance of sustainable fabrics and how to
            incorporate them into your designs.
          </p>
          <a href="#" class="text-green-600 hover:text-green-700">
            Read Guide
          </a>
        </article>
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
