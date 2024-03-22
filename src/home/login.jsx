import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDesignerByUserId, getUserByEmail } from "../api";
import toast from "../components/notification";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user.reloadUserInfo.email);

        getUserByEmail(userCredential.user.reloadUserInfo.email)
          .then((userDetails) => {
            if (!userDetails) {
              toast({
                status: "error",
                message: "Could not login user",
              });
              return;
            }
            console.log(userDetails);
            localStorage.setItem("userInfo", JSON.stringify(userDetails[0]));
            localStorage.setItem("userId", userDetails[0].id.toString());
            getDesignerByUserId(userDetails[0].id)
              .then((designer) => {
                console.log(designer);
                localStorage.setItem("designerId", designer[0].id.toString());
              })
              .catch((error) => {
                console.log(error);
              });
            toast({
              status: "success",
              message: "Logged in successfully",
            });
            navigate("/home");
          })
          .catch((error) => {
            console.log(error);
            toast({
              status: "error",
              message: error.message,
            });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        // Optionally, handle/display error messages
        console.error("Error signing in: ", errorMessage);
        document.getElementById("login-error").innerText = errorMessage;
      });
  };

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

        .login-container {
          background: rgba(255, 255, 255, 0.85); /* Slight transparency */
          padding: 2rem;
          border-radius: 15px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative; /* Added for positioning */
          margin: 0 auto; /* Center horizontally */
        }

        .logo-container {
          text-align: center;
          margin-bottom: 1rem;
        }

        .logo {
          max-width: 120px; /* Adjust as needed */
          display: block; /* Added to center the logo */
          margin: 0 auto; /* Center the logo */
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

        .login-button {
          width: 100%;
          background-color: #10b981; /* Tailwind green-600 */
          color: white;
          padding: 10px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }

        h2 {
          text-align: center; /* Center the text within the heading */
          width: 100%; /* Full width to enforce centering */
          margin-bottom: 2rem; /* Space between heading and form */
        }


        .login-button:hover {
          background-color: #059669; /* Tailwind green-700 for hover */
        }

        .login-footer {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.9rem;
        }

        .login-footer a {
          color: #10b981; /* Tailwind green-600 */
          text-decoration: none;
        }

        .login-footer a:hover {
          text-decoration: underline;
        }`}
      </style>
      <div className="login-container">
        <div className="logo-container">
          <img src="/LOGO.webp" alt="CoutureCorner Logo" className="logo" />
        </div>
        <h2>Login</h2>
        <form id="login-form" onSubmit={handleLogin}>
          <p id="login-error" className="text-red-500"></p>{" "}
          {/* Error message display */}
          <div className="form-group">
            <input
              type="email"
              id="login-email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="login-password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-footer">
          <Link to="/forgot-password">Forgotten Password?</Link> |
          <Link to="/signup">Don&apos;t have an account? Sign up</Link>
        </div>
      </div>
    </main>
  );
};
