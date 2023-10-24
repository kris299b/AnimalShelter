<script setup>


const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");
const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

</script>

<template>
<section class="relative h-screen flex flex-col items-center py-20 text-center content-start text-white">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover"
            src="../assets/forside-video-1.mp4"
            type="video/mp4" autoplay muted loop>
        </video>
    </div>
    <div class="video-content z-10">
        <h4 class="font-white text-4xl md:text-6xl lg:text-6xl py-1">MY LAST HOME</h4>
        <p class="font-white text-1xl md:text-2xl lg:text-xl italic">Din nye bedste ven venter på dig</p>
        <button class="mt-5 bg-blue-400 hover:bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-white">
            ADOPTER NU
        </button>
    </div>
</section>

<section class="bg-stone-50 dark:bg-stone-50">
  <div class="py-5 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-20">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-10">
        <h2 class="text-black md:text-2xl lg:text-2xl">Se hvilke dyr der er klar til <span style="color:#60a5fa"> adoption</span></h2>
      </div> 
      <div class="grid gap-8 lg:gap-0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img id="circle" class="mx-auto mb-4 w-36 h-36 rounded-full" src="../assets/dog.npg.png" alt="">
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img id="circle" class="mx-auto mb-4 w-36 h-36 rounded-full" src="../assets/cat.png" alt="Bonnie Avatar">
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img id="circle" class="mx-auto mb-4 w-36 h-36 rounded-full" src="../assets/bird.png" alt="Bonnie Avatar">
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img id="circle" class="mx-auto mb-4 w-36 h-36 rounded-full" src="../assets/rat.png" alt="Bonnie Avatar">
          </div>
      </div> 
  </div>
</section>

<div id="column" class="columns-1 md:columns-1 lg:columns-2 bg-stone-50 dark:bg-stone-50">
    <div class="py-10 mx-10 text-white">
        <p class="text-sm">OM OS</p>
        <h2 class="mt-3 lg:text-2xl ">Hvem er vi hos</h2>
        <p class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p class="mt-3">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button class="mt-5 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent">
            Læs mere
        </button>
    </div>
    <div>
        <img class="" src="../assets/pexels-pixabay-160667.jpg" alt="">
    </div>
</div>

<div class="text-center text-black bg-white dark:bg-white lg:py-12">
    <h2 class="text-black text-xl md:text-2xl lg:text-2xl pt-10 pb-7">Er du klar til at <span style="color:#60a5fa"> adoptere</span> et dyr?</h2>
    <p class="text-center px-10 md:px-10 lg:px-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <p class="pb-7">Tag <span style="color:#60a5fa"> testen</span> her</p>
</div>

<div class="columns-1 md:columns-1 lg:columns-2 bg-white dark:bg-white">
    <div>
        <img class="" src="../assets/pexels-blue-bird-7210698.jpg" alt="">
    </div>
    <div class="py-7 md:py-5 lg:py-5 mx-10 text-black">
        <p class="text-sm md:mt-5">DONATION</p>
        <h2 class="mt-3 lg:text-2xl ">Kunne du tænke dig at støtte dyrene?</h2>
        <p class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p class="mt-3">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <button class="mt-5 bg-blue-400 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent">
            Læs mere
        </button>
    </div>
</div>

<div class="columns-1 md:columns-1 lg:columns-2 bg-white dark:bg-white md:pt-8 lg:pt-10">
    <div class="py-5 lg:py-10 mx-10 text-black">
        <p class="text-sm">FRIVILLIG</p>
        <h2 class="mt-3 lg:text-2xl ">Ønsker du at gøre en forskel?</h2>
        <p class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p class="mt-3">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button class="mt-5 bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Læs mere
        </button>
    </div>
    <div>
        <img class="" src="../assets/pexels-blue-bird-7210692.jpg" alt="">
    </div>
</div>



</template>



<style>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.video-content {
  z-index: 2;
}

#column {
    background-color: #60a5fa;
}

#circle {
    border:4px solid #60a5fa;
}


</style>