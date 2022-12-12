<template>
    <div class="container" >
        <div class="pBox" v-for="product in productStore.products ">
       
        <ProductCard :product="product" />
      </div>
     
    </div>
</template>

<script setup>
import ProductCard from '../../components/ProductCard.vue'
import { useProductStore } from '../../stores/ProductStore'

    const productStore = useProductStore()

    productStore.getProducts()

</script>

<style scoped>
.container{
    display: flex;
    width: 100%;
    justify-content:center;
}
p {
    font-size: 1em;
}
@media screen and (max-width:600px){

    .container{
        flex-direction: column;  

    }
   
}
</style>