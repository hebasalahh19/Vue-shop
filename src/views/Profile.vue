<template>
  <div class="container">
      <div class="container h-100">
    <div class="intro h-100">
    <div class="row h-100 justify-content-center align-items-center">
    <div class="col-md-6">
     <h3>Profile Page</h3>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cum, quaerat deserunt repellat repudiandae culpa minima fuga recusandae, pariatur laborum porro? Veniam facilis est sed! Consequuntur quasi velit nihil esse.</p>
    </div>
    <div class="col-md-6">
     <img src="/img/svg/overview.svg" class="img-fluid"/>
  </div>
  </div>
  <hr>
   </div>
  </div>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" >Profile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Acount Setting</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="email" class="form-control" v-model="profiles.name">
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="inputPassword4" placeholder="phone" v-model="profiles.phone">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="profiles.address">
  </div>
  <div class="form-row">
    <div class="col">
    <input type="text" class="form-control" id="inputAddress2" placeholder="PostCode" v-model="profiles.postCode">
    </div>
    <div class="col">
    <a class="btn btn-primary" @click="updateProfile">Save Changes</a>
  </div>
  </div>
</form>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    <br>
    <form>
    <div class="form-row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" v-model="accountSetting.name">
      </div>
      <div class="col">
        <input type="email" class="form-control" placeholder="email address" v-model="accountSetting.emailVerfied">
      </div>
    </div>
    <br>
      <div class="form-row">
      <div class="col">
        <input type="password" class="form-control" placeholder="new password" v-model="accountSetting.password">
      </div>
      <div class="col">
        <input type="password" class="form-control" placeholder="confirm password" v-model="accountSetting.confirmPassword">
      </div>
    </div>
    <br>
        <form class="form-row">
        <div class="form-group">
          <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="uploadPhoto">
        </div>
        <div class="col">
        <button type="submit" class="btn btn-primary" @click="updateProfile">Save Changes</button>
        <a class="btn btn-danger" type="button" @click="resetPassword"> Reset Password</a>
      </div>
      </form>
      
</form>
  </div>
</div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import {fb,db} from '../firebase'
export default {
  name: "Profile",
  components: { VueEditor },
  data(){
    return{
      profiles:{
        name:'',
        phone:'',
        address:'',
        postCode:''
    },
    accountSetting:{
      name:'',
      emailVerfied:'',
      password:'',
      confirmPassword:'',
      photoUrl:''
    }
    }
  },
  firestore () {
  const user=fb.auth().currentUser;
   return {
        profiles: db.collection('profile').doc(user.uid)
    }
},
methods:{
resetPassword(){
var auth = fb.auth();
auth.sendPasswordResetEmail(auth.currentUser.email).then(()=> {
  console.log("email sent")
  // Email sent.
}).catch((error)=> {
console.log(error)
});
},
 updateProfile(){
   this.$firestore.profiles.update(this.profiles)
 },
 uploadPhoto(){
 }
}
 
};
</script>
<style scoped>
.crud-title{
  text-align: center;
}
ul li{
  list-style: none;
}
</style>
