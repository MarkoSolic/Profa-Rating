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
    appFooter,
  },
};
</script>

<style>
body {
  background-image: linear-gradient(to right, #014083, #178c9e);
}
.footy {
  margin-top: 100px;
  border-top: 1px solid white;
  color: #014083;
  -webkit-text-stroke: 1px black;
}

.input-group {
  width: 50%;
  margin: 0 auto;
}
h1 {
  color: white;
  font-weight: 600;
}
input[type="email"],
[type="password"] {
  color: #00b7ff;
  background-color: transparent;
  border-radius: 0px 20px 20px 0px;
}
input[type="email"]:focus,
[type="password"]:focus {
  background-color: transparent;
  color: #00b7ff;
}
.input-group-text {
  border-radius: 20px;
  background-color: transparent;
  color: #00b7ff;
}
p {
  font-size: 120%;
}
</style>
