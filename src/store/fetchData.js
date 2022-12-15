import axios from "axios";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
const db = getDatabase();
const auth = getAuth();
export default{
  state: {
    category: [],// this is our json array
    catalogItems: [],// this is our json array
    advantages: [],
    filteredCart: [],//this is our filtered array
  },
  getters: {
    CATEGORY(state) {
      return state.category;
    },
    CATALOGITEMS(state) {
      return state.catalogItems
    },
    ADVANTAGES(state) {
      return state.advantages
    },
    FILTERED_CART(state){
      return state.filteredCart;
    },
  },
  actions: {
    async GET_CATEGORY({ commit }) {
      try {
         return onValue(ref(db, '/category/'), (snapshot) => {
          const category = snapshot.val()
          console.log(category)
          commit('SET_CATEGORY', category)
        }, {
          onlyOnce: true
        });
      } catch (err){
        commit('ISIMG')
        console.log(err)
        return err;
      }},
     
    GET_CATALOG({ commit }) {
      return axios('http://localhost:3000/catalogItems', {
        method: "GET"
      })
        .then((catalog) => {
          commit('SET_CATALOG', catalog.data)
          return catalog;
        })
        .catch((err) => {
          console.log(err)
          return err;
        })
    },
    GET_ADVANTAGES({ commit }) {
      return axios('http://localhost:3000/advantages', {
        method: 'GET'
      })
        .then((advantages) => {
          commit('SET_ADVANTAGES', advantages.data)
          return advantages;
        })
        .catch((err) => {
          console.log(err)
        })
    },

  },
  mutations: {
    SET_CATEGORY: (state, category) => {
      state.category = category;
    },
    SET_CATALOG: (state, catalogItems) => {
      state.catalogItems = catalogItems;
      state.filteredCart = catalogItems;
    },
    SET_ADVANTAGES: (state, advantages) => {
      state.advantages = advantages
    },
  }
}