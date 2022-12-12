import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/products/Products.vue'
import ProductDetails from '../views/products/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Products',
      name: 'products',
      component: Products
    },
    {
      path: '/ProductDetails/:id',
      name: 'productDetails',
      component: ProductDetails
    },
    {
      path: '/Cart',
      name: 'cart',
      component: Cart
    },
    
  ]
})

export default router
