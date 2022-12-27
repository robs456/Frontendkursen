import { defineStore} from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cartycart', ()=>{
    const cartCount = ref(0)
    const cart = ref([])
    const cartProducts = ref([])
   
    // function addToCart(prodId){
    //     cartCount.value++
    //     const addData = { id: prodId, quantity : 1 }

    //     // Testing Ternary madness! And it works!!!
    //     if (cart.value.find(prod => prod.id === addData.id ?  ++prod.quantity : false)) {
           
    //     } else {
    //         cart.value.push(addData)
           
    //     }
        
    // }
        // The Vanilla and utterly boring version
    function addToCart(prodId){
        ++cartCount.value
        const addData = { id: prodId, quantity : 1 }
        const prod = cart.value.find(prod => prod.id === addData.id)
       
        if (prod) {
            prod.quantity++
        } else {
            cart.value.push(addData)
          
        }
        
    }

    function loadCart(){
               
        cart.value.forEach(async (item) => {
            
            const res = await fetch('http://localhost:3000/products?id=' + item.id)
            const data = await res.json()

            const addProd = { name : data[0].name, price : data[0].price, quantity : item.quantity, id : item.id }
            cartProducts.value.push(addProd)
            
        })
                
                
              
    }

    // // Ternary version
    // function remFromCart(prodId){
    //     --cartCount.value
        
    //     cart.value.find(prod => prod.id === prodId ?  --prod.quantity : null)
    //     console.log(cart.value[0])
    // }

    // Vanilla version
    function remFromCart(prodId){
        --cartCount.value
        const prod = cart.value.find(prod => prod.id === prodId)
        if (prod) {
            --prod.quantity

        } 
       
    }

   
    return { cartCount, addToCart, cart, cartCount, loadCart, cartProducts, remFromCart }
    
})
