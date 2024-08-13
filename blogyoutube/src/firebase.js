// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXS_OFi7HZnRxPonNxOm9h0xAQkzUdNjs",
  authDomain: "blog-a9a0e.firebaseapp.com",
  projectId: "blog-a9a0e",
  storageBucket: "blog-a9a0e.appspot.com",
  messagingSenderId: "917544172220",
  appId: "1:917544172220:web:f4c602e6e19cd17c6a6eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }