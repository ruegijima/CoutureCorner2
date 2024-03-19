import { Link } from "react-router-dom";
export const Community = () => (
  <main>
    <section className="bg-green-600 py-10 text-center text-white lg:py-20">
      <div className="container mx-auto">
        <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
          Community Forums
        </h1>
        <p className="text-lg lg:text-xl">
          Join the discussions and connect with fellow fashion enthusiasts.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-6 py-8">
      <h2 className="mb-6 text-center text-3xl font-semibold">
        Discussion Boards
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">Design and Inspiration</h3>
          <p className="mb-4 text-gray-700">
            Share your latest designs, seek inspiration, and discuss emerging
            trends with peers.
          </p>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Join Discussion
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">Fashion Business</h3>
          <p className="mb-4 text-gray-700">
            Exchange advice on running a fashion business, from marketing
            strategies to retail tips.
          </p>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Join Discussion
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">Sustainable Fashion</h3>
          <p className="mb-4 text-gray-700">
            Discuss sustainable practices, share eco-friendly brands, and
            collaborate on initiatives.
          </p>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Join Discussion
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-green-50 py-8">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-6 text-3xl font-semibold">User Engagement</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-700">
          Our community space is where fashion lovers can connect, learn, and
          grow together. Engage in conversations, share your work, and get
          feedback from a global network of creatives and professionals.
        </p>
        <Link
          to="/"
          className="focus:shadow-outline rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
        >
          Explore the Community
        </Link>
      </div>
    </section>
  </main>
);
