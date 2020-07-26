<template>
  <div class="container-fluid" id="about">
    <div class="row">
      <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 left">
        <div class="row">
          <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12 title">
            <div class="w3-container">
              <div class="w3-center w3-animate-left">OCIJENITE PROFESORA</div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <br />
        <div class="row">
          <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
            <div class="w3-center w3-animate-left" id="logo">
              <div class="logo-title">
                <div class="first-container share">
                  <h1 class="Profa">
                    <span id="one">P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>f</span>
                    <span>a</span>
                    <br />
                    <span>R</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="w3-container col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
            <div class="w3-center w3-animate-left">
              <h1>O aplikaciji</h1>
              <p class="opis">
                Ova web aplikacija izrađena je u svrhu vrednovanja profesora i
                asistenata od strane studenata. Profa rating omogućuje studentu
                da odabere profesora kojega želi ocjeniti, te mu zatim nudi
                određena pitanja, ta ista pitanja se sastoje od tri dijela. Prvi
                dio su osobna pitanja, u kojima student odgovara koliko često
                izlazi na predavanja te koja mu je najčešća ocjena u indeksu,
                drugi dio je anketa o porfesoru/asistentu a treća je komentar
                ukoliko student želi nešto svoje nadodati.
              </p>
              <p class="opis">
                Cilj aplikacije je omoćiti ocjenjivanje preko interneta, bez
                ikakve potrebe fizičkog dolaska studenta u učionu.
              </p>
              <p class="opis">
                Da bi ste bili u mogućnosti koristiti našu aplikaciju morate se
                prvo prijaviti, to možete postići klikom na gumb ispod.
              </p>

              <button
                class="btn btn-primary btn-lg"
                v-on:click='openLogin()'
              >Prijavi se</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 left">
        <app-header />

        <transition name="slide-fade">
          <prijava v-show="prijavi_se"></prijava>
        </transition>

        <registracija v-if="!registriraj_se"></registracija>
      </div>
    </div>
  </div>
</template>

<script>
import kartica from "@/components/kartica.vue";
import header from "@/components/header";
import prijava from "./Prijava.vue";
import registracija from "./Registracija.vue";
import store from "../store.js";

export default {
  data() {
    return store.state
  },
  components: {
    kartica,
    "app-header": header,
    prijava,
    registracija
  },
  methods:{
    openLogin(){
      this.$store.commit('prijava')
    }
  }
};
</script>

<style scoped>
#about {
  padding: 0px;
  text-align: center;
}

.about_tab {
  margin: 0px auto 10px;
  width: 50%;
  color: white;
  padding-top: 5%;
  border: none;
  border-radius: 15px;
  background-image: url("../assets/card-pozadina.svg");
}

.title {
  font-family: "Playfair Display", serif;
  font-size: 25px;
  margin-top: 5%;
  color: #00b7ff;
}

.btn {
  margin-bottom: 5%;
  width: 40%;
  height: 50px;
  cursor: pointer;
  background: transparent;
  border: 1px solid white;
  outline: none;
  transition: 0.3s ease-in-out;
  color: white;
  margin-top: 5%;
}
.btn:hover {
  transition: 0.3s ease-in-out;
  background: #00b7ff;
  color: white;
}

.slide-fade-enter-active {
  transition: all 0.1s;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.opis {
  font-family: "Nunito Sans", sans-serif;
  color: white;
  margin: 5%;
}
.first-container .profa {
  cursor: pointer;
  position: relative;
  margin-top: 35%;
}
.first-container h1 {
  font-family: "Playfair Display", serif;
  position: relative;
  color: #00b7ff;
}

.first-container {
  margin-bottom: 5%;
}

span {
  display: inline-block;
  position: relative;
  margin-right: 5px;
  font-size: 150%;
}
span:after {
  content: "";
  position: absolute;
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  transition: 0.6s;
  z-index: -5;
}

.share:hover > h1 > span:nth-child(1):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 0ms;
  transform: rotate(25deg);
}

.share:hover > h1 > span:nth-child(1) {
  color: white;
  transition-delay: 10ms;
}

.share:hover > h1 > span:nth-child(2):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 50ms;
  transform: rotate(-20deg);
}

.share:hover > h1 > span:nth-child(2) {
  color: white;
  transition-delay: 60ms;
}

.share:hover > h1 > span:nth-child(3):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 100ms;
  transform: rotate(-15deg);
}

.share:hover > h1 > span:nth-child(3) {
  color: white;
  transition-delay: 115ms;
}

.share:hover > h1 > span:nth-child(4):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 150ms;
  transform: rotate(10deg);
}

.share:hover > h1 > span:nth-child(4) {
  color: white;
  transition-delay: 170ms;
}

.share:hover > h1 > span:nth-child(5):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 200ms;
  transform: rotate(-5deg);
}

.share:hover > h1 > span:nth-child(5) {
  color: white;
  transition-delay: 220ms;
}

.share:hover > h1 > span:nth-child(7):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 250ms;
  transform: rotate(-10deg);
}

.share:hover > h1 > span:nth-child(7) {
  color: white;
  transition-delay: 270ms;
}
.share:hover > h1 > span:nth-child(8):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 300ms;
  transform: rotate(10deg);
}

.share:hover > h1 > span:nth-child(8) {
  color: white;
  transition-delay: 330ms;
}
.share:hover > h1 > span:nth-child(9):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 350ms;
  transform: rotate(5deg);
}

.share:hover > h1 > span:nth-child(9) {
  color: white;
  transition-delay: 380ms;
}
.share:hover > h1 > span:nth-child(10):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 400ms;
  transform: rotate(0deg);
}

.share:hover > h1 > span:nth-child(10) {
  color: white;
  transition-delay: 430ms;
}
.share:hover > h1 > span:nth-child(11):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 450ms;
  transform: rotate(-10deg);
}

.share:hover > h1 > span:nth-child(11) {
  color: white;
  transition-delay: 480ms;
}
.share:hover > h1 > span:nth-child(12):after {
  background: #00b7ff;
  width: 150%;
  transition: 0.6s;
  transition-delay: 500ms;
  transform: rotate(-5deg);
}

.share:hover > h1 > span:nth-child(12) {
  color: white;
  transition-delay: 530ms;
}
* {
  margin: 0px;
  padding: 0px;
}
</style>
