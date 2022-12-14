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
  actions: {
    // login via FareBase
    async login({ dispatch, commit }, { loginEmail, loginPassword }) {
      try {
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      } catch (error) {
        commit('SET_ERROR', error)// we can get error.code and error.message
        console.log(error.code)
        throw error
      }
    },

    // logout via FireBase
    async logout({commit}) {
      await signOut(auth)
      commit('clearInfo')
    },

    // registration via FireBase
    async registration({ dispatch, commit }, { loginEmail, loginPassword, loginName }) {
      try {
        await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
          .then(() => {
            const user = auth.currentUser;
            const uid = user.uid;
            console.log(user)
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

    getUid(){
      const user = auth.currentUser;
      // const uid = user.uid;
      // console.log(auth.currentUser.uid)
      return user ? user.uid : null
    }
  }
}
// don't forget to import this module in store.js!!!!!