<template>
    <div class="login">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
     <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h3 class="login-header">Register</h3>
    <label>Name</label>
    <input type="text" class="form-control" placeholder="your name" v-model="form.name">
    <label>Your E.mail</label>
    <input type="email" class="form-control" placeholder="write your email" v-model="form.email">
    <label>Password</label>
    <input type="password" class="form-control" placeholder="your password" v-model="form.password">
    <a class="btn btn-primary" @click="register">Submit</a>
      </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {db,fb} from "../firebase"
export default {
    name:'Login',
    data(){
      return{
        form:{
          name:'',
          email:'',
          password:''
        }
      }
    },
    methods:{
      register(){
      fb.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then((user)=>{
       db.collection("profile").doc(user.user.uid).set({
        name:this.form.name
    })
    .then(function(){
      console.log("done")
    })
    .catch((error)=>{
      console.log(error)
    })
      this.$router.replace('admin');
        })
       .catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });

      }
    }
}
</script>
<style scoped>
.form-inline label{
    justify-content: left;
}
.login-header{
    text-align: center;
}
</style>