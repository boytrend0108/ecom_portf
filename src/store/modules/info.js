import { getDatabase, ref, onValue } from "firebase/database";
const database = getDatabase();
export default {
  state:{ 
    info:{}
  },

  getters:{
    INFO(state){
      return state.info
    }
  },

  actions:{
     fetchInfo({commit}) {
      try {
        const uid = JSON.parse(localStorage.getItem('firebase'))
        const data = ref(database, `users/${uid}/info`)       
        try { // не получалось достать переменную info без дополнительного try cathc????
          let info
          onValue(data, (snapshot) => {
            info = snapshot.val()
            commit('setInfo', info)
          })
        } catch (e) {
          console.log(e)
        }
      } catch (e) {
        console.log(e)
      }
    }
  },

  mutations:{
    setInfo(state, info){
      if(!JSON.parse(localStorage.getItem("isAdmin"))){
        state.info = info
      }else{
        state.info = {username:"Admin"}
      }
    },

    clearInfo(state){
      state.info = {}
    }
  }
}

// don't forget to import this module in store.js!!!!!