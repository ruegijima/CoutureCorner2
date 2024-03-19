import { Link } from "react-router-dom";
export const Designers = () => (
  <main>
    <style>
      {`.modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
        padding-top: 60px;
      }

      .modal-content {
        background-color: #fefefe;
        margin: 5% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 100%;
        max-width: 500px;
      }

      .close {
        color: #000;
        float: right;
        font-size: 1.5rem;
        font-weight: 600;
      }

      .close:hover,
      .close:focus {
        color: #555;
        text-decoration: none;
        cursor: pointer;
      }`}
    </style>
    <div className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-6">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-full border px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="absolute right-0 top-0 mr-4 mt-3">
            <i className="fas fa-search text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
    <section className="container mx-auto p-6">
      <h2 className="mb-8 text-center text-4xl font-semibold">
        Designer Portfolios
      </h2>
      <p className="mb-8 text-center text-gray-600">
        Discover designers for tailor-made creations and collaborative ventures.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow-lg">
          <Link to="/designer-portfolio" className="block">
            <img
              src="/DP4.webp"
              alt="Designer Work"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Designer&apos;s Name</h3>
          </Link>
          <p className="text-sm text-gray-600">
            Brief description or title of the work
          </p>
          <div className="mt-4 flex items-center justify-between">
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-heart"></i> Like
            </button>
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-bookmark"></i> Save
            </button>
            <button className="contactBtn text-green-600 hover:text-green-800">
              <i className="far fa-envelope"></i> Contact
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg">
          <Link to="/designer-portfolio" className="block">
            <img
              src="/DP2.webp"
              alt="Designer Work"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Designer&apos;s Name</h3>
          </Link>
          <p className="text-sm text-gray-600">
            Brief description or title of the work
          </p>

          <div className="mt-4 flex items-center justify-between">
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-heart"></i> Like
            </button>
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-bookmark"></i> Save
            </button>
            <button className="contactBtn text-green-600 hover:text-green-800">
              <i className="far fa-envelope"></i> Contact
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg">
          <Link to="/designer-portfolio" className="block">
            <img
              src="/DP3.webp"
              alt="Designer Work"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Designer&apos;s Name</h3>
          </Link>
          <p className="text-sm text-gray-600">
            Brief description or title of the work
          </p>

          <div className="mt-4 flex items-center justify-between">
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-heart"></i> Like
            </button>
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-bookmark"></i> Save
            </button>
            <button className="contactBtn text-green-600 hover:text-green-800">
              <i className="far fa-envelope"></i> Contact
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg">
          <Link to="/designer-portfolio" className="block">
            <img
              src="/DP4.webp"
              alt="Designer Work"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Designer&apos;s Name</h3>
          </Link>
          <p className="text-sm text-gray-600">
            Brief description or title of the work
          </p>

          <div className="mt-4 flex items-center justify-between">
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-heart"></i> Like
            </button>
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-bookmark"></i> Save
            </button>
            <button className="contactBtn text-green-600 hover:text-green-800">
              <i className="far fa-envelope"></i> Contact
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg">
          <Link to="/designer-portfolio" className="block">
            <img
              src="/DP5.webp"
              alt="Designer Work"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Designer&apos;s Name</h3>
          </Link>
          <p className="text-sm text-gray-600">
            Brief description or title of the work
          </p>

          <div className="mt-4 flex items-center justify-between">
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-heart"></i> Like
            </button>
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-bookmark"></i> Save
            </button>
            <button className="contactBtn text-green-600 hover:text-green-800">
              <i className="far fa-envelope"></i> Contact
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg">
          <Link to="/designer-portfolio" className="block">
            <img
              src="/DP6.webp"
              alt="Designer Work"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">Designer&apos;s Name</h3>
          </Link>
          <p className="text-sm text-gray-600">
            Brief description or title of the work
          </p>

          <div className="mt-4 flex items-center justify-between">
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-heart"></i> Like
            </button>
            <button className="text-green-600 hover:text-green-800">
              <i className="far fa-bookmark"></i> Save
            </button>
            <button className="contactBtn text-green-600 hover:text-green-800">
              <i className="far fa-envelope"></i> Contact
            </button>
          </div>
        </div>
      </div>
    </section>

    <div
      id="collaborationModal"
      className="fixed left-0 top-0 z-10 hidden h-full w-full overflow-auto bg-black bg-opacity-40"
    >
      <div className="mx-auto mt-20 w-1/2 rounded-lg bg-white p-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Request Collaboration</h3>
          <button onClick="closeModal()" className="text-black">
            &times;
          </button>
        </div>
        <form id="collaborationForm">
          <div className="mb-4">
            <label
              htmlFor="designerName"
              className="mb-2 block text-sm text-gray-700"
            >
              Designer&apos;s Name:
            </label>
            <input
              type="text"
              id="designerName"
              name="designerName"
              required
              className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="projectDescription"
              className="mb-2 block text-sm text-gray-700"
            >
              Project Description:
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              required
              className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            ></textarea>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="focus:shadow-outline rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
);
