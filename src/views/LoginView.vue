<template>
<!-- <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Username</label> 
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <p v-if="errMsg"> {{ errMsg }}</p>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <button @click="logIn" type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
      <div>
        <button @click="signInWithGoogle" type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
  </div>
</div> -->


  <div>
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