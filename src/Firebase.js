// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from'firebase/auth'
import {getFirestore}from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrVjkcJUS79_aQ2sTXiUo_SksTyxLpLdE",
  authDomain: "blog-app-8c627.firebaseapp.com",
  databaseURL: "https://blog-app-8c627-default-rtdb.firebaseio.com",
  projectId: "blog-app-8c627",
  storageBucket: "blog-app-8c627.appspot.com",
  messagingSenderId: "337953110459",
  appId: "1:337953110459:web:0afb59827ae75920876c9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 export const db =   getFirestore(app);
 export const Auth = getAuth(app)
 export const Provider = GoogleAuthProvider();

