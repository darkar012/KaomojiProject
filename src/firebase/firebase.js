import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBxWf3NNsWCLJx-p_75k4Rpbm4yQ66_J_c",
    authDomain: "webavanzada-1f4a8.firebaseapp.com",
    projectId: "webavanzada-1f4a8",
    storageBucket: "webavanzada-1f4a8.appspot.com",
    messagingSenderId: "365899117156",
    appId: "1:365899117156:web:f541e03011c4bf93f1a571",
    measurementId: "G-J7Z4K0P11N"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export {app, auth, db, storage};