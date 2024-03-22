import { useState } from "react";
import { createDesigner, createProduct, createProject } from "../api";
import notification from "../components/notification";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebaseConfig/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-hot-toast";

export function DesignerProfileCreate() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [brandname, setBrandname] = useState("");
  const [location, setLocation] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [instagramURL, setInstagramURL] = useState("");
  const [philosophy, setPhilosophy] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const [designerPic, setDesignerPic] = useState(null);

  const saveDesignerProfile = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("userId")) {
      notification({
        status: "error",
        message: "Please login to create a profile",
      });
      return;
    }
    if (projects.length === 0) {
      notification({
        status: "error",
        message: "Please add at least one project",
      });
      return;
    }

    if (!designerPic) {
      notification({
        status: "error",
        message: "Please upload a profile picture",
      });
      return;
    }

    const toastId = toast.loading("Creating designer profile and projects...");

    const fileres = await handleUpload(designerPic);
    const body = {
      name,
      bio,
      brandname,
      location,
      facebookURL,
      instagramURL,
      philosophy,
      twitterURL,
      yearsOfExperience,
      designerPic: fileres,
      userId: localStorage.getItem("userId"),
    };

    let productsDone = 0;
    const totalProducts = projects.reduce(
      (acc, project) => acc + project.products.length,
      0
    );

    createDesigner(body)
      .then((response) => {
        if (response) {
          const designerId = response?._key?.path?.segments[1];
          localStorage.setItem("designerId", designerId);
          // create all projects
          projects.forEach(async (project) => {
            // upload project image
            const fileres = await handleUpload(project.projectPic);
            console.log(fileres);
            createProject({
              ...project,
              projectPic: fileres,
              designerId: designerId,
              products: [],
            })
              .then((response) => {
                console.log(response);
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
                      .then((response) => {
                        if (response) {
                          productsDone++;

                          if (productsDone === totalProducts) {
                            notification({
                              status: "success",
                              message: "Designer profile created successfully!",
                            });
                            toast.dismiss(toastId);
                            navigate("/home");
                          }
                        } else {
                          console.log("Could not create product");
                          notification({
                            status: "error",
                            message: "Could not create product",
                          });
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                        notification({
                          status: "error",
                          message: error.message,
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
                console.log(error);
                notification({
                  status: "error",
                  message: error.message,
                });
              });
          });
        } else {
          notification({
            status: "error",
            message: "Could not create profile",
          });
          console.log("Could not create profile");
        }
      })
      .catch((error) => {
        console.log(error);
        notification({
          status: "error",
          message: error.message,
        });
      });
  };

  const handleUpload = async (file) => {
    if (!file) {
      notification({
        status: "error",
        message: "Please select a file to upload",
      });
      return;
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          console.log(`Upload is ${percent}% done`);
        },
        (err) => {
          console.log(err);
          reject(err);
        },
        async () => {
          try {
            // Get the download URL
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            console.log(url);
            resolve(url);
          } catch (error) {
            console.log(error);
            reject(error);
          }
        }
      );
    });
  };

  return (
    <main>
      <style>
        {`.close-button {
    position: absolute;
    top: 1rem; /* adjust top spacing */
    right: 1rem; /* adjust right spacing */
    font-size: 1.5rem; /* adjust size if necessary */
    z-index: 10;
  }`}
      </style>
      <main className="container mx-auto p-6">
        <form className="space-y-6">
          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            <div className="flex-1 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold">Brand Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Profile Picture Upload:
                  </label>
                  <input
                    type="file"
                    name="profile_picture"
                    accept="image/*"
                    required
                    onChange={(e) => setDesignerPic(e.target.files[0])}
                    className="block w-full text-sm text-gray-500
              file:mr-4 file:rounded-full file:border-0
              file:bg-green-50 file:px-4
              file:py-2 file:text-sm
              file:font-semibold file:text-green-700
              hover:file:bg-green-100
            "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="designer_name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="brand_name"
                    placeholder="Your Brand Name"
                    value={brandname}
                    onChange={(e) => setBrandname(e.target.value)}
                    required
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="locaten-in"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="bio"
                    placeholder="Bio"
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="h-24 w-full rounded border p-2"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <textarea
                    name="philosophy"
                    placeholder="Your Design Philosophy"
                    required
                    value={philosophy}
                    onChange={(e) => setPhilosophy(e.target.value)}
                    className="h-24 w-full rounded border p-2"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <input
                    type="number"
                    name="years_experience"
                    min="0"
                    placeholder="How many years of experience do you have?"
                    required
                    value={yearsOfExperience}
                    onChange={(e) => setYearsOfExperience(e.target.value)}
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="url"
                    name="instagram_url"
                    placeholder="Instagram URL"
                    value={instagramURL}
                    onChange={(e) => setInstagramURL(e.target.value)}
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="url"
                    name="twitter_url"
                    placeholder="Twitter URL"
                    value={twitterURL}
                    onChange={(e) => setTwitterURL(e.target.value)}
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="url"
                    name="facebook_url"
                    placeholder="Facebook URL"
                    value={facebookURL}
                    onChange={(e) => setFacebookURL(e.target.value)}
                    className="w-full rounded border p-2"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex-1 rounded-lg bg-white p-6 shadow-md md:mt-0">
              <h2 className="mb-4 text-2xl font-semibold">Portfolio</h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col gap-4 rounded border p-2"
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
                      onClick={() => {
                        setProjects(
                          projects.filter((x) => x.title !== project.title)
                        );
                      }}
                      className="lucide lucide-trash-2 absolute right-2 top-2 cursor-pointer text-red-400"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/project1.webp"
                        alt="Project Image"
                        className="h-20 w-20 rounded object-cover"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-600">
                          {project.description}
                        </p>
                        <p>
                          Number of Products:{" "}
                          <span className="font-semibold">
                            {project.products.length}
                          </span>
                        </p>
                        <p>
                          Tags:{" "}
                          <span className="font-semibold">
                            {project.tags.map((x, i) => (
                              <span key={i}>{x},</span>
                            ))}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                  className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                >
                  Add New Project
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              onClick={(e) => {
                console.log("one");
                saveDesignerProfile(e);
                console.log("two");
              }}
              className="rounded bg-green-500 px-6 py-2 font-bold text-white hover:bg-green-700"
            >
              Save Profile
            </button>
          </div>
        </form>
      </main>
      {showModal && (
        <AddProject
          closeModal={() => setShowModal(false)}
          saveProject={(pr) => {
            setProjects([...projects, pr]);
          }}
        />
      )}
    </main>
  );
}

