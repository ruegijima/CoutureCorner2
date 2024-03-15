export const Designerportfolio = () => (
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

    <section class="container mx-auto p-6">
      <div class="overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          src="/designer-hero-image.webp"
          alt="Designer Portrait"
          class="h-96 w-full object-cover"
        />
        <div class="p-6">
          <h2 class="mb-8 text-center text-4xl font-semibold">Profile</h2>

          <div class="text-center">
            <img
              src="/Team1.webp"
              alt="Designer's Name"
              class="mx-auto mb-4 h-32 w-32 rounded-full"
            />
          </div>

          <div class="text-center">
            <h3 class="mb-2 text-4xl font-semibold">Designer's Name</h3>

            <p>
              Brand Name: <strong>Designer's Brand</strong>
            </p>
            <p>
              Located in: <strong>City, Country</strong>
            </p>
            <p>
              Experience: <strong>10 years in fashion design</strong>
            </p>
            <p>
              Design Philosophy: <em>"Sustainable fashion is the future."</em>
            </p>
            <p>
              Achievements: <strong>Awarded Best Upcoming Designer 2023</strong>
            </p>
            <p>
              Previous Collaborations: <strong>Brand X, Celebrity Y</strong>
            </p>
            <p>
              Inspirations:{" "}
              <strong>Nature, Modern Art, Cultural Heritage</strong>
            </p>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <h2 class="mb-2 text-2xl font-semibold">Portfolio</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-lg bg-white p-4 shadow-lg">
            <a
              href="project-detail.html"
              class="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-1.webp"
                alt="Work Item"
                class="mb-4 rounded-lg"
              />
              <h3 class="text-lg font-semibold">Work Title</h3>
              <p class="text-sm text-gray-600">Description of the work.</p>
            </a>
            <div class="mt-4 flex items-center justify-between">
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-heart"></i> Like
              </button>
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-bookmark"></i> Save
              </button>
              <button class="contactBtn text-green-600 hover:text-green-800">
                <i class="far fa-envelope"></i> Contact
              </button>
            </div>
          </div>
          <div class="rounded-lg bg-white p-4 shadow-lg">
            <a
              href="project-detail.html"
              class="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-2.webp"
                alt="Work Item"
                class="mb-4 rounded-lg"
              />
              <h3 class="text-lg font-semibold">Work Title</h3>
              <p class="text-sm text-gray-600">Description of the work.</p>
            </a>

            <div class="mt-4 flex items-center justify-between">
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-heart"></i> Like
              </button>
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-bookmark"></i> Save
              </button>
              <button class="contactBtn text-green-600 hover:text-green-800">
                <i class="far fa-envelope"></i> Contact
              </button>
            </div>
          </div>
          <div class="rounded-lg bg-white p-4 shadow-lg">
            <a
              href="project-detail.html"
              class="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-3.webp"
                alt="Work Item"
                class="mb-4 rounded-lg"
              />
              <h3 class="text-lg font-semibold">Work Title</h3>
              <p class="text-sm text-gray-600">Description of the work.</p>
            </a>

            <div class="mt-4 flex items-center justify-between">
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-heart"></i> Like
              </button>
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-bookmark"></i> Save
              </button>
              <button class="contactBtn text-green-600 hover:text-green-800">
                <i class="far fa-envelope"></i> Contact
              </button>
            </div>
          </div>
          <div class="rounded-lg bg-white p-4 shadow-lg">
            <a
              href="project-detail.html"
              class="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-3.webp"
                alt="Work Item"
                class="mb-4 rounded-lg"
              />
              <h3 class="text-lg font-semibold">Work Title</h3>
              <p class="text-sm text-gray-600">Description of the work.</p>
            </a>

            <div class="mt-4 flex items-center justify-between">
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-heart"></i> Like
              </button>
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-bookmark"></i> Save
              </button>
              <button class="contactBtn text-green-600 hover:text-green-800">
                <i class="far fa-envelope"></i> Contact
              </button>
            </div>
          </div>
          <div class="rounded-lg bg-white p-4 shadow-lg">
            <a
              href="project-detail.html"
              class="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-2.webp"
                alt="Work Item"
                class="mb-4 rounded-lg"
              />
              <h3 class="text-lg font-semibold">Work Title</h3>
              <p class="text-sm text-gray-600">Description of the work.</p>
            </a>

            <div class="mt-4 flex items-center justify-between">
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-heart"></i> Like
              </button>
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-bookmark"></i> Save
              </button>
              <button class="contactBtn text-green-600 hover:text-green-800">
                <i class="far fa-envelope"></i> Contact
              </button>
            </div>
          </div>
          <div class="rounded-lg bg-white p-4 shadow-lg">
            <a
              href="project-detail.html"
              class="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-1.webp"
                alt="Work Item"
                class="mb-4 rounded-lg"
              />
              <h3 class="text-lg font-semibold">Work Title</h3>
              <p class="text-sm text-gray-600">Description of the work.</p>
            </a>

            <div class="mt-4 flex items-center justify-between">
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-heart"></i> Like
              </button>
              <button class="text-green-600 hover:text-green-800">
                <i class="far fa-bookmark"></i> Save
              </button>
              <button class="contactBtn text-green-600 hover:text-green-800">
                <i class="far fa-envelope"></i> Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="mb-2 text-2xl font-semibold">Get In Touch</h2>
        <p>Email: designer@example.com</p>
        <p>Phone: +236784794932</p>
        <div class="mt-4 flex">
          <a href="#" class="mx-2 text-gray-600 hover:text-green-600">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="mx-2 text-gray-600 hover:text-green-600">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="mx-2 text-gray-600 hover:text-green-600">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="mb-2 text-2xl font-semibold">Testimonials</h2>
        <div class="italic text-gray-600">
          "Incredible designer with an eye for detail..." - Client's Name
        </div>
      </div>
    </section>

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

export const Contactmodal = () => (
    <div id="contactModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <form
        action="YOUR_SERVER_SIDE_ENDPOINT"
        method="POST"
        class="space-y-4"
      >
        <h2 class="text-lg font-semibold text-gray-900">Contact Designer</h2>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            class="block w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            class="block w-full p-2 border rounded"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            class="block w-full p-2 border rounded"
          ></textarea>
        </div>

        <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>

        <div>
          <input
            type="submit"
            value="Send Message"
            class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
          />
        </div>
      </form>
    </div>
  </div>

)
