// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpS071NyuJQ22GNTQOmeX2t7ieeXkigwc",
  authDomain: "livevid-14cef.firebaseapp.com",
  projectId: "livevid-14cef",
  storageBucket: "livevid-14cef.appspot.com",
  messagingSenderId: "415284734155",
  appId: "1:415284734155:web:80ee24d9d0c47884fa134e",
  measurementId: "G-GLGWFW8CFK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
