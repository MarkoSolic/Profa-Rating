<template>
  <div class="container-fluid p-0" id="about">
    <div class="row">
      <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 left">
        <div class="row">
          <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12 left title">
            <div class="w3-container">
              <div @click="idiHome" class="w3-center w3-animate-left hero">OCIJENITE PROFESORA</div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
            <div class="w3-center w3-animate-left" id="logo logo_about">
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
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 right">
        <app-header></app-header>

        <div class="col">
          <div v-if="auth.authenticated">
            <div class="profil">
              <div class="card-header">
                <h1>Korisnički profil</h1>
                <hr />
              </div>

              <div class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12 ab">
                <div class="row">
                  <div class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
                    <h2>
                      Email:
                      <p class="userData userDataEmail">
                        <b>{{ userEmail }}</b>
                      </p>
                    </h2>
                  </div>
                </div>
                <div class="row">
                  <div class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
                    <h2>
                      Fakultet:
                      <p class="userData userDataFaks">
                        <b>{{ userFaks }}</b>
                      </p>
                    </h2>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-2 .col-sm-2 .col-md-2 col-lg-2"></div>
                  <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3 br">
                    <button
                      type="button"
                      v-on:click="
                        prikaziEmail = !prikaziEmail;
                        prikaziLozinku = true;
                      "
                      class="btn btn-primary"
                    >
                      <b>Promijeni Email</b>
                    </button>
                  </div>
                  <div class="col-xs-2 .col-sm-2 .col-md-2 col-lg-2"></div>

                  <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3 br">
                    <button
                      type="button"
                      v-on:click="
                        prikaziLozinku = !prikaziLozinku;
                        prikaziEmail = true;
                      "
                      class="btn btn-primary"
                    >
                      <b>Promijeni Lozinku</b>
                    </button>
                  </div>
                  <div class="col-xs-2 .col-sm-2 .col-md-2 col-lg-2"></div>
                </div>

                <div
                  v-if="!prikaziEmail"
                  class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12"
                >
                  <div class="podnaslov">Novi email</div>
                  <div class="row">
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                    <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 promjena">
                      <input type="text" name="lozinka" required class="form-control" />
                    </div>
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                  </div>
                  <div class="podnaslov">Ponovite novi email</div>
                  <div class="row">
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                    <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 promjena">
                      <input type="text" name="lozinka" required class="form-control" />
                    </div>
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-xs-4 .col-sm-4 .col-md-4 col-lg-4"></div>
                    <button class="col-xs-4 .col-sm-4 .col-md-4 col-lg-4 btn-podnesi">Spremi</button>
                    <div class="col-xs-4 .col-sm-4 .col-md-4 col-lg-4"></div>
                  </div>
                </div>

                <div
                  v-if="!prikaziLozinku"
                  class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12"
                >
                  <div class="podnaslov">Trenutačna lozinka</div>
                  <div class="row">
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                    <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 promjena">
                      <input type="password" name="lozinka" required class="form-control" />
                    </div>
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                  </div>
                  <div class="podnaslov">Nova Lozinka</div>
                  <div class="row">
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                    <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 promjena">
                      <input type="password" name="lozinka" required class="form-control" />
                    </div>
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                  </div>
                  <div class="podnaslov">Ponovite novu lozinku</div>
                  <div class="row">
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                    <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 promjena">
                      <input type="password" name="lozinka" required class="form-control" />
                    </div>
                    <div class="col-xs-3 .col-sm-3 .col-md-3 col-lg-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-xs-4 .col-sm-4 .col-md-4 col-lg-4"></div>
                    <button class="col-xs-4 .col-sm-4 .col-md-4 col-lg-4 btn-podnesi">Spremi</button>
                    <div class="col-xs-4 .col-sm-4 .col-md-4 col-lg-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from "@/components/header";
import { auth } from "@/services";
import faks from "../faks.json";

export default {
  data() {
    return {
      auth: auth.state,
      prikaziEmail: true,
      prikaziLozinku: true,
      userEmail: "",
      userFaks: "",
    };
  },
  components: {
    "app-header": header,
  },
  mounted() {
    let data = auth.getUser();
    this.userEmail = data.email;

    let tempFaks = auth.getFaks();
    tempFaks = faks.find((el) => el.short == tempFaks);
    this.userFaks = tempFaks["long"];
  },
  methods: {
    idiHome() {
      this.$router.push({ name: "About" });
    },
    zamjena() {
      if (this.prikaziEmail == false) this.prikaziEmail = true;
    },
  },
};
</script>

<style scoped>
.profil {
  width: 80%;
  color: white;
  padding-top: 5%;
  margin-top: 15%;
  margin-left: 10%;
  border: none;
  border-radius: 15px;
  background-image: url("../assets/card-pozadina.svg");
}
.btn {
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid#00b7ff;
  outline: none;
  width: 100%;
  height: 100%;
  color: white;
}

.btn:hover {
  transition: 0.3s ease-in-out;
  background: #00b7ff;
  color: white;
}
.btn-podnesi {
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid#00b7ff;
  outline: none;
  margin-top: 10%;
  margin-bottom: 5%;
  padding: 2%;
  color: white;
}
.first-container h1 {
  font-family: "Playfair Display", serif;
  position: relative;
  color: #00b7ff;
}
.promjena input[type="password"],
[type="text"] {
  color: #00b7ff;
  margin-top: 10%;
  margin-bottom: 5%;
  border: 1px solid #00b7ff;
  border-radius: 25px;
  background-color: transparent;
  width: 100%;
}
.opis {
  font-family: "Nunito Sans", sans-serif;
  color: white;
  margin: 5%;
}
.first-container .profa {
  cursor: pointer;
  position: relative;
  margin-top: 20%;
}
.hero {
  font-family: "Playfair Display", serif;
  position: relative;
  color: #00b7ff;
  font-size: 25px;
}

.first-container {
  margin-bottom: 5%;
}
.userData {
  color: #00b7ff;
  overflow-wrap: break-word;
}
.userDataEmail {
  font-size: 30px;
}
.userDataFaks {
  font-size: 20px;
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
.title {
  font-family: "Playfair Display", serif;
  font-size: 25px;
  margin-top: 5%;
  color: #00b7ff;
}

@media (max-width: 375px) {



  .btn {
    padding: 5%;
    margin-bottom: 10px;
  }
  .row {
    padding: 0;
  }

  .br {
    margin-bottom: 10%;
  }
}

@media (max-width: 1380px) {
  .br {
    margin-bottom: 10%;
  }
  .btn b {
    font-size: 100%;
  }
  .promjena input[type="password"],
  [type="text"] {
    width: 100%;
  }
  .ab h2 {
    font-size: 90%;
  }
}
@media (max-width: 1220px) {
  .btn b {
    font-size: 60%;
  }
  .promjena input[type="password"],
  [type="text"] {
    width: 60%;
  }
}
@media (max-width: 990px) {
  .br {
    margin-bottom: 10%;
  }
  .btn b {
    font-size: 80%;
  }
  .promjena input[type="password"],
  [type="text"] {
    width: 80%;
  }
  .ab h2 {
    font-size: 150%;
  }
}
</style>
