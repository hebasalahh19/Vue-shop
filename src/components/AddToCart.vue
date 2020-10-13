<template>
    <div class="cart">
    <a class="btn btn-primary" @click="addToCart">Add To Cart</a>
    </div>
</template>
<script>
export default {
    name:'AddToCart',
    props:{
    name:String,
    price:String,
    PId:String
    },
    data(){
     return{
        items:{
        productName:this.name,
        productPrice:this.price,
        productID:this.PId,
        productQuantity:1
     }
     }
    },
    methods:{
    addToCart(){    
    $('#minicart').modal('show')
    this.$store.commit('addToCart',this.items)
    }
    }
}
</script>