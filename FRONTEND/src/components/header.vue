<template>
  <div class="naslov">
    <div class="col">
      <ul type="button" class="navbar">
        <button class="button">
          <router-link class="link" to="/About_Tab">
            <a class="dugme">About |</a>
          </router-link>
        </button>

        <button class="button">
          <router-link class="link" to="/popis">
            <a class="dugme">Popis |</a>
          </router-link>
        </button>
        <button class="button">
          <router-link class="link" to="/oznacene">
            <a class="dugme">Popunjene forme |</a>
          </router-link>
        </button>
        <button class="button">
          <router-link class="link" to="/profil">
            <a class="dugme">Profil |</a>
          </router-link>
        </button>
        <div v-if="!auth.authenticated">
          <button class="button">
            <router-link class="link" to="/prijava">
              <a class="dugme">Prijava |</a>
            </router-link>
          </button>
        </div>
        <div v-if="auth.authenticated">
          <button class="button" @click="logout">
            <router-link class="link" to="/">
              <a class="dugme odjava">Odjavi se |</a>
            </router-link>
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import { auth } from "@/services";
import store from "../store.js";

export default {
  data() {
    return {
      auth: auth.state,
      prikaziPrijava: store.prijavi_se
    };
  },
  methods: {
    logout() {
      auth.logout();
      this.$router.go();
    }
  }
};
</script>

<style scoped>
.odjava:hover {
  color: rgb(219, 6, 6);
}
ul {
  float: right;
}
.naslov {
  height: 40px;
  border-radius: 0px 0px 0px 10px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.384);
  backdrop-filter: blur(5px);
  -webkit-animation: w70 3s ease backwards;
}
.naslov .w70 {
  margin-left: 0%;
}
.button {
  background-color: transparent;
  border: none;
  color: gray;
  font-size: 15px;
  transition: all 0.5s;
  cursor: pointer;
}
.button .dugme {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button .dugme:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover .dugme {
  padding-right: 25px;
}

.button:hover .dugme:after {
  opacity: 1;
  right: 0;
}

.link {
  color: white;
}
@-webkit-keyframes w70 {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
}
</style>