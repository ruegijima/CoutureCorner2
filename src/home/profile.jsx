import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const [user, setUser] = useState(null);

  const [isDesigner, setIsDesigner] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  useEffect(() => {
    const designerId = localStorage.getItem("designerId");

    if (designerId) {
      setIsDesigner(true);
    } else {
      setIsDesigner(false);
    }
  }, []);

  const navigate = useNavigate();

  if (!user) return null;
  return (
    <main>
      <section className="container mx-auto p-6">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="justify-start p-6 md:flex">
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

            {isDesigner === true && (
              <div
                className={`border-r border-green-200 p-4 md:w-1/3 ${
                  isDesigner ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="mb-3 text-lg font-semibold text-green-600">
                  Profile
                </h3>

                <Link
                  to="/dashboard"
                  className="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
                >
                  Dashboard
                </Link>
              </div>
            )}

            <div className="p-4 md:w-1/3">
              <h3 className="mb-3 text-lg font-semibold text-green-600">
                My Activity
              </h3>
              <p>
                <strong>Recent Order:</strong> #00123
              </p>
              {isDesigner && (
                <p>
                  <strong>Collaboration:</strong> In Progress
                </p>
              )}
              <Link
                to="/orders"
                className="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
              >
                Order History
              </Link>
              {isDesigner && (
                <Link
                  to="/collaborations"
                  className="mt-4 block rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700"
                >
                  Collaboration Statuses
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
