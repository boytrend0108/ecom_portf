import { getDatabase, ref, onValue } from "firebase/database";
// import { getAuth } from "firebase/auth";
const database = getDatabase();
// const auth = getAuth();

export default {
  state:{ 
    info:{}
  },

  getters:{
    info: s => s.info
  },

  actions:{
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        const data = ref(database, `users/${uid}/info`)
        console.log('uid: ' + uid, 'data: ' + data)
        try {
          let info
          onValue(data, (snapshot) => {
            info = snapshot.val()
            // console.log(info)
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
      console.log(info)
      state.info = info
    },

    clearInfo(state){
      state.info = {}
    }
  }
}

// don't forget to import this module in store.js!!!!!