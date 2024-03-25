import { Link } from "react-router-dom";
export const Footer = () => (
  <footer className="mt-auto border-t-2 border-green-200">
    <div className="container mx-auto px-6 py-5">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-6 md:mb-0">
          <Link
            to="/"
            className="text-lg font-bold text-green-600 hover:text-green-700"
          >
            CoutureCorner
          </Link>
          <p className="mt-2 text-xs text-gray-600">
            Fashion Showcase & Collaboration Platform
          </p>
        </div>

        <nav className="mb-2 flex flex-wrap items-center justify-center text-sm md:mb-0">
          <Link
            to="/about"
            className="m-2 text-green-600 hover:text-green-700 hover:underline"
          >
            About Us
          </Link>
          <Link
            to="/privacy-policy"
            className="m-2 text-green-600 hover:text-green-700 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="m-2 text-green-600 hover:text-green-700 hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="m-2 text-green-600 hover:text-green-700 hover:underline"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="m-2 text-green-600 hover:text-green-700 hover:underline"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center justify-center">
          <Link
            to="https://twitter.com/CoutureCorner"
            className="mx-2 text-gray-600 hover:text-green-600"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            to="https://facebook.com/CoutureCorner"
            className="mx-2 text-gray-600 hover:text-green-600"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            to="https://instagram.com/CoutureCorner"
            className="mx-2 text-gray-600 hover:text-green-600"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>

      <div className="mt-0 py-8 text-center">
        <p className="text-sm text-gray-600">
          © 2024 CoutureCorner. All Rights Reserved. Content may not be
          reproduced without permission.
        </p>
      </div>
    </div>
  </footer>
);
