import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let city = localStorage.getItem('currentCity')
if (!city) {
  city = localStorage.setItem('currentCity', '上海')
}

const store = new Vuex.Store({
  state: {
    currentCity: city
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export default store
