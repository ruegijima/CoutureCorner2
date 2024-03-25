import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById, getAllProductsForProject } from "../api"; // Ensure you have these functions properly defined and imported


export const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        // Fetch project details
        const projectResponse = await getProjectById(projectId);
        if (projectResponse) {
          console.log(projectResponse)
          setProject(projectResponse);

          // Fetch products for this project
          const productsResponse = await getAllProductsForProject(projectId);
          if (productsResponse) {
            console.log(productsResponse)
            setProducts(productsResponse);
          }
        }
      } catch (error) {
        console.error("Error fetching project details or products:", error);
      }
    };

    fetchProjectDetails();
  }, [projectId]); // Re-run the effect if projectId changes

  if (!project) {
    return <div>Loading project details...</div>;
  }

  return (
    <main className="container mx-auto p-6">
      <div className="mb-6 rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="text-sm text-gray-600">
            {project.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Products</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="rounded border p-4">
                <img
                    src={product?.productImage || "/portfolio-item-2.webp"}
                    alt={product.name}
                  className="mb-4 h-64 w-full rounded object-cover"
                />
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-lg text-green-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
