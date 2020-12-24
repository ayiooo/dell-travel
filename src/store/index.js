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
    changeCity (state, cityname) {
      state.currentCity = cityname
      localStorage.setItem('currentCity', cityname)
    }
  },
  actions: {
    changeCity ({ mutations }, cityname) {
      this.commit('changeCity', cityname)
    }
  },
  modules: {
  }
})

export default store
