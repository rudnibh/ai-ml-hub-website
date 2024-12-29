// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHXAGU7OehQKysAwuyrVvcSTfDGkNtY0g",
  authDomain: "ai-ml-hub-website.firebaseapp.com",
  projectId: "ai-ml-hub-website",
  storageBucket: "ai-ml-hub-website.firebasestorage.app",
  messagingSenderId: "480508740619",
  appId: "1:480508740619:web:103770ddec5b5ba927730e",
  measurementId: "G-LHZ416M4SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);