<template>
  <div class="container-fluid">
    <div class="card col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
      <div class="card-body">
        <div class="row">
          <div class="col-9">
            <router-link v-bind:to="'/anketa/' + info._id" class="link">{{info.profesor}}</router-link>
          </div>
          <div class="col-3">
          <div v-if="oznacene">
            <i class="fas fa-clipboard-check"></i>
          </div>
          <div v-else>
            <i class="fas fa-clipboard"></i>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  props: ["info", "oznacene"],
  data() {
    return {};
  },
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
  padding: 20px;
}
.card:hover {
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -ms-transform: scale(1.03);
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}

.fa-clipboard {
  color: rgba(51, 62, 121, 0.842);
  font-size: 30px;
  float: right;
}
.fa-clipboard-check{
  color: rgba(14, 110, 78, 0.842);
  font-size: 30px;
  float: right;
}
.card-body {
  color: #272727;
  font-size: 20px;
  font-weight: 550;
}
@media (max-width: 767px) {
  .card-body {
    font-size: 100%;
  }
}
</style>
