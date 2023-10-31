<template>
<div class="bg-blue-400">
  <div class="w-64 mx-auto pt-10 md:pt-20 lg:pt-20 bg-blue-400">
      <h1 class="text-white pb-10 text-center text-2xl md:text-3xl lg:text-3xl">OPRET BRUGER</h1>
      <p class="mb-2 text-white">Brugernavn</p>
      <input class="w-full px-3 py-2 border text-black focus:outline-none focus:border-blue-500 mb-4" type="text" v-model="email">

      <p class="mb-2 text-white">Adgangskode</p>
      <input class="w-full px-3 py-2 border text-black focus:outline-none focus:border-blue-500 mb-4" type="password" v-model="password">

      <p v-if="errMsg" class="text-red-500 mb-4">{{ errMsg }}</p>
  </div>

  <div class="w-64 mx-auto pb-10">
    <button @click="register" class="w-24 bg-blue-600 hover:bg-blue-600 text-white py-2 px-2 mr-4 focus:outline-none">Opret</button>
  </div>
</div>


<h1>Create an Account</h1>
    <form id="registration-form">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required><br><br>

        <input type="submit" value="Register">
    </form>

    <div id="message" style="color: red;"></div>
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


// document.getElementById('userRegistration').addEventListener('submit', function (e) {
//             e.preventDefault();

//             const email = document.getElementById('UserEmail').value;
//             const password = document.getElementById('FirstName').value;
//             const confirmPassword = document.getElementById('LastName').value;

//             if (password !== confirmPassword) {
//                 document.getElementById('message').textContent = "Passwords do not match.";
//                 return;
//             }

//             // You can add code here to send the registration data to a server for further processing.

//             // For this example, we'll just display a success message.
//             document.getElementById('message').style.color = "green";
//             document.getElementById('message').textContent = "Registration successful!";
//         });

</script>

<style lang="scss" scoped>

</style>