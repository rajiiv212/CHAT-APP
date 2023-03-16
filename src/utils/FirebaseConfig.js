// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzwjO5lxVeLIsi7qvUDD5uRyY2XA5vkwc",
  authDomain: "chat-app-3dc58.firebaseapp.com",
  projectId: "chat-app-3dc58",
  storageBucket: "chat-app-3dc58.appspot.com",
  messagingSenderId: "549387395701",
  appId: "1:549387395701:web:ace16e3c3121c0e3020e3c",
  measurementId: "G-DP2HZR1BJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app)