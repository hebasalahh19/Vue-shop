<template>
    <div class="sigin">
     <div class="modal fade" id="signin" tabindex="-1" aria-labelledby="signin" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="signin">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
        </div>
        <a class="btn btn-primary"  @click="signIn">Submit</a>
        
      </div>
      <!-- <div class="modal-footer">
        <a type="button" class="btn btn-primary" @click="signIn">Save changes</a>
      </div> -->
    </div>
  </div>
</div>
</div>
</template>
<script>
import {fb} from '../firebase'
export default {
    name:'SignIn',
    data(){
        return{
        form:{
        email:'',
        password:''
        }
        }
    },
    methods:{
    signIn(){
    fb.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
    .then(()=>{
    // $('#signin').modal('hide')
     this.$router.replace('admin')
    })
    .catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
    } else {
        alert(errorMessage);
    }
    console.log(error);
    });
    }
    }
}
</script>