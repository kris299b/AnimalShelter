<script>

import CookieBanner from '../components/CookieBanner.vue'; //This line of code imports a Vue.js component named CookieBanner from a file located at '../components/CookieBanner.vue'.
import Newsletter from '../components/Newsletter.vue'; //This line of code imports a Vue.js component named Newsletter from a file located af '../components/Newsletter.vue'.

export default { //This is a standard export statement in JavaScript that exports an object as the default export from the current module. In this case, the exported object is used to configure the Vue component.
  components: {
    CookieBanner,
    Newsletter
  },
};

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
        <h4 class="text-white text-4xl md:text-6xl lg:text-6xl py-1">MY LAST HOME</h4>
        <p class="text-white text-1xl md:text-2xl lg:text-xl italic">Din nye bedste ven venter på dig</p>
        <button class="mt-5 bg-blue-400 hover:bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-white">
            ADOPTER NU
        </button>
    </div>
</section>

<!-- Cookiebanner -->
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



<div class="bg-stone-50 pt-12">
    <p class="text-black text-center lg:text-3xl">NYHEDSBREV</p>
</div>


<!-- Newsletter -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 bg-stone-50 dark:stone-50">
        <div class="col-span-2">
            <img class="" src="../assets/newsletter-image.jpg" alt="">
        </div>
        <div class="bg-stone-50 dark:bg-stone-50 pl-10 pt-5 pb-5">
<div class="w-80" id="mc_embed_shell">
    <p class="text-black ml-5 text-lg">TILMELD DIG HER</p>
    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
<div id="mc_embed_signup">
    <form action="https://easv365.us21.list-manage.com/subscribe/post?u=059ec60e17402edab569df5d1&amp;id=ca710ff564&amp;v_id=192&amp;f_id=0052e9e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll">
            <div class="indicates-required text-black"><span class="asterisk">*</span> påkrævet</div>
            <div class="mc-field-group text-black"><label for="mce-EMAIL">Email <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group text-black"><label for="mce-FNAME">Fornavn <span class="asterisk">*</span></label><input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" value=""></div><div class="mc-field-group text-black"><label for="mce-LNAME">Efternavn </label><input type="text" name="LNAME" class=" text" id="mce-LNAME" value=""></div><div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"><div class="content__gdpr"><label>Marketingstilladelser</label><p>Vælg venligst måden du gerne vil høre fra MYLASTHOME herunder:</p><fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field"><label class="checkbox subfield" for="gdpr97701"><input type="checkbox" id="gdpr_97701" name="gdpr[97701]" class="gdpr" value="Y"><span>Email</span></label><label class="checkbox subfield" for="gdpr97704"><input type="checkbox" id="gdpr_97704" name="gdpr[97704]" class="gdpr" value="Y"><span>sms</span></label><label class="checkbox subfield" for="gdpr97705"><input type="checkbox" id="gdpr_97705" name="gdpr[97705]" class="gdpr" value="Y"><span>Begge</span></label></fieldset><p>Du kan til hver en tid afmelde nyhedsbrevet ved at klikke på linket i bunden af de mails vi sender ud. </p></div><div class="content__gdprLegal"></div></div>
        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
    <div aria-hidden="true" style="position: absolute; left: -5000px;">
        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
        <input type="text" name="b_059ec60e17402edab569df5d1_ca710ff564" tabindex="-1" value="">
    </div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Tilmeld dig">
                <p style="margin: 0px auto;"><a href="http://eepurl.com/iCZR_c" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
            </div>
        </div>
    </div>
</form>
</div>
</div>
</div>
   </div>



<section class="bg-stone-50 dark:bg-stone-50">
  <div class="py-5 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-20">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-10">
        <h2 class="text-black text-xl md:text-2xl lg:text-2xl">Se hvilke dyr der er klar til <span style="color:#60a5fa"> adoption</span></h2>
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