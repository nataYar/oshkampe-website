// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Z6JcId7MNYYgkGvPvfQxh2Msw593NfY",
  authDomain: "oksana-oshkampe.firebaseapp.com",
  databaseURL: "https://oksana-oshkampe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oksana-oshkampe",
  storageBucket: "oksana-oshkampe.appspot.com",
  messagingSenderId: "540960872774",
  appId: "1:540960872774:web:c6132e596bfd1e291bed47",
  measurementId: "G-7QXP0ESD6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);