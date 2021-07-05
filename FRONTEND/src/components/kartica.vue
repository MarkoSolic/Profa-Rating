<template>
  <div class="card">
    <div class="card-body">
      <router-link v-bind:to="'/anketa/' + info._id" class="link">{{info.profesor}}</router-link>
      <i class="fas fa-clipboard"></i>
    </div>
  </div>
</template> 
<script>
export default {
  props: ["info"],
  data() {
    return {
      isClicked: false
    };
  },

  methods: {
    toggleIsClicked: function() {
      this.isClicked = !this.isClicked;
    }
  }
};
</script>
<style scoped>
.link {
  text-decoration: none;
}
.card {
  cursor: pointer;
  margin: 0px auto 10px;
  width: 85%;
  background-color: #f2f3f5;
  margin-top: 5%;
  transition: transform 0.2s;
}
.card:hover {
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -ms-transform: scale(1.03);
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}
.fas {
  color: rgba(51, 62, 121, 0.842);
  font-size: 30px;
  cursor: pointer;
  float: right;
}
.fas:active {
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -ms-transform: scale(1.03);
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}
.card-body {
  color: #272727;
  font-size: 20px;
}
</style>
