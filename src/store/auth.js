// this ia a module "auth" in store

import { initializeApp } from "firebase/app";
import{getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut} from 'firebase/auth'
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
  actions:{
    async login({dispatch, commit},{loginEmail, loginPassword}){
      try {
         await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
         .then((userCredential) => {
          const user = userCredential.user;
          console.log(userCredential)
        })
      }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      }
    },

    async logout() {
      await signOut(auth)
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
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      }
    },

  }
}