<template>
    <div class="minicart">
        <h5>MiniCart</h5>
            <div class="modal fade" id="minicart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="minicart">My Bag</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" v-for="item in this.$store.state.cart" :key="item.id">
                       <p> {{item.productName}}
                        <span class="float-right" @click="$store.commit('removeFromCart')">X</span>
                       </p>
                       <p>${{item.productPrice}}</p> 
                        <p>Quantity: {{item.productQuantity}}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Contunie Shopping</button>
                        <!-- <router-link to="/CheckOut" type="button" class="btn btn-primary">CheckOut</router-link> -->
                        <button type="button" class="btn btn-primary" @click="checkOut">CheckOut</button>

                    </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import {fb,db} from '../firebase'
export default {
    name:'MiniCart',
    methods:{
    checkOut(){
        this.$router.push('/CheckOut')
        $('#minicart').modal('hide')

    }
    }
}
</script>