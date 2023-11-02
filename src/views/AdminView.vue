<template>

    <div>
      <div class="bg-stone-50 dark:bg-stone-50">
        <div class="bg-stone-50 dark:bg-stone-50 text-center">
          <p class="text-center text-black pt-12 md:pt-20 lg:pt-20 pb-3 text-xl md:text-3xl lg:text-3xl"> DYR SOM ER KLAR TIL <span style="color:#60a5fa"> ADOPTION</span> </p>
        </div>

        <div>
          <div v-for="animal in animals" :key="animal">
          <p v-html="animal.title"></p>
          <p v-html="animal.description"></p>
          <p v-html="animal.imgURL"></p>
          <img :src="animal.imgURL" alt="post image" width="200" height="200">
      
          <p>PostID: {{animal.id}}</p>
        </div>
        </div>

        <div class="flex justify-center py-10">
          <input class="text-black mr-5" type="text" placeholder="Name" v-model="addAnimalData.animalName">
          <input class="text-black mr-5" type="text" placeholder="Price" v-model="addAnimalData.animalPrice">
          <input type="file" label="File input" @change="uploadImg">
          <button class="bg-blue-400 text-white px-6 py-4" @click.prevent="firebaseAddSingleItem()" >Tilføj</button> <!-- :disabled="addAnimalData.uploadBtnDisabled" -->
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
  