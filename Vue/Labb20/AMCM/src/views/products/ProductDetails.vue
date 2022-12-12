<template>
    <div class="container">
        <div class="left">
            <!-- <img class="productImage" :src=productStore.deetProd.imgURL  width="300" height="500" alt="product pic"> -->
            <img class="productImage2" :src=productStore.deetProd.imgURL  alt="product pic">
        </div>
        <div class="right">
            <h2>{{productStore.deetProd.name}}</h2>
            <p class="longDesc">{{ productStore.deetProd.longDesc }}</p>
            <p class="button button2" @click="handleClick()">Details</p>
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
     justify-content: space-evenly;

}

.left{
    width: 45vw ;
    margin: 2em 0.625em; 
    display: flex;
    flex-direction: column;
    
}

.right{
    width: 45vw;
    margin: 2em auto;
    padding: 3em;
    display: flex;
    flex-direction: column;
    justify-content: left;

}

.productImage2{
    margin: 0 auto;
    width: 40vw;
    
    border-radius: 3rem;
}

h2 {
    margin-bottom: .625em;
}
.longDesc{
   margin-bottom: 1em;
   max-width: 40vw;
}
.button2{
    text-align: left;
    justify-self: left;
}

@media screen and (max-width:600px){

.container{
    flex-direction: column;  
    justify-content: center;
}
.productImage2{
    margin: 0 ;
    width: 40vw;
    
    border-radius: 1rem;
}

.right{
    width: 100vw;
    
}
.left{
    width: 100vw;
    
}

}
</style>