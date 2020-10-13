<template>
    <div class="navbar">
  <nav class="navbar navbar-expand-lg navbar-light">
  <router-link to="/" class="navbar-brand">Vue Shop</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item ">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link" href="#">Product</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link" href="#">About</router-link>
      </li>
    </ul>
  </div>
   <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <a class="btn btn-outline-success my-2 my-sm-0"  data-toggle="modal" data-target="#exampleModal">Register</a>
      <Login />
      <a class="btn btn-outline-success my-2 my-sm-0"  data-toggle="modal" data-target="#signin">SignIn</a>
      <SignIn />
    </form>
    <span style="font-size: 2em; color: #30c0b3; cursor: pointer;" data-toggle="modal" data-target="#minicart">
    <i class="fas fa-cart-plus"></i>
</span>
</nav>
    </div>
</template>
<script>
import Login from '../components/Login';
import SignIn from '../components/SignIn';
export default {
    name:'Navbar',
    components:{
      Login,
      SignIn
    }
}
</script>