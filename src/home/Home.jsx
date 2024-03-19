import { Link } from "react-router-dom";
export const Home = () => (
  <main>
    <section
      id="introduction"
      className="bg-cover bg-center py-12 text-center"
      style={{ backgroundImage: "url('/BKgrndMain2.webp')" }}
    >
      <div className="container mx-auto px-6">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Uncover the Art of Fashion
        </h1>
        <p className="mb-8 text-lg text-white opacity-90">
          CoutureCorner is where creativity meets craftsmanship. Dive into our
          world of curated fashion and find your next statement piece.
        </p>
        <Link
          to="#featured"
          className="inline-block rounded bg-white px-6 py-2 font-bold text-green-600 transition duration-300 hover:bg-green-100 hover:text-green-700"
        >
          Explore Collections
        </Link>
      </div>
    </section>

    <main className="container mx-auto mt-8 px-4">
      <section id="featured" className="mb-12">
        <h2 className="mb-6 text-4xl font-semibold">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/SpringCollection.webp"
              alt="Collection 1"
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Spring Collection</h3>
              <p>
                Discover the vibrant colors and patterns of our new spring
                collection.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/EcoFriendlyLine.webp"
              alt="Collection 2"
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Eco-Friendly Line</h3>
              <p>Ethically sourced and environmentally conscious designs.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/SpringCollection.webp"
              alt="Collection 1"
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Spring Collection</h3>
              <p>
                Discover the vibrant colors and patterns of our new spring
                collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="spotlights" className="mb-12">
        <h2 className="mb-6 text-4xl font-semibold">Designer Spotlights</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/DS1.webp"
              alt="Designer 1"
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Patience Sithole</h3>
              <p>Innovative designs with a modern twist.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/DS2.webp"
              alt="Designer 2"
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Allan Moyo</h3>
              <p>Luxurious and timeless pieces for every occasion.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <img
              src="/DS1.webp"
              alt="Designer 1"
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Patience Sithole</h3>
              <p>Innovative designs with a modern twist.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="mb-12">
        <h2 className="mb-6 text-4xl font-semibold">Latest News</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-lg bg-white shadow md:flex-row">
            <img
              src="/latestnews1.webp"
              alt="Fashion Week Highlights"
              className="w-full object-cover md:w-1/2"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Fashion Week Highlights</h3>
              <p>
                Recapping the most memorable moments from this year&apos;s
                fashion week.
              </p>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden rounded-lg bg-white shadow md:flex-row">
            <img
              src="/latestnews2.webp"
              alt="Designer Collaboration Announced"
              className="w-full object-cover md:w-1/2"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                Designer Collaboration Announced
              </h3>
              <p>
                Two leading fashion icons team up for an exclusive collection.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="testimonials" className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-center text-4xl font-semibold">
            What Our Customers Say
          </h2>
          <div className="grid gap-4 text-center md:grid-cols-2">
            <div className="rounded bg-white p-6 shadow-lg">
              <blockquote className="italic text-gray-600">
                The spring collection added a fresh burst of color and design to
                my wardrobe. Exceptional quality and style!
              </blockquote>
              <div className="mt-4">
                <p className="font-bold">Amanda Lee</p>
                <p className="text-sm text-gray-500">Fashion Enthusiast</p>
              </div>
            </div>
            <div className="rounded bg-white p-6 shadow-lg">
              <blockquote className="italic text-gray-600">
                I&apos;m thrilled with the eco-friendly line. It feels good to
                wear stylish clothes that are also kind to the planet.
              </blockquote>
              <div className="mt-4">
                <p className="font-bold">Michael Johnson</p>
                <p className="text-sm text-gray-500">
                  Environmentalist & Blogger
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="pt-8 text-center">
        <h2 className="mb-6 text-4xl font-semibold">Join Our Community</h2>
        <p className="mb-6">
          Explore, connect, and stay up-to-date with the latest in fashion.
        </p>
        <Link
          to="/signup"
          className="inline-block rounded bg-green-600 px-6 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
        >
          Sign Up
        </Link>
      </section>
    </main>
  </main>
);
