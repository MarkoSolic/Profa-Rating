<template>

<div class="container">
  <div id="app">
    <div id="nav">
      <app-header/>
    </div>
    <div id="content">
       <router-view/>
    </div>
   
  </div>
  </div>
  
</template>

<script>
import header from "@/components/header"

export default {
  name: "App",
  components: {
    "app-header": header
  }
}
</script>

<style >
body{
  font-family: 'Gotu', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vw;
  background: white;
  

} 
#app{
 background: white;  /* donja pozadina */
 height: 1080px;
 
}


</style>
