import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const navigate = useNavigate();

  if (!user) return null;
  return (
    <main>
      <section className="container mx-auto p-6">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="justify-between p-6 md:flex">
            <div className="border-r border-green-200 p-4 md:w-1/3">
              <h3 className="mb-3 text-lg font-semibold text-green-600">
                My Profile
              </h3>
              <p>
                <strong>Name:</strong> {user?.name}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/home");
                }}
                className="mt-4 block rounded px-4 py-2 pl-0 text-center text-gray-600 underline"
              >
                Logout
              </button>
            </div>

            <div className="border-r border-green-200 p-4 md:w-1/3">
              <h3 className="mb-3 text-lg font-semibold text-green-600">
                My Collections
              </h3>

              <p>
                <i className="far fa-heart text-green-500"></i> Summer
                Collection
              </p>
              <p>
                <i className="far fa-bookmark text-green-500"></i> Winter
                Collection
              </p>
              <Link
                to="/collections"
                className="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
              >
                View Collections
              </Link>
            </div>

            <div className="p-4 md:w-1/3">
              <h3 className="mb-3 text-lg font-semibold text-green-600">
                My Activity
              </h3>
              <p>
                <strong>Recent Order:</strong> #00123
              </p>
              <p>
                <strong>Collaboration:</strong> In Progress
              </p>
              <Link
                to="/orders"
                className="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
              >
                Order History
              </Link>
              <Link
                to="/collaborations"
                className="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
              >
                Collaboration Statuses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
