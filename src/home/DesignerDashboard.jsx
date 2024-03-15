export const DesignerDashboard = () => (
  <main>
    <div class="dashboard-header flex items-center justify-between p-4 shadow">
      <a href="index.html" class="flex items-center">
        <img src="/LOGO.webp" alt="CoutureCorner Logo" class="logo h-10" />
        <span class="brand-name ml-2 text-2xl font-bold text-green-600">
          CoutureCorner
        </span>
      </a>
      <div class="space-x-4">
        <a
          href="/help"
          class="text-green-600 transition duration-300 hover:text-green-800"
        >
          Help/Support
        </a>
        <a
          href="index.html"
          class="text-green-600 transition duration-300 hover:text-green-800"
        >
          Logout
        </a>
        <a
          href="javascript:void(0);"
          id="logout-link"
          class="text-green-600 transition duration-300 hover:text-green-800"
        >
          Logout
        </a>
      </div>
    </div>

    <div class="dashboard-welcome mx-8 my-4 rounded p-6 text-center">
      <h2 class="mb-2 text-2xl font-semibold" id="welcome-message">
        Welcome, Designer Name!
      </h2>
      <p class="text-md">Here's your latest activity overview.</p>
    </div>

    <div class="mx-8 my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="stat-card rounded-lg bg-white p-6 shadow-lg">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Profile Views</h3>
            <div class="text-2xl font-bold">1,234</div>
          </div>
          <i class="fas fa-eye fa-2x icon"></i>
        </div>
      </div>

      <div class="stat-card rounded-lg bg-white p-6 shadow-lg">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">
              Ongoing Collaborations
            </h3>
            <div class="text-2xl font-bold">5</div>
          </div>
          <i class="fas fa-handshake fa-2x icon"></i>
        </div>
      </div>

      <div class="stat-card rounded-lg bg-white p-6 shadow-lg">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Recent Sales</h3>
            <div class="text-2xl font-bold">12</div>
          </div>
          <i class="fas fa-dollar-sign fa-2x icon"></i>
        </div>
      </div>

      <div class="stat-card rounded-lg bg-white p-6 shadow-lg">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">More Stats</h3>
            <div class="text-2xl font-bold">...</div>
          </div>
          <i class="fas fa-chart-bar fa-2x icon"></i>
        </div>
      </div>
    </div>

    <div class="mx-8 my-4">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-3 text-lg font-semibold text-gray-700">
            Profile Management
          </h3>
          <p>
            Edit your profile, update your bio, manage your portfolio, and more.
          </p>
          <a
            href="/edit-profile"
            class="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            Edit Profile
          </a>
        </div>

        <div class="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-3 text-lg font-semibold text-gray-700">
            Portfolio Management
          </h3>
          <p>Upload new items and edit your existing portfolio pieces.</p>
          <a
            href="/manage-portfolio"
            class="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            Manage Portfolio
          </a>
        </div>

        <div class="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-3 text-lg font-semibold text-gray-700">
            Collaboration Requests
          </h3>
          <p>Review and manage your collaboration requests.</p>
          <a
            href="/manage-requests"
            class="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            Manage Requests
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-3 text-lg font-semibold text-gray-700">
            Collection Management
          </h3>
          <p>Add new items, edit existing ones, and manage your collection.</p>
          <a
            href="/manage-collection"
            class="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            Manage Collection
          </a>
        </div>

        <div class="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-3 text-lg font-semibold text-gray-700">
            Messages/Inbox
          </h3>
          <p>Communicate with shoppers and other designers.</p>
          <a
            href="/messages"
            class="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            View Messages
          </a>
        </div>

        <div class="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 class="mb-3 text-lg font-semibold text-gray-700">
            Notifications
          </h3>
          <p>Stay updated with recent activities and alerts.</p>
          <a
            href="/notifications"
            class="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            View Notifications
          </a>
        </div>
      </div>
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
