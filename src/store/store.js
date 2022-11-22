import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    category:[]
  },
  getters: {
    CATEGORY(state){
      return state.category;
    }
  },
  actions: {// actuins are asinc
    GET_CATEGORY({ commit }) {
      return axios('http://localhost:3000/category', {
        method: "GET"
      })
        .then((category) => {
          commit('SET_CATEGORY', category.data)
          return category;
        })
        .catch((err) => {
          console.log(err)
          return err;
        })
    }
  },
  mutations: {// to change data in state
    SET_CATEGORY:(state, category)=>{
      state.category = category;
    }
  },
  
  modules: {
  }
})
