export const Signup = () => (
  <main>
    <div class="form-container">
      <p id="signup-error" class="text-red-500"></p>
      <img src="/LOGO.webp" alt="CoutureCorner Logo" class="logo" />
      <h2>Sign Up</h2>

      <form id="signup-form" onsubmit="handleSignUp(event)">
        <div class="form-group">
          <input type="text" placeholder="Full Name" required />
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="Email Address" required />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit" class="button">
          Sign Up
        </button>
      </form>

      <div class="footer">
        <a href="designerlogin.html">Already have an account? Login</a>
      </div>
    </div>
  </main>
);
