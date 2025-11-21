// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsFKJrD-4KaiB_vLoj8HaAOXwKoRIdEpg",
  authDomain: "netflixgpt-04-6833d.firebaseapp.com",
  projectId: "netflixgpt-04-6833d",
  storageBucket: "netflixgpt-04-6833d.firebasestorage.app",
  messagingSenderId: "634078216196",
  appId: "1:634078216196:web:908046c99aa46266853551",
  measurementId: "G-Y28S2X05YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);