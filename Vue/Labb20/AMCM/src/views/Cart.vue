<template>
   
    <div class="cartcontainer"></div>
        <div class="table">
            <h4 class="h4cart item">Item</h4> 
            <h4 class="h4cart quantity">Quantity</h4> 
            <h4 class="h4cart price">Price</h4> 
            <h4 class="h4cart subtotal">Subtotal</h4>
        </div> 
        <div class="table" v-for="cartItem in cartStore.cartProducts" :key="cartItem.id">
             <p class="pcart item">{{cartItem.name}}</p> 
            <div class="qdiv">
                <button class="qbutt" @click="decrement(cartItem.id)">-</button>
                <p class="pcart quantity">{{cartItem.quantity}}</p>
                <button class="qbutt" @click="increment(cartItem.id)">+</button>
            </div>
            <p class="pcart price">{{cartItem.price}}</p> 
            <p class="pcart subtotal">{{cartItem.price*cartItem.quantity}}</p>  
        </div> 
                          
    <div>
        
    </div>
</template>

<script setup>
import { useCartStore } from '../stores/CartStore'
import { useProductStore } from '../stores/ProductStore'
import { onMounted, onBeforeMount, onUnmounted , ref } from 'vue';

    const cartStore = useCartStore()
    const productStore = useProductStore()

    function decrement (updId) {
        if (cartStore.cartCount > 0 ){
        cartStore.remFromCart(updId)
        cartStore.cartProducts = []
        cartStore.loadCart()
        }
    }
    function increment (updId) {
        
        cartStore.addToCart(updId)
        cartStore.cartProducts = []
        cartStore.loadCart()
    }
  
    cartStore.loadCart()

   
    onUnmounted(() => cartStore.cartProducts = [] )


</script>

<style scoped>


.cartcontainer{
    display: flex;
    justify-content: center;
}
.table{
 display:flex;
 /* flex-wrap: wrap; */
 width: 35%;
 margin: 1em auto;
 
 
}
.header{
    display: flex;
    
}
.h4cart{
    font-weight: bold;
    padding-right: 3px;
}
.content{
    display: flex;
}

.item{
    flex: 0 0 400px;
    
}
.quantity{
    flex: 0 0 40px;
   
    
    text-align: center;
    
}
.price{
    flex: 0 0 50px;
   
    text-align: right;
}
.subtotal{
    flex: 0 0 100px;
    
    text-align: right;
}

.pcart{
    padding-right: 3px;
}
.qbutt{
    flex: 0 0 20px;
}
.qdiv{
    flex: 0 0 80px;
    display: flex;
    justify-content: center;
    padding-right: 3px;
}
.h4cart.quantity{
    flex: 0 0 80px;
}
</style>