import { initializeApp } from "firebase/app";
import{ getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
const configFB = {
  apiKey: "AIzaSyCAJJiKHL-U0cIJe4Ka9ICLHVPclu66fVk",
  authDomain: "internet-shop-589b5.firebaseapp.com",
  projectId: "internet-shop-589b5",
  storageBucket: "internet-shop-589b5.appspot.com",
  messagingSenderId: "738423709491",
  appId: "1:738423709491:web:d72812d1a60b8c57db6846",
  measurementId: "G-0715SLECSH"
};
const appFB = initializeApp(configFB);
const auth = getAuth(appFB);

export default {
  actions:{
    async login({dispatch, commit},{loginEmail, loginPassword}){
      try {
         await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      }catch(err){
        throw err
      }
    }
  }
}