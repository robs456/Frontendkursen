<template>
    <div class="container">
        <div class="left">
            <!-- <img class="productImage" :src=productStore.deetProd.imgURL  width="300" height="500" alt="product pic"> -->
            <img class="productImage2" :src=productStore.deetProd.imgURL  alt="product pic">
        </div>
        <div class="right">
            <h2>{{productStore.deetProd.name}}</h2>
            <p class="longDesc">{{ productStore.deetProd.longDesc }}</p>
            <p class="button " @click="handleClick()">Details</p>
        </div>
       
        
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useProductStore } from '../../stores/ProductStore'


    const productStore = useProductStore()
    // const props = defineProps(['id'])
    // console.log(id)
</script>

<style >
.container{
     display: flex;
}

.left{
    width: 45;
}

.right{
  
}

.productImage2{
  margin: 0 auto; 
  width: 300px;
  height: 500px;
}
.longDesc{
   
}
</style>