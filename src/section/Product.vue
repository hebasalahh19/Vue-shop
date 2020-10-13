<template>
  <div class="product">
    <div class="container">
      <h1 class="product-header">Our Product</h1>
      <div class="row">
     <div class="card col-md-4" v-for="product in products" :key="product.id">
      <img src="/img/products/product3.jpg" class="card-img-top">
    <div class="card-body">
    <!-- <p class="card-text" v-html="product.description">{{product.description}}</p> -->
     <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-priceS">{{ product.price }}</h5>

                          </div>
    <AddToCart :name="product.name" :price="product.price" :PId="product.id"></AddToCart>
   </div>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
import {fb,db} from '../firebase'
import AddToCart from "../components/AddToCart"
export default {
  name: "Product",
  components:{
    AddToCart
  },
  data(){
    return{
      products:[]
    }
  },
  firestore(){
      return {
        products: db.collection('products'),
      }
  },
  
};
</script>
<style scoped>
.product{
    background-color: #eee;
}
.card-body{
  text-align: left;
}
.product-header{
  padding: 7px 8px;
  text-align: center;
}
</style>
