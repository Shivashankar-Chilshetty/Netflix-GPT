// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_4eipOG8LJt0LZOq5Dg3VgU7DnHxMOG0",
  authDomain: "netflixgpt-fd0bb.firebaseapp.com",
  projectId: "netflixgpt-fd0bb",
  storageBucket: "netflixgpt-fd0bb.appspot.com",
  messagingSenderId: "1041043179894",
  appId: "1:1041043179894:web:87c8061e1400074d351257",
  measurementId: "G-RG1JP8HQMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();