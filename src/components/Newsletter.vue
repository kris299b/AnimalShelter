<template>
    <div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 bg-stone-50 dark:stone-50">
            <div class="col-span-2">
                <img class="" src="../assets/newsletter-image.jpg" alt="">
            </div>
            <div class="bg-stone-50 dark:bg-stone-50 pl-10 pt-5 pb-5">
    <div class="w-80" id="mc_embed_shell">
        <p class="text-black ml-5 text-lg">TILMELD DIG HER</p>
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
    <div id="mc_embed_signup">
      <form @submit.prevent="subscribe">
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
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const audienceId = "322f56a61f"; // Replace with your Mailchimp Audience ID
      const apiKey = "a27677a483704d0a672cb4b800afb7f7-us21"; // Replace with your Mailchimp API Key
      const url = `https://us21.api.mailchimp.com/3.0/lists/${audienceId}/members`; // Corrected URL
      const email = ref('');
  
      const subscribe = async () => {
        try {
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email_address: email.value, status: 'subscribed' }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            // Handle a successful subscription (e.g., show a success message)
            const data = await response.json();
            console.log(data);
          } else {
            // Handle subscription error (e.g., show an error message)
            const errorData = await response.json();
            console.error(errorData);
          }
        } catch (error) {
          // Handle any other errors
          console.error(error);
        }
      };
  
      return {
        email,
        subscribe,
      };
    },
  };
  
  </script>
  

<style>
    #mc_embed_signup{background:#fafaf9; font:14px Helvetica,Arial,sans-serif; width: 100%;}
    #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px; }
    #mergeRow-gdpr {margin-top: 20px; color:black;}
    #mergeRow-gdpr fieldset label {font-weight: normal; color: black;}
    #mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}

</style>


<!-- <template>
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
  
  </template>
  
  <script setup>
  document.getElementById("newsletter-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the default form submission behavior
  
      const email = document.getElementById("email").value;
      const audienceId = "322f56a61f"; // Replace with your Mailchimp Audience ID
      const apiKey = "a27677a483704d0a672cb4b800afb7f7-us21"; // Replace with your Mailchimp API Key
      const url = `https://us21.api.mailchimp.com/3.0/lists/${audienceId}/members`; // Corrected URL
  
      const data = {
          email_address: email,
          status: "subscribed",
      };
  
      fetch(url, {
          method: "POST",
          headers: {
              "Authorization": `Basic ${btoa(`anystring:${apiKey}`)}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      })
      .then((response) => {
          if (response.status === 200) {
              document.getElementById("message").textContent = "Subscribed successfully!";
          } else {
              document.getElementById("message").textContent = "Subscription failed. Please try again later.";
          }
      })
      .catch((error) => {
          console.error(error);
      });
  });
  
  
  </script>
  
  
  <style>
  #mc_embed_signup{background:#fafaf9; font:14px Helvetica,Arial,sans-serif; width: 100%;}
  #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px; }
  #mergeRow-gdpr {margin-top: 20px; color:black;}
  #mergeRow-gdpr fieldset label {font-weight: normal; color: black;}
  #mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
  </style> -->