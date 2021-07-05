<template>
  <div id="about">
    <div class="row">
      <div class="col left">
        <div class="row">
          <div class="col-sm-8 title">
            <div class="w3-container">
              <div class="w3-center w3-animate-left">
                OCIJENITE
                PROFESORA
              </div>
            </div>
          </div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>
        <hr />
        <div class="row">
          <div class="col"></div>
          <div class="col-lg">
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
          <div class="col"></div>
        </div>

        <div class="row">
          <div class="w3-container">
            <div class="col-lg w3-center w3-animate-left">
              <h1>O aplikaciji</h1>
              <p class="opis">
                Ova web aplikacija izrađena je u svrhu vrednovanja profesora i asistenata od strane
                studenata. Profa rating omogućuje studentu da odabere profesora kojega
                želi ocjeniti, te mu zatim nudi određena pitanja, ta ista pitanja se sastoje od
                tri dijela. Prvi dio su osobna pitanja, u kojima student odgovara koliko često izlazi
                na predavanja te koja mu je najčešća ocjena u indeksu, drugi dio je anketa o porfesoru/asistentu
                a treća je komentar ukoliko student želi nešto svoje nadodati.
              </p>
              <p>
                Cilj aplikacije je omoćiti ocjenjivanje preko interneta, bez ikakve potrebe
                fizičkog dolaska studenta u učionu.
              </p>
              <p class="opis">
                Da bi ste bili u mogućnosti koristiti našu aplikaciju morate se prvo prijaviti,
                to možete postići klikom na gumb ispod.
              </p>

              <button
                class="btn btn-primary btn-lg"
                v-on:click="prikaziPrijava=!prikaziPrijava"
              >Prijavi se</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col right">
        <app-header />

        <div class="col">
          <transition name="slide-fade">
            <prijava v-show="!prikaziPrijava"></prijava>
          </transition>
        </div>

        <div class="col">
          <registracija v-if="!prikaziRegistracija"></registracija>
        </div>
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
    return {
      prikaziPrijava: store.prijavi_se,
      prikaziRegistracija: store.registriraj_se
    };
  },
  components: {
    kartica,
    "app-header": header,
    prijava,
    registracija
  }
};
</script>

<style scoped>
@import url("../css/styles.css");
</style>
