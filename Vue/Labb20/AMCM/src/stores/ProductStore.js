import { defineStore} from 'pinia'

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [], 
        deetProd: []
        
    }),
    
    actions: {
        async getProducts(){
            
            const res = await fetch('http://localhost:3000/products')
            const data = await res.json()

            this.products = data
           
        },
        async getDeetProduct(id){
            
            const res = await fetch('http://localhost:3000/products?id=' + id)
            const data = await res.json()

            this.deetProd = data
            
        }
    }
})