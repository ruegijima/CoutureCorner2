import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createUser,
  createDesigner,
  createProject,
  createCollection,
  createProduct,
  getAllProjectsForDesigner,
  // Add other functions you wish to test
} from "./index.js"; // Update the path to where your functions are defined

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCycPZAc3M7BSiGvkb3RAlS08_Pim2mNQY",
  authDomain: "couturecorner-304b1.firebaseapp.com",
  projectId: "couturecorner-304b1",
  storageBucket: "couturecorner-304b1.appspot.com",
  messagingSenderId: "220970963748",
  appId: "1:220970963748:web:63ce21945725e8617f99b1",
  measurementId: "G-LQVD2768WC",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testCreateUser() {
  try {
    const user = await createUser({
      email: "test@example.com",
      fullName: "Test User",
      signUpDate: new Date().toISOString(),
      // Add other fields as per your user model
    });
    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

async function testCreateProject() {
  try {
    const project = await createProject({
      designerId: "designerId123", // Assume this is an existing designer's ID
      title: "Test Project",
      description: "This is a test project.",
      // Add other project fields
    });
    console.log("Project created:", project);
  } catch (error) {
    console.error("Error creating project:", error);
  }
}

// Define more test functions for each operation you wish to test

async function runTests() {
  await testCreateUser();
  await testCreateProject();
  // Call other test functions
}

runTests();
