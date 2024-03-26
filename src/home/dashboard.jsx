import { Link } from "react-router-dom";
import { useQuery } from "./useQuery";
import { useEffect, useState } from "react";
import {
  createProduct,
  createProject,
  deleteProject,
  getAllProjectsForDesigner,
  getDesignerById,
} from "../api";
import {
  AddProject,
  DesignerProfileCreate,
  handleUpload,
} from "./DesignersProfileCreate";
import { toast } from "react-hot-toast";
import notification from "../components/notification";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  // gbet query "tab"
  let query = useQuery();

  const [designer, setDesigner] = useState(null);
  const [projects, setProjects] = useState([]);

  const [designerId, setDesignerId] = useState(null);

  const fetchDesignerDetails = async (x) => {
    const designerResponse = await getDesignerById(x);
    setDesigner(designerResponse);
  };

  const fetchProjects = async (x) => {
    const projectsResponse = await getAllProjectsForDesigner(x);
    setProjects(projectsResponse);
  };

  const navigate = useNavigate();

  function newFunction() {
    notification({
      status: "error",
      message: "You need to be logged in as a designer to view this page",
    });
    navigate("/shop");
    return;
  }

  useEffect(() => {
    const id = localStorage.getItem("designerId");

    if (!id) {
      newFunction();
    }
    setDesignerId(id);

    fetchDesignerDetails(id);
    fetchProjects(id);
  }, []);

  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

  const [currentProjectInView, setCurrentProjectInView] = useState(null);

  return (
    <main>
      <div className="container mx-auto mt-8 flex">
        <aside className="w-1/5 pt-4">
          <nav className="space-y-4">
            <Link
              to="/dashboard"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === null && "bg-green-700 !text-white"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="?tab=collaborations"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === "collaborations" &&
                "bg-green-700 !text-white"
              }`}
            >
              Collaborations
            </Link>
            <Link
              to="?tab=messages"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === "messages" && "bg-green-700 !text-white"
              }`}
            >
              Messages
            </Link>
            <Link
              to="?tab=notifications"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === "notifications" &&
                "bg-green-700 !text-white"
              }`}
            >
              Notifications
            </Link>
            <Link
              to="?tab=orders"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === "orders" && "bg-green-700 !text-white"
              }`}
            >
              Manage Orders
            </Link>
            <Link
              to="?tab=settings"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === "settings" && "bg-green-700 !text-white"
              }`}
            >
              Settings
            </Link>
          </nav>
        </aside>

        {query.get("tab") === null && (
          <section className="w-3/4 pl-8">
            <div className="dashboard-welcome mx-8 my-4 rounded p-6 text-center">
              <h2 className="mb-2 text-2xl font-semibold" id="welcome-message">
                Welcome, {designer?.name}!
              </h2>
              <p className="text-md">
                Here&apos;s your latest activity overview.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
              <Stat
                title="Projects"
                count={projects?.length}
                icon={
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
                    className="lucide lucide-boxes text-green-600"
                  >
                    <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                    <path d="m7 16.5-4.74-2.85" />
                    <path d="m7 16.5 5-3" />
                    <path d="M7 16.5v5.17" />
                    <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                    <path d="m17 16.5-5-3" />
                    <path d="m17 16.5 4.74-2.85" />
                    <path d="M17 16.5v5.17" />
                    <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                    <path d="M12 8 7.26 5.15" />
                    <path d="m12 8 4.74-2.85" />
                    <path d="M12 13.5V8" />
                  </svg>
                }
              />
              <Stat
                title="Products"
                count={10}
                icon={
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
                    className="lucide lucide-shopping-bag text-green-600"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                }
              />
              <Stat
                title="Orders"
                count={12}
                icon={
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
                    className="lucide lucide-truck text-green-600"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <path d="M15 18H9" />
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                    <circle cx="17" cy="18" r="2" />
                    <circle cx="7" cy="18" r="2" />
                  </svg>
                }
              />
              <Stat
                title="Collaborations"
                count={6}
                icon={
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
                    className="lucide lucide-handshake text-green-600"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                }
              />
            </div>
            <div className="mt-4 flex w-full items-center justify-between">
              <h2 className="mb-6 mt-8 text-3xl font-semibold">My Projects</h2>
              <button
                onClick={() => setShowCreateProjectModal(true)}
                className="inline-block h-max w-max rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
              >
                Add New Project
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg"
                >
                  <div className="block">
                    <img
                      src={project?.projectPic || "/portfolio-item-2.webp"}
                      alt={project.title}
                      className="mb-4 min-h-[230px] rounded-lg"
                    />
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                  </div>
                  <div className="grid w-full grid-cols-3 place-content-center content-center">
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
                      className="lucide lucide-eye m-auto cursor-pointer text-green-600"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
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
                      onClick={() => {
                        setCurrentProjectInView(project);
                        setShowCreateProjectModal(true);
                      }}
                      className="lucide lucide-pencil m-auto cursor-pointer text-gray-400"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="m15 5 4 4" />
                    </svg>
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
                      onClick={async () => {
                        await deleteProject(project.id);
                        notification({
                          status: "success",
                          message: "Project deleted successfully!",
                        });
                        await fetchProjects(designerId);
                      }}
                      className="lucide lucide-trash m-auto cursor-pointer text-red-500"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {query.get("tab") === "collaborations" && (
          <section className="w-3/4 pl-8">
            <div className="dashboard-welcome mx-8 my-4 rounded p-6 text-center">
              <h2 className="mb-2 text-2xl font-semibold" id="welcome-message">
                Your Collaborations
              </h2>
              <p className="text-md">Coming soon...</p>
            </div>
          </section>
        )}
        {query.get("tab") === "messages" && (
          <section className="w-3/4 pl-8">
            <div className="dashboard-welcome mx-8 my-4 rounded p-6 text-center">
              <h2 className="mb-2 text-2xl font-semibold" id="welcome-message">
                Your Inbox
              </h2>
              <p className="text-md">Coming soon...</p>
            </div>
          </section>
        )}
        {query.get("tab") === "notifications" && (
          <section className="w-3/4 pl-8">
            <div className="dashboard-welcome mx-8 my-4 rounded p-6 text-center">
              <h2 className="mb-2 text-2xl font-semibold" id="welcome-message">
                Notifications
              </h2>
              <p className="text-md">Coming soon...</p>
            </div>
          </section>
        )}
        {query.get("tab") === "orders" && (
          <section className="w-3/4 pl-8">
            <div className="dashboard-welcome mx-8 my-4 rounded p-6 text-center">
              <h2 className="mb-2 text-2xl font-semibold" id="welcome-message">
                Manage and Track Orders
              </h2>
              <p className="text-md">Coming soon...</p>
            </div>
          </section>
        )}
        {query.get("tab") === "settings" && (
          <section className="w-3/4 pl-8">
            <DesignerProfileCreate fromEdit />
          </section>
        )}
      </div>

      {showCreateProjectModal && (
        <AddProject
          closeModal={async () => {
            await fetchProjects(designerId);
            setShowCreateProjectModal(false);
          }}
          isEdit={currentProjectInView}
          saveProject={async (project) => {
            let productsDone = 0;
            const totalProducts = [project].reduce(
              (acc, x) => acc + x.products.length,
              0
            );

            const toastId = toast.loading("Creating Project...");
            const fileres = await handleUpload(project.projectPic);
            createProject({
              ...project,
              projectPic: fileres,
              designerId: designerId,
              products: [],
            })
              .then((response) => {
                if (response) {
                  const projectId = response?._key?.path?.segments[1];
                  // create all products
                  project.products.forEach(async (product) => {
                    // upload product image
                    const fileres = await handleUpload(product.productImage);
                    console.log(fileres);
                    createProduct({
                      ...product,
                      projectId,
                      productImage: fileres,
                    })
                      .then(async (response) => {
                        if (response) {
                          productsDone++;

                          if (productsDone === totalProducts) {
                            notification({
                              status: "success",
                              message: "Project created successfully!",
                            });
                            toast.dismiss(toastId);
                            await fetchProjects(designerId);
                            setShowCreateProjectModal(false);
                          }
                        } else {
                          notification({
                            status: "error",
                            message: "Could not create product",
                          });
                        }
                      })
                      .catch((error) => {
                        notification({
                          status: "error",
                          message: error?.message ?? "Could not create product",
                        });
                      });
                  });
                } else {
                  notification({
                    status: "error",
                    message: "Could not create project",
                  });
                  console.log("Could not create project");
                }
              })
              .catch((error) => {
                notification({
                  status: "error",
                  message:
                    error?.message ?? error ?? "Could not create project",
                });
              });
          }}
        />
      )}
    </main>
  );
};

function Stat({ title, count, icon }) {
  return (
    <div className="border-stroke rounded-sm border-[1px] bg-white px-6 py-6 shadow">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
        {icon}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-bold text-black">{count}</h4>
          <span className="text-sm font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
}
