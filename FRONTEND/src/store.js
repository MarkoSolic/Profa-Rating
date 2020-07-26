import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    registriraj_se: true,
    prijavi_se: false
  },
  mutations:{
    prijava(state){
      state.prijavi_se = !state.prijavi_se
    }
  }
})