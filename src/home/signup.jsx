import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api";
import notification from "../components/notification";

export function Signup() {
  const navigate = useNavigate();
  return (
    <main>
      <style>
        {`body {
        font-family: "Montserrat", sans-serif;
        background-color: #EDF2F7; /* Chosen color */
        background-size: cover;
        background-position: center;
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .form-container {
        background: rgba(255, 255, 255, 0.85); /* Slight transparency */
        padding: 2rem;
        border-radius: 15px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        margin: 0 auto; /* Center horizontally */
      }

      .logo {
        max-width: 120px; /* Adjust as needed */
        margin: 0 auto; /* Center horizontally */
        margin-bottom: 1rem;
      }

      h2 {
        margin-bottom: 2rem;
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 0.5rem;
      }

      .form-group input:focus {
        border-color: #6ee7b7; /* Tailwind green-200 for focus */
        outline: none;
      }

      .button {
        width: 100%;
        background-color: #10b981; /* Tailwind green-600 */
        color: white;
        padding: 10px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
      }

      .button:hover {
        background-color: #059669; /* Tailwind green-700 for hover */
      }

      .footer {
        text-align: center;
        margin-top: 2rem;
        font-size: 0.9rem;
      }

      .footer a {
        color: #10b981; /* Tailwind green-600 */
        text-decoration: none;
      }

      .footer a:hover {
        text-decoration: underline;
      }`}
      </style>
      <div className="form-container">
        <p id="signup-error" className="text-red-500"></p>
        <img src="/LOGO.webp" alt="CoutureCorner Logo" className="logo" />
        <h2>Sign Up</h2>

        <form id="signup-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" id="name" required />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;
              const name = document.getElementById("name").value;
              const confirmPassword =
                document.getElementById("confirm-password").value;

              if (password !== confirmPassword) {
                document.getElementById("signup-error").innerText =
                  "Passwords do not match";
                return;
              }

              createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                  const userDetails = {
                    email: user.user.email,
                    name,
                  };
                  createUser(userDetails)
                    .then((payload) => {
                      if (!payload) {
                        notification({
                          status: "error",
                          message: "Could not create user",
                        });
                        return;
                      }
                      localStorage.setItem("userId", payload.id.toString());
                      localStorage.setItem(
                        "userInfo",
                        JSON.stringify({
                          email: payload.email,
                          name: payload.name,
                        })
                      );
                      notification({
                        status: "success",
                        message: "Account created successfully",
                      });
                      console.log(user);
                      navigate("/home");
                    })
                    .catch((error) => {
                      console.log(error);
                      notification({
                        status: "error",
                        message: error.message,
                      });
                    });
                })
                .catch((error) => {
                  document.getElementById("signup-error").innerText =
                    error.message;
                });
            }}
            className="button"
          >
            Sign Up
          </button>
        </form>

        <div className="footer">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </main>
  );
}
