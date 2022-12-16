<template>
   
    <div class="container">
       
        <div class="wrapper">
           
            <div class="left">
                <img class="productImage2" :src=productStore.deetProd[0].imgURL  alt="product pic">
            </div>
            <div class="right">
                <h2>{{productStore.deetProd[0].name}}</h2>
                <p class="longDesc">{{ productStore.deetProd[0].longDesc }}</p>
                <p><strong>Price: </strong>{{ productStore.deetProd[0].price }}&euro;</p>
                <a class="button button2" @click="cartStore.addToCart(productStore.deetProd[0].id)">Buy this beautiful machine</a>
            </div>
        
        </div>
        
    </div>
    
</template>

<script setup>
// import { RouterLink } from 'vue-router'
import { useProductStore } from '../../stores/ProductStore'
import { useCartStore } from '../../stores/CartStore'
import { useRoute } from 'vue-router'
// import { ref, onMounted } from 'vue'
    const route = useRoute() 
    const id = route.params.id
    
    const productStore = useProductStore()
    productStore.getDeetProduct(id)
    const cartStore = useCartStore()    
    
</script>

<style >
.container{
     display: flex;
     flex-direction: row;
    justify-content: center;
}
.wrapper{
    display: flex;
   
    
}

.left{
    
    margin: 2em auto 0 auto; 
    
}

.right{
    
    padding: 3em;
    display: flex;
    flex-direction: column;

}

.productImage2{
    
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
    
    text-align: center;
    margin-top: 1em;
}

@media screen and (max-width:600px){

.wrapper{
    
    flex-direction: column;  
    align-items: center;
    
}
.productImage2{
    margin: 0 auto;
    width: 50vw;
    border-radius: 2rem;
    
}

.right{
    padding-top: 1em;
    
}
.left{
  
    display: flex;
    flex-direction: column;
}

}
</style>