import firebase from 'firebase';
import 'firebase/storage'
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyAwpmzcSQaNRKCA77ZwV85aUBjOVmH3F9E",
    authDomain: "vue-shop-c55e4.firebaseapp.com",
    databaseURL: "https://vue-shop-c55e4.firebaseio.com",
    projectId: "vue-shop-c55e4",
    storageBucket: "vue-shop-c55e4.appspot.com",
    messagingSenderId: "889370713681",
    appId: "1:889370713681:web:7d2385bc77de3caee96270",
    measurementId: "G-ERGGXBDQW4"
  };
  // Initialize Firebase
  const fb=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  fb.analytics();
  export{fb,db}
