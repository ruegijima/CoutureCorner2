import { Link } from "react-router-dom";
export const DesignerDashboard = () => (
  <main>
    <style>
      {`
      .dashboard-header {
        background-color: #f4f4f4; /* Light grey for header background */
        position: fixed; /* Fixed position */
        top: 0; /* Align to the top */
        left: 0; /* Align to the left */
        width: 100%; /* Full width */
        z-index: 1000; /* Make sure it's above other elements */
      }

      body {
        padding-top: 68px; /* Height of the header plus some extra space */
      }
      .dashboard-welcome {
        background: #ffffff; /* White background for welcome message */
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -4px rgba(0, 0, 0, 0.1); /* Tailwind shadow-lg */
      }
      .stat-card {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      }
      .stat-card:hover {
        transform: translateY(-5px); /* Slight lift effect on hover */
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04); /* Tailwind shadow-2xl */
      }
      .icon {
        color: #38a169; /* Tailwind green-600 */
      }
      .logo {
        height: 50px; /* Adjust as needed */
        /* Additional styling if necessary */
      }
      .brand-name {
        font-size: 1.75rem; /* Example size */
        font-weight: bold; /* Bold font */
        color: #38a169; /* Tailwind green-600 */
        margin-left: 5rem; /* Adds space to the left of the brand name */
}`}
    </style>
    <div className="dashboard-header flex items-center justify-between p-4 shadow">
      <Link to="/" className="flex items-center">
        <img src="/LOGO.webp" alt="CoutureCorner Logo" className="logo h-10" />
        <span className="brand-name ml-2 text-2xl font-bold text-green-600">
          CoutureCorner
        </span>
      </Link>
      <div className="space-x-4">
        <Link
          to="/contact"
          className="text-green-600 transition duration-300 hover:text-green-800"
        >
          Help/Support
        </Link>
        <Link
          to="/"
          className="text-green-600 transition duration-300 hover:text-green-800"
        >
          Logout
        </Link>
        <Link
          to="javascript:void(0);"
          id="logout-link"
          className="text-green-600 transition duration-300 hover:text-green-800"
        >
          Logout
        </Link>
      </div>
    </div>

    <div className="dashboard-welcome mx-8 my-4 rounded p-6 text-center">
      <h2 className="mb-2 text-2xl font-semibold" id="welcome-message">
        Welcome, Designer Name!
      </h2>
      <p className="text-md">Here&apos;s your latest activity overview.</p>
    </div>

    <div className="mx-8 my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="stat-card rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Profile Views
            </h3>
            <div className="text-2xl font-bold">1,234</div>
          </div>
          <i className="fas fa-eye fa-2x icon"></i>
        </div>
      </div>

      <div className="stat-card rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Ongoing Collaborations
            </h3>
            <div className="text-2xl font-bold">5</div>
          </div>
          <i className="fas fa-handshake fa-2x icon"></i>
        </div>
      </div>

      <div className="stat-card rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Recent Sales
            </h3>
            <div className="text-2xl font-bold">12</div>
          </div>
          <i className="fas fa-dollar-sign fa-2x icon"></i>
        </div>
      </div>

      <div className="stat-card rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">More Stats</h3>
            <div className="text-2xl font-bold">...</div>
          </div>
          <i className="fas fa-chart-bar fa-2x icon"></i>
        </div>
      </div>
    </div>

    <div className="mx-8 my-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-3 text-lg font-semibold text-gray-700">
            Profile Management
          </h3>
          <p>
            Edit your profile, update your bio, manage your portfolio, and more.
          </p>
          <Link
            to="/edit-profile"
            className="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            Edit Profile
          </Link>
        </div>

        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-3 text-lg font-semibold text-gray-700">
            Portfolio Management
          </h3>
          <p>Upload new items and edit your existing portfolio pieces.</p>
          <Link
            to="/manage-portfolio"
            className="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            Manage Portfolio
          </Link>
        </div>

        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-3 text-lg font-semibold text-gray-700">
            Collaboration Requests
          </h3>
          <p>Review and manage your collaboration requests.</p>
          <Link
            to="/manage-requests"
            className="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            Manage Requests
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-3 text-lg font-semibold text-gray-700">
            Collection Management
          </h3>
          <p>Add new items, edit existing ones, and manage your collection.</p>
          <Link
            to="/manage-collection"
            className="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            Manage Collection
          </Link>
        </div>

        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-3 text-lg font-semibold text-gray-700">
            Messages/Inbox
          </h3>
          <p>Communicate with shoppers and other designers.</p>
          <Link
            to="/messages"
            className="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            View Messages
          </Link>
        </div>

        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-3 text-lg font-semibold text-gray-700">
            Notifications
          </h3>
          <p>Stay updated with recent activities and alerts.</p>
          <Link
            to="/notifications"
            className="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
          >
            View Notifications
          </Link>
        </div>
      </div>
    </div>
  </main>
);
