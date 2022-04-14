// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdUvbubRJWOcjhvPU6dOESwd3NryZJO0Y",
  authDomain: "travel-guru-clone.firebaseapp.com",
  projectId: "travel-guru-clone",
  storageBucket: "travel-guru-clone.appspot.com",
  messagingSenderId: "590144675961",
  appId: "1:590144675961:web:3da221b8ec648e2820b4a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;