// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSr4jnjTEVCLGRcoKY1sdcJENus74SOlg",
  authDomain: "netflix-gpt-2001.firebaseapp.com",
  projectId: "netflix-gpt-2001",
  storageBucket: "netflix-gpt-2001.appspot.com",
  messagingSenderId: "64437258747",
  appId: "1:64437258747:web:f432117cd2c08d80dea35e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(); // Central Space
