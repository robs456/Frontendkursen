import { defineStore} from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cartycart', ()=>{
    const cartCount = ref(0)
    const cart = ref([])
    const cartProducts = ref([])
   
    function addToCart(prodId){
        cartCount.value++
        const addData = { id: prodId, quantity : 1 }
        if (cart.value.find(prod => prod.id === addData.id ?  prod.quantity++ : null)) {
           
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

    
    function remFromCart(prodId){
        cartCount.value--
        
        cart.value.find(prod => prod.id === prodId ?  prod.quantity-- : null)
        console.log(cart.value[0])
    }

   
    return { cartCount, addToCart, cart, cartCount, loadCart, cartProducts, remFromCart }
    
})
