import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC5LA0gEOp_qBKPolM9Rodh-yikaCRxVyc",
  authDomain: "vue-firebase-tutorial-2c533.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-2c533.firebaseio.com",
  projectId: "vue-firebase-tutorial-2c533",
  storageBucket: "vue-firebase-tutorial-2c533.appspot.com",
  messagingSenderId: "688940576480"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});