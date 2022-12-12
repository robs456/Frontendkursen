<template>
    <!-- <Suspense> -->
    <div class="container">
        
        <p>{{deetprod.value[0].id }}</p>

        <!-- <div class="wrapper">
            <div class="left">
                <img class="productImage2" :src=deetprod[0].imgURL  alt="product pic">
            </div>
            <div class="right">
                <h2>{{deetprod[0].name}}</h2>
                <p class="longDesc">{{ deetprod[0].longDesc }}</p>
                <p><strong>Price: </strong>{{ deetprod[0].price }}&euro;</p>
                <a class="button button2" @click="handleClick()">Buy this beautiful machine</a>
            </div>
        </div> -->
        
    </div>
    <!-- </Suspense> -->
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useProductStore } from '../../stores/ProductStore'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
    const route = useRoute() 
    const id = route.params.id
    let deetprod = ref(null)
    //  const productStore = useProductStore()
    //  console.log(productStore.products)
    // const props = defineProps(['id'])
    // console.log(id)
    console.log(id)
    onMounted( async () =>{
        const res = await fetch('http://localhost:3000/products?id=' + id)
        const data = await res.json()
        deetprod.value = data

    console.log(deetprod.value[0].price)
    // console.log(deetprod[0].imgURL)

    })
   

</script>

<style >
.container{
     display: flex;
     flex-direction: row;

}
.wrapper{
    display: flex;
    justify-items:left
    
}

.left{
    width: 45vw ;
    margin: 2em auto 0 auto; 
    display: flex;
    flex-direction: column;
    background-color: blueviolet;
    
}

.right{
    width: 45vw;
    /* margin: 0em auto; */
    padding: 3em;
    display: flex;
    flex-direction: column;
    background-color: blue;

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
    
    
    margin-top: 1em;
}

@media screen and (max-width:600px){

.wrapper{
    display: flex;
    flex-direction: column;  
    justify-content: center;
}
.productImage2{
    margin: 0 ;
    width: 40vw;
    border-radius: 1rem;
}

.right{
    
    
}
.left{
   
    
}

}
</style>