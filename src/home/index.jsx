import { Link } from "react-router-dom";
export const Index = () => (
  <main className="w-full">
    <style>
      {`body {
        font-family: "Montserrat", sans-serif;
        background: url("/Bgnd4.webp") no-repeat center center fixed;
        background-size: cover;
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .logo {
        max-width: 150px;
        margin: 0 auto 1rem;
      }

      .container {
        background: rgba(255, 255, 255, 0.85);
        border-radius: 20px;
        padding:1rem 2rem;
        margin: 2rem;
        width: auto;
        max-width: 95%;
      }

      h1 {
        color: #00453a;
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .cards {
        display: flex;
        gap: 2rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .card {
        background-color: #00453a;
        color: white;
        padding: 2rem;
        border-radius: 10px;
        width: 300px;

      }

      .card h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .card p {
        margin-bottom: 1.5rem;
      }

      .button {
        display: inline-block;
        background-color: white;
        color: #00453a;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s;
      }

      .button:hover {
        background-color: #f0f0f0;
      }

      /* Updated style for the designer login link */
      .Discover-Link {
        position: absolute;
        top: 15px;
        right: 20px;
        font-weight: bold;
        text-decoration: none;
        color: #00453a;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      }

      .designer-login:hover {
        text-decoration: underline;
        text-shadow: none;
      }`}
    </style>

    <Link to="/home" className="Discover-Link">
      Discover More
    </Link>

    <div className="container">
      <img src="/LOGO.webp" alt="CoutureCorner Logo" className="logo" />
      <h1>Welcome to CoutureCorner</h1>
      <div className="cards">
        <div className="card">
          <h2>For Shoppers</h2>
          <p>
            Explore and purchase unique designs by Zimbabwean fashion talents.
          </p>
          <Link to="/shop" className="button">
            Shop Now
          </Link>
        </div>
        <div className="card">
          <h2>For Collaborating</h2>
          <p>
            Connect and collaborate with designers for bespoke fashion
            creations.
          </p>
          <Link to="/designers" className="button">
            Find A Designer
          </Link>
        </div>
        <div className="card">
          <h2>For Designers</h2>
          <p>
            Showcase your designs and inspire a global clientele on our
            exclusive platform.
          </p>
          <Link to="/designer-profile-create" className="button">
            Become A Designer
          </Link>
        </div>
      </div>
    </div>
  </main>
);
