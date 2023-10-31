<template>
<nav class="bg-blue-400 dark:bg-blue-400">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl mx-2 py-2 md:mx-3 md:py-1 lg:mx-5 lg:py-0">
        <a href="" class="flex items-center">
          
          <RouterLink to="/"> <img src="../src/assets/logo.png" class="h-8 mr-3 md:h-12 lg:h-12" alt="" /></RouterLink>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div class="flex items-center">
        <button class="text-gray-50 mr-3" @click="logOut" v-if="isLoggedIn">Log ud</button>
        <a class="text-white mr-3" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </a>
        <a class="flex items-center text-gray-50" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </a>
        </div>
    </div>
</nav>
<nav class="flex flex-col lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0 bg-blue-400 dark:bg-blue-400 ">
    <div class="max-w-screen-xl mb-4 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium text-white mr-2 md:mr-2 lg:mr-2 space-x-6 md:space-x-10 lg:space-x-12 text-xs md:text-sm lg:text-xs">
                <li>
                  <RouterLink to="animal">DYR</RouterLink>
                </li>
                <li>
                  <RouterLink to="about">OM</RouterLink>
                </li>
                <li>
                  <RouterLink to="volunteer">FRIVILLIG</RouterLink>
                </li>
                <li>
                  <RouterLink to="donation">DONATION</RouterLink>
                </li>
                <li>
                  <RouterLink to="adoption">ADOPTION</RouterLink>
                </li>
                <li>
                  <RouterLink to="register">OPRET BRUGER</RouterLink>
                </li>
                <li>  
                  <RouterLink to="login">LOG IND</RouterLink>
                </li>
            </ul>
        </div>
      </div>
</nav>
<RouterView />

<!-- cookie banner - html -->

<!-- <div id="app"> 
    <div class="wrapper">
        <header>
          <i class="bx bx-cookie"></i>
          <h2>Du bestemmer over dine data</h2>
        </header>
        <div class="data">
          <p>Vi og vores samarbejdspartnere bruger teknologier, herunder cookies, til at indsamle oplysninger om dig <a href="#"> Læs mere..</a></p>
        </div>
        <div class="buttons">
          <button class="button" id="acceptBtn">Accepter</button>
          <button class="button" id="declineBtn">Afvis</button>
        </div>
    </div> 
    <CookieBanner /> 
</div> -->


<footer class="bg-blue-400 dark:bg-blue-400">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center">
            <RouterLink to="/"> <img src="../src/assets/logo.png" class="h-8 lg:mr-3 md:h-12 lg:h-12" alt="" /></RouterLink>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-xs md:text-sm lg:text-sm font-medium text-white sm:mb-0 dark:text-white">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
        <span class="block text-xs md:text-sm lg:text-sm text-white sm:text-center dark:white">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>



</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { initCustomFormatter, onMounted, ref } from 'vue' //onMounted = når vi tager dataen, ref = til at opbevare dataen

import { auth } from './firebase.js'
import { signOut, onAuthStateChanged } from 'firebase/auth';

// import CookieBanner from './components/CookieBanner.vue'; 

// export default {
//   components: {
//     CookieBanner, // Hvorfor virker det ikke ?
//   },
// };

let isLoggedIn = ref(false) 

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      console.log('User logged in', auth.currentUser)

    } else {
      isLoggedIn.value = false
      console.log('User logged out', auth.currentUser)

    }
  })
})

let logOut = () => {
  signOut(auth)
  .then(() => {
    console.log('User logged out', auth.currentUser)
    router.push('/login')
  })
  .catch((error) => {
    console.log(error)
  })
}



</script>

<style scoped>

/* cookie css*/ 

/* .wrapper {
  position: fixed;
  bottom: 50px;
  right: -370px;
  max-width: 345px;
  width: 100%;
  background:white;
  padding: 15px 25px 22px;
  transition: right 0.3s ease;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.wrapper.show {
  right: 20px;
}
.wrapper header {
  display: flex;
  align-items: center;
  column-gap: 15px;
}
header i {
  color: #60a5fa; 
  font-size: 32px;
}
header h2 {
  color:#60a5fa; 
  font-weight: 500;
}
.wrapper .data {
  margin-top: 16px;
}
.wrapper .data p {
  color: #333;
  font-size: 16px;
}
.data p a {
  color: #4070f4;
  text-decoration: none;
}
.data p a:hover {
  text-decoration: underline;
}
.wrapper .buttons {
  margin-top: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buttons .button {
  border: none;
  color: #fff;
  padding: 8px 0;
  background:#60a5fa; 
  cursor: pointer;
  width: calc(100% / 2 - 10px);
  transition: all 0.2s ease;
}
.buttons #acceptBtn:hover {
  background-color: #60a5fa; 
}
#declineBtn {
  border: 2px solid #60a5fa; 
  background-color: #fff;
  color: #60a5fa; 
}
#declineBtn:hover {
  background-color: #4070f4;
  color: #fff;
} 
 */

 

</style>
