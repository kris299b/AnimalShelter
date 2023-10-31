<template>

<!-- <div v-for="animal in animals" :key="animal.id" class="animal-item bg-stone-50 dark:bg-stone-50">
  <div class="bg-stone-50 dark:bg-stone-50 grid grid-cols-2 md:grid-cols-3 gap-4 py-10 px-10">
      <div>
        <img class="h-60 w-60" src="../assets/hund.jpg" alt="">
          <div class="animal-info">
          <p class="animal-id"></p>
          <p class="animal-name pt-2 text-black lg:text-lg"> {{ animal.animalName }}</p>
          <p class="animal-price pb-2 text-black"> {{ animal.animalPrice.toFixed(2) }}</p> -->
          <!-- <div class="animal-actions">
            <input type="text" class="input-field" placeholder="New name" v-model="animal.animalName">
          </div> -->
          <!-- <div class="py-3">
            <p class=""><span style="color:#60a5fa"> Læs mere</span></p>
          </div>
          <div class="flex items-stretch">
            <button class="mr-3 bg-blue-400 hover:bg-blue-400 text-white font-semibold hover:text-white py-2 px-4 btn btn-edit" @click="firebaseUpdateSingleItem(animal.id)">Adoptér mig</button>
            <a class="pt-3 pr-2" href="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg> 
            </a>
            <a class="pt-3" @click="firebaseDeleteSingleItem(animal.id)" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
  </div>
</div> -->

<div class="bg-stone-50 dark:bg-stone-50">
  <div class="bg-stone-50 dark:bg-stone-50 text-center">
    <p class="text-center text-black pt-12 md:pt-20 lg:pt-20 pb-3 text-xl md:text-3xl lg:text-3xl"> DYR SOM ER KLAR TIL <span style="color:#60a5fa"> ADOPTION</span> </p>
    <p class="text-black pb-10 text-1xl md:text-2xl lg:text-xl italic">Din nye bedste ven venter på dig</p>
  </div>

  <div class="bg-stone-50 dark:bg-stone-50 flex justify-center py-0 md:py-0 lg:py-0 px-5">
        <input type="text" class="input-field bg-stone-50 text-black" placeholder="Skriv det ønskede dyr" v-model="AddAnimalData.animalName">
        <button class=" bg-blue-400 hover:bg-blue-400 text-white hover:text-white py-2 px-4 btn btn-add" @click="firebaseAddSingleItem">SØG</button>
  </div>
  <div v-for="animal in animals" :key="animal.id" class="animal-item bg-stone-50 dark:bg-stone-50">
    <div class="bg-stone-50 dark:bg-stone-50 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10 px-10 ">
      <div class="dark:bg-blue-400 dark:border-blue-400">
        <div>
          <img class="" src="../assets/hund.jpg" alt="">
            <div class="animal-info">
            <p class="animal-name mx-4 pt-2 text-stone-50 lg:text-lg"> {{ animal.animalName }}</p>
            <p class="animal-price mx-4  pb-2 text-stone-50 "> {{ animal.animalPrice.toFixed(2) }}</p>
            <!-- <div class="animal-actions">
              <input type="text" class="input-field" placeholder="New name" v-model="animal.animalName">
            </div> -->
            <div class="py-3">
              <p class="text-stone-50 mx-4"> Den sidste hvalp af et kuld på 7 er nu klar til at blive adopteret.</p>
              <p class="text-stone-50 mx-4 my-2">Læs mere..</p>
            </div>
            <div class="flex items-stretch">
              <button class="text-xs mr-3 mx-4 mb-5 bg-stone-50 hover:bg-blue-400 text-blue-400 font-semibold hover:text-white border border-white py-2 px-4 btn btn-edit" @click="firebaseUpdateSingleItem(animal.id)">Adoptér mig</button>
              <a class="pt-2 pr-1" href="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="white" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg> 
              </a>
              <a class="mt-2" @click="firebaseDeleteSingleItem(animal.id)" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="white" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</div>



</template>
  
   
<script setup>
  
import useAnimals from '../modules/useAnimals.js';
import { onMounted } from 'vue'
  
   
const { 
  animals, 
  getAnimalsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem, 
  AddAnimalData, 
  firebaseUpdateSingleItem,
  //UpdateAnimalsData
} = useAnimals();
  
onMounted(() => {
  getAnimalsData();
}) 
</script>
  
   
  
<style>
  
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


.add-animal-section {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.input-field {
  padding: 10px;
  width: 200px;
  border: 1px solid #000000;
  margin-right: 10px;
}


.animal-item {
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.animal-info {
  flex: 1;
}

.animal-id {
  font-weight: bold;
}

.animal-price {
  font-style: italic;
}
  </style>