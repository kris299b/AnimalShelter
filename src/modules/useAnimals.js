import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore'; //onSnapshot = in real time

 
const useAnimals = () => {
  const animals = ref([]); // to store data from firebase
  const animalDataRef = collection(db, 'animals')

  const AddAnimalData = ref({
    animalName: "",
    animalPrice:''
  })

  
  const UpdateAnimalsData = ref({
    animalName: "",
    animalPrice:''
  })


  const getAnimalsData = () => {
    onSnapshot(animalDataRef, (snapshot) => {
      animals.value = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
          //productName: doc.data().productName,
          //productPrice: doc.data().productPrice
        }
      })
    })
  }

 

  const firebaseDeleteSingleItem = async(id) => { // async means it doesn't block further execution. 
    await deleteDoc(doc(db, "animals", id));
    console.log("is deleted")

  }

 const firebaseAddSingleItem = async() => { //husk at returnere dataen fra variablerne eks. firebaseAddSingleItem (til return) 
    await addDoc(collection(db, "animals"),
        {
            animalName: AddAnimalData.value.animalName, //no longer at string, cause it's static (now write .value, beacuse its a ref)
            animalPrice: AddAnimalData.value.animalPrice,
            imgURL: AddAnimalData.value.imgURL
        }
    );

    console.log("is added")
 }


 const firebaseUpdateSingleItem = async (animal) => {
  await updateDoc(doc(animalDataRef, animal.id), {
    animalName: animal.animalName, // Update properties from the 'animal' parameter
    animalPrice: animal.animalPrice,
    // You can include other properties as needed
  }).then(() => {
    // If you want to reset the form input value, you can do so here
    AddAnimalData.value.animalName = '';
  });
};

  return {
    getAnimalsData,
    animals,
    firebaseDeleteSingleItem,
    firebaseAddSingleItem,
    AddAnimalData,
    firebaseUpdateSingleItem,
    UpdateAnimalsData
  }
}

 

  export default useAnimals;