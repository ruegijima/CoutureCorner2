export const DesignerProfileCreate = () => (
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
            class="rounded-md bg-green-50 bg-green-600 px-4 py-2 text-green-700 text-white transition-colors hover:bg-green-700"
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
      <form method="POST" enctype="multipart/form-data" class="space-y-6">
        <div class="flex flex-wrap gap-4 md:flex-nowrap">
          <div class="flex-1 rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-4 text-2xl font-semibold">Brand Details</h2>
            <div class="space-y-4">
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Profile Picture Upload:
                </label>
                <input
                  type="file"
                  name="profile_picture"
                  accept="image/*"
                  required
                  class="block w-full text-sm text-gray-500
              file:mr-4 file:rounded-full file:border-0
              file:bg-green-50 file:px-4
              file:py-2 file:text-sm
              file:font-semibold file:text-green-700
              hover:file:bg-green-100
            "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="designer_name"
                  placeholder="Designer's Name"
                  required
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div class="mb-4">
                <input
                  type="text"
                  name="brand_name"
                  placeholder="Brand Name"
                  required
                  class="w-full rounded border p-2"
                />
              </div>
              <div class="mb-4">
                <textarea
                  name="philosophy"
                  placeholder="Design Philosophy"
                  required
                  class="h-24 w-full rounded border p-2"
                ></textarea>
              </div>
              <div class="mb-4">
                <textarea
                  name="bio"
                  placeholder="Bio"
                  required
                  class="h-24 w-full rounded border p-2"
                ></textarea>
              </div>
              <div class="mb-4">
                <input
                  type="number"
                  name="years_experience"
                  min="0"
                  placeholder="Years of Experience"
                  required
                  class="w-full rounded border p-2"
                />
              </div>
              <div class="mb-4">
                <input
                  type="url"
                  name="instagram_url"
                  placeholder="Instagram URL"
                  class="w-full rounded border p-2"
                />
              </div>
              <div class="mb-4">
                <input
                  type="url"
                  name="twitter_url"
                  placeholder="Twitter URL"
                  class="w-full rounded border p-2"
                />
              </div>
              <div class="mb-4">
                <input
                  type="url"
                  name="facebook_url"
                  placeholder="Facebook URL"
                  class="w-full rounded border p-2"
                />
              </div>
            </div>
          </div>

          <div class="mt-4 flex-1 rounded-lg bg-white p-6 shadow-md md:mt-0">
            <h2 class="mb-4 text-2xl font-semibold">Portfolio</h2>
            <div class="space-y-4">
              <div class="rounded border p-2">
                <div class="flex items-center space-x-2">
                  <img
                    src="/project1.webp"
                    alt="Project Image"
                    class="h-20 w-20 rounded object-cover"
                  />
                  <div>
                    <h3 class="font-semibold">Project Title</h3>
                    <p class="text-sm text-gray-600">Project Description</p>
                    <p>
                      Number of Products: <span class="font-semibold">3</span>
                    </p>
                    <p>
                      Tags:{" "}
                      <span class="font-semibold">
                        Valentine's, Spring Collection
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  onclick="openModal()"
                  class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                >
                  Add New Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="addProjectModal"
          class="fixed left-0 top-0 z-10 hidden h-full w-full overflow-auto bg-black bg-opacity-50"
        />
        <div class="modal-content mx-auto mt-10 w-3/4 rounded bg-white p-5 shadow-lg md:w-1/2 lg:w-1/3">
          <span
            onclick="closeModal()"
            class="float-right cursor-pointer text-xl"
          >
            &times;
          </span>
          <h2 class="mb-4 text-2xl font-semibold">Add Project</h2>
          <form id="addProjectForm" />
          <div class="mb-4">
            <label class="mb-2 block">Project Title:</label>
            <input
              type="text"
              name="project_title"
              required
              class="w-full rounded border p-2"
            />
          </div>
          <div class="mb-4">
            <label class="mb-2 block">Project Description:</label>
            <textarea
              name="project_description"
              required
              class="h-24 w-full rounded border p-2"
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="mb-2 block">Select Tags:</label>
            <div class="flex flex-wrap gap-2">
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="tags"
                  value="valentines"
                  class="form-checkbox"
                />
                <span class="ml-2">Valentine's</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="tags"
                  value="spring"
                  class="form-checkbox"
                />
                <span class="ml-2">Spring Collection</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="tags"
                  value="summer"
                  class="form-checkbox"
                />
                <span class="ml-2">Summer Collection</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="tags"
                  value="winter"
                  class="form-checkbox"
                />
                <span class="ml-2">Winter Collection</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="tags"
                  value="fall"
                  class="form-checkbox"
                />
                <span class="ml-2">Fall Collection</span>
              </label>
            </div>
          </div>

          <div class="mb-4">
            <label class="mb-2 block">Select Image:</label>
            <input
              type="file"
              name="project_image"
              accept="image/*"
              class="w-full rounded border p-2"
            />
          </div>

          <h3 class="mb-4 text-xl font-semibold">Products</h3>
          <div id="products-section" class="mb-4">
            <div class="product mb-4 rounded border p-4">
              <img
                src="/Products1.webp"
                alt="Product Name"
                class="h-20 w-20 rounded object-cover"
              />
              <div>
                <h4 class="font-semibold">Product Name</h4>
                <p>Description</p>
                <p>$Price</p>
              </div>
            </div>
          </div>

          <div class="mt-4 flex flex-col items-center space-y-4" />
          <button
            id="addProductBtn"
            class="mx-auto rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            style="width: 200px;"
          >
            Add New Product
          </button>

          <div
            id="addProductModal"
            class="fixed inset-0 z-50 hidden bg-gray-500 bg-opacity-75 transition-opacity"
          >
            <div class="flex h-full items-center justify-center">
              <div class="relative mx-auto max-w-md space-y-4 rounded-lg bg-white p-6">
                <span
                  id="closeProductModal"
                  class="close-button absolute right-0 top-0 mr-2 mt-2 cursor-pointer"
                >
                  &times;
                </span>
                <h3 class="mb-4 text-center text-xl font-semibold">
                  Add Product
                </h3>
                <form id="addProductForm">
                  <input
                    type="text"
                    name="product_name"
                    placeholder="Product Name"
                    required
                    class="mb-4 w-full rounded border p-2"
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    required
                    class="mb-4 w-full rounded border p-2"
                  ></textarea>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    required
                    class="mb-4 w-full rounded border p-2"
                  />
                  <div class="mb-4">
                    <span>Select Category:</span>
                    <div class="flex flex-wrap">
                      <label class="mr-2 inline-flex items-center">
                        <input
                          type="checkbox"
                          name="categories"
                          value="new_arrivals"
                          class="form-checkbox h-5 w-5 text-green-600"
                        />
                        <span class="ml-2">New Arrivals</span>
                      </label>
                      <label class="mr-2 inline-flex items-center">
                        <input
                          type="checkbox"
                          name="categories"
                          value="men"
                          class="form-checkbox h-5 w-5 text-green-600"
                        />
                        <span class="ml-2">Men</span>
                      </label>
                      <label class="mr-2 inline-flex items-center">
                        <input
                          type="checkbox"
                          name="categories"
                          value="women"
                          class="form-checkbox h-5 w-5 text-green-600"
                        />
                        <span class="ml-2">Women</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="categories"
                          value="jewelry"
                          class="form-checkbox h-5 w-5 text-green-600"
                        />
                        <span class="ml-2">Jewelry</span>
                      </label>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="mb-2 block">Select Image:</label>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      required
                      class="w-full rounded border p-2"
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                  >
                    Create Product
                  </button>
                </form>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Create Project
          </button>
        </div>
        <div class="mt-6 flex justify-center">
          <button
            type="submit"
            class="rounded bg-green-500 px-6 py-2 font-bold text-white hover:bg-green-700"
          >
            Save Profile
          </button>
        </div>
      </form>
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
