<template>
    <div class="header">
    <div class="container h-100 justify-content-center align-items-center">
    <div class="row h-100">
        <div class="col-md-5">
        <div class="header-content">
        <h1 class="headers-title">Vue Shof For Developers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam consequuntur quod consectetur minus quae. Assumenda eveniet delectus, magnam, qui impedit quia, magni nisi voluptatum corrupti dolor inventore vel atque?</p>
        <div class="header-btn">
        <button class="btn btn-explore col-md-4 mr-4">Explore</button>
        <button type="button" class="btn btn-outline-secondary col-md-4">Products</button>
        </div>
        </div>
        </div>
        <div class="col-md-7">
         <img src="/img/svg/graphic.svg">
        </div>
    </div>
        
    </div>
    </div>
</template>
<script>
export default {
    name:'Header'
}
</script>
<style scoped>
.header-content{
    text-align: left;
    padding-top:100px ;
}
.btn-explore{
    background: #30c0b3;
    color: white;
}
</style>