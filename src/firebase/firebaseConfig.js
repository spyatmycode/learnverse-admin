// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdGDGjA-S1MqPZ87RA0xwhjyZUkjOrVbA",
  authDomain: "learnverse-admin.firebaseapp.com",
  projectId: "learnverse-admin",
  storageBucket: "learnverse-admin.appspot.com",
  messagingSenderId: "215127407945",
  appId: "1:215127407945:web:a8b6ca3632eaa885daee98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)