import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDtLuEgFA46wOApIL9O_bHhymVbpqQ297w",
    authDomain: "magna-a32fa.firebaseapp.com",
    projectId: "magna-a32fa",
    storageBucket: "magna-a32fa.appspot.com",
    messagingSenderId: "1011330742988",
    appId: "1:1011330742988:web:b7802e15f7b1c204516069"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)