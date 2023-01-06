import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARyw2wHmYVgL5843VydXgF6QTwfaPnNo8",
    authDomain: "challenge-greydive-gigena.firebaseapp.com",
    projectId: "challenge-greydive-gigena",
    storageBucket: "challenge-greydive-gigena.appspot.com",
    messagingSenderId: "820120435464",
    appId: "1:820120435464:web:8db87a2c9e904eb0ad4abd"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;