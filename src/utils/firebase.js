// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrV2itBHhIvB5dKYTxCAiZeQ3iKyw93Qo",
  authDomain: "movie-gpt-ed21e.firebaseapp.com",
  projectId: "movie-gpt-ed21e",
  storageBucket: "movie-gpt-ed21e.firebasestorage.app",
  messagingSenderId: "643418469625",
  appId: "1:643418469625:web:f6c39eab58e5a54c5ede28",
  measurementId: "G-VN6KFVKHM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();