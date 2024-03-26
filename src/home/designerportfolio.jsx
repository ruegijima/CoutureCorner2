import { Link } from "react-router-dom";
import { getDesignerById, getAllProjectsForDesigner } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function DesignerPortfolio() {
  const { designerId } = useParams();
  const [designer, setDesigner] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchDesignerDetails = async () => {
      const designerResponse = await getDesignerById(designerId);
      console.log(designerResponse);
      setDesigner(designerResponse);
    };

    const fetchProjects = async () => {
      const projectsResponse = await getAllProjectsForDesigner(designerId);
      setProjects(projectsResponse);
    };

    fetchDesignerDetails();
    fetchProjects();
  }, [designerId]);

  if (!designer) {
    return <div>Loading designer details...</div>;
  }

  return (
    <main>
      <style>
        {`/* The Modal (background) */
      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        padding-top: 60px;
      }

      /* Modal Content/Box */
      .modal-content {
        background-color: #fefefe;
        margin: 5% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
        max-width: 500px; /* Maximum width */
      }

      /* The Close Button */
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }

      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }`}
      </style>
      <section className="container mx-auto p-6">
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <img
            src={designer?.heroImage || "/designer-hero-image.webp"}
            alt="Designer Portrait"
            className="h-96 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="mb-8 text-center text-4xl font-semibold">Profile</h2>
            <div className="flex flex-col gap-6 text-center">
              <img
                src={designer?.designerPic || "/default-profile-image.webp"} // Use a default image if none is provided
                alt={designer.name}
                className="mx-auto mb-4 h-32 w-32 rounded-full"
              />
              {/* Dynamic designer details */}
              <h3 className="mb-2 text-4xl font-semibold">{designer.name}</h3>
              <div className="mx-auto flex w-max items-center gap-4">
                <p className="mx-auto flex w-max items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-green-600"
                  >
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                  </svg>{" "}
                  <strong>{designer.brandname}</strong>
                </p>
                <p className="mx-auto flex w-max items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-green-600"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>{" "}
                  <strong>{designer.location}</strong>
                </p>
              </div>

              <p>
                <span className="font-bold text-green-600">
                  {designer.yearsOfExperience}
                </span>{" "}
                years of experience
              </p>
              <p>
                Design Philosophy: <br />
                <em>{designer.philosophy}</em>
              </p>
              <p>
                Bio: <br /> <em>{designer.bio}</em>
              </p>
              <p className="mx-auto flex w-max items-center gap-4">
                <a
                  href={designer.twitterURL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter text-green-600"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href={designer.facebookURL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook text-green-600"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href={designer.instagramURL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram text-green-600"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="mb-2 text-2xl font-semibold">Portfolio</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg bg-white p-4 shadow-lg"
              >
                <Link
                  to={`/designers/${designerId}/${project.id}`}
                  className="block"
                >
                  <img
                    src={project?.projectPic || "/portfolio-item-2.webp"}
                    alt={project.title}
                    className="mb-4 rounded-lg"
                  />
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
