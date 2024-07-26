// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVIGRter-s0eHJSFzo0dNo-2n0O7IjQRw",
  authDomain: "todolist-a401b.firebaseapp.com",
  projectId: "todolist-a401b",
  storageBucket: "todolist-a401b.appspot.com",
  messagingSenderId: "238673187752",
  appId: "1:238673187752:web:4386121aaa07163ae9439d",
  measurementId: "G-SNPVPTSZBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app)

export { projectAuth, projectFirestore }