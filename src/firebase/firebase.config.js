// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvRU57Het_gOk5QDBGAxI3mbWEGnFaEiA",
  authDomain: "wedding-diary-6bc7d.firebaseapp.com",
  projectId: "wedding-diary-6bc7d",
  storageBucket: "wedding-diary-6bc7d.appspot.com",
  messagingSenderId: "31749489656",
  appId: "1:31749489656:web:a39181c538aa72fbdccc0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);