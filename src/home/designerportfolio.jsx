import { Link } from "react-router-dom";
export const Designerportfolio = () => (
  <main>
    <style>
      {`/* The Modal (background) */
      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        padding-top: 60px;
      }

      /* Modal Content/Box */
      .modal-content {
        background-color: #fefefe;
        margin: 5% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
        max-width: 500px; /* Maximum width */
      }

      /* The Close Button */
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }

      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }`}
    </style>
    <section className="container mx-auto p-6">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          src="/designer-hero-image.webp"
          alt="Designer Portrait"
          className="h-96 w-full object-cover"
        />
        <div className="p-6">
          <h2 className="mb-8 text-center text-4xl font-semibold">Profile</h2>

          <div className="text-center">
            <img
              src="/Team1.webp"
              alt="Designer's Name"
              className="mx-auto mb-4 h-32 w-32 rounded-full"
            />
          </div>

          <div className="text-center">
            <h3 className="mb-2 text-4xl font-semibold">
              Designer&apos;s Name
            </h3>

            <p>
              Brand Name: <strong>Designer&apos;s Brand</strong>
            </p>
            <p>
              Located in: <strong>City, Country</strong>
            </p>
            <p>
              Experience: <strong>10 years in fashion design</strong>
            </p>
            <p>
              Design Philosophy: <em>Sustainable fashion is the future.</em>
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

      <div className="mt-4">
        <h2 className="mb-2 text-2xl font-semibold">Portfolio</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <Link
              to="/project-detail"
              className="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-1.webp"
                alt="Work Item"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Work Title</h3>
              <p className="text-sm text-gray-600">Description of the work.</p>
            </Link>
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
            <Link
              to="/project-detail"
              className="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-2.webp"
                alt="Work Item"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Work Title</h3>
              <p className="text-sm text-gray-600">Description of the work.</p>
            </Link>

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
            <Link
              to="/project-detail"
              className="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-3.webp"
                alt="Work Item"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Work Title</h3>
              <p className="text-sm text-gray-600">Description of the work.</p>
            </Link>

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
            <Link
              to="/project-detail"
              className="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-3.webp"
                alt="Work Item"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Work Title</h3>
              <p className="text-sm text-gray-600">Description of the work.</p>
            </Link>

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
            <Link
              to="/project-detail"
              className="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-2.webp"
                alt="Work Item"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Work Title</h3>
              <p className="text-sm text-gray-600">Description of the work.</p>
            </Link>

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
            <Link
              to="/project-detail"
              className="block rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src="/portfolio-item-1.webp"
                alt="Work Item"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Work Title</h3>
              <p className="text-sm text-gray-600">Description of the work.</p>
            </Link>

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
      </div>
      <div className="mt-4">
        <h2 className="mb-2 text-2xl font-semibold">Get In Touch</h2>
        <p>Email: designer@example.com</p>
        <p>Phone: +236784794932</p>
        <div className="mt-4 flex">
          <Link to="#" className="mx-2 text-gray-600 hover:text-green-600">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#" className="mx-2 text-gray-600 hover:text-green-600">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" className="mx-2 text-gray-600 hover:text-green-600">
            <i className="fab fa-twitter"></i>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="mb-2 text-2xl font-semibold">Testimonials</h2>
        <div className="italic text-gray-600">
          Incredible designer with an eye for detail... - Client&apos;s Name
        </div>
      </div>
    </section>
  </main>
);

export const Contactmodal = () => (
  <div id="contactModal" className="modal">
    <div className="modal-content">
      <span className="close">&times;</span>
      <form
        action="YOUR_SERVER_SIDE_ENDPOINT"
        method="POST"
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold text-gray-900">
          Contact Designer
        </h2>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="block w-full rounded border p-2"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="block w-full rounded border p-2"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="block w-full rounded border p-2"
          ></textarea>
        </div>

        <div
          className="g-recaptcha"
          data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
        ></div>

        <div>
          <input
            type="submit"
            value="Send Message"
            className="cursor-pointer rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          />
        </div>
      </form>
    </div>
  </div>
);
