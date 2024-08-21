// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC14TpyaZzuZrgKuL-pfME29INdvLa9wGs",
  authDomain: "amexline-12c57.firebaseapp.com",
  databaseURL: "https://amexline-12c57-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amexline-12c57",
  storageBucket: "amexline-12c57.appspot.com",
  messagingSenderId: "914110039309",
  appId: "1:914110039309:web:208ac59685f6ddd9de1c44",
  measurementId: "G-23GL498C69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;