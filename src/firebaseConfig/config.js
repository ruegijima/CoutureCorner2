// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCycPZAc3M7BSiGvkb3RAlS08_Pim2mNQY",
  authDomain: "couturecorner-304b1.firebaseapp.com",
  projectId: "couturecorner-304b1",
  storageBucket: "couturecorner-304b1.appspot.com",
  messagingSenderId: "220970963748",
  appId: "1:220970963748:web:63ce21945725e8617f99b1",
  measurementId: "G-LQVD2768WC",
};

const app = initializeApp(firebaseConfig);

export const onMessageListener = () =>
  new Promise((resolve) => {
    const messaging = getMessaging(app);
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

const auth = getAuth(app);
const db = getFirestore(app);

export default app;
export { auth };
export { db };
