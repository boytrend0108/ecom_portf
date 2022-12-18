
import { getDatabase, onValue,ref } from "firebase/database";
const db = getDatabase();
export default {
  state:{
    menu: [], // this is oue json menu array
    showMenu: false, // to show menu on click
    slideMenu: "", // this change classes for menu animation
  },
  getters:{
    MENU(state){
      return state.menu;
    },
    IS_SHOW_MENU(state){
      return state.showMenu;
    },
    SLIDE_MENU(state){
       return state.slideMenu;
    },
  },
  actions:{
    async GET_MENU({ commit }) {
      try {
        return onValue(ref(db, `/menu/`), (snapshot) => {
          const menu = snapshot.val();
          commit('SET_MENU', menu)
        })
      } catch (err) {
        console.log(err)
      }
    },

    SWITCH_SHOW_MENU({commit}){
      commit("SET_SHOW_MENU")
    },
  },
  mutations:{
    SET_MENU(state, menu) {
      state.menu = menu;
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
  }
}