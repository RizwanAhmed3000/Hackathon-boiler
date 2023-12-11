import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiXCezk5jYqt7jJpaPNMeCluURo49Jujo",
    authDomain: "final-hackathon-9d712.firebaseapp.com",
    projectId: "final-hackathon-9d712",
    storageBucket: "final-hackathon-9d712.appspot.com",
    messagingSenderId: "387137222928",
    appId: "1:387137222928:web:84d840299358fbe861cd95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, createUserWithEmailAndPassword, db, doc, setDoc }
