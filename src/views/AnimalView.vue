<template>

  <div>
    <div class="bg-stone-50 dark:bg-stone-50">
      <div class="bg-stone-50 dark:bg-stone-50 text-center">
        <p class="text-center text-black pt-12 md:pt-20 lg:pt-20 pb-3 text-xl md:text-3xl lg:text-3xl"> DYR SOM ER KLAR TIL <span style="color:#60a5fa"> ADOPTION</span> </p>
      </div>

      <div>
        <div v-for="animal in animals" :key="animal">
        <p class="text-black" v-html="animal.name"></p>
        <p class="text-black" v-html="animal.price"></p>
        <img :src="animal.imgURL" alt="post image" width="200" height="200">
    
        <!-- <p class="text-black">PostID: {{animal.id}}</p> -->
      </div>
      </div>

      </div>

  
      <!-- <div v-if="uploadBtnDisabled">
        <p>No image uploaded</p>
      </div> -->  
    <!--   <div v-else> -->
<!--       <button @click="testDisable()">test</button>
 -->
   

  <!--     </div> -->
    
    
    </div>
</template>

<script setup>
import { collection, addDoc  } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { onMounted , reactive} from 'vue';
import { db } from '../firebase.js';
import useAnimals from '../modules/useAnimals.js';

const { animals, getAnimalsData } = useAnimals();

onMounted(() => {
getAnimalsData();
});

let addAnimalData = reactive({
animalName: '',
animalPrice: '',
imgURL: '',
uploadBtnDisabled: true
});

const firebaseAddSingleItem = async () => {
try {
  await addDoc(collection(db, "animals"), {
    name: addAnimalData.animalName,
    price: addAnimalData.animalPrice,
    imgURL: addAnimalData.imgURL,
  });
  // If you want to do something after the item is added, add it here
} catch (error) {
  console.error("Error adding document: ", error);
}
}

const storage = getStorage();

const uploadImg = async (event) => {
let file = event.target.files[0];
console.log("file", file);
const metadata = {
  contentType: 'image/jpeg'
};
const storageRef = ref(storage, 'images/' + file.name);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

uploadTask.on('state_changed',
  (snapshot) => {
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  },
  (error) => {
    switch (error.code) {
      case 'storage/unauthorized':
        break;
      case 'storage/canceled':
        break;
      case 'storage/unknown':
        break;
    }
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);

      addAnimalData.imgURL = downloadURL;
      console.log("billede test: ", addAnimalData.imgURL)
      addAnimalData.uploadBtnDisabled = false;
    });
  }
);
}
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



<!-- <template>
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
    
  import useAnimals from '../modules/useAnimals.js'; //This line of code imports a Vue.js component named useAnimals from a file located at '../modules/useAnimals.js'.
  import { onMounted } from 'vue' //The code "import { onMounted } from 'vue'"" is importing the onMounted function from the Vue 3 library.
    
     
  const { //This code is using "object destructuring" to extract properties and functions from the result of a function call.
    animals, 
    getAnimalsData, 
    firebaseDeleteSingleItem, 
    firebaseAddSingleItem, 
    AddAnimalData, 
    firebaseUpdateSingleItem,
    //UpdateAnimalsData
  } = useAnimals(); //useAnimals(); is a function call that returns an object or some structured data. 
    
  onMounted(() => {
    getAnimalsData(); //getAnimalsData is an "arrow function" that is used as a callback function. This function will be executed when the component is mounted. The purpose of this function call is to retrieve or fetch data related to animals, possibly from an external data source like an API or database.
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
    </style>    -->