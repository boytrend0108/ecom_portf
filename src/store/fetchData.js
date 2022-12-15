import axios from "axios";
export default{
  state: {
    category: [],// this is our json array
  },
  getters: {
    CATEGORY(state) {
      return state.category;
    },
  },
  actions: {
    GET_CATEGORY({ commit }) {
      return axios('http://localhost:3000/category', {
        method: "GET"
      })
        .then((category) => {
          commit('SET_CATEGORY', category.data)
          return category;
        })
        .catch((err) => {
          commit('ISIMG')
          console.log(err)
          return err;
        })
    },

  },
  mutations: {
    SET_CATEGORY: (state, category) => {
      state.category = category;
    }
  }
}