import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'

Vue.config.productionTip = false;

import VModal from "vue-js-modal";

Vue.use(VModal);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
