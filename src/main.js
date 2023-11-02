import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { initializeApp } from 'firebase/app'
// import { getFirestore } from "firebase/firestore" 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKq6farokUDL48vvpMaNFc_mQew_lQtSE",
  authDomain: "animalshelter-project.firebaseapp.com",
  projectId: "animalshelter-project",
  storageBucket: "animalshelter-project.appspot.com",
  messagingSenderId: "1000868030998",
  appId: "1:1000868030998:web:110931622fc3dd005a2337"
};

const app = createApp(App)

// const app = initializeApp(firebaseConfig) 
// const db = getFirestore(app)

app.use(router)

app.mount('#app')

// export {
//   db 
// }


