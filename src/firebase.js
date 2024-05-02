// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL9YCFasL-xU_cLNgTeE7Ihj9BerCNRgQ",
  authDomain: "shop-it-61085.firebaseapp.com",
  projectId: "shop-it-61085",
  storageBucket: "shop-it-61085.appspot.com",
  messagingSenderId: "528509350917",
  appId: "1:528509350917:web:0e295b939fc6c9cae5986c",
  measurementId: "G-K1YG2P0X4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.db;
const auth = getAuth(app);

export {db,auth};