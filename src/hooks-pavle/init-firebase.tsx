// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF2eeqISRcWN9saPxSmknO-85DkJMYcjY",
  authDomain: "italiana-salotti.firebaseapp.com",
  projectId: "italiana-salotti",
  storageBucket: "italiana-salotti.appspot.com",
  messagingSenderId: "165315690479",
  appId: "1:165315690479:web:115a3a086d08da7b7a001a",
  measurementId: "G-BGVYXHR5K4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
