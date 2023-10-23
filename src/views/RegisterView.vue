<template>
        <h1>Opret bruger</h1>
    <div>
        <p>Username:</p> <input class="text-black" type="text" v-model="email">
        <p>Password</p> <input class="text-black" type="password" v-model="password">
    </div>
    <div>
        <button @click="register">Submit</button>
    </div>
 
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth';
/* GoogleAuthProvider, SignInWithPopup, signInWithPopup, */

import router from '../router'
/* import {useRouter} from "vue-router";  */

let email = ref ('')
let password = ref ('');
const errMsg = ref ('')



const register = () => {
createUserWithEmailAndPassword(auth, email.value, password.value)
.then((data) => {
  console.log("succesfully registered!", data)
  router.push('/navguard')
})
.catch((error) => {
  switch(error.code) {
    case "auth/invalid-email":
      errMsg.value = "Invalid email address format."
      break;
    case "auth/user-disabled":
      errMsg.value = "This user has been disabled."
      break;
    case "auth/user-not-found":
      errMsg.value = "User not found."
      break;
    case "auth/wrong-password":
      errMsg.value = "Invalid password."
      break;
    default:
      errMsg.value = "An undefined error occured."
  }
})
}



</script>

<style lang="scss" scoped>

</style>