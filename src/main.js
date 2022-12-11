import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store/store';
import "@/assets/styles/styles.scss";
import components from '@/components/UI';
// -----------------------------------------------------------------------------
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/lara-light-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// -----------------------------------------------------------------------------

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(fas, far, fab)

// -----------------------------------------------------------------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const configFB = {
  apiKey: "AIzaSyCAJJiKHL-U0cIJe4Ka9ICLHVPclu66fVk",
  authDomain: "internet-shop-589b5.firebaseapp.com",
  projectId: "internet-shop-589b5",
  storageBucket: "internet-shop-589b5.appspot.com",
  messagingSenderId: "738423709491",
  appId: "1:738423709491:web:d72812d1a60b8c57db6846",
  measurementId: "G-0715SLECSH"
};
// Initialize Firebase
const appFB = initializeApp(configFB);
const auth = getAuth(appFB);

const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  } catch (error) {
    console.log(error)
  }
}

const createAccount = async ()=>{
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  } catch (error) {
    console.log(error)
  }
}

//------------------------------------------------------------------------------
  const app = createApp(App)

  // global registration of UI components
  components.forEach(component => {
    app.component(component.name, component)
  });  
  
  app
    .use(store)
    .use(router)
    .use(PrimeVue)
    .use(ToastService)  
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('Button',Button )
    .component('InputText', InputText )
    .component('Toast',Toast )
    .mount('#app')
  

;

// -----------------------------------------------------------------------------


