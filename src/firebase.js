// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <- needed for database 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKq6farokUDL48vvpMaNFc_mQew_lQtSE",
  authDomain: "animalshelter-project.firebaseapp.com",
  projectId: "animalshelter-project",
  storageBucket: "animalshelter-project.appspot.com",
  messagingSenderId: "1000868030998",
  appId: "1:1000868030998:web:110931622fc3dd005a2337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {auth} 

export const db = getFirestore(app); //exports the database, so we can use it in our application components. 