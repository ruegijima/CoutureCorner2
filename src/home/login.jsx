export const Login = () => (
  <main>
    <div class="login-container">
      <div class="logo-container">
        <img src="/LOGO.webp" alt="CoutureCorner Logo" class="logo" />
      </div>
      <h2>Designer Login</h2>
      <form id="login-form" onsubmit="handleLogin(event)">
        <div class="form-group">
          <input
            type="email"
            id="login-email"
            placeholder="Email Address"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="login-password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" class="login-button">
          Login
        </button>
      </form>
      <div class="login-footer">
        <a href="/forgot-password">Forgotten Password?</a> |
        <a href="SignUp.html">Don't have an account? Sign up</a>
      </div>
    </div>
  </main>
);
