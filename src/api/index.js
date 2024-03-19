import { collection, addDoc, query, where, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/config"; 


/**
 * Create a new user in the Firestore database.
 * @param {Object} userData - The data for the new user.
 * @returns {Promise<DocumentReference>} A promise that resolves with the reference to the newly created document.
 */
export async function createUser(userData) {
  try {
    // Add a new document with the user data to the 'users' collection
    const userRef = await addDoc(collection(db, "users"), {
      ...userData,
      createdAt: new Date().toUTCString() // Add a timestamp for the creation date
    });
    console.log("User created with ID: ", userRef.id);
    return userRef; // Return the reference to the newly created document
  } catch (error) {
    // If an error occurs, log it to the console and throw it to be handled by the caller
    console.error("Error creating user: ", error);
    throw error;
  }
}
// Create a new designer
export async function createDesigner(designerData) {
  const designerRef = await addDoc(collection(db, "designers"), {
    ...designerData,
    createdAt: new Date().toUTCString(),
  });
  return designerRef;
}

// Create a new project
export async function createProject(projectData) {
  const projectRef = await addDoc(collection(db, "projects"), {
    ...projectData,
    createdAt: new Date().toUTCString(),
  });
  return projectRef;
}

// Create a new collection
export async function createCollection(collectionData) {
  const collectionRef = await addDoc(collection(db, "collections"), {
    ...collectionData,
    createdAt: new Date().toUTCString(),
  });
  return collectionRef;
}

// Create a new product
export async function createProduct(productData) {
  const productRef = await addDoc(collection(db, "products"), {
    ...productData,
    createdAt: new Date().toUTCString(),
  });
  return productRef;
}

// Get all projects for a designer
export async function getAllProjectsForDesigner(designerId) {
  const projectsRef = collection(db, "projects");
  const q = query(projectsRef, where("designerId", "==", designerId));
  const querySnapshot = await getDocs(q);
  const projects = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return projects;
}

// Get all designers
export async function getAllDesigners() {
  const designersRef = collection(db, "designers");
  const querySnapshot = await getDocs(designersRef);
  const designers = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return designers;
}

// Get all collections
export async function getAllCollections() {
  const collectionsRef = collection(db, "collections");
  const querySnapshot = await getDocs(collectionsRef);
  const collections = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return collections;
}

// Get all products
export async function getAllProducts() {
  const productsRef = collection(db, "products");
  const querySnapshot = await getDocs(productsRef);
  const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return products;
}

// Get all products for a designer
export async function getAllProductsForDesigner(designerId) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("designerId", "==", designerId));
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return products;
}

// Get all products for a project
export async function getAllProductsForProject(projectId) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("projectId", "==", projectId));
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return products;
}


  