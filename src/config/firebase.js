import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAa9dQwoWnxhha5UwiXI_Lfra43VB57kD0",
  authDomain: "tiktok---jornadabr.firebaseapp.com",
  projectId: "tiktok---jornadabr",
  storageBucket: "tiktok---jornadabr.appspot.com",
  messagingSenderId: "788535024083",
  appId: "1:788535024083:web:2ba69a66875bc92e433726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
