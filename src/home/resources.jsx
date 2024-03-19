import { Link } from "react-router-dom";
export const Resources = () => (
  <main>
    <section className="bg-green-600 py-10 text-center text-white lg:py-20">
      <div className="container mx-auto">
        <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
          Educational Resources
        </h1>
        <p className="text-lg lg:text-xl">
          Explore our curated resources for learning and development in the
          world of fashion.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-6 py-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Fashion Design</h2>
          <p className="mb-4 text-gray-700">
            Dive into our comprehensive tutorials and workshops that cover the
            essentials of fashion design, from sketching to garment
            construction.
          </p>
          <Link to="#" className="text-green-600 hover:text-green-700">
            Learn More
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Marketing</h2>
          <p className="mb-4 text-gray-700">
            Discover strategies and tips for marketing your fashion brand,
            including digital marketing, branding, and customer engagement
            techniques.
          </p>
          <Link to="#" className="text-green-600 hover:text-green-700">
            Learn More
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Trend Analysis</h2>
          <p className="mb-4 text-gray-700">
            Stay ahead of the curve with our trend analysis resources that
            provide insights into the latest fashion trends and forecasts.
          </p>
          <Link to="#" className="text-green-600 hover:text-green-700">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  </main>
);
