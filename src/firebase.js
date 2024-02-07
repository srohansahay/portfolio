
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDJm6AkKiDNQTUdKm-DoTArtH4OXjPP5IU",
  authDomain: "portfolio-a6041.firebaseapp.com",
  projectId: "portfolio-a6041",
  storageBucket: "portfolio-a6041.appspot.com",
  messagingSenderId: "169403744862",
  appId: "1:169403744862:web:630d93b3696e47a1b6eacf"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);