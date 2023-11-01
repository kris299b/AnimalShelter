<template>
  <div v-if="showCookieBanner" class="cookie-banner">
    <div class="flex">
      <i class="bx bx-cookie py-5 px-4"></i>
      <p class="text-lg py-4">Vi bruger cookies</p> 
    </div>
    <div>
      <p class="px-5">Vi bruger cookies for at kunne give dig personligt tilpasset indhold og for at optimere markedsføringen i overensstemmelse med dine interesser. Oplysningerne identificerer dig normalt ikke direkte, men de kan give dig en mere personlig weboplevelse. Fordi vi respekterer din ret til privatliv, kan du vælge ikke at tillade nogle typer cookies. Klik på de forskellige kategorioverskrifter for at finde ud af mere om de cookies, vi bruger, og for at ændre indstillinger. Blokering af nogle typer cookies kan dog påvirke din oplevelse af de onlinetjenester, vi kan tilbyde.</p>
    </div>
    <div class="text-end px-5">
      <button class="bg-blue-400" @click="acceptCookies">Accept</button>
      <button class="" @click="declineCookies">Decline</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showCookieBanner = ref(!document.cookie.includes('cookies_accepted=true'));

const acceptCookies = () => {
  // Set a cookie to track user's consent
  document.cookie = "cookies_accepted=true; expires=Sun, 31 Dec 2099 23:59:59 UTC; path=/";

  showCookieBanner.value = false;
  console.log("test: ", showCookieBanner)
};

const declineCookies = () => {
  // Handle the user declining cookies if needed
  showCookieBanner.value = false; // Hide the banner
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #33333379;
  color: #fff;
  padding: 10px;
  z-index: 89745899;
}

button {
  border: none;
  padding: 10px 30px;
  margin: 5px;
  cursor: pointer;
}

i {
  font-size: 25px;
}
</style>



