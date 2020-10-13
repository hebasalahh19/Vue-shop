<template>
    <div class="checkout">
        <Navbar />
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-9">
                    <h4>Checkout</h4>
                    <div class="modal-body" v-for="item in this.$store.state.cart" :key="item.id">
                       <p> {{item.productName}}</p>
                       <p>${{item.productPrice}}</p> 
                        <p>Quantity: {{item.productQuantity}}</p>
                    </div>
                </div>
                 <div class="col-md-3">
                    <h6>Price</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'CheckOut'
}
</script>