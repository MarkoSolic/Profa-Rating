<template>
  <div class="container">
    <div v-for="profesor in profesori" :key="profesor._id">
      <kartica :info="profesor" />
    </div>
  </div>
</template>


<script>
import { profs } from "@/services";
import regeneratorRuntime from "regenerator-runtime";
import kartica from "@/components/kartica.vue";
import modal from "@/components/modalPrijava.vue";
export default {
  name: "Home",
  data() {
    return {
      profesori: []
    };
  },
  components: {
    kartica,
    modal
  },
  async created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      this.profesori = await profs.getall();
    }
  }
};
</script>
<style >
@import "../css/styles.css";
</style>
