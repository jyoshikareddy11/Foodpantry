
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQvX06arRNF6aJ5aXgORI7O5d1b9FFghE",
  authDomain: "pantry-65f9b.firebaseapp.com",
  projectId: "pantry-65f9b",
  storageBucket: "pantry-65f9b.appspot.com",
  messagingSenderId: "296585423840",
  appId: "1:296585423840:web:4122fdb81dfa7f5b77d985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };