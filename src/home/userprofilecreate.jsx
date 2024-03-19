export const UserProfileCreate = () => (
  <main>
    <section className="container mx-auto p-6">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">
          Complete Your Profile
        </h2>
        <form action="path_to_your_server_endpoint" method="POST">
          <div className="mb-4">
            <label className="mb-2 block">Full Name:</label>
            <input
              type="text"
              name="full_name"
              placeholder="John Doe"
              required
              className="w-full rounded border p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">Home Address:</label>
            <input
              type="text"
              name="home_address"
              placeholder="1234 Street, City, Country"
              required
              className="w-full rounded border p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">Bank Account Details:</label>
            <input
              type="text"
              name="bank_account"
              placeholder="Bank Name, Account Number"
              required
              className="w-full rounded border p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">
              Mobile Money Account (e.g., EcoCash):
            </label>
            <input
              type="tel"
              name="mobile_money"
              placeholder="EcoCash Number"
              className="w-full rounded border p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              className="w-full rounded border p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">Phone Number:</label>
            <input
              type="tel"
              name="phone_number"
              placeholder="+1234567890"
              required
              className="w-full rounded border p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">
              Professional Website or Portfolio URL:
            </label>
            <input
              type="url"
              name="website_url"
              placeholder="http://www.yourwebsite.com"
              className="w-full rounded border p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">Social Media Profile:</label>
            <input
              type="url"
              name="social_media_profile"
              placeholder="http://www.linkedin.com/in/yourprofile"
              className="w-full rounded border p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">Date of Birth:</label>
            <input
              type="date"
              name="date_of_birth"
              required
              className="w-full rounded border p-2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block">
              National ID or Passport Number:
            </label>
            <input
              type="text"
              name="identification_number"
              placeholder="ID or Passport Number"
              required
              className="w-full rounded border p-2"
            />
          </div>

          <div className="text-center">
            <input
              type="submit"
              value="Save Profile"
              className="cursor-pointer rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            />
          </div>
        </form>
      </div>
    </section>
  </main>
);
