<template>
  <div id="popis">
    <div class="container">
      <button
        class="btn btn-primary btn-lg"
        v-on:click="openProf=!openProf; openAsis=true"
      >Profesori</button>
      <button
        class="btn btn-primary btn-lg"
        v-on:click="openAsis=!openAsis; openProf=true"
      >Asistenti</button>

      <div v-if="!openProf" class="card">
        <div class="card-body">
          Nikola Tanković
          <i class="far fa-check-circle fa-2x"></i>
          <i class="far fa-hand-pointer fa-2x"></i>
        </div>
        <div class="card-body">
          Nikola Tanković
          <i class="far fa-check-circle fa-2x"></i>
          <i class="far fa-hand-pointer fa-2x"></i>
        </div>
        <div class="card-body">
          Nikola Tanković
          <i class="far fa-check-circle fa-2x"></i>
          <i class="far fa-hand-pointer fa-2x"></i>
        </div>
        <div class="card-body">
          Nikola Tanković
          <i class="far fa-check-circle fa-2x"></i>
          <i class="far fa-hand-pointer fa-2x"></i>
        </div>
        <div class="card-body">
          Nikola Tanković
          <i class="far fa-check-circle fa-2x"></i>
          <i class="far fa-hand-pointer fa-2x"></i>
        </div>
      </div>

      <div v-if="!openAsis" class="card">
        <div class="card-body">Boris Oreški</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0px auto 10x;
  padding: 0px;
  font-family: "Gotu", sans-serif;
  text-align: center;
}
.btn {
  margin-bottom: 5%;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #4169e1;
  outline: none;
  transition: 0.3s ease-in-out;
  color: gray;
  margin-top: 5%;
}
.btn:hover {
  transition: 0.3s ease-in-out;
  background: #4169e1;
  color: white;
}
.far {
  margin-left: 5%;
}
.far :hover {
  cursor: pointer;
}
.fa-hand-pointer :hover {
  cursor: pointer;
  content: "\f023";
}
</style>

<script>
export default {
  data() {
    return {
      openProf: true,
      openAsis: true
    };
  }
};
</script>