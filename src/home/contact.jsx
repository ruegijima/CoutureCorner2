export const Contact = () => (
  <main>
    <section className="bg-green-600 py-10 text-center text-white lg:py-20">
      <div className="container mx-auto">
        <h1 className="mb-2 text-4xl font-bold lg:text-5xl">Contact Us</h1>
        <p className="text-lg lg:text-xl">
          We&apos;re here to help and answer any question you might have. We
          look forward to hearing from you.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-6 py-8">
      <div className="mb-8 flex flex-wrap justify-center text-center">
        <div className="w-full px-4 lg:w-1/2">
          <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
          <p className="mb-4">
            Feel free to reach out to us through any of the following channels:
          </p>
          <p>
            <i className="fas fa-envelope mr-2"></i> email@couturecorner.com
          </p>
          <p>
            <i className="fas fa-phone mr-2"></i> +263 4 123 4567
          </p>
          <p>
            <i className="fas fa-map-marker-alt mr-2"></i> 123 Fashion Street,
            Harare, Zimbabwe
          </p>
          <p>
            <i className="fas fa-clock mr-2"></i> Mon - Fri, 9:00am - 5:00pm
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full rounded-lg bg-white p-6 shadow-lg lg:w-1/2">
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="focus:shadow-outline rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
);
