import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import * as firebase from "firebase/app";
import { firestorePlugin } from 'vuefire'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.use(firestorePlugin);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// var firebaseConfig = {
//     apiKey: "AIzaSyBCkPRLi9plk69dDNxgIIzA0q4QK9HNUO0",
//     authDomain: "shava-4e395.firebaseapp.com",
//     databaseURL: "https://shava-4e395.firebaseio.com",
//     projectId: "shava-4e395",
//     storageBucket: "shava-4e395.appspot.com",
//     messagingSenderId: "898215214465",
//     appId: "1:898215214465:web:68393e9690971689efbc80"
// };
//   // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
