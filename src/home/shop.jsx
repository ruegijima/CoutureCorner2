import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/config";
import { Link } from "react-router-dom";
import { useQuery } from "./useQuery";
import { useDeferredValue } from "react";
import toast from "react-hot-toast";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    // Get cart from local storage at initial load
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  const fetchProducts = async () => {
    const productsCollectionRef = collection(db, "Products");
    const productsSnapshot = await getDocs(productsCollectionRef);
    const productsList = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productsList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    console.log("Attempting to add product:", product);

    if (!localStorage.getItem("userId")) {
      toast("Please login to add products to cart", {
        icon: "🚨",
      });
      return;
    }

    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      let newCart;
      if (!isProductInCart) {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      } else {
        newCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      console.log("New cart state:", newCart);
      return newCart;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // gbet query "tab"
  let query = useQuery();

  const [searchValue, setSearchValue] = useState("");
  const deferredVal = useDeferredValue(searchValue);

  useEffect(() => {
    if (deferredVal?.length > 0) {
      const filteredPrs = products.filter((pr) =>
        pr.name.toLowerCase().includes(deferredVal.toLowerCase())
      );
      setProducts(filteredPrs);
    } else {
      fetchProducts();
    }
  }, [deferredVal]);

  return (
    <main>
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-6">
          <div className="relative">
            <input
              type="search"
              placeholder="Search shop..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full rounded-full border px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="absolute right-0 top-0 mr-4 mt-3">
              <i className="fas fa-search text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 flex">
        <aside className="w-1/5 pt-4">
          <nav
            className="space-y-4
"
          >
            <Link
              to="/shop"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === null && "bg-green-700 !text-white"
              }`}
            >
              All
            </Link>
            <Link
              to="?tab=new-arrivals"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === "new-arrivals" &&
                "bg-green-700 !text-white"
              }`}
            >
              New Arrivals
            </Link>
            <Link
              to="?tab=women"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === "women" && "bg-green-700 !text-white"
              }`}
            >
              Women
            </Link>
            <Link
              to="?tab=men"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === "men" && "bg-green-700 !text-white"
              }`}
            >
              Men
            </Link>
            <Link
              to="?tab=jewellery"
              className={`block rounded px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white ${
                query.get("tab") === "jewellery" && "bg-green-700 !text-white"
              }`}
            >
              Jewellery
            </Link>
          </nav>
        </aside>

        <section className="w-3/4 pl-8">
          <h2 className="mb-6 text-3xl font-semibold">New Arrivals</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products
              .filter((x) =>
                query.get("tab") ? x.categories.includes(query.get("tab")) : x
              )
              .map((product) => (
                <div
                  key={product.id}
                  className="flex cursor-pointer flex-col items-center justify-between rounded-lg bg-white pb-4 shadow-lg"
                >
                  <Link to={`/shop/${product.id}`}>
                    <img
                      src={product?.productImage ?? "/Products1.webp"}
                      alt={product.name}
                      className="mb-4 h-auto min-h-[260px] w-full rounded-t-lg bg-white"
                    />
                    <h3 className="px-4 text-lg font-semibold">
                      {product.name}
                    </h3>
                    <p className="px-4 text-sm text-gray-600">
                      {product.description.slice(0, 100)}
                      {product.description.length > 100 && "..."}
                    </p>
                  </Link>
                  <div className="mt-4 flex w-full items-center justify-between px-4">
                    <p className="text-lg font-semibold text-green-600">
                      ${product.price}
                    </p>

                    {/* Optionally, include a remove button if the product is in the cart */}
                    {cart.find((item) => item.id === product.id) ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the link from being triggered
                          handleRemoveFromCart(product.id, e);
                        }}
                        className="rounded bg-red-600 px-2 py-2 text-sm font-bold text-white transition duration-300 hover:bg-red-700"
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the link from being triggered
                          handleAddToCart(product, e);
                        }}
                        className="rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            {products.filter((x) =>
              query.get("tab") ? x.categories.includes(query.get("tab")) : x
            ).length === 0 && (
              <div className="w-full text-left">
                <h2 className="text-sm font-medium">
                  No products found in this category
                </h2>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};
