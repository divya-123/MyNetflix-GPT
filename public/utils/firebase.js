// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxopj7Dp2yhJo8fnYJfERpLKY_T2qs7JA",
  authDomain: "netflix-gpt-f13ab.firebaseapp.com",
  projectId: "netflix-gpt-f13ab",
  storageBucket: "netflix-gpt-f13ab.appspot.com",
  messagingSenderId: "875271689077",
  appId: "1:875271689077:web:28127f1eb1fd30a058b93c",
  measurementId: "G-MYH6Y2FFYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);