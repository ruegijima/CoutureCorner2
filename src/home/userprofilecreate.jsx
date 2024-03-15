export const UserProfileCreate = () => (
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

    <section class="container mx-auto p-6">
      <div class="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-8 shadow-lg">
        <h2 class="mb-8 text-center text-3xl font-semibold text-gray-800">
          Complete Your Profile
        </h2>
        <form action="path_to_your_server_endpoint" method="POST">
          <div class="mb-4">
            <label class="mb-2 block">Full Name:</label>
            <input
              type="text"
              name="full_name"
              placeholder="John Doe"
              required
              class="w-full rounded border p-2"
            />
          </div>

          <div class="mb-4">
            <label class="mb-2 block">Home Address:</label>
            <input
              type="text"
              name="home_address"
              placeholder="1234 Street, City, Country"
              required
              class="w-full rounded border p-2"
            />
          </div>

          <div class="mb-4">
            <label class="mb-2 block">Bank Account Details:</label>
            <input
              type="text"
              name="bank_account"
              placeholder="Bank Name, Account Number"
              required
              class="w-full rounded border p-2"
            />
          </div>

          <div class="mb-4">
            <label class="mb-2 block">
              Mobile Money Account (e.g., EcoCash):
            </label>
            <input
              type="tel"
              name="mobile_money"
              placeholder="EcoCash Number"
              class="w-full rounded border p-2"
            />
          </div>

          <div class="mb-4">
            <label class="mb-2 block">Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              class="w-full rounded border p-2"
            />
          </div>

          <div class="mb-4">
            <label class="mb-2 block">Phone Number:</label>
            <input
              type="tel"
              name="phone_number"
              placeholder="+1234567890"
              required
              class="w-full rounded border p-2"
            />
          </div>

          <div class="mb-4">
            <label class="mb-2 block">
              Professional Website or Portfolio URL:
            </label>
            <input
              type="url"
              name="website_url"
              placeholder="http://www.yourwebsite.com"
              class="w-full rounded border p-2"
            />
          </div>

          <div class="mb-4">
            <label class="mb-2 block">Social Media Profile:</label>
            <input
              type="url"
              name="social_media_profile"
              placeholder="http://www.linkedin.com/in/yourprofile"
              class="w-full rounded border p-2"
            />
          </div>

          <div class="mb-4">
            <label class="mb-2 block">Date of Birth:</label>
            <input
              type="date"
              name="date_of_birth"
              required
              class="w-full rounded border p-2"
            />
          </div>

          <div class="mb-4">
            <label class="mb-2 block">National ID or Passport Number:</label>
            <input
              type="text"
              name="identification_number"
              placeholder="ID or Passport Number"
              required
              class="w-full rounded border p-2"
            />
          </div>

          <div class="text-center">
            <input
              type="submit"
              value="Save Profile"
              class="cursor-pointer rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            />
          </div>
        </form>
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
