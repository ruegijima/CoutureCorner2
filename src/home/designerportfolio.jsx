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
      setDesigner(designerResponse);
    };

    const fetchProjects = async () => {
      const projectsResponse = await getAllProjectsForDesigner(designerId);
      console.log(projectsResponse);
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
            <div className="text-center">
              <img
                src={designer?.designerPic || "/default-profile-image.webp"} // Use a default image if none is provided
                alt={designer.name}
                className="mx-auto mb-4 h-32 w-32 rounded-full"
              />
              {/* Dynamic designer details */}
              <h3 className="mb-2 text-4xl font-semibold">{designer.name}</h3>
              <p>
                Brand Name: <strong>{designer.brand}</strong>
              </p>
              <p>
                Located in: <strong>{designer.location}</strong>
              </p>
              <p>
                Experience: <strong>{designer.experience}</strong>
              </p>
              <p>
                Design Philosophy: <em>{designer.philosophy}</em>
              </p>
              <p>
                Bio: <em>{designer.bio}</em>
              </p>
              <p>
                Achievements: <strong>{designer.achievements}</strong>
              </p>
              <p>
                Previous Collaborations:{" "}
                <strong>{designer.previousCollaborations}</strong>
              </p>
              <p>
                Inspirations: <strong>{designer.inspirations}</strong>
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
                <Link to={`/designers/${designerId}${project.id}`} className="block">
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
