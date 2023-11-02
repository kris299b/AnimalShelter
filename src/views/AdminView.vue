<template>
    <div>
      <div class="bg-stone-50 dark:bg-stone-50">
        <div class="bg-stone-50 dark:bg-stone-50 text-center">
          <p class="text-center text-black pt-12 pb-12 md:pt-20 lg:pt-20 pb-3 text-xl md:text-3xl lg:text-3xl"> DYR SOM ER KLAR TIL <span style="color:#60a5fa"> ADOPTION</span> </p>
        </div>

        <div class="bg-stone-50 dark:bg-stone-50 flex flex-row lg:py-20 px-3">
          <div class="px-20" v-for="animal in animals" :key="animal">
            <img :src="animal.imgURL" alt="post image" width="200" height="200">
            <div class="py-3">
                <p class="text-black" v-html="animal.name"></p>
                <p class="text-black pb-2" v-html="animal.price"></p>
            </div>
          <button class="bg-transparent border border-black text-black font-bold py-2 px-4" @click="deleteAnimal(animal.id)">SLET</button>
      
          <!-- <p class="text-black">PostID: {{animal.id}}</p> -->
        </div>
        </div>

        <div class="flex justify-center py-10">
          <input class="text-black mr-5 border-2 border-blue-400 h-8 pl-2" type="text" placeholder="Navn" v-model="addAnimalData.animalName">
          <input class="text-black mr-5 border-2 border-blue-400 h-8 pl-2" type="text" placeholder="Pris" v-model="addAnimalData.animalPrice">
          <input type="file" label="File input" @change="uploadImg">
          <button class="bg-blue-400 font-semibold text-white h-8 w-20 " @click.prevent="firebaseAddSingleItem()" >Tilføj</button> <!-- :disabled="addAnimalData.uploadBtnDisabled" -->
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
  import { deleteDoc, doc } from 'firebase/firestore'; // Import necessary Firestore functions

const { animals, getAnimalsData } = useAnimals();

const AnimalsCollectionRef = collection(db, 'animals'); // Assuming 'db' is your Firestore database reference

const deleteAnimal = async (id) => {
  try {
    // Create a reference to the document to be deleted
    const animalRef = doc(AnimalsCollectionRef, id);
    
    // Delete the document
    await deleteDoc(animalRef);

    console.log(`Document with ID ${id} successfully deleted.`);
  } catch (error) {
    console.error(`Error deleting document: ${error}`);
  }
}


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
  