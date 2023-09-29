import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCw1j3j2ptd3ckofz3gyFOyMLA7vv420yE",
    authDomain: "magna-439b2.firebaseapp.com",
    projectId: "magna-439b2",
    storageBucket: "magna-439b2.appspot.com",
    messagingSenderId: "1076363790926",
    appId: "1:1076363790926:web:f9219747f33e11d9fd511f",
    measurementId: "G-ZBR8KF1MEH"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)