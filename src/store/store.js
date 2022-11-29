import axios from 'axios';
import { useRoute } from 'vue-router';
import { createStore } from 'vuex'

export default createStore({
  state: {
    category: [],// this is our json array
    catalogItems: [],// this is our json array
    advantages:[],
    menu:[], // this is oue json menu array
    userCart:[], // this is our cart
    totalCartPrice: 0,
    isMobile: true, // to show icons in navbar
    showMenu: false, // to show menu on click
    slideMenu:"", // this change classes for menu animation
    slideCart:"", // this change classes for cart animation
    showCart: false, 
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
    },
    MENU(state){
      return state.menu;
    },
    SHOW_CART(state){
      return state.showCart;
    },
    SLIDE_CART(state){
      return state.slideCart
    },
    USER_CART(state){
      return state.userCart;
    },
    TOTAL_CART_PRICE(state){
      return state.totalCartPrice;
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
    GET_MENU({commit}){
      return axios('http://localhost:3000/menu',{
        method: "GET"
      })
      .then((menu) => {
        commit('SET_MENU', menu.data)
        return menu;
      })
      .catch((err)=>{
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
    SWITCH_SHOW_CART({commit}){
      commit('SET_SHOW_CART')
    },
    ADD_TO_CART({commit}, item ){
         commit('ADD_TO_CART_M', item)
    },
    GET_TOTAL_CART_PRICE({commit}){
      commit('SET_TOTAL_CART_PRICE')
    },
    ADD_USER_CART_TO_JSON({commit}){
       commit("SET_USER_CART_TO_jSON")
    }
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
        document.querySelector(".cart-box").style.display = "none";
        state.showCart = false;
        document.querySelector(".menu").style.display = "block";
        state.slideMenu = "slide-left"
      } else {
        state.slideMenu = "slide-out-top"
      }
    },
    SET_MENU(state, menu){
      state.menu = menu;
    },
    SET_SHOW_CART(state) {
      state.showCart = !state.showCart
      if (state.showCart === true) {
        document.querySelector(".menu").style.display = "none";
        state.showMenu = false;
        document.querySelector(".cart-box").style.display = "block";
        state.slideCart = "slide-left"
      } else {
        state.slideCart = "slide-out-top"
      }
    },
    ADD_TO_CART_M(state, item) {
      const find = state.userCart.find(el => item.id === el.id);
      if (find) {
        const index = state.userCart.findIndex(el => item.id === el.id)
        state.userCart[index].quantity += 1;
        state.userCart[index].totalPrice += item.itemPrice;
        state.totalCartPrice = state.userCart.reduce((acc, { totalPrice }) =>
          acc + totalPrice, 0);
      } else {
        item.quantity = 1;
        item.totalPrice = item.itemPrice;
        state.userCart.push(item);
        state.totalCartPrice = state.userCart.reduce((acc, { totalPrice }) =>
          acc + totalPrice, 0)
      }
    },
    SET_TOTAL_CART_PRICE(state){
      state.totalCartPrice = state.userCart.reduce((acc, {totalPrice}) =>
      acc + totalPrice, 0)
    },
    SET_USER_CART_TO_jSON(state){
     const userCart = state.userCart
     axios.post('http://localhost:3000/userCart', userCart )
      .then((response) =>{
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },

  modules: {
  }
})
