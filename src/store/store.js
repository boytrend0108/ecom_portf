
import auth from '@/store/auth'
import info from "@/store/info"
import fetchData from '@/store/fetchData';
import menu from '@/store/menu';
import cart from "@/store/cart"
import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    isMobile: true, // to show icons in navbar
    pagePath:'/',
    localStorage:[],
    error: null //errors for login and registration
  },
  getters: {// this is a commands for getting our json arrays
    
    IS_MOBILE(state){
      return state.isMobile;
    },
    SHOW_BTN(state){
      return state.showBtn;
    },
    NOTIF_MSG(state){
      return state.notif_msg;
    },
    PAGE_PATH(state){
      return state.pagePath;
    },
    ERROR(state){
     return state.error
    } 
  },

  actions: {// actions are asinc(methods in Component)
    SWITCH_MOBILE({ commit }) {
      commit("SET_MOBILE")
    },
    SWITCH_TABLET({commit}){
      commit("SET_TABLET")
    },
    GET_BTN_DISABLED({commit}){  
       commit('SET_BTN_DISABLED')
    },
    A_SET_BTN_ABLED({commit}){  
      commit('M_SET_BTN_ABLED')
    },
    GET_SHOW_NOTIF({commit}){
     commit('SET_SHOW_NOTIF')
    },
    HIDE_SHOW_NOTIF({ commit }) { 
        commit('SET_HIDE_NOTIF')
    },
    A_GET_LOCAL_STORAGE({commit}){
      commit('M_GET_LOCAL_STORAGE')
    },
    A_RESET_INPUT_COLOR(){
    document.querySelector("#name").style.border = '1px solid gray';
    document.querySelector("#phone").style.border = '1px solid gray';
    document.querySelector("#email").style.border = '1px solid gray';
    },
    GET_PAGE_PATH({commit}, pagePath){
      commit('SET_PAGE_PATH', pagePath)
    },
    GET_NAVCART_BTN_ABLED({commit}){
      commit('SET_NAVCART_BTN_ABLED');
    },
    GET_NAVCART_BTN_DISABLED({commit}){
      commit('SET_NAVCART_BTN_DISABLED')
    }
  },

  mutations: {// to change data in state
    SET_MOBILE: (state) => {
      state.isMobile = false;
    },
    SET_TABLET: (state) => {
      state.isMobile = true;
    },
    SET_BTN_DISABLED(state) {
      if(state.pagePath !== '/cart'){
        return
      }else{
        document.querySelector(".clear-btn2").setAttribute("disabled", "disabled")
        document.querySelector(".clear-btn2").classList.add("disabled");
        document.querySelector(".clear-btn2").textContent = "Cart is empty";
        document.querySelector(".form-btn2").setAttribute("disabled", "disabled")
        document.querySelector(".form-btn2").classList.add("disabled");
        document.querySelector(".form-btn2").textContent = "Cart is empty";
      }     
    },
    M_SET_BTN_ABLED(){
      document.querySelector(".clear-btn2").removeAttribute("disabled")
      document.querySelector(".clear-btn2").classList.remove("disabled");
      document.querySelector(".clear-btn2").textContent = "Clear Cart";
      document.querySelector(".form-btn2").removeAttribute("disabled", "disabled")
      document.querySelector(".form-btn2").classList.remove("disabled");
      document.querySelector(".form-btn2").textContent = "Send an order";
    },
    SET_SHOW_NOTIF() {
      document.querySelector('.hidden').style.display = "block"
      document.querySelector('.notification').classList.remove('slide-out-elliptic-top-bck')
      document.querySelector('.notification').classList.add('scale-in-center')
    },
    SET_HIDE_NOTIF() {
      document.querySelector('.notification').classList.remove('scale-in-center')
      document.querySelector('.notification').classList.add('slide-out-elliptic-top-bck')
    },
    M_GET_LOCAL_STORAGE(state){
      const ls =  localStorage.getItem('cart');
      console.log(ls)
      state.localStorage = JSON.parse(ls)
      console.log(state.localStorage)
    },
    SET_PAGE_PATH(state,pagePath){
      state.pagePath = pagePath;
    },
    SET_NAVCART_BTN_ABLED(state){
        if(state.pagePath !== '/cart'){
          document.querySelector('.icon-cart-wr').removeAttribute("disabled");
          document.querySelector('.fa-cart-shopping').classList.remove('disabled')
          document.querySelector('.icon-cart-wr').classList.remove('disabled')
          document.querySelector('.item-num').classList.remove('disabled')
        }       
    },
    SET_NAVCART_BTN_DISABLED(){
        document.querySelector('.icon-cart-wr').setAttribute("disabled","disabled");
        document.querySelector('.fa-cart-shopping').classList.add('disabled')
        document.querySelector('.item-num').classList.add('disabled')          
    },
    SET_ERROR(state,error){
      state.error = error
    },
    CLEAR_ERROR(state){
      state.error = null
    }
  },

  modules: {
    auth, info, fetchData, menu, cart
  }
})
