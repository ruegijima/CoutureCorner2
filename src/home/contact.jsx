export const Contact = () => (
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
          <a
            href="contact.html"
            class="bg-green-50 text-gray-600 text-green-700 hover:text-green-600"
          >
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

    <section class="bg-green-600 py-10 text-center text-white lg:py-20">
      <div class="container mx-auto">
        <h1 class="mb-2 text-4xl font-bold lg:text-5xl">Contact Us</h1>
        <p class="text-lg lg:text-xl">
          We're here to help and answer any question you might have. We look
          forward to hearing from you.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-8">
      <div class="mb-8 flex flex-wrap justify-center text-center">
        <div class="w-full px-4 lg:w-1/2">
          <h2 class="mb-4 text-2xl font-semibold">Contact Information</h2>
          <p class="mb-4">
            Feel free to reach out to us through any of the following channels:
          </p>
          <p>
            <i class="fas fa-envelope mr-2"></i> email@couturecorner.com
          </p>
          <p>
            <i class="fas fa-phone mr-2"></i> +263 4 123 4567
          </p>
          <p>
            <i class="fas fa-map-marker-alt mr-2"></i> 123 Fashion Street,
            Harare, Zimbabwe
          </p>
          <p>
            <i class="fas fa-clock mr-2"></i> Mon - Fri, 9:00am - 5:00pm
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="w-full rounded-lg bg-white p-6 shadow-lg lg:w-1/2">
          <form action="#" method="POST">
            <div class="mb-4">
              <label
                for="name"
                class="mb-2 block text-sm font-bold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="mb-2 block text-sm font-bold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>
            <div class="mb-4">
              <label
                for="message"
                class="mb-2 block text-sm font-bold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              ></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="focus:shadow-outline rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
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
