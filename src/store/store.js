
import auth from '@/store/auth'
import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    category: [],// this is our json array
    catalogItems: [],// this is our json array
    advantages: [],
    menu: [], // this is oue json menu array
    userCart: [],// this is our cart
    filteredCart: [],//this is our filtered array
    totalCartPrice: 0,
    totalItems: 0,
    isMobile: true, // to show icons in navbar
    showMenu: false, // to show menu on click
    slideMenu: "", // this change classes for menu animation
    slideCart: "", // this change classes for cart animation
    showCart: false,
    searchInput: '',
    pagePath:'/',
    localStorage:[],
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
    SHOW_BTN(state){
      return state.showBtn;
    },
    TOTAL_CART_PRICE(state){
      return state.totalCartPrice;
    },
    TOTAL_CART_ITEMS(state){
      return state.totalItems
    },
    FILTERED_CART(state){
      return state.filteredCart;
    },
    NOTIF_MSG(state){
      return state.notif_msg;
    },
    PAGE_PATH(state){
      return state.pagePath;
    }
  },

  actions: {// actions are asinc(methods in Component)
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
    GET_USER_CART({ commit }) {
      return axios.get('http://localhost:3000/userCart')
        .then((cart) => {
          commit("SET_USER_CART", cart.data)
        })
        .catch((err) => { console.log(err) })
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
    GET_HIDE_CART({commit}){
      commit('SET_HIDE_CART')
    },
    ADD_TO_CART({commit,state},item){
      const find = state.userCart.find((el)=> el.id === item.id)
      if(find){
        axios.get(`http://localhost:3000/userCart/`+item.id)
        .then((res)=> {
          res.data.quantity +=1;
          return res
        })
        .then((item)=>{
           return axios.put(`http://localhost:3000/userCart/`+item.data.id, item.data)
        })
        .then((item)=>{
          commit('CHANGE_QUANTITY_OF_ITEMS',item.data)
          commit('ADD_TO_CART_M')
        })
        .catch((err) => {
          console.log(err)
        }
        )
      }else{
        item.quantity = 1;
        item.totalPrice = item.itemPrice * item.quantity
        axios.post('http://localhost:3000/userCart', item)
        .then((item) => {
          commit("ADD_NEW_ITEM_TO_CART", item.data)
          commit('ADD_TO_CART_M')
        })
        .catch((err) => {
          console.log(err)
        })
      }
     
    },
    DELETE_ITEM({commit,state},id){
      axios.get(`http://localhost:3000/userCart/`+ id)
      .then((item)=>{
        if (item.data.quantity === 1 ){
          axios.delete(`http://localhost:3000/userCart/`+ id)
        }else{
          item.data.quantity -= 1;
          axios.put(`http://localhost:3000/userCart/`+ id, item.data)
        }
        const findEl = state.userCart.find(el => el.id === id)
        if (findEl.quantity === 1) {
          const index = state.userCart.findIndex(el => el.id === id)
          state.userCart.splice(index, 1)
          const b = JSON.stringify(state.userCart, null, 4)
          localStorage.setItem('cart', b);
          console.log(state.userCart.length)
          if (state.userCart.length === 0) {
           commit('SET_BTN_DISABLED')      
          }
        } else {
          findEl.quantity -= 1;
          const b = JSON.stringify(state.userCart, null, 4)
          localStorage.setItem('cart', b)
        }
        commit('SET_DELETE_ITEM',id)
      }) 
    },
    CLEAR_CART({ commit }) {
      return axios.get(`http://localhost:3000/userCart`)
        .then((cart) => {
          for (let el of cart.data) {
            axios.delete(`http://localhost:3000/userCart/`+ el.id)
          }})
        .then(() => {   
          commit('SET_CLEAR_CART')
        })
    },
    GET_SEARCH_INPUT({commit},searchInput){
      commit('SET_SEARCH_INPUT',searchInput)
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
    A_POST_USER_CART_TO_LOCALSTORAGE({commit}){
     commit('M_POST_USER_CART_TO_LOCALSTORAGE') 
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
    SET_USER_CART(state, cart) {
      state.userCart = cart;
      state.totalCartPrice = state.userCart.reduce((acc, { totalPrice }) =>
        acc + totalPrice, 0);
      state.totalItems = state.userCart.reduce((acc, { quantity }) =>
        acc + quantity, 0);
    },
    ADD_NEW_ITEM_TO_CART(state, item) {
      state.userCart.push(item);
      const b = JSON.stringify(state.userCart, null, 4)
      localStorage.setItem('cart', b)
      if (state.userCart.length > 0) { state.showBtn = true }
    },
    CHANGE_QUANTITY_OF_ITEMS(state, item) {
      const index = state.userCart.findIndex(el => el.id === item.id)
      state.userCart[index].quantity += 1;
      state.userCart[index].totalPrice =
        state.userCart[index].quantity * state.userCart[index].itemPrice
      const b = JSON.stringify(state.userCart, null, 4)
      localStorage.setItem('cart', b)
      if (state.userCart.length > 0) { state.showBtn = true }
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
    SET_MENU(state, menu) {
      state.menu = menu;
    },
    SET_SHOW_CART(state){
      if(state.pagePath === '/cart'){
        return
      }else{
        state.showCart = !state.showCart
        if (state.showCart === true) {
          document.querySelector(".menu").style.display = "none";
          state.showMenu = false;
          document.querySelector(".cart-box").style.display = "block";
          state.slideCart = "slide-left"
        } else {
          state.slideCart = "slide-out-top"
        }  
      }
        
    },
    SET_HIDE_CART(state){
      state.slideCart = "slide-out-top"
      // document.querySelector(".cart-box").style.display = "none";
    },
    ADD_TO_CART_M(state) {
      state.totalCartPrice = state.userCart.reduce((acc, { totalPrice }) =>
        acc + totalPrice, 0);
      state.totalItems = state.userCart.reduce((acc, { quantity }) =>
        acc + quantity, 0);
    },
    SET_DELETE_ITEM(state, id) {

      state.totalCartPrice = state.userCart.reduce((acc, { totalPrice }) =>
        acc + totalPrice, 0);
      state.totalItems = state.userCart.reduce((acc, { quantity }) =>
        acc + quantity, 0);
    },
    SET_CLEAR_CART(state) {
      state.userCart = [];
      state.totalCartPrice = 0;
      state.totalItems = 0;
      const b = JSON.stringify(state.userCart, null, 4)
      localStorage.setItem('cart', b)
    },
    SET_SEARCH_INPUT(state, searchInput) {
      const filtered = state.catalogItems.filter((el) =>
        el.itemTitle.toLowerCase().includes(searchInput.toLowerCase()))
      state.filteredCart = filtered;
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
      console.log('able store')
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
    M_POST_USER_CART_TO_LOCALSTORAGE(state) {
      const b = JSON.stringify(state.userCart, null, 4)
      localStorage.setItem('cart', b);
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

  },

  modules: {
    auth
  }
})
