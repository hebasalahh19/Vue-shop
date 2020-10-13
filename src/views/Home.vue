<template>
  <div class="home">
  <Navbar />
  <Header />
  <Product />
  <LearnAbout />
  <MiniCart />
  
  </div>
</template>
<script>
import Header from '../components/Header'
import Product from '../section/Product'
import LearnAbout from '../components/LearnAbout'
import MiniCart from '../components/MiniCart'
export default {
  name: "Home",
  components:{
    Header,
    Product,
    LearnAbout,
    MiniCart
  }
};
</script>
