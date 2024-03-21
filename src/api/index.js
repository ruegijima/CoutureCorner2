import { collection, addDoc, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/config";

/**
 * Create a new user in the Firestore database.
 * @param {Object} userData - The data for the new user.
 * @returns {Promise<DocumentReference>} A promise that resolves with the reference to the newly created document.
 */
export async function createUser(userData) {
  try {
    // Add a new document with the user data to the 'users' collection
    const userRef = await addDoc(collection(db, "user"), {
      ...userData,
      createdAt: new Date().toUTCString(), // Add a timestamp for the creation date
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
  const designerRef = await addDoc(collection(db, "Designers"), {
    ...designerData,
    createdAt: new Date().toUTCString(),
  });
  return designerRef;
}

// Create a new project
export async function createProject(projectData) {
  const projectRef = await addDoc(collection(db, "Projects"), {
    ...projectData,
    createdAt: new Date().toUTCString(),
  });
  return projectRef;
}

// Create a new collection
export async function createCollection(collectionData) {
  const collectionRef = await addDoc(collection(db, "Collections"), {
    ...collectionData,
    createdAt: new Date().toUTCString(),
  });
  return collectionRef;
}

// Create a new product
export async function createProduct(productData) {
  const productRef = await addDoc(collection(db, "Products"), {
    ...productData,
    createdAt: new Date().toUTCString(),
  });
  return productRef;
}

// Get all projects for a designer
export async function getAllProjectsForDesigner(designerId) {
  const projectsRef = collection(db, "Projects");
  const q = query(projectsRef, where("DesignerID", "==", designerId));
  const querySnapshot = await getDocs(q);
  const projects = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return projects;
}

// Get user by ID
export async function getUserByEmail(email) {
  const projectsRef = collection(db, "user");
  const q = query(projectsRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const projects = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return projects;
}

// Get all designers
export async function getAllDesigners() {
  const designersRef = collection(db, "Designers");
  const querySnapshot = await getDocs(designersRef);
  const designers = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return designers;
}

export async function getDesignerByUserId(userId) {
  const designersRef = collection(db, "Designers");
  const q = query(designersRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const designers = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return designers;
}

// Get all collections
export async function getAllCollections() {
  const collectionsRef = collection(db, "Collections");
  const querySnapshot = await getDocs(collectionsRef);
  const collections = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return collections;
}

// Get all products
export async function getAllProducts() {
  const productsRef = collection(db, "Products");
  const querySnapshot = await getDocs(productsRef);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return products;
}

// Get all products for a project
export async function getAllProductsForProject(projectId) {
  const productsRef = collection(db, "Products");
  const q = query(productsRef, where("ProjectID", "==", projectId));
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return products;
}

// Get product by Id 
export async function getProductById(productId) {
 const docRef = doc(db, "Products", productId)
 const docSnap = await getDoc(docRef)
 return docSnap.data()
}

// Get designer by Id 
export async function getDesignerById(designerId) {
  const docRef = doc(db, "Designers", designerId)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
 }