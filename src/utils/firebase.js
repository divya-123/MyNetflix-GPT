// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBzzlF8kc8a22H7a8CXoNQPniTpglWwkg",
  authDomain: "netflixgpt-6de3b.firebaseapp.com",
  projectId: "netflixgpt-6de3b",
  storageBucket: "netflixgpt-6de3b.appspot.com",
  messagingSenderId: "252451023453",
  appId: "1:252451023453:web:a767ec51bfd6e24bcabbb4",
  measurementId: "G-V02WB0QQDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);