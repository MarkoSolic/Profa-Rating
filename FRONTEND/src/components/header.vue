<template>
  <div class="topnav" id="myTopnav">
    <div>
      <a class="button" href="/about" v-bind:class="{ currentLink: isActive }">
        <span>| About</span>
      </a>
    </div>
    <div v-if="auth.authenticated">
      <a class="button" href="/popis">
        <span>| Popis</span>
      </a>
    </div>
    <div v-if="auth.authenticated" class="button">
      <a class="button" href="/oznacene">
        <span>| Popunjene forme</span>
      </a>
    </div>
    <div v-if="!auth.authenticated" v-on:click="openLogin()">
      <a class="button" href="/prijava">
        <span>| Prijava</span>
      </a>
    </div>
    <div v-if="auth.authenticated">
      <a class="odjava button" @click="logout" href="/">
        <span>| Odjavi se</span>
      </a>
    </div>
    <div v-if="auth.authenticated">
      <a href="javascript:void(0);" class="icon" @click="myFunction">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>
</template>
<script>
import { auth } from "@/services";

export default {
  data() {
    return {
      auth: auth.state,
      isActive: false,
    };
  },
  methods: {
    logout() {
      auth.logout();
      this.$router.go();
    },
    openLogin() {
      this.$store.commit("showLogin");
    },
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>

<style scoped>
.topnav {
  background-color: #333;
  overflow: hidden;
  border-radius: 0px 0px 0px 10px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.384);
  backdrop-filter: blur(5px);
  -webkit-animation: w70 3s ease backwards;
  animation: w70 3s ease backwards;
}
.button {
  transition: all 0.5s;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
.topnav .w70 {
  margin-left: 0%;
}
.topnav .w70 {
  margin-left: 0%;
}

.topnav a {
  margin-right: 0.5%;
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;

  font-size: 14px;
}

/* .topnav a:hover {
  border-radius: 5px;
  backdrop-filter: blur(15px);
  color: white;
}
.topnav .odjava:hover {
  color: rgb(219, 6, 6);
} */

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
