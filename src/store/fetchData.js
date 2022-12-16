
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
const db = getDatabase();
const auth = getAuth();
export default{
  state: {
    category: [],// this is our json array
    advantages: [],
    filteredCart: [],//this is our filtered array
    catalogItems: [],// this is our json array
    searchInput: ''
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
          commit('SET_CATEGORY', category)
        }, {
          onlyOnce: true
        });
      } catch (err){
        console.log(err)
        return err;
      }},  
    GET_CATALOG({ commit }) {
      try {
        return onValue(ref(db, '/catalogItems/'), (snapshot) => {
          const catalog = snapshot.val()
          commit('SET_CATALOG', catalog)
        }, {
          onlyOnce: true
        })
      } catch (err) {
        console.log(err)
        return err;
      }
    },
    GET_ADVANTAGES({ commit }) {
      try {
        return onValue(ref(db, '/advantages/'), (snapshot) => {
          const advantages = snapshot.val()
          commit('SET_ADVANTAGES', advantages)
        }, {
          onlyOnce: true
        })
      } catch (err) {
        console.log(err)
        return err;
      }
    },
    GET_SEARCH_INPUT({commit},searchInput){
      commit('SET_SEARCH_INPUT',searchInput)
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
    SET_SEARCH_INPUT(state, searchInput) {
      console.log()
      const filtered = state.catalogItems.filter((el) =>
        el.itemTitle.toLowerCase().includes(searchInput.toLowerCase()))
      state.filteredCart = filtered;
    },
  }
}