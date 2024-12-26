// src/app/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAOHsjlVvCFWBBdz7r_jGnBQpfupYY5Enc",
    authDomain: "docusign-hackathon-c598d.firebaseapp.com",
    projectId: "docusign-hackathon-c598d",
    storageBucket: "docusign-hackathon-c598d.firebasestorage.app",
    messagingSenderId: "878861564778",
    appId: "1:878861564778:web:0d7536a5314848c2bcc313",
    measurementId: "G-KN1VYZXHKK"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
