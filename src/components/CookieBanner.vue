<template>
<!-- Cookie Banner area-->

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

</template>


<style scoped>
/* cookie css */
.wrapper {
  position: fixed;
  bottom: 50px;
  right: -370px;
  max-width: 345px;
  width: 100%;
  background:white;
  padding: 15px 25px 22px;
  transition: right 0.3s ease;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.wrapper.show {
  right: 20px;
}
.wrapper header {
  display: flex;
  align-items: center;
  column-gap: 15px;
}
header i {
  color: #60a5fa; 
  font-size: 32px;
}
header h2 {
  color:#60a5fa; 
  font-weight: 500;
}
.wrapper .data {
  margin-top: 16px;
}
.wrapper .data p {
  color: #333;
  font-size: 16px;
}
.data p a {
  color: #4070f4;
  text-decoration: none;
}
.data p a:hover {
  text-decoration: underline;
}
.wrapper .buttons {
  margin-top: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buttons .button {
  border: none;
  color: #fff;
  padding: 8px 0;
  background:#60a5fa; 
  cursor: pointer;
  width: calc(100% / 2 - 10px);
  transition: all 0.2s ease;
}
.buttons #acceptBtn:hover {
  background-color: #60a5fa; 
}
#declineBtn {
  border: 2px solid #60a5fa; 
  background-color: #fff;
  color: #60a5fa; 
}
#declineBtn:hover {
  background-color: #4070f4;
  color: #fff;
}

</style>



<script>

export default {
  mounted() {
   // cookie javascript
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
  },
};


</script>
