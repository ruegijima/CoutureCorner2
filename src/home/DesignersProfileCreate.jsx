import { useState } from "react";

export function DesignerProfileCreate() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main>
      <style>
        {`.close-button {
    position: absolute;
    top: 1rem; /* adjust top spacing */
    right: 1rem; /* adjust right spacing */
    font-size: 1.5rem; /* adjust size if necessary */
    z-index: 10;
  }`}
      </style>
      <main className="container mx-auto p-6">
        <form className="space-y-6">
          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            <div className="flex-1 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold">Brand Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Profile Picture Upload:
                  </label>
                  <input
                    type="file"
                    name="profile_picture"
                    accept="image/*"
                    required
                    className="block w-full text-sm text-gray-500
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
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="brand_name"
                    placeholder="Brand Name"
                    required
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="philosophy"
                    placeholder="Design Philosophy"
                    required
                    className="h-24 w-full rounded border p-2"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <textarea
                    name="bio"
                    placeholder="Bio"
                    required
                    className="h-24 w-full rounded border p-2"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    name="years_experience"
                    min="0"
                    placeholder="Years of Experience"
                    required
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="url"
                    name="instagram_url"
                    placeholder="Instagram URL"
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="url"
                    name="twitter_url"
                    placeholder="Twitter URL"
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="url"
                    name="facebook_url"
                    placeholder="Facebook URL"
                    className="w-full rounded border p-2"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex-1 rounded-lg bg-white p-6 shadow-md md:mt-0">
              <h2 className="mb-4 text-2xl font-semibold">Portfolio</h2>
              <div className="space-y-4">
                <div className="rounded border p-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/project1.webp"
                      alt="Project Image"
                      className="h-20 w-20 rounded object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">Project Title</h3>
                      <p className="text-sm text-gray-600">
                        Project Description
                      </p>
                      <p>
                        Number of Products:{" "}
                        <span className="font-semibold">3</span>
                      </p>
                      <p>
                        Tags:{" "}
                        <span className="font-semibold">
                          Valentine&apos;s, Spring Collection
                        </span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
                    className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                  >
                    Add New Project
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="rounded bg-green-500 px-6 py-2 font-bold text-white hover:bg-green-700"
            >
              Save Profile
            </button>
          </div>
        </form>
      </main>
      {showModal && <AddProject closeModal={() => setShowModal(false)} />}
    </main>
  );
}

function AddProject({ closeModal }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      id="addProjectModal"
      className="fixed left-0 top-0 z-50 h-full w-full overflow-auto bg-black bg-opacity-50"
    >
      <div className="modal-content mx-auto mt-10 w-3/4 rounded bg-white p-5 shadow-lg md:w-1/2 lg:w-1/3">
        <span
          onClick={() => closeModal()}
          className="float-right cursor-pointer text-xl"
        >
          &times;
        </span>
        <h2 className="mb-4 text-2xl font-semibold">Add Project</h2>
        <form id="addProjectForm" />
        <div className="mb-4">
          <label className="mb-2 block">Project Title:</label>
          <input
            type="text"
            name="project_title"
            required
            className="w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Project Description:</label>
          <textarea
            name="project_description"
            required
            className="h-24 w-full rounded border p-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Select Tags:</label>
          <div className="flex flex-wrap gap-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="valentines"
                className="form-checkbox"
              />
              <span className="ml-2">Valentine&apos;s</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="spring"
                className="form-checkbox"
              />
              <span className="ml-2">Spring Collection</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="summer"
                className="form-checkbox"
              />
              <span className="ml-2">Summer Collection</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="winter"
                className="form-checkbox"
              />
              <span className="ml-2">Winter Collection</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="fall"
                className="form-checkbox"
              />
              <span className="ml-2">Fall Collection</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 block">Select Image:</label>
          <input
            type="file"
            name="project_image"
            accept="image/*"
            className="w-full rounded border p-2"
          />
        </div>

        <h3 className="mb-4 text-xl font-semibold">Products</h3>
        <div id="products-section" className="mb-4">
          <div className="product mb-4 rounded border p-4">
            <img
              src="/Products1.webp"
              alt="Product Name"
              className="h-20 w-20 rounded object-cover"
            />
            <div>
              <h4 className="font-semibold">Product Name</h4>
              <p>Description</p>
              <p>$Price</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center space-y-8">
          <button
            id="addProductBtn"
            onClick={() => setShowModal(true)}
            className="mx-auto rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            style={{
              width: "200px",
            }}
          >
            Add New Product
          </button>

          <button
            type="submit"
            className="mt-10 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Create Project
          </button>
        </div>
      </div>
      {showModal && (
        <AddProduct closeProductModal={() => setShowModal(false)} />
      )}
    </div>
  );
}

function AddProduct({ closeProductModal }) {
  return (
    <div
      id="addProductModal"
      className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity"
    >
      <div className="flex h-full items-center justify-center">
        <div className="relative mx-auto max-w-md space-y-4 rounded-lg bg-white p-6">
          <span
            id="closeProductModal"
            onClick={() => closeProductModal()}
            className="close-button absolute right-0 top-0 mr-2 mt-2 cursor-pointer"
          >
            &times;
          </span>
          <h3 className="mb-4 text-center text-xl font-semibold">
            Add Product
          </h3>
          <form id="addProductForm">
            <input
              type="text"
              name="product_name"
              placeholder="Product Name"
              required
              className="mb-4 w-full rounded border p-2"
            />
            <textarea
              name="description"
              placeholder="Description"
              required
              className="mb-4 w-full rounded border p-2"
            ></textarea>
            <input
              type="number"
              name="price"
              placeholder="Price"
              required
              className="mb-4 w-full rounded border p-2"
            />
            <div className="mb-4">
              <span>Select Category:</span>
              <div className="flex flex-wrap">
                <label className="mr-2 inline-flex items-center">
                  <input
                    type="checkbox"
                    name="categories"
                    value="new_arrivals"
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">New Arrivals</span>
                </label>
                <label className="mr-2 inline-flex items-center">
                  <input
                    type="checkbox"
                    name="categories"
                    value="men"
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Men</span>
                </label>
                <label className="mr-2 inline-flex items-center">
                  <input
                    type="checkbox"
                    name="categories"
                    value="women"
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Women</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="categories"
                    value="jewelry"
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Jewelry</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="mb-2 block">Select Image:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                required
                className="w-full rounded border p-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
