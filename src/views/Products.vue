<template>
  <div class="container">
    <div class="container h-100">
    <div class="intro h-100">
    <div class="row h-100 justify-content-center align-items-center">
    <div class="col-md-6">
     <h3>Product Page</h3>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cum, quaerat deserunt repellat repudiandae culpa minima fuga recusandae, pariatur laborum porro? Veniam facilis est sed! Consequuntur quasi velit nihil esse.</p>
    </div>
    <div class="col-md-6">
     <img src="/img/svg/overview.svg" class="img-fluid"/>
  </div>
  </div>
  <hr>
  <h3 class="crud-title">Basic CRUD</h3>

   </div>
  </div>
  <hr>
  <h4 class="d-inline-block">Product List</h4>
  <button class="btn btn-primary float-right" data-toggle="modal" data-target="#add">Add Product</button>
  <div class="modal fade" id="add" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="add">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
       <div class="form-group col-md-7">
      <input type="text" class="form-control" id="add" aria-describedby="emailHelp" v-model="form.name" placeholder="Product Name">
      </div> 
      <div class="col-md-5">
        <h5>Product Details</h5>
        <hr>
      </div> 
      </div>
      <div class="row">
        <div class="col-md-7">
          <div class="form-group">
            <vue-editor id="editor" v-model="form.description"> </vue-editor>

        </div>
        </div>
      <div class="form-group col-md-5">
      <input type="text" class="form-control" id="add" aria-describedby="emailHelp" placeholder="Product Tags" v-model="form.tags">
      <br>
      <input type="text" class="form-control" id="add" aria-describedby="emailHelp" placeholder="Product price"  v-model="form.price">
        <input type="file" class="form-control-file" id="add" @change="uploadImages">
      <div class="form-group d-flex">
        <div v-for="image in form.images" :key="image.id">
        <img :src="image" width="80px" class="p-1">
         <span style="cursor: pointer;" @click="deleteImage(image)">X</span>
        </div>
      </div>
      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <a type="submit" class="btn btn-primary" @click="addProduct">Save Data</a>
      </div>
    </div>
  </div>
</div>
  <div class="table-responsive">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Modify</th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="product in products" :key="product.id">
    <td>{{product.name}}</td>
    <td>{{product.price}}</td>
    <td>
      <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
      <button class="btn btn-primary" @click="editProduct(product)" data-toggle="modal" data-target="#edit">Edit</button>

    </td>
  </tr>
  </tbody>
</table>
  </div>
  <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="edit" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="edit">Edit Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <div class="row">
        <div class="form-group col-md-7">
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.name" placeholder="Product Name">
        </div> 
        <div class="col-md-5">
          <h5>Product Details</h5>
          <hr>
        </div> 
        </div>
          <div class="row">
        <div class="col-md-7">
          <div class="form-group">
            <vue-editor id="editor" v-model="form.description"> </vue-editor>
        </div>
        </div>
      <div class="form-group col-md-5">
      <input v-on:keyup.188="addTag" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Tags" v-model="tag">
      <div>
        <p v-for="tag in form.tage" :key="tag.id">
          <span>{{tag}}</span>
        </p>
      </div>
      <br>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product price"  v-model="form.price">
        <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="uploadImages">
      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="updateProduct()">Update changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import {fb,db} from '../firebase'
export default {
  name: "Products",
  components: { VueEditor },
  data(){
    return{
      form:{
      name:'',
      price:'',
      description:'',
      tags:[],
      images:[]
    },
    products:[],
    activeItem:'',
    tag:''
    }
  },
  firestore () {
   return {
        products: db.collection('products')
    }
},
  methods:{
  deleteImage(img,index){
    let image = fb.storage().refFromURL(img);
    this.form.images.splice(index,1);
    image.delete().then(()=> {
    // File deleted successfully
  }).catch((error)=> {
    // Uh-oh, an error occurred!
  });
  },
  addTag(){
  this.form.tags.push(this.tag);
  },
  uploadImages(e){
    let file = e.target.files[0];
    var storageRef = fb.storage().ref('products/'+file.name);
   let uploadTask= storageRef.put(file);
   uploadTask.on('state_changed', (snapshot)=>{
  }, (error)=> {
    // Handle unsuccessful uploads
  }, ()=> {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
      this.form.images.push(downloadURL);
      console.log('File available at', downloadURL);
    });
  });
    console.log(e.target.files[0]);
  },
  watcher(){
  },
  updateProduct(){
    this.$firestore.products.doc(this.form.id).update(this.form)
  },
  editProduct(form){
  this.form=form;
  },
  deleteProduct(doc){
    Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.$firestore.products.doc(doc.id).delete();
      console.log(doc['.key']);
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  },
  reset(){
  this.form=''
},
  addProduct(){
    // this.reset();
    this.$firestore.products.add(this.form);
        
  },
  },
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
