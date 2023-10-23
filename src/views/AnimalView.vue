<template>

    <div class="about">
      <h1>This is an about page</h1>
  
          <button class="btn-add text-white" @click="firebaseAddSingleItem">Add Item</button> 
      
        <div>
            <input type="text" class="text-black" placeholder="Animal name" v-model="AddAnimalData.animalName"> 
        </div>
     
  
  
      <div v-for="animal in animals" :key="animals">
        <p>
          AnimalID: {{ animal.id  }}
        </p>
        <p>
          AnimalName: {{ animal.animalName }}
        </p>
        <p>
          AnimalPrice: {{ animal.animalPrice }}
        </p>
        <button class="btn-delete text-white" @click="firebaseDeleteSingleItem(animal.id)">Delete item</button>
  
        <p>
            <input type="text" class="text-white" placeholder="New animal name" v-model="animal.animalName"/>
        </p>
  
        <button class="btn-edit" @click="firebaseUpdateSingleItem(animal.id)">Edit item</button>
        <hr>
  
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
  
  </style>