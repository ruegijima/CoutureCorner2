import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/config"; 
import { Link } from "react-router-dom";

export const Designers = () => {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    const fetchDesigners = async () => {
      const designersCollectionRef = collection(db, "Designers");
      const snapshot = await getDocs(designersCollectionRef);
      const designersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDesigners(designersList);
    };

    fetchDesigners();
  }, []);

  return (
    <main>
      <style>
        {`.modal {
          display: none; /* Hidden by default */
          position: fixed; /* Stay in place */
          z-index: 1; /* Sit on top */
          left: 0;
          top: 0;
          width: 100%; /* Full width */
          height: 100%; /* Full height */
          overflow: auto; /* Enable scroll if needed */
          background-color: rgb(0, 0, 0); /* Fallback color */
          background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
          padding-top: 60px;
        }

        .modal-content {
          background-color: #fefefe;
          margin: 5% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 100%;
          max-width: 500px;
        }

        .close {
          color: #000;
          float: right;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .close:hover,
        .close:focus {
          color: #555;
          text-decoration: none;
          cursor: pointer;
        }`}
      </style>
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-6">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full border px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="absolute right-0 top-0 mr-4 mt-3">
              <i className="fas fa-search text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
      <section className="container mx-auto p-6">
        <h2 className="mb-8 text-center text-4xl font-semibold">
          Designer Portfolios
        </h2>
        <p className="mb-8 text-center text-gray-600">
          Discover designers for tailor-made creations and collaborative ventures.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designers.map(designer => (
            <div key={designer.id} className="rounded-lg bg-white p-4 shadow-lg">
              <Link to={`/designer-portfolio/${designer.id}`} className="block">
                <img
                  src={designer.imageUrl || '/portfolio-item-1.webp'} 
                  alt="Designer Work"
                  className="mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold">{designer.name}</h3>
              </Link>
              <p className="text-sm text-gray-600">
                {designer.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <button className="text-green-600 hover:text-green-800">
                  <i className="far fa-heart"></i> Like
                </button>
                <button className="text-green-600 hover:text-green-800">
                  <i className="far fa-bookmark"></i> Save
                </button>
                <button className="contactBtn text-green-600 hover:text-green-800">
                  <i className="far fa-envelope"></i> Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
          {/* Collaboration modal code remains unchanged */}
    <div id="collaborationModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Request Collaboration</h2>
        <form>
          <label htmlFor="designerName">Designer's Name:</label>
          <input type="text" id="designerName" name="designerName" required />

          <label htmlFor="projectDescription">Project Description:</label>
          <textarea id="projectDescription" name="projectDescription" required></textarea>

          <input type="submit" value="Submit Request" />
        </form>
      </div>
    </div>
  </main>
);

};

