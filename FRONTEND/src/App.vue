<template>
  <div>
    <div id="app">
      <div id="content">
        <router-view />
      </div>
    </div>
    <div class="container footy">
      <appFooter />
    </div>
  </div>
</template>

<script>
import appFooter from "@/components/footer";
export default {
  name: "App",
  components: {
    appFooter
  }
};
</script>

<style >
body {
  background-image: linear-gradient(to right, #014083, #178c9e);
}
.footy {
  margin-top: 100px;
  border-top: 1px solid white;
  color: #014083;
  -webkit-text-stroke: 1px black;
}
</style>
