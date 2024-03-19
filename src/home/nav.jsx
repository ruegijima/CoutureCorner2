import { Link } from "react-router-dom";
export const Nav = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-lg">
    <div className="container mx-auto flex items-center justify-between px-6 py-3">
      <Link to="/" className="flex items-center">
        <img
          src="/LOGO.webp"
          alt="Logo"
          className="mr-1"
          style={{ height: "50px" }}
        />
        <span
          className="text-xl font-bold text-green-600"
          style={{ marginLeft: "0" }}
        >
          CoutureCorner
        </span>
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/home" className="text-gray-600 hover:text-green-600">
          Home
        </Link>
        <Link to="/shop" className="text-gray-600 hover:text-green-600">
          Shop
        </Link>
        <Link to="/designers" className="text-gray-600 hover:text-green-600">
          Designers
        </Link>
        <Link to="/events" className="text-gray-600 hover:text-green-600">
          Events
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-green-600">
          About Us
        </Link>
        <Link to="/contact" className="text-gray-600 hover:text-green-600">
          Contact Us
        </Link>
        <Link to="/resources" className="text-gray-600 hover:text-green-600">
          Resources
        </Link>
        <Link to="/community" className="text-gray-600 hover:text-green-600">
          Community
        </Link>
        <Link to="/blog" className="text-gray-600 hover:text-green-600">
          Blog
        </Link>
        <Link
          to="/designer-profile-create"
          className="rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
        >
          Become A Designer
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/profile" className="mx-2 text-gray-600 hover:text-green-600">
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/cart" className="mx-2 text-gray-600 hover:text-green-600">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </div>
  </nav>
);
