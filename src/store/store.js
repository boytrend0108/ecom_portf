import axios from 'axios';
import { TableLitePlugin } from 'bootstrap-vue';
import { createStore } from 'vuex'

export default createStore({
  state: {
    category: [],// this is our json array
    catalogItems: [],// this is our json array
    advantages:[],
    isMobile: true, // to show icons in navbar
    showMenu: false, // to show menu on click
    slideMenu:"",
  },
  getters: {// this is a commands for getting our json arrays
    CATEGORY(state) {
      return state.category;
    },
    CATALOGITEMS(state) {
      return state.catalogItems
    },
    ADVANTAGES(state) {
      return state.advantages
    },
    IS_MOBILE(state){
      return state.isMobile;
    },
    IS_SHOW_MENU(state){
      return state.showMenu;
    },
    SLIDE_MENU(state){
       return state.slideMenu;
    }
  },
  actions: {// actuins are asinc(methods in Component)
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
    SWITCH_MOBILE({ commit }) {
      commit("SET_MOBILE")
    },
    SWITCH_TABLET({commit}){
      commit("SET_TABLET")
    },
    SWITCH_SHOW_MENU({commit}){
      commit("SET_SHOW_MENU")
    },
  },
  mutations: {// to change data in state
    SET_CATEGORY: (state, category) => {
      state.category = category;
    },
    SET_CATALOG: (state, catalogItems) => {
      state.catalogItems = catalogItems
    },
    SET_ADVANTAGES: (state, advantages) => {
      state.advantages = advantages
    },
    SET_MOBILE: (state) => {
      state.isMobile = false;
    },
    SET_TABLET: (state) => {
      state.isMobile = true;
    },
    SET_SHOW_MENU(state) {
      state.showMenu = !state.showMenu;
      if (state.showMenu === true) {
        state.slideMenu = "slide-left"
        console.log(state.slideMenu)
      } else {
        state.slideMenu = "slide-out-top"
        console.log(state.slideMenu)
      }
    }
  },

  modules: {
  }
})
