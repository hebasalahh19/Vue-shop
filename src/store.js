import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let cart = window.localStorage.getItem('cart')
export default new Vuex.Store({
    state: {
      // cart:[]
      cart:cart? JSON.parse(cart):[]
    }, 
    mutations:{
      addToCart(state,items){
        let found=state.cart.find(product=>product.productID == items.productID);
        if(found){
       found.productQuantity++;
      }else{
        state.cart.push(items)
      }
      this.commit('saveData')
    },
    saveData(state){
      window.localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    removeFromCart(state,items){
      let index=state.cart.indexOf(items)
      state.cart.splice(index,1);
      this.commit('saveData')


    }
    }
})