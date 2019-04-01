import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


<script src="https://www.gstatic.com/firebasejs/5.9.2/firebase.js"></script>
<script>
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
</script>