function AddProject({ closeModal, saveProject }) {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const [products, setProducts] = useState([]);

  const [projectPic, setProjectPic] = useState(null);

  const createProjectAction = (e) => {
    e.preventDefault();

    if (products.length === 0) {
      notification({
        status: "error",
        message: "Please add at least one product",
      });
      return;
    }

    if (!projectPic) {
      notification({
        status: "error",
        message: "Please select a project image",
      });
      return;
    }

    const body = {
      title: name,
      description,
      tags,
      products,
      projectPic,
    };

    saveProject(body);
    closeModal();
  };

  return (
    <div
      id="addProjectModal"
      className="fixed left-0 top-0 z-50 h-full w-full overflow-auto bg-black bg-opacity-50"
    >
      <div className="modal-content mx-auto mt-10 w-3/4 rounded bg-white p-5 shadow-lg md:w-1/2 lg:w-1/3">
        <span
          onClick={() => closeModal()}
          className="float-right cursor-pointer text-xl"
        >
          &times;
        </span>
        <h2 className="mb-4 text-2xl font-semibold">Add Project</h2>
        <form id="addProjectForm" />

        <div className="mb-4">
          <label className="mb-2 block">Project Title:</label>
          <input
            type="text"
            name="project_title"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Project Description:</label>
          <textarea
            name="project_description"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="h-24 w-full rounded border p-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Select Tags:</label>
          <div className="flex flex-wrap gap-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="valentines"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTags([...tags, e.target.value]);
                  } else {
                    setTags(tags.filter((x) => x !== e.target.value));
                  }
                }}
                className="form-checkbox"
              />
              <span className="ml-2">Valentine&apos;s</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="spring"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTags([...tags, e.target.value]);
                  } else {
                    setTags(tags.filter((x) => x !== e.target.value));
                  }
                }}
                className="form-checkbox"
              />
              <span className="ml-2">Spring Collection</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="summer"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTags([...tags, e.target.value]);
                  } else {
                    setTags(tags.filter((x) => x !== e.target.value));
                  }
                }}
                className="form-checkbox"
              />
              <span className="ml-2">Summer Collection</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="winter"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTags([...tags, e.target.value]);
                  } else {
                    setTags(tags.filter((x) => x !== e.target.value));
                  }
                }}
                className="form-checkbox"
              />
              <span className="ml-2">Winter Collection</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tags"
                value="fall"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTags([...tags, e.target.value]);
                  } else {
                    setTags(tags.filter((x) => x !== e.target.value));
                  }
                }}
                className="form-checkbox"
              />
              <span className="ml-2">Fall Collection</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 block">Select Image:</label>
          <input
            type="file"
            name="project_image"
            accept="image/*"
            onChange={(e) => setProjectPic(e.target.files[0])}
            className="w-full rounded border p-2"
          />
        </div>

        <div className="relative mb-4 text-xl font-semibold">
          Products{" "}
          <button
            id="addProductBtn"
            onClick={() => setShowModal(true)}
            className="absolute right-0 mx-auto rounded px-4 py-2 font-bold text-green-500 underline"
            style={{
              width: "200px",
            }}
          >
            Add New Product
          </button>
        </div>
        <div id="products-section" className="mb-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="product relative mb-4 rounded border p-4"
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
                onClick={() => {
                  setProducts(products.filter((x) => x.name !== product.name));
                }}
                className="lucide lucide-trash-2 absolute right-2 top-2 cursor-pointer text-red-400"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
              <img
                src="/Products1.webp"
                alt="Product Name"
                className="h-20 w-20 rounded object-cover"
              />
              <div>
                <h4 className="font-semibold">{product.name}</h4>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col items-center space-y-8">
          <button
            type="submit"
            onClick={(e) => createProjectAction(e)}
            className="mt-10 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Create Project
          </button>
        </div>
      </div>
      {showModal && (
        <AddProduct
          closeProductModal={() => setShowModal(false)}
          saveProduct={(body) => {
            setProducts([...products, body]);
          }}
        />
      )}
    </div>
  );
}

