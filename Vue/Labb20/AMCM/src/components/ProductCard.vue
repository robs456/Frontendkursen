<template>
    
        <div class="products">
            <div class="card">
                <img class="productImage" :src=product.imgURL alt="product pic">
                <h3>{{product.name}}</h3>
                <p class="shortDesc">{{ product.shortDesc }}</p>
                <p class="button " @click="handleClick(product)">Details</p>
                <!-- <p class="button " @click="handleClick"><RouterLink :to="{ name: 'productDetails'}">Details</RouterLink></p> -->
            </div>
        </div>  
   
</template>

<script setup>
import { RouterLink } from 'vue-router'
import  router  from '@/router'
import { ref } from 'vue'
import { useProductStore } from '../stores/ProductStore'

    const props = defineProps(['product'])

    const productStore = useProductStore()

    function handleClick(product){
        productStore.deetProd = product
        router.push({ name: 'productDetails'})

    }
    
</script>

<style scoped>
.card{
    
    width:25vw;
    height:fit-content;
    border: 2px solid var(--border-color);
    border-radius:  2em / 2em;
    margin: 2em 0.625em;
    padding: 1em 1em 0 1em;
}

.card:hover{
    box-shadow: var(--shadow-color) 10px 10px 5px;
}

img {
    width: 25vw;
    border-radius:  1em / 1em;
}
h3 {
    margin-top: 0.313em;
    font-weight: 600;
}

a {
    text-decoration: none;
    color: white;

}
@media screen and (max-width:600px){

.card{
 width: 50vw;
 margin: 2em auto;
}
img {
    width: 50vw;
}
}
</style>