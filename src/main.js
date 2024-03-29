import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store/store';
import "@/assets/styles/styles.scss";
import components from '@/components/UI';
import messagePlagin from "@/utils/message.plagin"
// -----------------------------------------------------------------------------
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import SplitButton from 'primevue/splitbutton';
import Paginator from 'primevue/paginator';

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

// -----------------------------------------------------------------------------
 let app = createApp(App)
  components.forEach(component => {
  app.component(component.name, component)
});  

app
  .use(store)
  .use(router)
  .use(PrimeVue)
  .use(ToastService)
  .use(messagePlagin)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('Button',Button )
  .component('InputText', InputText )
  .component('Toast',Toast )
  .component('Checkbox', Checkbox)
  .component('Dialog',Dialog)
  .component('SplitButton', SplitButton)
  .component('Paginator', Paginator)
  .mount('#app')
// -----------------------------------------------------------------------------


