import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCjxiwFHIM-Flm3hsMZKWIbC9UKTXA8DEw",
    authDomain: "dive-92a56.firebaseapp.com",
    projectId: "dive-92a56",
    storageBucket: "dive-92a56.appspot.com",
    messagingSenderId: "447535608516",
    appId: "1:447535608516:web:65bb2c7dfa45e4c15e4f91",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)