function AddProduct({ closeProductModal, saveProduct }) {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [productImage, setProductImage] = useState(null);

  const createProductAction = (e) => {
    e.preventDefault();

    if (!productImage) {
      notification({
        status: "error",
        message: "Please select a product image",
      });
      return;
    }

    const body = {
      name,
      description,
      price,
      categories,
      productImage,
    };

    saveProduct(body);
    closeProductModal();
  };
  return (
    <div
      id="addProductModal"
      className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity"
    >
      <div className="flex h-full items-center justify-center">
        <div className="relative mx-auto max-w-md space-y-4 rounded-lg bg-white p-6">
          <span
            id="closeProductModal"
            onClick={() => closeProductModal()}
            className="close-button absolute right-0 top-0 mr-2 mt-2 cursor-pointer"
          >
            &times;
          </span>
          <h3 className="mb-4 text-center text-xl font-semibold">
            Add Product
          </h3>
          <form id="addProductForm">
            <input
              type="text"
              name="product_name"
              placeholder="Product Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 w-full rounded border p-2"
            />
            <textarea
              name="description"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mb-4 w-full rounded border p-2"
            ></textarea>
            <input
              type="number"
              name="price"
              placeholder="Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mb-4 w-full rounded border p-2"
            />
            <div className="mb-4">
              <span>Select Category:</span>
              <div className="flex flex-wrap">
                <label className="mr-2 inline-flex items-center">
                  <input
                    type="checkbox"
                    name="categories"
                    value="new_arrivals"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategories([...categories, e.target.value]);
                      } else {
                        setCategories(
                          categories.filter((x) => x !== e.target.value)
                        );
                      }
                    }}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">New Arrivals</span>
                </label>
                <label className="mr-2 inline-flex items-center">
                  <input
                    type="checkbox"
                    name="categories"
                    value="men"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategories([...categories, e.target.value]);
                      } else {
                        setCategories(
                          categories.filter((x) => x !== e.target.value)
                        );
                      }
                    }}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Men</span>
                </label>
                <label className="mr-2 inline-flex items-center">
                  <input
                    type="checkbox"
                    name="categories"
                    value="women"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategories([...categories, e.target.value]);
                      } else {
                        setCategories(
                          categories.filter((x) => x !== e.target.value)
                        );
                      }
                    }}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Women</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="categories"
                    value="jewelry"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategories([...categories, e.target.value]);
                      } else {
                        setCategories(
                          categories.filter((x) => x !== e.target.value)
                        );
                      }
                    }}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Jewelry</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="mb-2 block">Select Image:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                required
                onChange={(e) => setProductImage(e.target.files[0])}
                className="w-full rounded border p-2"
              />
            </div>
            <button
              type="submit"
              onClick={(e) => createProductAction(e)}
              className="w-full rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
