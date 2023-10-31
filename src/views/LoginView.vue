<template>
<div class="bg-blue-400 dark:bg-blue-400 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-10">
  <div class="lg:py-10 lg:pl-20">
    <img class="" src="../assets/loginphoto.jpg" alt="">
  </div>
  <div class="w-64 mx-auto pt-10 bg-blue-400 dark:bg-blue-400 lg:pt-20">
      <h1 class="text-white pb-10 text-center text-2xl md:text-2xl lg:text-2xl">LOG IND</h1>
      <p class="mb-2 text-white">Brugernavn</p>
      <input class="w-full px-3 py-2 border text-black focus:outline-none focus:border-blue-500 mb-4" type="text" v-model="email">

      <p class="mb-2 text-white">Adgangskode</p>
      <input class="w-full px-3 py-2 border text-black focus:outline-none focus:border-blue-500 mb-4" type="password" v-model="password">

      <p v-if="errMsg" class="text-red-500 mb-4">{{ errMsg }}</p>

      <button @click="logIn" class="bg-blue-600 hover:bg-blue-600 text-white py-2 px-4 mr-4 focus:outline-none">Log ind</button>
      <button @click="signInWithGoogle" class="bg-transparent text-white focus:outline-none">Log ind med Google</button>
  </div>
</div>


  <!-- <div>
      <p>Username:</p> <input class="text-black" type="text" v-model="email">
      <p>Password</p> <input class="text-black" type="password" v-model="password">
      <p v-if="errMsg"> {{ errMsg }}</p>
  </div>
  <div>
    <button @click="logIn">Log ind</button>
  </div>
  <div>
    <button @click="signInWithGoogle">Sign In With Google</button>
  </div>
  -->
  

</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import router from '../router'

let email = ref ('')
let password = ref ('')
const errMsg = ref ('')



let logIn = () => {
signInWithEmailAndPassword(auth, email.value, password.value)
.then((data) => {
  console.log("Succesfully signed in!", data)
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


const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/feed");
        })
        .catch((error) => {
            
        })
};






</script>

<style lang="scss" scoped>

</style>