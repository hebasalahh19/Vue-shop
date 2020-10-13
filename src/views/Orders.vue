<template>
    <div class="orders">
     <h1>Orders Page</h1>
    <div class="form-group">
        <input type="email" class="form-control" v-model="form.name" placeholder="write your product">
    </div>
    <div class="form-group">
        <input type="text" class="form-control"  v-model="form.qauntity" placeholder="write your order">
    </div>
    <a type="submit" class="btn btn-primary" @click="saveProduct">Submit</a>
    <table class="table ">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Modifiy</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="order in orders" :key="order.id">
      <td scope="row">{{order.data().name}}</td>
      <td>{{order.data().qauntity}}</td>
      <td>
      <button class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" @click="editOrder(order)">Edit</button>
      <button class="btn btn-danger" @click="deleteOrder(order.id)">Delete</button>
       </td>
    </tr>
  </tbody>
    </table>
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
        <input type="email" class="form-control" v-model="form.name" placeholder="write your product">
        </div>
        <div class="form-group">
            <input type="text" class="form-control"  v-model="form.qauntity" placeholder="write your order">
        </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateOrder">Update</button>
        </div>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
import {fb,db} from '../firebase'
export default {
 name:'Orders',
 data(){
     return{
     form:{
        name:'',
        qauntity:''
     },
     orders:[],
     storeItem:''
     }
 },
 methods:{
    watcher(){
    db.collection("Orders").onSnapshot((querySnapshot)=> {
        this.orders = [];
        querySnapshot.forEach((doc)=> {
            this.orders.push(doc);
        });
        console.log("Current cities in CA: ", this.orders.join(", "));
    });
    },
    updateOrder(){
     // Add a new document in collection "cities"
    db.collection("Orders").doc(this.storeItem).set(this.form)
    .then(()=> {
        this.watcher();
        console.log("Document successfully written!");
    })
    .catch((error)=> {
        console.error("Error writing document: ", error);
    });
    },
    editOrder(form){
    this.form=form.data();
    this.storeItem=form.id
    },
    deleteOrder(doc){
     if(confirm('are you sure')){
         db.collection("Orders").doc(doc).delete().then(()=> {
        console.log("Document successfully deleted!");
        }).catch((error)=> {
        console.error("Error removing document: ", error);
        });
     }
    
    },
   getProduct(){
   db.collection("Orders").get().then((querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
        this.orders.push(doc)
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    });
   },
   saveProduct(){
    // Add a new document with a generated id.
    db.collection("Orders").add(this.form)
    .then((docRef)=> {
        this.form='';
        this.getProduct();
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error)=> {
        console.error("Error adding document: ", error);
    });
   }
 },
 created(){
     this.getProduct();
 }
}
</script>
<style scoped>
ul li{
    list-style: none;
}
</style>