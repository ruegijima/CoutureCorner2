import { Link } from "react-router-dom";
export const Blog = () => (
  <main>
    <section className="bg-green-600 py-10 text-center text-white lg:py-20">
      <div className="container mx-auto">
        <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
          CoutureCorner Blog
        </h1>
        <p className="text-lg lg:text-xl">
          Latest insights and trends from the fashion world.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-6 py-8">
      <h2 className="mb-6 text-3xl font-semibold">Fashion Articles</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">
            The Evolution of Streetwear
          </h3>
          <p className="mb-4 text-gray-700">
            Explore the journey of streetwear fashion and how it has shaped the
            industry over the years.
          </p>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Read More
          </Link>
        </article>

        <article className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">
            Exclusive Interview with Designer XYZ
          </h3>
          <p className="mb-4 text-gray-700">
            A sit-down with the renowned designer XYZ to discuss their latest
            collection and future plans.
          </p>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Read More
          </Link>
        </article>

        <article className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">
            Analyzing Fashion Week Trends
          </h3>
          <p className="mb-4 text-gray-700">
            A detailed analysis of the standout trends from this year&apos;s
            Fashion Week and what to expect next season.
          </p>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Read More
          </Link>
        </article>
      </div>
    </section>

    <section className="container mx-auto px-6 py-8">
      <h2 className="mb-6 text-3xl font-semibold">How-to Guides</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">
            Starting Your Fashion Brand
          </h3>
          <p className="mb-4 text-gray-700">
            A step-by-step guide on launching your own fashion label, from
            concept to execution.
          </p>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Read Guide
          </Link>
        </article>

        <article className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">
            Sewing Techniques for Beginners
          </h3>
          <p className="mb-4 text-gray-700">
            Master the basics of sewing with these essential techniques for
            starting your fashion creations.
          </p>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Read Guide
          </Link>
        </article>

        <article className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">
            Sustainable Fabrics 101
          </h3>
          <p className="mb-4 text-gray-700">
            Understand the importance of sustainable fabrics and how to
            incorporate them into your designs.
          </p>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Read Guide
          </Link>
        </article>
      </div>
    </section>
  </main>
);
