// this is a module "auth" in store

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref, set } from "firebase/database";
const configFB = {
  apiKey: "AIzaSyCAJJiKHL-U0cIJe4Ka9ICLHVPclu66fVk",
  authDomain: "internet-shop-589b5.firebaseapp.com",
  projectId: "internet-shop-589b5",
  storageBucket: "internet-shop-589b5.appspot.com",
  messagingSenderId: "738423709491",
  appId: "1:738423709491:web:d72812d1a60b8c57db6846",
  measurementId: "G-0715SLECSH",
  databaseURL: "https://internet-shop-589b5-default-rtdb.firebaseio.com/"
};
const appFB = initializeApp(configFB);
const auth = getAuth(appFB);
const database = getDatabase(appFB);

export default {
  state:{
    uid:''
  },
  getters:{
     GET_UID(state){
      return state.uid;
     }
  },

  actions: {
    // login via FareBase
    async login({ dispatch, commit }, { loginEmail, loginPassword }) {
      try {
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            const user = auth.currentUser;
            const uid = user.uid;
            commit('SET_UID', uid)
            localStorage.setItem("firebase", JSON.stringify(uid))// write uid to localStorage)
      } catch (error) {
        commit('SET_ERROR', error)// we can get error.code and error.message
        console.log(error.code)
        throw error
      }
    },

    // logout via FireBase
    async logout({commit}) {
      await signOut(auth)
      localStorage.setItem('firebase', "")// clear localStorage
      commit('clearInfo')
    },

    // registration via FireBase
    async registration({ dispatch, commit }, { loginEmail, loginPassword, loginName }) {
      try {
        await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
          .then(() => {
            const user = auth.currentUser;
            const uid = user.uid;
            commit('SET_UID', uid)
            // localStorage.setItem("firebase", JSON.stringify(uid)) // write uid to localStorage
            set(ref(database, `users/${uid}/info`), {// post ro FB store
              username: loginName,
              email: loginEmail
            });
          })
      } catch (error) {
        commit('SET_ERROR', error)// we can get error.code and error.message
        console.log(error.code)
        throw error
      }
    },
  },

  mutations:{
    SET_UID(state, uid){
      state.uid = uid;
    }
  }
}
// don't forget to import this module in store.js!!!!!