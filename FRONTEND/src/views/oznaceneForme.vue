<template>
  <div class="w3-container">
    <appheader class="navbar-about"></appheader>

    <div class="container w3-center w3-animate-right">
      <div v-for="profesor in profesoriIspunjeno" :key="profesor._id">
        <kartica :info="profesor" :oznacene="true"/>
      </div>
    </div>
  </div>
</template>


<script>
import { profs, auth } from "@/services";
import regeneratorRuntime from "regenerator-runtime";
import kartica from "@/components/kartica.vue";
import appheader from "@/components/header";
export default {
  name: "Home",
  data() {
    return {
      profesoriIspunjeno: []
    };
  },
  components: {
    kartica,
    appheader,
  },
  async created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      let faks = auth.getFaks();
      this.profesoriIspunjeno = await profs.getOznacene(faks);
    },
  },
};
</script>
<style scoped>
.container {
  margin: 0px auto 10x;
  padding: 0px;
  font-family: "Gotu", sans-serif;
  text-align: center;
  height: 100%;
  pointer-events: none;
}
.w3-container {
  padding: 0px;
  margin: 0px;
  opacity: 0.9;

}
.navbar-about {
  -webkit-animation: w100 3s ease backwards;
  animation: w100 3s ease backwards;
}
.navbar-about w100 {
  margin-left: 0%;
}
@-webkit-keyframes w100 {
  from {
    margin-left: 50%;
  }
  to {
    margin-left: 0%;
  }
}
.card{
  background-color: lightcoral;
}
@keyframes w100 {
  from {
    margin-left: 50%;
  }
  to {
    margin-left: 0%;
  }
}
</style>
