export const Profile = () => (
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
          <a href="shop.html" class="text-gray-600 hover:text-green-600 ">
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
            class="mx-2 bg-green-50 text-gray-600 text-green-700 hover:text-green-600"
          >
            <i class="fas fa-user"></i>
          </a>
          <a href="cart.html" class="mx-2 text-gray-600 hover:text-green-600">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </nav>

    <section class="container mx-auto p-6">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="justify-between p-6 md:flex">
          <div class="border-r border-green-200 p-4 md:w-1/3">
            <h3 class="mb-3 text-lg font-semibold text-green-600">
              My Profile
            </h3>
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> johndoe@example.com
            </p>
            <a
              href="profile-edit.html"
              class="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
            >
              Edit Profile
            </a>
          </div>

          <div class="border-r border-green-200 p-4 md:w-1/3">
            <h3 class="mb-3 text-lg font-semibold text-green-600">
              My Collections
            </h3>

            <p>
              <i class="far fa-heart text-green-500"></i> Summer Collection
            </p>
            <p>
              <i class="far fa-bookmark text-green-500"></i> Winter Collection
            </p>
            <a
              href="collections.html"
              class="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
            >
              View Collections
            </a>
          </div>

          <div class="p-4 md:w-1/3">
            <h3 class="mb-3 text-lg font-semibold text-green-600">
              My Activity
            </h3>
            <p>
              <strong>Recent Order:</strong> #00123
            </p>
            <p>
              <strong>Collaboration:</strong> In Progress
            </p>
            <a
              href="orders.html"
              class="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
            >
              Order History
            </a>
            <a
              href="collaborations.html"
              class="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
            >
              Collaboration Statuses
            </a>
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
