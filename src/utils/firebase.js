// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWyvWA3sYz6-IUqkapIzQN4a7IjgEmQTw",
  authDomain: "netflix-gpt-777.firebaseapp.com",
  projectId: "netflix-gpt-777",
  storageBucket: "netflix-gpt-777.appspot.com",
  messagingSenderId: "993212298400",
  appId: "1:993212298400:web:8343bf64390b68d08185c5",
  measurementId: "G-1PYW6JHXGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
