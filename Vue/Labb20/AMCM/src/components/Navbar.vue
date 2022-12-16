<template>
<header>
    <div class="top">
        <div class="logo">
           <p class="logotype">Artisan Made Coffee Machines</p> 
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/Products">Products</RouterLink>
            <RouterLink to="/Cart"><i class="uil uil-shopping-cart"></i></RouterLink>
            <div class="cartInd" v-if="cartStore.cartCount > 0">
              <a>({{ cartStore.cartCount }})</a>

            </div>
        </nav>
    </div>
    <div class="divider"></div>
</header>
  
<div>

    </div>
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { useCartStore } from '../stores/CartStore'
    const cartStore = useCartStore()

    

</script>

<style  scoped>
header {
  min-height: 3rem;
  background-color: var(--nav-bg-color);
  /* position: fixed; */
  top: 0;
  width: 100%;
}

.logo{
    margin-left: 2rem;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.divider{
    height: 2px;
    width: 100%;
    background-color: var(--deco-color);
}

a {
  text-decoration: none;
  color: var(--link-color);
}

nav {
  
  font-size: 1.25em;
  text-align: center;
  margin: 1em;
  background-color: var(--nav-bg-color);

}

nav a.router-link-exact-active {
  color: var(--link-active);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline;
  
  padding: 0 1rem;
}
.cartInd p {

}


</style>