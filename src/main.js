import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fb} from "./firebase";
import VueFirestore from 'vue-firestore'
import Swal from 'sweetalert2';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.component("Navbar",require('./components/Navbar.vue').default);
Vue.component("AddToCart",require('./components/AddToCart.vue').default);
Vue.use(VueFirestore)
Vue.config.productionTip = false;
window.Swal=Swal;
window.$ = window.jQuery = require('jquery')
let app='';
fb.auth().onAuthStateChanged(function(user) {
  if(!app){
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}
});
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});